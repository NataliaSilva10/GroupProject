import React from "react";
import LoginForm from "../components/LoginForm";


const Login = (props) => {
    return (
        <div className="container">
            <div  className="col-md-12 mx-auto bg-light">
                <LoginForm/>
            </div>
        </div>
    );
};

export default Login;