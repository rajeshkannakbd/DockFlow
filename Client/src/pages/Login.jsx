import LoginBanner from "../Components/login/LoginBanner";
import LoginForm from "../Components/login/LoginForm";

function Login() {

  return (

    <div className="min-h-screen grid lg:grid-cols-2">

      <LoginBanner />

      <div className="flex justify-center items-center p-10">

        <LoginForm />

      </div>

    </div>

  );

}

export default Login;