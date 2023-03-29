import React, { useState } from 'react';
import { FlatList, ScrollView } from 'react-native';
import { BottomNavigation, Divider } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Card from '../Components/Card';
import Title from '../Components/Title';
import { CLASS_LIST } from '../Constants/ClassList';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useAppDispatch } from '../hooks/reduxHook';
import { updateCurrentCardIndex } from '../redux/features/CardSlice';

const Home = ({navigation}) => {

    const dispatch = useAppDispatch();

    return(
    <SafeAreaView style={{backgroundColor: '#FAFAFA'}}>
        <Title title={'List Of Classes'} />
        <Divider bold/>
        <ScrollView>
            <FlatList 
                data={CLASS_LIST}
                renderItem={({item, index}) => {
                    return (
                        <Card index={index} 
                        onPress={()=>{
                            dispatch(updateCurrentCardIndex(index));
                            navigation.jumpTo('Photos')             
                    }} 
                    className={item.classname} numOfStudent={item.numOfStudnets} />
                    )
                }}
            />  
        </ScrollView>
    </SafeAreaView>
    
    )
}

export default Home;