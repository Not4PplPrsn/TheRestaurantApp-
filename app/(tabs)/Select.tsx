import { StyleSheet, Text, View, Button, Image, ScrollView, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground } from 'expo-image';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { DishEntries } from '@/functions/DishesEntries';

import { useState } from 'react';
//This will be used in the check boxes for the dishes  
import { Checkbox } from 'react-native-paper';


export default function DishSelection() {
    return(
      <ImageBackground
      source = {require('../../assets/images/Backgrounds/TableSetting2.jpg')}>
        <View>
            <Text style ={styles.heading}>
                Menu
            </Text>
        </View>
      </ImageBackground>
    );
}


const styles = StyleSheet.create({
courseContainer: {
  backgroundColor: 'blue',
  alignSelf: 'center'
},
disheContainer:{
  backgroundColor: '#00000',
  margin: 2.3,
  
},
descriptionText:{
  fontFamily: 'Inter',
  fontWeight: '500',
  alignSelf: 'flex-start',
  margin: 10,
},
heading:{
  fontSize: 35,
  fontFamily: 'Inter',
  fontWeight: '600',
  marginTop: 20,
  alignSelf: 'center',
  color: '#3b3838ff',
  width:'auto',
  borderBottomColor: '#ee9c9ce8',
  borderBottomWidth: 5,
  lineHeight: 70,
  alignItems: 'center',
  alignContent: 'center'
  
},
baseLineText:{
  fontSize: 5,
  fontWeight:'300',
  color: '#332d2dff'
},
heading2:{
  fontSize: 20,
  color: '#272424fff',
  fontWeight: '600'
}


});
