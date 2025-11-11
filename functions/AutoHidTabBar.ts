// hooks/useTabBarInactivity.ts
import { useNavigation } from 'expo-router';
import { useEffect, useRef } from 'react';
import { AppState } from 'react-native';
import { customTabBarStyle } from './Styling/tabBarStyling';

export function useTabBarInactivity() {
  const navigation = useNavigation();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const hideTabBar = () => {
    navigation.setOptions({
      tabBarStyle: {
        ...customTabBarStyle,
        opacity: 0,
        pointerEvents: 'none',
      },
    });

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      navigation.setOptions({
        tabBarStyle: {
          ...customTabBarStyle,
          opacity: 1,
          pointerEvents: 'auto',
        },
      });
    }, 7000); // 30 seconds
  };

  useEffect(() => {
    navigation.setOptions({
      tabBarStyle: {
        ...customTabBarStyle,
        opacity: 1,
        pointerEvents: 'auto',
      },
    });

    const subscription = AppState.addEventListener('change', (state) => {
      if (state === 'active') {
        navigation.setOptions({
          tabBarStyle: {
            ...customTabBarStyle,
            opacity: 1,
            pointerEvents: 'auto',
          },
        });
      }
    });

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      subscription.remove();
    };
  }, []);

  return { onTouch: hideTabBar };
}
