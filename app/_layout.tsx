import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { useRoute } from '@react-navigation/native';
import { Drawer } from 'expo-router/drawer';
import React from 'react';
import 'react-native-reanimated';


import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <Drawer
    screenOptions={{
      drawerType: 'front', headerShown: true/**Force the header for the drawer to show  */,
            drawerStyle: { width: 350,
        direction: 'ltr',
        paddingTop: 5,
        paddingBottom: 15,
        justifyContent: 'space-between',
        borderTopRightRadius: 10,
        animationDirection: 'reverse',
        animationName:'slide-in-right',
        animationFillMode: 'forwards',
        animationDuration: '5050ms',
      },
            
      drawerPosition: 'right',
      drawerLabelStyle: { textAlign: 'right', paddingRight: 10, paddingLeft: 0 ,},
      headerTitleAlign: 'left', 


    }}
    />
  );
}

function CustomDrawerContent(){
  const router = useRoute; // this is what we will use fo the exclusion of certain pages


  return(
    <DrawerContentScrollView>
      <DrawerItemList>
        <DrawerItem/>
        <DrawerItem/>
        <DrawerItem/>
        <DrawerItem/>

      </DrawerItemList>
    </DrawerContentScrollView>

  );
}