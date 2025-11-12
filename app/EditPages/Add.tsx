import { StyleSheet, Text, View, Button, Image, ScrollView, TouchableOpacity, TextInput, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground } from 'expo-image';
import { useRouter } from 'expo-router';
import React,{useState} from 'react';

/**This will allow the user to add images of the dishes  */
import * as ImagePicker from 'expo-image-picker';
import { useDishStore } from '@/functions/DishesEntries';// calling the function 
import { RadioButton } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
const router = useRouter(); // function for navigation


export default function Added(){

  const addEntries = useDishStore((state) => state.addDishes);
    
  const [checked, setChecked] = useState();//these are meant to store the responses 

  const [selectedCourse, setSelectedCourse] = useState('Entrée');//standardized the radio buttons 

  const [selectedImage, setSelectedImage] = useState<any>(null);// set image picker to an empty state

    const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,//only allows images no other file types 
      allowsEditing: false,// does not let the user crop or adjust the image.
      quality: 1,//opens the image library on the device
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  }


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

      {/**The button to access the add and remove functions. */}
      <View style={{flexDirection:'row', marginTop: 90, alignSelf: 'flex-end', marginEnd: 25,alignItems:'center'}}>
      <TouchableOpacity
      onPress={() => router.push('/EditPages/Add')}
      >
        <View style={styles.addButton}>
          <Text style={styles.buttonText} >Add</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={() => router.push('/EditPages/Redact')}
      >
        <View style={styles.removeButton}>
          <Text style={styles.buttonText}>Remove</Text>
        </View>
      </TouchableOpacity>
      </View>



          

          <Text style={styles.heading}>Editing</Text>
    
    <View>
      <Button title="Select an Image" onPress={pickImage} />
    </View>
  <View>        
{selectedImage && (
    <Image source={{ uri: selectedImage }}/>)}


                
                <TextInput placeholder='Add Dish name'/>
              <TextInput placeholder='Write a description that is at least 50 words long.'/>


              {/**The radio button for the courses */}
              <View>
                <RadioButton.Group
                onValueChange={(newValue) => setSelectedCourse(newValue)}
                value={selectedCourse}
                
                >
                  <RadioButton.Item label='Entrée' value='Entrée' labelStyle= {{margin: 1}}/>
                  <RadioButton.Item label='Main' value='Main'/>
                  <RadioButton.Item label='Dessert' value='Dessert'/>
              
                </RadioButton.Group>
              </View>
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
}


});