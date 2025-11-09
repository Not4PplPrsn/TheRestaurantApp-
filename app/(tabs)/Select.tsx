import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground } from 'expo-image';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { DishEntries } from '@/functions/DishesEntries';

export default function DishSelection() {
    return(
        <View>
            <Text>
                Selection 
            </Text>
        </View>
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
