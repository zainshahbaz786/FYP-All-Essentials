
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'

  class App extends Component {
    constructor() {
      super()
      this.state = {
        username: '',
        email: '',
        phone:'',
        address:'',
        password: ''
      }
      
      this.changeUserName = this.changeUserName.bind(this)
      this.changeEmail = this.changeEmail.bind(this)
      this.changePassword = this.changePassword.bind(this)
      this.changePhone = this.changePhone.bind(this)
      this.changeAddress = this.changeAddress.bind(this)
      this.OnSubmit = this.OnSubmit.bind(this)

    }
    
    changeUserName(event) {
      this.setState({
        username: event.target.value
      })
    }
    changeEmail(event) {
      this.setState({
        email: event.target.value
      })
    }
    changePassword(event) {
      this.setState({
        password: event.target.value
      })
    }
    changePhone(event) {
      this.setState({
        phone: event.target.value
      })
    }
    changeAddress(event) {
      this.setState({
        address: event.target.value
      })
    }
    OnSubmit(event) {
      event.preventDefault()

      const registered = {
        
        username: this.state.username,
        email: this.state.email,
        phone:this.state.phone,
        address:this.state.address,
        password: this.state.password
      }

      //axios.post('http://127.0.0.1:8000/signup/', registered)
      axios.post('http://localhost:4000/app/signup',registered)
      .then(response => console.log(response.data))
      this.setState({
        username: '',
        email: '',
        phone:'',
        address:'',
        password: ''
      })
      document.getElementById('sucessful').innerHTML = "SignUp Sucessful."
    }
    render() {
      return (
        <div className="workwithus" >

          <h1 style={{ color: 'green', textAlign: "center", fontSize: "30px" }}>Register Yourself Here</h1>

          <h2 style={{ color: 'blue', textAlign: "center", fontSize: "25px" }}>Sign Up to be our Part</h2>

          <div className="simpsignup">
            <div id="login-box">
              <div className="left">
                <h1>Sign up</h1>
                <form onSubmit={this.OnSubmit}>
                <input type="text" name="username" className="signupInput"
                onChange={this.changeUserName} value={this.state.username}
                placeholder="Username" />
                <input type="text" name="email" className="signupInput" 
                onChange={this.changeEmail} value={this.state.email}
                placeholder="E-mail" />
                <input type="text" name="phone" className="signupInput"
                onChange={this.changePhone} value={this.state.phone}
                placeholder="Mobile Phone" />
                <input type="text" name="address" className="signupInput" 
                onChange={this.changeAddress} value={this.state.address}
                placeholder="Address" />
                <input type="password" name="password" className="signupInput" 
                onChange={this.changePassword} value={this.state.password}
                placeholder="Password" />
                

                <input type="submit" name="signup_submit" value="Sign me up" />
                </form>
                <p id="sucessful"></p>
              </div>


              {/* username */}
              {/* email */}
              {/* phone */}
              {/* address */}
              {/* password */}
              {/* password2 */}



              <div class="right">
                <span className="loginwith">Sign in with<br />social network</span>

                <button className="social-signin facebook">Log in with facebook</button>
                <button className="social-signin twitter">Log in with Twitter</button>
                <button className="social-signin google">Log in with Google+</button>
              </div>
              <div className="or">OR</div>
            </div>

          </div>



        </div >

      )
    }
  }


export default App;
