import { Image, ImageBackground } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDishStore } from '@/functions/DishesEntries';
export default function HomeScreen() {
  return (

  <ScrollView>
      <ImageBackground
  source={require('../../assets/images/Backgrounds/RestaurantExterior.webp')}
  style={[StyleSheet.absoluteFill,{opacity:60} ]}
  />

  <LinearGradient
  colors={['#e2d8d879', '#c52b1db6']}
  start={{x:0.15, y:0.26}}
  end={{x:0.26, y:1.06}}
  style={[StyleSheet.absoluteFill, ]}
  />
      <Text style={styles.heading}>Welcome</Text>

  <View style={styles.courseContainer}>
    
    <Text style={styles.heading2} >Entrées</Text>
      <View style={styles.dishContainer}>
        <View>
          <Image/>
          <Text></Text>
        </View>
        <View >
        <Text style={styles.heading3}>Description</Text>
          <Text>
            
            
          </Text>
        </View>
        <View>
          <Text></Text>
        </View>
        </View>
      </View>
  <View style={styles.courseContainer}>

    <Text style={styles.heading2}>Mains </Text>

        <View>
        <Image/>
        <Text></Text>
        </View>
                <View >
        <Text >Description</Text>
          <Text>
            
            
          </Text>
        </View>
        <View>
          <Text></Text>
        </View>


      </View>


  <View style={styles.courseContainer}>
    <Text style={styles.heading2}>Desserts</Text>
        <View>
          <Image/>
          <Text></Text>
        </View> <Text></Text>
        <View >
        <Text>Description</Text>
          <Text>
            
            
          </Text>
        </View>
        <View>
          <Text></Text>
        </View>
      </View>
      
      
 
 </ScrollView>
  );
}

const styles = StyleSheet.create({
courseContainer: {
  backgroundColor: '#f1b93fff',
  alignSelf: 'center',
  margin: 50,
  width: 350,
   height: 180,
   padding: 20,
   borderTopRightRadius:20,
   borderBottomRightRadius:20,
   borderBottomLeftRadius:20

  
},
dishContainer:{
  backgroundColor: '#00000',
  margin: 2.3,
  shadowColor:'#ffff',
  width: 100,
  
  
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
  marginTop: 90,
  alignSelf: 'center',
  color: '#3b3838ff',
  width: 150,
  borderBottomColor: '#ee9c9ce8',
  borderBottomWidth: 5,
  lineHeight: 70,
  
  
},
baseLineText:{
  fontSize: 5,
  fontWeight:'300',
  color: '#332d2dff'
},
heading2:{
  fontSize: 20,
  color: '#ffff',
  fontWeight: '600',
},
textContainer:{
  
},
heading3:{
  fontFamily: 'Time New Roman'
},


});
