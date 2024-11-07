import { useForm } from 'react-hook-form'
import { loginUserService } from '@/services/userServices'
import { useNavigate } from 'react-router-dom'
import '@/styles/form.css'
import logo from '@/assets/react.svg'

/* The `Login` component in the provided code snippet is a functional component in a React application.
It is responsible for rendering a login form where users can input their email and password to sign
in. Here is a breakdown of what the component is doing: */
const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate()

    /**
     * The function onSubmit attempts to log in a user using a login service and navigates to the home page
     * upon successful authentication.
     */
    const onSubmit = async data => {
        try {
            const response = await loginUserService(data)
            if (response.status == 200) {
                navigate('/')
                console.log('Usuario autenticado exitosamente')
                /* `localStorage.setItem('token', response.data.token)` is storing the authentication
                token received from the login service in the browser's localStorage. This allows the
                token to be saved locally on the user's device, making it accessible even after the
                user closes the browser or refreshes the page. */
                localStorage.setItem('token', response.data.token)
                console.log(response.data.token)
            }
        } catch (error) {
            console.log('Ocurrio un error en Login', error)
        }
    }

    return (
        /* The code snippet you provided represents the JSX structure of the `Login` component in a
        React application. Let's break down what each part of the JSX code is doing: */
        <main className="form-signin w-100 m-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
                <img
                    className="mb-4"
                    src={logo}
                    alt=""
                    width={72}
                    height={57}
                />
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                <div className="form-floating">
                    <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        {...register('email')}
                    />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        {...register('password')}
                    />
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <button className="btn btn-primary w-100 py-2" type="submit">
                    Sign in
                </button>
                <p className="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
            </form>
        </main>

    )
}

export default Login