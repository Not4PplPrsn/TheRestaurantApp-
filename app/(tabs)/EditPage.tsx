import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground } from 'expo-image';

export default function Gallery(){
    return(
  <ImageBackground>
      <LinearGradient
    colors={['#ebf3ed50', '#ff3b30 ']}
      style={[StyleSheet.absoluteFill,{opacity:20} ]}


 />

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
