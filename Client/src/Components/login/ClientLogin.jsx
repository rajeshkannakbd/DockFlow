import { useState } from "react";

import API from "../../api/axios";

import InputField from "./InputField";
import OtpInput from "./OtpInput";

function ClientLogin() {

  const [mobile, setMobile] = useState("");

  const [otp, setOtp] = useState("");

  const [otpSent, setOtpSent] = useState(false);

  const sendOtp = async () => {

    try {

      const res = await API.post("/auth/send-otp", {
        mobilenumber: mobile,
      });

      alert(res.data.message);

      console.log("OTP:", res.data.otp);

      setOtpSent(true);

    } catch (err) {

      alert(err.response.data.message);

    }

  };

  const verifyOtp = async () => {

    try {

      const res = await API.post("/auth/client-login", {
        mobilenumber: mobile,
        otp,
      });

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "role",
        "client"
      );

      window.location.href="/client";

    } catch (err) {

      alert(err.response.data.message);

    }

  };

  return (

    <div className="space-y-6">

      <InputField
        label="Mobile Number"
        type="text"
        placeholder="9876543210"
        value={mobile}
        onChange={(e)=>setMobile(e.target.value)}
      />

      {!otpSent ? (

        <button
          onClick={sendOtp}
          className="btn-primary w-full"
        >
          Send OTP
        </button>

      ) : (

        <>

          <OtpInput
            value={otp}
            onChange={(e)=>setOtp(e.target.value)}
          />

          <button
            onClick={verifyOtp}
            className="btn-primary w-full"
          >
            Verify OTP
          </button>

        </>

      )}

    </div>

  );

}

export default ClientLogin;