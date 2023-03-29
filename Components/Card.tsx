import React, { createContext, useContext, useState } from 'react';
import { TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHook';
import { updateCurrentCardIndex } from '../redux/features/CardSlice';
import { useNavigate } from 'react-router-native';

type props = {
    className: string,
    numOfStudent: number,
    index: number,
    onPress: () => void,
}

const Card = ({className,numOfStudent, index, onPress}: props) => {

    const navigate = useNavigate();

    return (
        <View style={{width:'100%',display:'flex', alignItems:'center', paddingBottom: 10}}>
        <TouchableOpacity 
        onPress={onPress}
        
        style={styles.conatiner}> 
            <Text>
                {className}
            </Text>
            <View style={{display:'flex',flexDirection:'row', width:100, alignItems:'center'}}>
            <Ionicons name="people-outline" size={32}/>
                <Text>{numOfStudent}</Text>
            </View>
        </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    conatiner: {
        display:'flex', 
        flexDirection:'row', 
        justifyContent:'space-around', 
        alignItems:'center',
        height: 130,
        borderColor: 'black',
        elevation: 3,
        width: '95%',
        marginTop: 8,
        borderWidth: 1,
        backgroundColor: 'white'
    },

})

export default Card;