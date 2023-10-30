export default function RegisterPage() {
    return (
        <div className="AuthPages">
            <h1>Register</h1>

            <form>
                <label>Email:
                    <input placeholder="Email.."/>
                </label>
                <span className='validationText'></span>
                <label>Password:
                    <input placeholder="Password.."/>
                </label>
                <span className='validationText'></span>
                <label>Name:
                    <input placeholder="Name.."/>
                </label>
                <span className='validationText'></span>

                <button className='submitBtn' type="submit">Register</button>
            </form>
        </div>
    )
}