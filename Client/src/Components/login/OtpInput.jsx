function OtpInput({
  value,
  onChange,
}) {
  return (
    <input
      type="text"
      maxLength={6}
      value={value}
      onChange={onChange}
      placeholder="Enter OTP"
      className="w-full text-center tracking-[12px] text-2xl border rounded-xl py-4 focus:outline-none focus:ring-2 focus:ring-primary"
    />
  );
}

export default OtpInput;