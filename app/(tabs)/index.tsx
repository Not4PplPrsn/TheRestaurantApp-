import { Image } from 'expo-image';
import { Platform, StyleSheet, Text, View, ScrollView, FlatList, ViewStyle, } from 'react-native';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Fonts } from '@/constants/theme';
import { dishes } from '@/functions/theDishArray';
import { ImageBackground } from 'expo-image';
import { DishEntries } from '@/functions/DishesEntries';

export default function HomeScreen() {
  return (
  <LinearGradient
  colors={['#ebf3ed50', '#d4f190e7']}
  start={{x:0.2, y:1}}
  >
  <ImageBackground
  source={require('../../assets/images/Backgrounds/RestaurantExterior.webp')}
  >
  <View style={styles.courseContainer}>
    
    <Text>Entrées</Text>
      <View >
        <View>
          <Image/>
        </View>
          <Text>
            <Text>Description</Text>
            
          </Text>
        </View>
        <View>
          <Text>Price</Text>
          <Text></Text>
        </View>
      </View>
  <View style={styles.courseContainer}>

    <Text>Mains </Text>

        <View>
        <Image/>
        </View>
        <View>
          <Text>Description</Text>
        </View>
      </View>


  <View style={styles.courseContainer}>
    <Text>Desserts</Text>
        <View>
          <Image/>
        </View>
        <View>
          <Text>Description</Text>
        </View>
      </View>
      
      </ImageBackground>
 </LinearGradient>
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
  fontSize: 13.5,
  fontFamily: 'Inter',
  fontWeight: '600',
  marginBottom: 5,
  alignSelf: 'center'
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
