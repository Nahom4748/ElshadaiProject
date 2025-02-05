// components/RequestPasswordReset.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import passwordService from "../../Services/passwordService";
function RequestPasswordReset() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRequestReset = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await passwordService.requestPasswordReset(email);
      setMessage(response.message);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600">
      <div className="container max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-3xl font-bold text-gray-800 text-center mb-4">
          Request Password Reset
        </h3>
        <form onSubmit={handleRequestReset} className="space-y-4">
          <div>
            <label className="block text-gray-600 mb-2">Email</label>
            <input
              type="email"
              placeholder="Your email address"
              className="w-full p-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {message && <p className="text-green-500">{message}</p>}
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="w-full py-2 bg-blue text-white rounded flex items-center justify-center"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default RequestPasswordReset;
