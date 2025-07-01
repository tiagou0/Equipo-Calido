import { createContext, useContext, useState, useEffect } from 'react';
import { doc, onSnapshot, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../hooks/useAuth';
import { getUserPlanLevel } from '../utils/subscriptionPlans';

const SubscriptionContext = createContext();

export const useSubscription = () => {
  const context = useContext(SubscriptionContext);
  if (!context) {
    throw new Error('useSubscription debe ser usado dentro de un SubscriptionProvider');
  }
  return context;
};

export const SubscriptionProvider = ({ children }) => {
  const { user } = useAuth();
  const [subscription, setSubscription] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setSubscription(null);
      setLoading(false);
      return;
    }

    const unsubscribe = onSnapshot(
      doc(db, 'subscriptions', user.uid),
      (doc) => {
        if (doc.exists()) {
          setSubscription(doc.data());
        } else {
          setSubscription(null);
        }
        setLoading(false);
      },
      (error) => {
        console.error('Error fetching subscription:', error);
        setLoading(false);
      }
    );

    return unsubscribe;
  }, [user]);

  const updateSubscription = async (subscriptionData) => {
    if (!user) return;
    
    try {
      await setDoc(doc(db, 'subscriptions', user.uid), {
        ...subscriptionData,
        userId: user.uid,
        updatedAt: new Date()
      });
    } catch (error) {
      console.error('Error updating subscription:', error);
      throw error;
    }
  };

  const cancelSubscription = async () => {
    if (!user || !subscription) return;
    
    try {
      await setDoc(doc(db, 'subscriptions', user.uid), {
        ...subscription,
        active: false,
        canceledAt: new Date(),
        updatedAt: new Date()
      });
    } catch (error) {
      console.error('Error canceling subscription:', error);
      throw error;
    }
  };

  const userLevel = getUserPlanLevel(subscription);

  const value = {
    subscription,
    userLevel,
    loading,
    updateSubscription,
    cancelSubscription,
    hasActiveSubscription: subscription?.active || false
  };

  return (
    <SubscriptionContext.Provider value={value}>
      {children}
    </SubscriptionContext.Provider>
  );
};
