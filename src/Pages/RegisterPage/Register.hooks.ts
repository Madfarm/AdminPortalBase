import { ChangeEvent, ReactHTMLElement, useState } from "react"

export const useRegisterPage = () => {
    const[registerForm, setRegisterForm] = useState<RegisterFormType>({
        name: "",
        email: "",
        password: ""
    });



    var handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setRegisterForm({...registerForm, [name]: value});
    } 

    return { handleChange };
}