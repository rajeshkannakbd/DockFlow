import { useState } from "react";
import OtpInput from "./OtpInput";

function OtpLogin({ mobile, onVerify }) {
  const [otp, setOtp] = useState("");

  return (
    <div className="space-y-6">

      <div className="bg-green-50 border border-green-200 rounded-xl p-4">
        OTP sent to {mobile}
      </div>

      <OtpInput
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />

      <button
        type="button"
        onClick={() => onVerify(otp)}
        className="btn-primary w-full"
      >
        Verify OTP
      </button>

    </div>
  );
}

export default OtpLogin;