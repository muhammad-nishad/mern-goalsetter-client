import { useState } from "react"
import { FaSignInAlt } from "react-icons/fa"


const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const onChange = (e) => {
        console.log(e.target.value);
        setFormData({ ...formData, [e.target.name]: e.target.value })

    }
    const onSubmit = (e) => {
        e.preventDefault()
    }
    const { email, password } = formData
    return (
        <>
            <section className="heading">
                <h1>
                    <FaSignInAlt />Login
                </h1>
                <p>Login Page</p>
            </section>
            <section className="form" >
                <form onSubmit={onSubmit} >
                    <div className="form-group" >
                        <input type='text'
                            className="form-control"
                            id='email'
                            name="email"
                            value={email}
                            placeholder='Enter your email'
                            onChange={onChange} />
                    </div>
                    <div className="form-group" >
                        <input type='text'
                            className="form-control"
                            id='password'
                            name="password"
                            value={password}
                            placeholder='Enter your password'
                            onChange={onChange} />
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-block" >Submit</button>
                    </div>

                </form>

            </section>

        </>

    )
}
export default Login