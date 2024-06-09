import React,{useState} from "react";
import {useNavigate} from "react-router-dom"
const Login = (props) => {
    const [credentials, setCredentials] = useState({email:"",password:""});
    let navigate = useNavigate();

  const handleSubmit = async (e) => {
    const host = "http://localhost:4000";
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email:credentials.email,password:credentials.password})
    });
    const json = await response.json();
    console.log(json);
    if(json.success){
        //save the authToken and redirect
        localStorage.setItem("token",json.authToken);
        navigate("/");
        props.showAlert("logged in successfully","success");
    }
    else
    props.showAlert("invalid credentials","danger");
  }
  const onChange = (e)=>{
    setCredentials({...credentials,[e.target.name]: e.target.value})
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            value={credentials.email}
            onChange={onChange}
          />    
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="passoword" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            value={credentials.password}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
