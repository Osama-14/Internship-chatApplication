import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from 'react-router-dom';
import {useState} from 'react';
import "./signup.css"

function Signup() {
  const [email , setEmail]=useState("");
  const [pass , setPass]=useState("");
  const onSignUp = () => {
  console.log(email);
  console.log(pass);

  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, pass)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("Success");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}   
  return (
      <div className="main-bd">
      <div className="form"> 
    <h1>Signup</h1>

    <Form
    name="normal_login"
    className="login-form"
    initialValues={{
      remember: true,
    }}
    
  >
    <Form.Item
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your Username!',
        },
      ]}
    >
      <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
    </Form.Item>
    <Form.Item
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your Email!',
        },
      ]}
    >
      <Input prefix={<UserOutlined className="site-form-item-icon" />} value={email} placeholder="Email" 
      onChange={(e)=>setEmail(e.target.value)}
      />
    </Form.Item>
    <Form.Item
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your Password!',
        },
      ]}
    >
      <Input
        prefix={<LockOutlined className="site-form-item-icon" />}
        type="password"
        placeholder="Password"
        value={pass}
        onChange={(e)=>setPass(e.target.value)}
      />
    </Form.Item>
<div>
    <Form.Item>
     <button class="button" onClick={onSignUp} ><span>SignUp </span></button>
      {/* <Button onClick={onSignUp} type="primary" htmlType="submit" className="login-form-button">
        Sign Up
      </Button>  */}
      <div>
      Have an account? <Link to="/">Log In</Link>
      </div>
    </Form.Item>
    </div>
  </Form>  
  </div>


  </div>


  )
};




export default Signup;
  