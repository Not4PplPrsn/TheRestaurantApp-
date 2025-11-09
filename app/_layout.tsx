import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { useRoute } from '@react-navigation/native';
import { Drawer } from 'expo-router/drawer';
import React from 'react';
import 'react-native-reanimated';
import { useRouter } from 'expo-router';

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <Drawer
    screenOptions={{
      drawerType: 'front', headerShown: false/**Force the header for the drawer to show  */,
            drawerStyle: { width: 260,
        direction: 'ltr',
        paddingTop: 5,
        paddingBottom: 15,
        justifyContent: 'space-between',
        borderTopRightRadius: 10,
        animationDirection: 'reverse',
        animationName:'slide-in-right',
        animationFillMode: 'forwards',
        animationDuration: '5050ms',
        backgroundColor: '#0022EE',
      },
            
      drawerPosition: 'right',
      drawerLabelStyle: { textAlign: 'right', paddingRight: 10, paddingLeft: 0 ,},
      headerTitleAlign: 'left', 
      drawerActiveTintColor:'rgba(236, 137, 124, 1)',
      drawerInactiveTintColor: '#fff',

      headerStyle:{
        backgroundColor:"#0000",
        shadowColor: '#00000',
        
        
      },
      headerTitle: "",
      headerTitleStyle:{
        alignSelf: "center",
        alignContent: 'center',
        textAlign: 'center'
      }
      


    }}
    drawerContent={() => <DrawerScroller/>/**Called the function below in here so it is used  */}
    />
  );
}

function DrawerScroller(){
  const router= useRouter();//The navigation function which will allow the tabs navigate to their respective page
  return(
    <DrawerContentScrollView>
<DrawerItem
  label="Main"
  labelStyle={{ textAlign: 'right', color: "#ffff", textTransform: 'uppercase' }}

  onPress={() => router.push('/(tabs)')}
  

  />

  <DrawerItem
    label = "Add New dishes"
    labelStyle= {{textAlign: 'right',color: '#fff', textTransform: 'uppercase'}}
    onPress ={() => router.push('/EditPages/Add')}
  />

  <DrawerItem
  label= "Menu Selection"
      labelStyle= {{textAlign: 'right', color:"#ffff", textTransform: "uppercase"}}

    onPress={() => router.push('/Select')}
  />

    </DrawerContentScrollView>
  );
}