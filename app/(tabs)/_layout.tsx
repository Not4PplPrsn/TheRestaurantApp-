import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
    
      screenOptions={{
        headerShown: true ,
        tabBarButton: HapticTab,
        tabBarStyle:{
          backgroundColor: '#0022EE',
          width: 230,
          height: 60,
          margin: 90,
          alignSelf: 'center',
          alignItems: 'center',
          alignContent: 'center',
          borderRadius:30,
          justifyContent: "space-around",
          paddingBottom: 2
          
          
        },
        tabBarInactiveTintColor: '#e0cacaff',
        tabBarActiveTintColor: 'rgba(236, 137, 124, 1)',
        headerTitleAlign: 'center',
        headerStyle:{
          borderBottomWidth: 0,
          borderBottomColor: "#000000",
          backgroundColor: "#00000",
          elevation: 0,
          margin: 50,
          

          
        },
        headerTitleStyle:{
          fontSize: 39,

        }
        
      }}
      
      >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="home-outline" color={color} />,
          
        }}
      />
      <Tabs.Screen
      name= 'EditPage'
      options = {{
        title: 'Edit',
        tabBarIcon: ({color}) => <AntDesign size = {28} name="form" color={color} />
        

      }}
      
      />

      <Tabs.Screen
      name='Select'
      options={{
        title: 'Menu',
        tabBarIcon: ({color})  =>  <AntDesign size={25} name="select" color={color}/>
      }}/>
    </Tabs>
  );
}
