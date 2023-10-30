export default function RegisterPage() {
    return (
        <div className="AuthPages">
            <h1>Register</h1>

            <form>
                <label>Email:
                    <input placeholder="Email.."/>
                </label>
                <p className='validationText'></p>
                <label>Password:
                    <input placeholder="Password.."/>
                </label>
                <p className='validationText'></p>
                <label>Name:
                    <input placeholder="Name.."/>
                </label>
                <p className='validationText'></p>

                <button className='submitBtn' type="submit">Register</button>
            </form>
        </div>
    )
}