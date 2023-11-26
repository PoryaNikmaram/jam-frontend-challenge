import LoginForm from '../features/authentication/LoginForm'
import LoginImg from '../ui/LoginImg'

function Login() {
  return (
    <div className=" grid grid-cols-5 h-screen overflow-hidden">
      <LoginForm />
      <LoginImg />
    </div>
  )
}

export default Login
