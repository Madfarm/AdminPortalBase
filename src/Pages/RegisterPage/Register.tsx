import { useRegisterPage } from "./Register.hooks"

export default function RegisterPage() {
    const { handleChange } = useRegisterPage();

    return (
        <div className="AuthPages">
            <h1>Register</h1>

            <form>
                <label>Email:
                    <input 
                    placeholder="Email.."
                    name="email"
                    type="text"
                    onChange={handleChange}
                    />
                </label>
                <span className='validationText'></span>
                <label>Password:
                    <input 
                    placeholder="Password.."
                    name="password"
                    type="text"
                    onChange={handleChange}
                    />
                </label>
                <span className='validationText'></span>
                <label>Name:
                    <input 
                    placeholder="Name.."
                    name="name"
                    type="text"
                    onChange={handleChange}
                    />
                </label>
                <span className='validationText'></span>

                <button className='submitBtn' type="submit">Register</button>
            </form>
        </div>
    )
}