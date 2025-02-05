import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState("");

  // Temporary Static OTP for Testing
  const TEMP_OTP = "123456";

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login successful, checking verification settings...");

    // Simulate Two-Step Verification
    alert(`Use this OTP to continue: ${TEMP_OTP}`);
    setStep(2);
  };

  const handleOTPVerification = (e) => {
    e.preventDefault();
    if (otp === TEMP_OTP) {
      alert("Login Successful! 🎉");
      navigate("/dashboard"); // Redirect to the dashboard
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

        {step === 1 && (
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-2 border rounded-lg focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-2 border rounded-lg focus:border-blue-500"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white w-full py-2 rounded-lg hover:bg-blue-700"
            >
              Login
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleOTPVerification}>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Enter OTP (123456)</label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                className="w-full p-2 border rounded-lg focus:border-blue-500"
                placeholder="Enter OTP"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white w-full py-2 rounded-lg hover:bg-blue-700"
            >
              Verify OTP
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
