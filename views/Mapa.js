import React, { Component } from 'react';

import {
    View,
    Text,
    Image,
    Dimensions,
    StyleSheet
} from 'react-native';

import MapView, {
    PROVIDER_GOOGLE
} from  'react-native-maps';

import {
    Icon
} from  'native-base';

import CustomHeader from '../components/CustomHeader';

const {height, width} = Dimensions.get('screen');
const delta = 0.092 * (width / height);

export default class Mapa extends Component {

    static navigationOptions = ({navigation}) => ({
        title: "mapa",
        headerLeft: <Icon name="ios-map" style={{paddingleft: 10}} onPress={() => this.props.navigation.openDrawer()}/>,
        drawerLabel: 'Mapa',
        drawerIcon: ({ tintcolor }) => (
            <Image
                source={require('../assets/home.png')}
                style={styles.icon}
            />
        ),
    });

    constructor(props){
        super(props);

        this.state = {
            initialPosition: {
				longitude: 0,
				latitude: 0,
				longitudeDelta: 0,
				latitudeDelta: 0
			},
        }
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition((position) => {
            var lat = parseFloat(position.coords.latitude);
            var long = parseFloat(position.coords.longitude);

            var initialRegion = {
                latitude: lat,
                longitude: long,
                latitudeDelta: 0.092,
                longitudeDelta: delta
            }

            this.setState({initialPosition: initialRegion});
        })
    }

    render(){
        return(
            <View>
                <CustomHeader  title="Map" drawerOpen={() => this.props.navigation.openDrawer()} />
                <MapView
                    provider={PROVIDER_GOOGLE}
                    initialRegion={this.state.initialPosition}
                    style={ styles.map }
                >

                </MapView>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    map: {
        width: width * 1,
        height: height * 1
    },

    container: {
        flex: 1,
        width: width * 1,
        height: height * 1,
        alignItems: 'center',
    }
})