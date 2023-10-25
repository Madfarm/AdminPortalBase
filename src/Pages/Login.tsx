export default function LoginPage() {
    return (
        <div className="AuthPages">
            <h1>Login</h1>

            <form>
                <label>Username:
                    <input></input>
                </label>
                <label>Password:
                    <input></input>
                </label>

                <button type="submit">Login</button>
            </form>
        </div>
    )
}