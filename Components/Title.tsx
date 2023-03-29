import React from 'react';
import { View, Text, StyleSheet, GestureResponderEvent } from 'react-native';
import { Divider, IconButton } from 'react-native-paper';


type props = {
    title: string
    backButton?: boolean
    onPress?: (event: GestureResponderEvent) => void
}

const Title = ({title, backButton, onPress}: props) => {

    backButton = true;
    return (
        <View style={styles.container}>
            {backButton ? <IconButton onPress={onPress} style={styles.icon} icon={'arrow-left'} /> : null}
            <Text style={styles.title}>{title}</Text>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        width:'100%',
        height: 75,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection: 'row'
    },
    icon:{
        position:'absolute',
        left: 0
    },
    title: {
        fontSize: 20,
        marginTop: 15,
    }
})

export default Title;