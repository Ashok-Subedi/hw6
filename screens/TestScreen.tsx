import React, { useState } from 'react';
import {FlatList, ScrollView, Text, View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Button, Divider, IconButton, Modal, Portal } from 'react-native-paper';
import Title from '../Components/Title';
import { CLASS_LIST } from '../Constants/ClassList';
import { useAppSelector } from '../hooks/reduxHook';
import Avatar from '../Components/Avatar';
import Ionicons from '@expo/vector-icons/Ionicons';
import pic from '../assests/namePic.png'



type props = {
  className: string
}

const TestScreen = ({className}: props) => {
   const [IsVisible, setIsVisible] = useState<boolean>(false);
   const [isCorrect, setIsCorrect] = useState<boolean>(false);
   const cardIndex = useAppSelector(state => state.card.index)
   console.log(cardIndex);
   const containerStyle = {backgroundColor: 'white', padding: 20};

    return(
      <SafeAreaView style={{backgroundColor: '#FAFAFA', height: '100%'}}>
        <Title title={'CMSC 475'} />
        <Divider bold/>
        <View style={styles.container}>
          <Text style={{textAlign:'center', paddingBottom: 20, fontSize: 20, fontWeight: '300'}}>What is this persons name?</Text>
          <Avatar source={pic} size={300} nonClickable={true} />
        </View>
        <Portal>
            <Modal style={{padding:50}} visible={IsVisible} onDismiss={()=>(setIsVisible(false))} contentContainerStyle={{backgroundColor:'white', borderRadius:10, height: 250}}>
                <View style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                { isCorrect ? 
                (<><View style={{ backgroundColor: isCorrect? 'green' : 'red', width: 100, height: 100, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 200 }}>
                                <Ionicons name="checkmark-outline" size={100} color='white' />
                            </View><Text style={{ paddingTop: 15 }}>Correct!</Text></>)
                
                : (<><View style={{ backgroundColor: 'red', width: 100, height: 100, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 200 }}>
                                <Ionicons name="close-outline" size={100} color='white' />
                            </View><Text style={{ paddingTop: 15 }}>Incorrect. Try Again!</Text></>) }
                </View>
            </Modal>
        </Portal>
        <View style={{display:'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 10, padding: 5}}>
            <Button onPress={() => {
          setIsVisible(true);
          setIsCorrect(true);
        }} style={{height: 45, borderRadius: 1, width: 165}} buttonColor='white' textColor='black'  mode="outlined"  >Ashok Subedi</Button>
            <Button onPress={() => {
          setIsVisible(true);
          setIsCorrect(false);
        }} style={{height: 45, borderRadius: 1, width: 165}} buttonColor='white' textColor='black'  mode="outlined"  >Brandon Alvarez</Button>
        </View>
        <View style={{display:'flex', flexDirection: 'row', justifyContent: 'space-evenly', padding: 5}}>
        <Button  onPress={() => {
          setIsVisible(true);
          setIsCorrect(false);
        }} style={{height: 45, borderRadius: 1, width: 165}} buttonColor='white' textColor='black'  mode="outlined"  >Kenneth Fentress</Button>
        <Button onPress={() => {
          setIsVisible(true);
          setIsCorrect(false);
        }}style={{height: 45, borderRadius: 1, width: 165 }} buttonColor='white' textColor='black'  mode="outlined"  >Christina Tillman</Button>

        </View>

      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
  display:'flex', 
  flexDirection:'column', 
  justifyContent: 'center',
  alignItems: 'center', 
  width: '100%',
  height:'62%',
  marginBottom: 15
  },
  nameText: {
    fontSize: 30,
    textAlign: 'center'
  }
})



export default TestScreen;