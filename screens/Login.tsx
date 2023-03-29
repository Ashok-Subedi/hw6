import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { TextInput, Text, Button } from 'react-native-paper';
import { useNavigate } from 'react-router-native';

const Login = () => {

    const navigate = useNavigate()

    return (
        <SafeAreaView style={styles.screenContainer}>
            <Text style={styles.title}>VCU Login</Text>
            <View style={styles.container}>
                <TextInput
                 style={styles.input}
                 placeholder='username'

                />
                <TextInput
                 style={styles.input}
                 placeholder='password'
                 right={<TextInput.Icon icon="eye" />}
                />
                <Button mode='outlined' style={styles.button} onPress={()=>{navigate('/BottomInit')}}>
                    <Text>Login</Text>
                </Button>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    screenContainer: {
        display:'flex', 
        alignItems:'center', 
        justifyContent:'center', 
        width: '100%', 
        height:'100%'
    },
    container:{
        width: '100%',
        justifyContent:'center',
        display:'flex',
        alignItems:'center'
    },
    title:{
        fontSize: 30,
        paddingBottom: 20
    },
    input:{
        width:'70%',
        marginBottom:10,
        borderRadius: 10,
        height: 25,
        padding: 10,
        backgroundColor: 'rgba(255, 255, 255, 0)',
        fontSize: 15,
    },
    button:{
        marginTop:20
    }
})

export default Login;