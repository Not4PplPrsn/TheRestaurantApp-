import { StyleSheet, Text, View, Button, Image, ScrollView, TouchableOpacity, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground } from 'expo-image';
import { useRouter } from 'expo-router';
import React,{useState} from 'react';
import { Entypo, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useTabBarInactivity } from '@/functions/AutoHidTabBar'; // calling the function  i made  in the functions folder





const router = useRouter();

import { useDishStore, } from '@/functions/DishesEntries';
import { Checkbox, Provider as PaperProvider } from 'react-native-paper';


export default function Bin(){
     const { onTouch } = useTabBarInactivity(); /**Calling the functions in need for the scroll view so the bottom tab will disappear */

  const recycleBin = useDishStore((state) => state.bin)
  
  const restoreItems= useDishStore((state) => state.restoreDish )

  const [selectedDish, setSelectedDish] = useState<number[]>([])

  const handleRestoration =() => {

  }

    return(
  <ImageBackground
  source={require('../../assets/images/Backgrounds/TableSetting3.jpg')/**(thebarn_in_thefarm, 2025) */}
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
        </TouchableOpacity>


          <Text style={styles.heading}>Deleted Items</Text>

        <ScrollView 
            contentContainerStyle = {{ justifyContent: "space-around",  padding : 10  }}

        >
    {recycleBin.map((id) => (
      <View key={id.id} style={styles.theItemContainer}>
        <Image
        source={id.image}
        style={styles.ImageDisplay}

        />
        <Text style={styles.dishNames}>{id.dishName}</Text>
        <Text style={styles.baseLineText} >{id.description}</Text>

        <Text style={styles.baseLineText}>
          <Text style={styles.Price}>Average Price:</Text> R {id.price}</Text>

      <TouchableOpacity
      onPress={() => restoreItems(id.id)}
      >
        <View style={ { alignSelf: 'flex-end', margin: 6}}>
          <Entypo name='back' color={"#1779e9ff"} size={30}/>
        </View>
      </TouchableOpacity>
      </View>
    
      
    
    ))}
    </ScrollView>

      
      </ImageBackground>
    );
}


const styles = StyleSheet.create({
  
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
  margin: 40,
  alignSelf: 'center',
  color: '#3b3838ff',
  width:'auto',
  borderBottomColor: '#ee9c9ce8',
  borderBottomWidth: 5,
  lineHeight: 70,
  alignItems: 'center',
  alignContent: 'center',
  
},
baseLineText:{
  fontSize:11.5,
  fontWeight:'300',
  color: '#332d2dff',
  margin: 3,
  justifyContent: 'space-around',
  padding: 5,
  textAlign:  'justify'
},heading2:{
  fontSize: 20,
  color: '#272424fff',
  fontWeight: '600'
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
theItemContainer: {
  height: 'auto', 
  width: 330, 
  padding: 3, 
  backgroundColor: '#f19824de',
  borderBottomLeftRadius: 20,
  borderBottomRightRadius: 20,
  borderTopLeftRadius: 20,
  alignSelf: 'center',
  margin:30, 
  
},
ImageDisplay: {
  width : 280,
  height: 120,
  borderRadius: 7,
  margin : 12,
  alignSelf: 'center'
  
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