import React, {Component} from 'react';
import {
    View,
    Text,
    StatusBar,
    Image,
    TextInput
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
            password: 'teste',
            email:'teste@teste.com',
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
            <View style={{flex: 1}}>
                <CustomHeader title='Profile' drawerOpen={() => this.props.navigation.openDrawer()} />

                <View style={styles.general}>
                    <View style={styles.thumb}>
                        <Thumbnail large source={require('../assets/perf.jpg')}/>
                        <Text>{this.state.name}</Text>
                    </View>
                    <View styel={styles.form}>
                        <Form>
                            <Item stackedLabel>
                                <Label>Username</Label>
                                <Input
                                    placeholder={""}
                                    editable={this.state.editable}
                                    onChangeText={(name) => this.setState({name})}
                                    maxLength={40}
                                />
                            </Item>
                            <Item stackedLabel>
                                <Label>E-mail</Label>
                                <Input
                                    placeholder={""}
                                    editable={this.state.editable}
                                    onChangeText={(email) => this.setState({email})}
                                    maxLength={40}
                                />
                            </Item>
                            <Item stackedLabel>
                                <Label>Zip Code</Label>
                                <Input
                                    placeholder={""}
                                    editable={this.state.editable}
                                    onChangeText={(zipCode) => this.setState({zipCode})}
                                    maxLength={10}
                                />
                            </Item>
                            <Item stackedLabel>
                                <Label>Age</Label>
                                <Input
                                    placeholder={""}
                                    editable={this.state.editable}
                                    onChangeText={(age) => this.setState({age})}
                                    maxLength={3}
                                />
                            </Item>
                            <Item stackedLabel>
                                <Label>Profession</Label>
                                <Input
                                    placeholder={""}
                                    editable={this.state.editable}
                                    onChangeText={(prof) => this.setState({profession: prof})}
                                    maxLength={20}
                                />
                            </Item>
                            <Item stackedLabel>
                                <Label>Password</Label>
                                <Input
                                    editable={this.state.editable}
                                    secureTextEntry={this.state.secure}
                                    placeholder={"*************"}
                                    onChangeText={(password) => this.setState({password})}
                                    multiline={false}
                                />
                            </Item>
                        </Form>
                    </View>
                    <View style={{paddingTop: 10}}>
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