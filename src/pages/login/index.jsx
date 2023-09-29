import LoginForm from "@/components/login/LoginForm"
import RegistrationForm from "@/components/login/RegisterForm"
import React, { useState } from "react"

function Login() {
  const [activeTab, setActiveTab] = useState("login")

  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }

  return (
    <div className="min-h-screen bg-EnglishViolet flex items-center justify-center">
      <div className="bg-OxfordBlue p-8 rounded-lg shadow-md w-full max-w-xl">
        {" "}
        {/* Increase the width */}
        <h2 className="text-DarkWhite text-2xl font-Poppins text-center mb-6">
          Welcome !
        </h2>
        {activeTab === "login" ? (
          <LoginForm tab={setActiveTab} />
        ) : (
          <RegistrationForm tab={setActiveTab} />
        )}
      </div>
    </div>
  )
}

export default Login
