import { FaFileSignature } from "react-icons/fa";

function LoginBanner() {
  return (
    <div className="hidden lg:flex flex-col justify-center bg-primary text-white p-16">
      <FaFileSignature className="text-6xl mb-8" />

      <h1 className="text-5xl font-bold leading-tight">
        Welcome to
        <br />
        DocuFlow
      </h1>

      <p className="mt-8 text-lg text-blue-100 leading-8">
        Login securely using your registered mobile number and OTP.
      </p>
    </div>
  );
}

export default LoginBanner;
