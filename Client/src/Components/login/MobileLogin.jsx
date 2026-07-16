import InputField from "./InputField";

function MobileLogin({
  mobile,
  setMobile,
  loading,
  onContinue,
}) {
  return (
    <div className="space-y-6">

      <InputField
        label="Mobile Number"
        type="tel"
        placeholder="9876543210"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />

      <button
        type="button"
        onClick={onContinue}
        disabled={loading}
        className="btn-primary w-full"
      >
        {loading ? "Sending OTP..." : "Send OTP"}
      </button>

    </div>
  );
}

export default MobileLogin;