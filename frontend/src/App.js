import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import CarouselLogin from './components/CarouselLogin';
import Info from './components/Info';
import NavBar from './components/NavBar'
import config from './components/config';
import axios from 'axios'

import {
  Container,
  Row,
  Col
} from 'reactstrap'

class App extends Component {

  state = {
    login: true,
    usernameLogin: '',
    passwordLogin: '',
    usernameRegister: '',
    passwordRegister: '',
    emailRegister: ''
  }
  
  stateLogin = () => {
    this.setState({ login: false })
  }

  stateLogout = () => {
    this.setState({ login: true })
  }

  handleUsernameLoginChange = (params) => {
    this.setState({usernameLogin: params.target.value})
  }

  handlePasswordLoginChange = (params) => {
    this.setState({passwordLogin: params.target.value})
  }

  handleUsernameRegisterChange = (params) => {
    this.setState({usernameRegister: params.target.value})
  }

  handlePasswordRegisterChange = (params) => {
    this.setState({passwordRegister: params.target.value})
  }

  handleEmailRegisterChange = (params) => {
    this.setState({emailRegister: params.target.value})
  }

  handleLogin = (event) => {
    event.preventDefault()
    axios.post(config.root + '/api/auth', {
      username: this.state.usernameLogin,
      password: this.state.passwordLogin
    })
    .then(res => {
      if (res.status === 200 && res.statusText === 'OK') this.setState({login: false})
    })
    .catch(err => console.log(err))
  }

  handleRegister = (event) => {
    event.preventDefault()
    axios.post(config.root + '/api/users', {
      username: this.state.usernameRegister,
      password: this.state.passwordRegister,
      email: this.state.emailRegister
    })
    .then(res => alert('Register successful'))
    .catch(err => {
      console.log(err)
      alert('Register not successful')
    })
  }

  render() {
    switch (this.state.login) {
      case true:
        return (
          <div>
            <NavBar/>
            <CarouselLogin/>  
            {/* <button onClick={this.stateLogin}>Login</button>   hack*/} 
            

            <Container>
              <Row>
                <Col>
                  <h1>Login</h1>
                  <form>
                    <input type="text" name='username' onChange={this.handleUsernameLoginChange} placeholder='username...'/>
                    <input type="password" name='password' onChange={this.handlePasswordLoginChange} placeholder='password...'/>
                    <button onClick={this.handleLogin}>Login</button>
                  </form>
                </Col>
                <Col>
                  <h1>Register</h1>
                  <form>
                    <input type="text" name='username' onChange={this.handleUsernameRegisterChange} placeholder='username...'/>
                    <input type="password" name='password' onChange={this.handlePasswordRegisterChange} placeholder='password...'/>
                    <input type="text" name="email" onChange={this.handleEmailRegisterChange} placeholder='email...'/>
                    <button onClick={this.handleRegister}>Register</button>
                  </form>
                </Col>
              </Row>
            </Container> 
            <br/>
            <div  className='item-center'>
               <h1>Made by Đàm Tùng</h1>      
            </div>
         </div>
        )
      case false:
        return ( 
          <div>
            <NavBar/>
            <Info/>
            <form action={config.root + '/api/auth'} method='delete'>
              <button onClick={this.stateLogout}>Logout</button>
              </form>
              <div  className='item-center'>
               <h1>Made by Đàm Tùng</h1>      
            </div>
          </div>    
        )
      default:
        return <h1>defaut</h1>
    }
  }
}

export default App;
