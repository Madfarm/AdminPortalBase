import { useLoginPage } from "./Login.hooks"

/**
 * Responsible for rendering the LoginPage component
 * @returns The template for the login page
 */
export default function LoginPage() {
    const {handleChange, handleSubmit, errorMessages} = useLoginPage();

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