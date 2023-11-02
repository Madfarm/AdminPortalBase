import React, { useState } from 'react';
import axios from 'axios';
import { AuthAPIBase, apiResponse } from '../../Utility/SD';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../Context/AuthContext';

export default function LoginPage() {
    interface loginFormDataType {
        username: string,
        password: string,
    }

    interface errorText {
        username: string,
        password: string
    }

    const { authData, signIn } = useAuthContext();
    const [loginFormData, setLoginFormData] = useState<loginFormDataType>({
        username: "",
        password: ""
    });

    const [errorMessages, setErrorMessages] = useState<errorText>({
        username: "",
        password: ""
    })

    const navigate = useNavigate();
    

    var handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setLoginFormData({...loginFormData, [e.target.name]: e.target.value})
    }

    var validateForm = (): boolean => {
        var isValid: boolean = true;

        var newErrors: errorText = {
            username: '',
            password: ''
        }

        if (!loginFormData.username.length) {
            newErrors.username = 'Username is required';
            isValid = false;
        }

        if (!loginFormData.password.length) {
            newErrors.password = 'Password is required';
            isValid = false;
        } else if (loginFormData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
            isValid = false;
        }

        setErrorMessages(newErrors);

        return isValid;
    }

    var handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

        if (!validateForm()) return;

        await axios.post(AuthAPIBase + "/login", loginFormData)
            .then((response) => {
                signIn(response.data.result);
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
                <span className='validationText'>{errorMessages.username}</span>
                <label>Password:
                    <input 
                        placeholder="Password.."
                        name="password"
                        type='text'
                        onChange={handleChange} 
                    />
                </label>
                <span className='validationText'>{errorMessages.password}</span>

                <button className='submitBtn' type="submit">Login</button>
            </form>
        </div>
    )
}