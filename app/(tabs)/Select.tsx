import { StyleSheet, Text, View, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground } from 'expo-image';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { DishEntries, useDishStore,useCartStore } from '@/functions/DishesEntries';

import { use, useState } from 'react';
//This will be used in the check boxes for the dishes  
import { Checkbox, Menu, Provider as PaperProvider, Button } from 'react-native-paper';
  import { SafeAreaView } from 'react-native-safe-area-context';

  import { useTabBarInactivity } from '@/functions/AutoHidTabBar';
import { dishes } from '@/functions/theDishArray';
import { FontAwesome } from '@expo/vector-icons';

  export type CourseType = 'All' | 'Entrée'  | 'Main' | 'Dessert'; // the value for the filter

  interface FilterButtonsProps {
  selectedCourse: string;
  onFilter: (course: string) => void;
}
interface DishItemProps {
  item: DishEntries;
  isSelected: boolean;
  onToggle: (id: number) => void;
}






export default function DishSelection() {

     const { onTouch } = useTabBarInactivity(); /**Calling the functions in need for the scroll view so the bottom tab will disappear */

  const { entries} = useDishStore();

 const {addToCart,} = useCartStore();

const [addedItems, setAddedItems] = useState<DishEntries[]>([]);

const [groupCourse, setGroupCourse] = useState( false)

const [selectedCourse, setSelectedCourse] = useState<CourseType>('All');

const [selectedItems, setSelectedItems] = useState<number[]>([]);
const [totalPrice, setTotalPrice] = useState(0);;
    const [menuVisible, setMenuVisible] = useState(false);


const courses: CourseType[] = ['All', 'Entrée', 'Main', 'Dessert'];

const filteredItems = entries.filter((dish) =>
  selectedCourse === 'All'
    ? !dish.isDeleted &&
      dish.dishName.trim() !== '' &&
      dish.description.trim() !== '' &&
      dish.price > 0 &&
      dish.image
    : dish.courseName === selectedCourse &&
      !dish.isDeleted &&
      dish.dishName.trim() !== '' &&
      dish.description.trim() !== '' &&
      dish.price > 0 &&
      dish.image
);

  const clearSelection = () => {
    setSelectedItems([]);
  };
  
const toggleSelection = (dish: DishEntries) => {
  const alreadySelected = selectedItems.includes(dish.id);

  if (alreadySelected) {
    setSelectedItems((prev) => prev.filter((id) => id !== dish.id));
    setTotalPrice((prev) => prev - dish.price);
  } else {
    setSelectedItems((prev) => [...prev, dish.id]);
    setTotalPrice((prev) => prev + dish.price);
  }
};


    return(

      <PaperProvider>
      <ImageBackground
      source = {require('../../assets/images/Backgrounds/TableSetting2.jpg')}
        style={[StyleSheet.absoluteFill,{opacity:60,} ]}

      
      >
        <LinearGradient
          colors={['#e2d8d879', '#c52b1db6']}
          start={{x:0.15, y:0.26}}
          end={{x:0.26, y:1.06}}
          style={[StyleSheet.absoluteFill, ]}
        
        />
        
            <Text style ={styles.heading}>
                Menu
            </Text>


 <View style= {{margin: 30}}>           
<Menu //(W3Schools, 2025)
        // this is when the button is inactive
          visible={menuVisible}// (The IIE, 2025)
          onDismiss={() => setMenuVisible(false)}
          anchor={
            <Button //(W3Schools, 2025)
              mode="outlined" 
              onPress={() => setMenuVisible(true)}
              style={styles.dropdownButton}
              contentStyle={styles.dropdownButtonContent}
              
            >
              {selectedCourse || 'Select Course'} 
            </Button>
          }
          

            

          style={styles.menu}
        >
          {courses.map((course,index)=> (
            <Menu.Item
            key={course}
            title={course}
            style={styles.menuItem}
            titleStyle={styles.menuItemText}
              onPress={() => {
      setSelectedCourse(course as CourseType); //  update selected course
      setMenuVisible(true);     //  keep it open 
    }}


            />
            
            
            ))}




        </Menu></View>




        <View >
          <FontAwesome name="opencart" size={12} color="#c97f1f"  />
            <Text>
              R {totalPrice}
            </Text>
        </View>

<View>

<ScrollView
        onTouchStart={onTouch}
        scrollEventThrottle={16}

>
  <FlatList
  data={filteredItems}
  renderItem={({ item }) => {
    const isSelected = selectedItems.includes(item.id);

    return (
      <TouchableOpacity onPress={() => toggleSelection(item)}>
        <ImageBackground
          source={{uri: item.image}}
          style={[StyleSheet.absoluteFill,{opacity:60,} ]}
        />
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, width: 300, height: 170}}>
          <Checkbox
            status={isSelected ? 'checked' : 'unchecked'}
            onPress={() => toggleSelection(item)}
          />
          <View style={{ marginLeft: 8 }}>
            <Text>{item.dishName}</Text>
            <Text>{item.description}</Text>
            <Text>R{item.price.toFixed(2)}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }}

  keyExtractor={(item) => item.id.toString()}
/>

  
</ScrollView>         


</View>



</ImageBackground>
</PaperProvider>
    );
}


const styles = StyleSheet.create({
  descriptionText: {
    fontFamily: 'Inter',
    fontWeight: '500',
    alignSelf: 'flex-start',
    margin: 10,
  },
  heading: {
    fontSize: 35,
    fontFamily: 'Inter',
    fontWeight: '600',
    marginTop: 20,
    alignSelf: 'center',
    color: '#3b3838ff',
    width: 'auto',
    borderBottomColor: '#ee9c9ce8',
    borderBottomWidth: 5,
    lineHeight: 70,
    alignItems: 'center',
    alignContent: 'center',
  },
  heading2: {
    fontSize: 20,
    color: '#272424', // fixed invalid hex
    fontWeight: '600',
  },
  theItemContainer: {
    height: 'auto',
    width: 'auto',
    padding: 3,
    backgroundColor: '#f3b25ce0',
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    marginBottom: 2,
    marginTop: 2,
    alignSelf: 'center',
    margin: 5,
  },
  ImageDisplay: {
    width: 280,
    height: 120,
    borderRadius: 7,
    margin: 12,
    alignSelf: 'center',
  },
  PriceContainer: {
    height: 'auto',
    width: 150,
    backgroundColor: '#c52b1d6e',
    padding: 5.7,
    margin: 3,
    borderRadius: 6,
    marginBottom: 15,
  },
  selectedContainer: {
    borderColor: '#3ad63494',
  },
  radioItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  radioLabel: {
    fontSize: 16,
    marginLeft: 4,
    color: '#333',
  },
  radioLabelSelected: {
    fontWeight: 'bold',
    color: '#007AFF',
  },
    dropdownButton: {
    width: 160,
    marginBottom: 20,
    borderColor: 'gray',
    borderRadius: 15,
    fontFamily: 'georgia',  
    backgroundColor: 'white',
    height: 45.8,
    fontSize:15
  },
    dropdownButtonContent: {
    justifyContent: 'space-evenly',
    backgroundColor: 'transparent'
  },
  menu: {
    marginTop: 40,
    width: 200,
  },
  menuItem: {
    paddingVertical: 8,
    margin: 10,
    backgroundColor: '#c7825aff',
    borderRadius: 5.75
  },
  menuItemText: {
    fontFamily: 'monospace'},


});