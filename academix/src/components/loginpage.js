import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(""); // State to handle errors

  // Predefined valid credentials
  const validUsers = {
    "testuser001@gmail.com": "Test@1234",
    "dummy.account42@gmail.com": "Dummy@5678",
    "tempuser.testing@gmail.com": "Temp@Pass99",
    "login.test.demo@gmail.com": "Login@7890",
    "user.mockdata@gmail.com": "Mock@Pass55",
  };

  // Temporary static OTP for testing
  const TEMP_OTP = "123456";

  // Handle login validation
  const handleLogin = (e) => {
    e.preventDefault();
    
    if (validUsers[email] && validUsers[email] === password) {
      console.log("Login successful, proceeding to OTP verification...");
      setError(""); // Clear any previous errors
      alert(`Use this OTP to continue: ${TEMP_OTP}`);
      setStep(2); // Proceed to OTP verification step
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  // Handle OTP verification
  const handleOTPVerification = (e) => {
    e.preventDefault();
    if (otp === TEMP_OTP) {
      alert("Login Successful! 🎉");
      navigate("/dashboard"); // Redirect to dashboard
    } else {
      setError("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">
          {step === 1 ? "Login" : "OTP Verification"}
        </h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>} {/* Error message */}

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

