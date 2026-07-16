import { useState } from "react";

import API from "../../api/axios";

import InputField from "./InputField";

function StaffLogin() {

  const [employeeId,setEmployeeId]=useState("");

  const [password,setPassword]=useState("");

  const login=async()=>{

    try{

      const res=await API.post("/auth/staff-login",{

        employeeId,

        password,

      });

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "role",
        res.data.user.role
      );

      window.location.href="/staff";

    }catch(err){

      alert(err.response.data.message);

    }

  };

  return(

    <div className="space-y-6">

      <InputField

        label="Employee ID"

        type="text"

        value={employeeId}

        onChange={(e)=>setEmployeeId(e.target.value)}

      />

      <InputField

        label="Password"

        type="password"

        value={password}

        onChange={(e)=>setPassword(e.target.value)}

      />

      <button

        onClick={login}

        className="btn-primary w-full"

      >

        Login

      </button>

    </div>

  );

}

export default StaffLogin;