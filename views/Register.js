import React, {Component} from 'react';

import {
    View,
    Text,
    StatusBar
} from 'react-native';

import {
    Form,
    Field,
} from 'react-native-validate-form';

import {
    Button, InputGroup
} from 'native-base';

import InputField from '../components/InputField';
import CustomHeader from '../components/CustomHeader';

const required = value => (value ? undefined: 'Este é um campo Obrigatório');
const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,5}$/i.test(value) ? 'Por favor, informe um endereço de e-mail válido' : undefined;
const cpf = value => value && !/^\d{3}\x2E\d{3}\x2E\d{3}\x2D\d{2}$/i.test(value) ? 'Por favor, informe um CPF válido' : undefined;
const cep = value => value && !/^([\d]{2})\.?([\d]{3})\-?([\d]{3})/i.test(value) ? 'Por favor, informe um CEP válido' : undefined;

export default class Cadastro extends Component {
    constructor(props){
        super(props);

        this.state = {
            errors: [],
            email: '',
            cpf: '',
            cep: ''
        }
    }

    submitForm() {
        let submitResults = this.myForm.validate();

        let errors = [];

        submitResults.forEach(item => {
            errors.push({ field: item.fieldName, error: item.error });
        });

        this.setState({ errors });
    }

    componentDidMount(){
        StatusBar.setHidden(true);
    }

    static navigationOptions = ({navigation}) => ({
        drawerLabel: 'Register',
    });

    render(){
        return(
            <View>
                <CustomHeader title='Register' drawerOpen={() => this.props.navigation.openDrawer()} />
                <Form
                    ref={(ref) => this.myForm = ref}
                    validate={true}
                    submit={this.submitForm.bind(this)}
                    errors={this.state.errors}
                >
                    <Text>Informe seu E-mail</Text>
                    <Field 
                        required
                        component={InputField}
                        validations={[ required, email ]}
                        name="email"
                        value={this.state.email}
                        onChangeText={(email) => this.setState({ email })}
                        customStyle={{ width: 200 }}
                        placeholder="exemplo@ex.com"
                    />
                    <Text>CPF</Text>
                    <Field
                        required
                        component={InputField}
                        validations={[ required, cpf ]}
                        name="cpf"
                        value={this.state.cpf}
                        onChangeText={(cpf) => this.setState({ cpf })}
                        customStyle={{ width: 200 }}
                        placeholder="000.000.000-00"
                    />
                    <Text>CEP</Text>
                    <Field 
                        required
                        component={InputField}
                        validations={[ required, cep ]}
                        name="cep"
                        value={this.state.cep}
                        onChangeText={(cep) => this.setState({ cep })}
                        customStyle={{ width: 200 }}
                        placeholder="00000-000"
                    />
                </Form>
                <Button success onPress={() => this.submitForm()}>
                    <Text> Cadastre-se </Text>
                </Button>
            </View>
            
        )
    }
}
