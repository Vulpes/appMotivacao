import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    
    icon:{
        width:24,
        height:24
    },
    content:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding:10
    },

    imagePerf: {
        height:150,
        width:150,
        borderRadius: 75
    },

    headerImage:{
        height:200,
        backgroundColor:'#984B43'
    },

    form: {
        alignItems: 'center',
        width: '80%'
    },

    general:{
        flex:1,
        alignItems: 'center',
    },
    
    thumb: {
        alignItems: 'center',
        width: '100%',
        paddingTop: 5
    }

});

export default styles;