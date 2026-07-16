import { useState } from "react";

import ClientLogin from "./ClientLogin";
import StaffLogin from "./StaffLogin";

function LoginForm() {

  const [role, setRole] = useState("client");

  return (

    <div className="w-full max-w-md bg-white rounded-3xl shadow-card p-8">

      <h2 className="text-4xl font-bold text-navy">

        DocuFlow Login

      </h2>

      <div className="flex mt-8 rounded-xl overflow-hidden border">

        <button
          onClick={() => setRole("client")}
          className={`flex-1 py-3 ${
            role === "client"
              ? "bg-primary text-white"
              : "bg-white"
          }`}
        >
          Client
        </button>

        <button
          onClick={() => setRole("staff")}
          className={`flex-1 py-3 ${
            role === "staff"
              ? "bg-primary text-white"
              : "bg-white"
          }`}
        >
          Staff
        </button>

      </div>

      <div className="mt-8">

        {role === "client" ? (
          <ClientLogin />
        ) : (
          <StaffLogin />
        )}

      </div>

    </div>
  );
}

export default LoginForm;