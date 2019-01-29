import React,{ Component } from 'react';
import { StyleSheet, Dimensions, } from 'react-native';


const styles = StyleSheet.create({

    backgroundImage: {
        width: '100%',
        height:'100%',
        position: 'absolute',
        top: 0,
        left: 0,
        alignItems: 'center',
        flex: 1
    },

    viewContainer: {
        width: '100%',
        height: '100%',
        flex: 1,
        paddingTop: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0, 0.2)'
    },

    text:{
        color: '#984B43', //rusty red
    },

    input: {
        color: 'white',
        height: 40,
        width: 250,
        textAlign: 'center',
        fontSize: 20,
        backgroundColor: '#18121E',
        marginBottom: 10,
    },

    containerInput:{
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        margin: 5,
        backgroundColor:'rgba(152,75,67, 0.4)'
    },
 
    content:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding:10
    }
});

module.exports = styles; 