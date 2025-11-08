import { Image } from 'expo-image';
import { Platform, StyleSheet, Text, View, ScrollView, FlatList, ViewStyle, } from 'react-native';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Fonts } from '@/constants/theme';
import { dishes } from '@/functions/theDishArray';
import { ImageBackground } from 'expo-image';

export default function HomeScreen() {
  return (
    <ScrollView>
  <View style={{ alignSelf: 'center', }}>
    <Text>Entrées</Text>
      <View style={styles.courseContainer}>
        <View>

        </View>
        <View>
          
        </View>
      </View>
    
    <Text>Mains </Text>

      <View style={styles.courseContainer}>
        <View>

        </View>
        <View>
          
        </View>
      </View>

    <Text>Desserts</Text>'
      <View style={styles.courseContainer}>
        <View>

        </View>
        <View>
          
        </View>
      </View>
  </View>
  </ScrollView>
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
}


});
