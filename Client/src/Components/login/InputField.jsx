import { FaEye, FaEyeSlash } from "react-icons/fa";

function InputField({
  label,
  type,
  placeholder,
  value,
  onChange,
  showPassword,
  togglePassword,
}) {
  return (
    <div className="mb-5">
      <label className="block mb-2 text-sm font-semibold text-navy">
        {label}
      </label>

      <div className="relative">

        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
        />

        {togglePassword && (
          <button
            type="button"
            onClick={togglePassword}
            className="absolute right-4 top-4 text-gray-500"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}

      </div>
    </div>
  );
}

export default InputField;