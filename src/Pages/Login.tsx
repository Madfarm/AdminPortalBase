import React, { useState } from 'react';
import axios from 'axios';

export default function LoginPage() {
    interface loginFormDataType {
        username: string,
        password: string,
    }

    const [loginFormData, setLoginFormData] = useState<loginFormDataType>({
        username: "",
        password: ""
    });

    var handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginFormData({...loginFormData, [e.target.name]: e.target.value})
        console.log(loginFormData);
    }

    var handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
    }

    return (
        <div className="AuthPages">
            <h1>Login</h1>

            <form>
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