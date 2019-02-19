import React from 'react';
import './css/Form.css';
import Input from './Input';
import Parse from 'parse';
import {Row, Col} from 'react-flexbox-grid';
import FlexView from 'react-flexview';

export default class Form extends React.Component{

    constructor(props){
        super(props);
        this.state = { email: '', password: '', type: 'password', status: 'stay'};
        this.set = this.set.bind(this);
    }

    logInUser(){
        if(this.state.status != 'loading'){
            let user = Parse.User.logIn(this.state.email, this.state.password)
            .then(
                (result) => {
                    this.setState({status: 'stay'});
                    window.location.href = "http://localhost:3000/content?" + btoa(this.state.email) + "?" + btoa(this.state.password);
                },
                (err) => {
                    alert(err.message);
                    this.setState({status: 'stay'});
                }
            );
        }else{
            alert('Wait a second. Loading informations. ( CLICK ON \'OK\' TO CONTINUE)');
        }
        this.setState({status: 'loading'});
    }

    signUpUser(){
        if(this.state.status != 'loading'){
            let user = new Parse.User();
            user.set('username', this.state.email);
            user.set('email', this.state.email);
            user.set('password', this.state.password);
            try{
                user.signUp()
                .then(
                    (result) => {
                        alert("User registered with success !!!");
                        this.setState({status: 'stay'});
                        window.location.href = "http://localhost:3000/content?" + btoa(this.state.email) + "?" + btoa(this.state.password);
                    },
                    (err) => {
                        alert(err);
                        this.setState({status: 'stay'});
                    }
                );
            }catch(error){
                alert(error.message);
            }
        } else {
            alert('Wait a second. Loading informations. ( CLICK ON \'OK\' TO CONTINUE)');
        }
        this.setState({status: 'loading'});
    }

    set(value, typeInput){
        if(typeInput === 'email'){
            this.setState({email: value});
        }else{
            this.setState({password: value});
        }
    }

    changeVisibilityPass(){
        let type = '';
        if(this.state.type === 'password'){
            type = 'text';
        }else{
            type = 'password';
        }
        this.setState({type});
    }

    render(){
        return(
            <div className='cont-form'>
                <header className="form-render">
                    <FlexView hAlignContent='center' vAlignContent='center' className='flexView'>
                        <Col>
                            <Row className="logo">
                                <img src={require("../assets/logo.png")} height='27vmax'/>
                            </Row>

                            <Row>
                                <form>
                                    <Col>
                                        <p className="txtInput">Email</p>
                                        <Input 
                                            id='idEmail' 
                                            type='text' 
                                            value={this.state.email} 
                                            typeInput='email' 
                                            set={this.set}
                                            placeholder='seuemail@email.com'
                                            icon={require('../assets/mail.png')}
                                        />
                                        <p className="txtInput">Password</p>
                                        <Input 
                                            id='idPass' 
                                            type={this.state.type} 
                                            value={this.state.password} 
                                            typeInput='password' 
                                            set={this.set}
                                            placeholder='Password'
                                            icon={require('../assets/lock.png')}
                                        />
                                        <Row>
                                            <input className="checkbox-style" type="checkbox" onChange={() => {this.changeVisibilityPass()}}/> 
                                            <p className="txtCheckbox"> Mostrar a senha</p>
                                        </Row>
                                        <Row>
                                            <a href="#" className='link-conta'>Problemas para acessar a conta ?</a>
                                        </Row>

                                        <input className='btnAcessar' type="button" value="Acessar" onClick={() => {this.logInUser()}}/>

                                    </Col>
                                </form>
                            </Row>

                            <Row>
                                <div style={{width: '50vmin', marginTop: '4vmin', marginBottom: '2vmin'}}>
                                    <fieldset>
                                        <legend align='center'>ou</legend>
                                    </fieldset>
                                </div>
                            </Row>

                            <Row>
                                <input className='btnCadastrar' type="button" value="Cadastrar" onClick={() => {this.signUpUser()}}/>
                            </Row>

                            <Row>
                                <a href="#" className='link-termos'>Termos de uso · Política de privacidade</a>
                            </Row>
                        </Col>
                    </FlexView>
                </header>
                <div className='img'>
                    <img className='img' src={require('../assets/bg.jpg')} />
                </div>
            </div>
        );
    }
}
