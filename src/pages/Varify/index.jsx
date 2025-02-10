import { useState } from "react";

const Verify=()=> {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const handleVerify = () => {
    if (otp.length !== 6) {
      setError("Please enter a valid 6-digit OTP.");
    } else {
      setError("");
      alert("OTP Verified Successfully!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[300px] bg-gray-100 p-4">
      <div className="w-full max-w-sm bg-white shadow-lg p-6 rounded-lg">
        <h2 className="text-center text-xl font-semibold">Verify OTP</h2>
        <p className="text-gray-600 text-sm text-center mt-2"> OTP sent to  gkstar434@gmail.com</p>
        <input
          type="text"
          maxLength={6}
          placeholder="Enter OTP"
          className="w-full mt-4 p-2 border border-gray-300 rounded-md text-center text-xl tracking-widest"
          value={otp}
          onChange={(e) => setOtp(e.target.value.replace(/[^0-9]/g, ""))}
        />
        {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}
        <button className="btn-org btn-lg w-full mt-4 bg-blue-500 text-white py-2 rounded-md transition-all duration-300" onClick={handleVerify}>Verify</button>
        <p className="text-center text-sm text-gray-500 mt-2">
          Didn’t receive OTP? <span className="text-blue-500 cursor-pointer link">Resend</span>
        </p>
      </div>
    </div>
  );
}
export default Verify