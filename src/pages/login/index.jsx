import LoginForm from "@/components/login/LoginForm"
import RegistrationForm from "@/components/login/RegisterForm"
import React, { useState } from "react"

function Login() {
  const [activeTab, setActiveTab] = useState("login")

  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }
  return (
    <>
      <div className="flex justify-center">
        <button
          className={`px-4 py-2 ${
            activeTab === "login" ? "bg-blue-500" : "bg-gray-200"
          } mr-2 rounded-tl-md rounded-bl-md`}
          onClick={() => handleTabChange("login")}
        >
          Login
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === "register" ? "bg-blue-500" : "bg-gray-200"
          } rounded-tr-md rounded-br-md`}
          onClick={() => handleTabChange("register")}
        >
          Register
        </button>
      </div>
      {activeTab === "login" ? (
        <LoginForm tab={setActiveTab} />
      ) : (
        <RegistrationForm tab={setActiveTab} />
      )}
    </>
  )
}

export default Login
