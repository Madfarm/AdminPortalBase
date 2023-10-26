export default function RegisterPage() {
    return (
        <div className="AuthPages">
            <h1>Register</h1>

            <form>
                <label>Email:
                    <input placeholder="Email.."></input>
                </label>
                <label>Password:
                    <input placeholder="Password.."></input>
                </label>
                <label>Name:
                    <input placeholder="Password.."></input>
                </label>

                <button type="submit">Login</button>
            </form>
        </div>
    )
}