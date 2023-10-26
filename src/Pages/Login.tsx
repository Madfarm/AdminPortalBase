import React, { useState } from 'react';
import axios from 'axios';
import { AuthAPIBase, apiResponse } from '../Utility/SD';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
    interface loginFormDataType {
        username: string,
        password: string,
    }

    const [loginFormData, setLoginFormData] = useState<loginFormDataType>({
        username: "",
        password: ""
    });

    const navigate = useNavigate()

    var handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginFormData({...loginFormData, [e.target.name]: e.target.value})
    }

    var handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await axios.post(AuthAPIBase + "/login", loginFormData)
        .then((response) => {
            console.log(response);
        })
        .catch(error => {
            console.log(error)
            
        });
        
        navigate("/")
        
    }

    return (
        <div className="AuthPages">
            <h1>Login</h1>

            <form onSubmit={handleSubmit}>
                <label>Username:
                    <input 
                        placeholder="Username.."
                        name="username"
                        type='text'
                        onChange={handleChange}
                     />
                </label>
                <label>Password:
                    <input 
                        placeholder="Password.."
                        name="password"
                        type='text'
                        onChange={handleChange} 
                    />
                </label>

                <button type="submit">Login</button>
            </form>
        </div>
    )
}