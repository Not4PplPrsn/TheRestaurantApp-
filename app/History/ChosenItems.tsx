import { StyleSheet, Text, View, Button, Image, ScrollView, TouchableOpacity, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground } from 'expo-image';
import { useRouter } from 'expo-router';
import React,{useState} from 'react';
import { useTabBarInactivity } from '@/functions/AutoHidTabBar'; // calling the function  i made  in the functions folder

import { useCartStore } from '@/functions/DishesEntries';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
const router = useRouter();

export default function DetailedCart(){
   const cart = useCartStore((state) => state.cart)// store the array in a new form
  // storing functions in new variables
   const removeCartItem = useCartStore((state) => state.removeFromCart)

   const clearCart = useCartStore((state) => state.clearCart)

   const totalCart = useCartStore((state) => state.getTotal)
    return(
  <ImageBackground
  source={require('../../assets/images/Backgrounds/TableSetting4.jpg')}
        style={[StyleSheet.absoluteFill,{opacity:20} ]}

  
  >
      <LinearGradient
  colors={['#e2d8d898', '#e06e11a9']}
    start={{x:0.15, y:0.26}}
  end={{x:0.26, y:1.06}}

      style={[StyleSheet.absoluteFill,{opacity:20} ]}


 />
          <TouchableOpacity
          onPress={() => router.back()}>
            <View> 
              <Entypo name = "chevron-left" color={"#0fb333ff"} size={55}/>
            </View>
          </TouchableOpacity> {/**returning users to a previous page  */}
  



          <Text style={styles.heading}>Cart</Text>

<ScrollView style={{marginBottom: 20, marginTop: 10}}>
    {cart.map((id ) => ( 
      <View key={id.id} /**key to help with displaying of items */
      style ={styles.theItemContainer} /**Styling for the container  */
      
      >

              <TouchableOpacity
      onPress={()=> removeCartItem(id.id) /**Will Remove items like they never existed based on the id of the item in the array. */}
      >
        <View style= {{justifyContent: 'space-around', alignItems: 'flex-end', margin: 4}}>
          <Entypo name="circle-with-minus" color={'red'} size={30}
          />
        </View>
      </TouchableOpacity>

      <Image
      
      source={id.image}
      
      style={styles.ImageDisplay}
      />
      
      <Text style={styles.dishNames}>
        {id.dishName}
      </Text>

      <Text style={styles.heading2}> Description:</Text>
      <Text style={styles.baseLineText}>
        {id.description}
      </Text>
      <Text style={styles.CourseNameText}>
        {id.courseName}
      </Text>
      <Text style={styles.baseLineText}>
       <Text style={styles.Price}> Average Price:</Text> R {id.price}
      </Text>

      </View>))}
  </ScrollView>
 
      
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
  textAlign: 'justify'
},
heading:{
  fontSize: 35,
  fontFamily: 'Inter',
  fontWeight: '600',
  marginTop: 15,
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
  fontSize:11.5,
  fontWeight:'300',
  color: '#332d2dff',
  margin: 3,
  justifyContent: 'space-around',
  padding: 5,
  textAlign:  'justify',
  alignSelf: 'flex-end'
},
heading2:{
  fontSize: 13,
  color: '#fff',
  fontWeight: '600',
  marginTop: 10,
  marginBottom: 3

},
addButton:{
  width: 76,
  height: 30,
  backgroundColor: '#fdfdfdff',
  margin: 2,
  borderTopLeftRadius:20,
  borderBottomLeftRadius:20,
},
removeButton:{
  width: 76,
  height: 30,
  backgroundColor: '#ffffffff',
  margin: 2,
  borderTopRightRadius: 20,
  borderBottomRightRadius: 20,
},
buttonText: {
  alignSelf: 'center',
  margin: 5,
  fontWeight:'700',
  fontFamily: 'Roboto'
},
ImageDisplay: {
  width : 280,
  height: 120,
  borderRadius: 7,
  margin : 12,
  alignSelf: 'center'
  
},
theItemContainer: {
  height: 'auto', 
  width: 'auto', 
  padding:4, 
  backgroundColor: '#f3b353ef',
  borderBottomLeftRadius: 20.,
  borderTopRightRadius: 20,
  borderBottomRightRadius: 20.,
  alignSelf: 'center',
  margin:30,
},
CourseNameText: {
  fontSize: 14.25,
  fontWeight: 'semibold',
  fontFamily: 'Inter',
  alignSelf: 'center',
  marginVertical: 5,
  color: '#fcfbfbff',
  letterSpacing: 2.2,
},
Price:{
    fontSize: 12.5,
  fontWeight: '500',
  fontStyle: 'normal',
  color: 'rgba(247, 92, 72, 0.94)',
  height: 'auto',
  width: 'auto',
  alignSelf: 'flex-end',
  margin: 4,  

},
dishNames: {
  fontSize: 16,
  fontWeight: '700',
  fontStyle: 'italic',
  color: '#fff',
  marginTop: 0.05
},





});