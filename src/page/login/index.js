import React, { Component } from 'react';
import '../../css/style.css'
import './login.css'
import { RowInput } from '../../component';
import { Redirect } from "react-router-dom"
import axios from "axios"



class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        inputName: "",
        inputAddress: "",
        inputUsername: "",
        inputPassword: "",
        inputRegUsername: "",
        inputRegPassword: "",
        usernew: []
     }
  }

  componentDidMount=()=>{
    const url = 'http://localhost:8081/KeretaApi/users';
    axios.get(url, {
        headers: {
        'Accept': 'application/json'
        }
    })
    .catch(err => console.log(err))
    .then(res => {console.log("Data respond",res)
        const users = res;
				this.setState({ usernew : users })
  })
    // const url = fetch('localhost:8081/KeretaApi/users')
		// url.then(response => {
		// 	return response.json();
		// })
		// .then( responseJson => {
		// 	const dataResponse = responseJson;
		// 	const userArray = dataResponse.map((data, index)=> {
		// 		return(
		// 			{ iduser : data.id,
    //         name : data.nama,
		// 			  username : data.username,
		// 			  password : data.password,
		// 			  jabatan : data.jabatan
		// 		}
		// 		)
		// 	})
		// 	// console.log("asdasdasd", userArray);
		// 	this.setState({
		// 		usernew: userArray
		// 	})
		// });
  }

  setValue = el => {
    this.setState({
        [el.target.name]: el.target.value
    })
  }
  
  loginUser = () => {
    const usernew = this.state.usernew
    // const userLogin  = this.props.userLogin
    for(let i = 0;i < usernew.length;i++){
      if(this.state.inputUsername === usernew[i].username && this.state.inputPassword === usernew[i].password){
        // const userJabatan = usernew.filter((item) => item.username === this.state.inputUsername).map(({name, username, jabatan}) => ({name, username, jabatan}));
        // userLogin(this.state.inputUsername, userJabatan[0].jabatan)
        <Redirect to="/sks" />
        return alert("Login Username " +this.state.inputUsername+ " Berhasil")
      }      
    }
    return alert("Username atau Password tidak terdaftar")
  }

  render() { 
    const setStatusPage  = this.props.setPage
    console.log(this.state.usernew);
    return ( 
      <>
      <div className="main">
        <div className="w3">
          <div className="signin-form profile">
            <h3>Login</h3>
            {/* <div className="login-form"> */}
                <RowInput
                    placeholder="Type E-mail Here"
                    nameInput="inputUsername"
                    onChangeEvent={this.setValue}
                    valueInput={this.state.inputUsername}
                />
                <RowInput
                    placeholder="Type Password Here"
                    nameInput="inputPassword"
                    typeInput="password"
                    valueInput={this.state.inputPassword}
                    onChangeEvent={this.setValue}
                />
                {/* {console.log(this.props.usersArr.length)} */}
                <div className="tp">
							    <button className="btnnn" onClick={this.loginUser}>Login</button>
							    <button className="btnnn" onClick={()=>setStatusPage("register")}>Register</button>
						    </div>
            {/* </div> */}
          </div>
        </div>
      </div>
      </>
     );
  }
}
 
export default Login;
