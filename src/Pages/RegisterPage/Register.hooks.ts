import { ChangeEvent, ReactHTMLElement, useState } from "react"

export const useRegisterPage = () => {
    const [registerForm, setRegisterForm] = useState<RegisterFormType>({
        name: "",
        email: "",
        password: ""
    });

    const [registerErrorMessages, setRegisterErrorMessages] = useState<RegisterErrorText>({
        email: '',
        password: '',
        name: ''
    })



    var handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setRegisterForm({...registerForm, [name]: value});

        console.log(registerForm);
    } 

    return { handleChange };
}