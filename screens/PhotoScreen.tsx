import React from 'react';
import {FlatList, ScrollView, Text, View, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Divider, IconButton } from 'react-native-paper';
import Title from '../Components/Title';
import { CLASS_LIST } from '../Constants/ClassList';
import { useAppSelector } from '../hooks/reduxHook';
import Avatar from '../Components/Avatar';
import pic from '../assests/namePic.png'

type props = {
  className: string
}

const PhotoScreen = ({className}: props) => {

   const cardIndex = useAppSelector(state => state.card.index)
   console.log(cardIndex);


    return(
      <SafeAreaView style={{backgroundColor: '#FAFAFA', height: '100%'}}>
        <Title title={'CMSC 475'} />
        <Divider bold/>
        <View style={styles.container}>
          <Text style={{textAlign:'center', paddingBottom: 20, marginBottom: 10, fontSize: 17}}>Remeber Their Names</Text>
          <Avatar source={pic} size={300} nonClickable={true} />
        </View>
        <View>
        <Text style={styles.nameText}>ASHOK SUBEDI</Text>
        <Text style={{fontSize: 15, textAlign: 'center'}}>Swipe to look at next student</Text>
        </View>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {display:'flex', 
  flexDirection:'column', 
  justifyContent: 'center',
  alignItems: 'center', 
  width: '100%',
  height:'70%'
  },
  nameText: {
    fontSize: 30,
    fontWeight: "300",
    textAlign: 'center',
    paddingBottom: 8
  }
})



export default PhotoScreen;