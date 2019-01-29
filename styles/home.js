import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    
    viewContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#18121E', //navy blue
        flex: 1,
        paddingTop: 0
    },

    text:{
        color: '#984B43', //rusty red
    },

    input: {
        color: 'white',
        height: 40,
        width: 60,
        alignItems: 'center',
        fontSize: 20
    },

    containerInput:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon:{
        width:24,
        height:24
    },
    content:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding:10
    }

});

export default styles;