import React, {Component} from 'react';
import {
    View,
    Text,
    StatusBar,
    Image
} from 'react-native';

import {
    Icon, 
    Form,
    Thumbnail,
    Item,
    Input, 
    Label,
    Button
} from 'native-base';

import styles from '../styles/profile';

import CustomHeader from '../components/CustomHeader';

export default class Profile extends Component {

    constructor(props){
        super(props);

        const { navigate } = this.props.navigation;

        this.state = {
            name: 'VulpesMacrotiss',
            age: '',
            profession: '',
            zipCode: '',
            password: '',
            email:'',
            editable: false,
            secure: true,
            hide: true,
        }
    }

    componentDidMount(){
        StatusBar.setHidden(true);
    }

    static navigationOptions = ({navigation}) => ({
        title: "Home",
        headerLeft: <Icon name="ios-menu" style={{paddingleft: 10}} onPress={() => navigation.navigate('DrawerOpen')}/>,
        drawerLabel: 'Profile',
        drawerIcon: ({ tintcolor }) => (
            <Image
                source={require('../assets/prof.png')}
                style={styles.icon}
            />
        ),
    });

    render(){
        return(
            <View>
                <CustomHeader title='Profile' drawerOpen={() => this.props.navigation.navigate('DrawerOpen')} />

                <View style={styles.thumb}>
                    <Thumbnail large source={require('../assets/perf.jpg')}/>
                </View>
                <View styel={styles.form}>
                    <Form>
                        <Item stackedLabel>
                            <Label>Username</Label>
                            <Input
                                placeholder={this.state.name}
                                editable={this.state.editable}
                                onChangeText={(name) => this.setState({name})}
                            />
                        </Item>
                        <Item stackedLabel>
                            <Label>E-mail</Label>
                            <Input
                                placeholder={this.state.email}
                                editable={this.state.editable}
                                onChangeText={(email) => this.setState({email})}
                            />
                        </Item>
                        <Item stackedLabel>
                            <Label>Zip Code</Label>
                            <Input
                                placeholder={this.state.zipCode}
                                editable={this.state.editable}
                                onChangeText={(zipCode) => this.setState({zipCode})}
                            />
                        </Item>
                        <Item stackedLabel>
                            <Label>Age</Label>
                            <Input
                                placeholder={this.state.age}
                                editable={this.state.editable}
                                onChangeText={(age) => this.setState({age})}
                            />
                        </Item>
                        <Item stackedLabel>
                            <Label>Profession</Label>
                            <Input
                                placeholder={this.state.profession}
                                editable={this.state.editable}
                                onChangeText={(prof) => this.setState({profession: prof})}
                            />
                        </Item>
                        <Item stackedLabel>
                            <Label>Password</Label>
                            <Input
                                placeholder={"*****"}
                                editable={this.state.editable}
                                secureTextEntry={this.state.secure}
                                onChangeText={(pass) => this.setState({password: pass})}
                            />
                        </Item>
                    </Form>
                </View>
                <View>
                    {
                        this.state.hide ? 
                            <Button primary onPress={() => this._edit()}>
                                <Text style={{color:'white'}}> Edit Profile </Text>
                            </Button>
                        :
                            <Button primary onPress={() => this._save()}>
                                <Text style={{color:'white'}}> Save Changes </Text>
                            </Button>
                        
                    }
                    

                </View>
            </View>
        );
    }

    _edit(){
        this.setState({editable: true, secure: false, hide: false});
    }
    _save(){
        this.setState({editable: false, secure: true, hide: true});
    }
}