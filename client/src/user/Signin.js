import React, {useState} from "react";
import Base from "../core/Base";
import { useNavigate} from 'react-router-dom';

import { signin, authenticate} from "../auth/helper";

const Signin = ()=>{

    const navigate = useNavigate();

    const [values, setValues] = useState({
        email:"",
        password:"",
        error:"",
        loading:false
    });

    const [redirect, setRedirect] = useState(false);

    const {email, password, error, loading} = values;


    const handleChange = name => event => {
        setValues({...values, error: false, [name]: event.target.value})
    }

    const onSubmit = event => {
        event.preventDefault();
        setValues({...values, error:false, loading:true})
        signin({email, password})
        .then(data =>{
            if(data.error){
                setValues({...values, error:true, loading:false})
            }else{
                
                authenticate(data, ()=>{
                    setValues({
                        ...values,
                    })
                })
                setRedirect(true);
            }
            
        })
        .catch(()=>{
            console.log("Signin request failed")
        });
    }

    const performRedirect = ()=>{
        
        redirect && navigate('/add');


    }

    const loadingMessage = ()=>{
        return(
            loading && (
                <div className="alert alert-info">
                    <h2>Loading...</h2>
                </div>
            )
        )
    }
 
     const errorMessage = ()=>{
        return ( <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
        <div className="alert alert-danger" style={{display: error ? "" :"none"}}>
            Email and password donot match
        </div>
        </div>
        </div>)
     }

    const signInForm = ()=>{
        return(
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form>
                        <div className="form-group">
                            <label className="text-light">
                                Email
                            </label>
                            <input  onChange={handleChange("email")}  value={email} className="form-control" type="email" />
                        </div>
                        <div className="form-group">
                            <label className="text-light">
                                Password
                            </label>
                            <input  onChange={handleChange("password")}  value={password} className="form-control" type="password" />
                        </div>
                        <button onClick={onSubmit} className="btn btn btn-primary form-control">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        )
    }

    return(
        <Base title="Sign IN" description="A page for user to signin!">
            {loadingMessage()}
            {errorMessage()}
            {signInForm()}
            {performRedirect()}
        </Base>
    )
}

export default Signin;