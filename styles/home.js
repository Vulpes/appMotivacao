import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    
    scrollView: {
        width: '100%',
        height: '100%',
        backgroundColor: '#18121E', //navy blue
        flex: 1,
        paddingTop:0,
    },

    input: {
        color: 'white',
        height: 40,
        width: 60,
        alignItems: 'center',
        fontSize: 20
    },

    viewTittle:{
        backgroundColor: 'white',
        alignItems: 'center',
        width: '90%',
        height: 100,
        justifyContent: 'center',
        borderRadius: 5
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