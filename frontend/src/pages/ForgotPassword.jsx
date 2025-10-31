import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

const ForgotPassword = () => {
  // Steps: 1 = Email → 2 = Code → 3 = Reset Password
  const [step, setStep] = useState(1);

  // Form states
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // UI states
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // -------------------------------------
  // Step 1: Send verification code
  // -------------------------------------
  const handleSendCode = async () => {
    if (!email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      /**
       * API: POST /api/auth/forgot-password
       * Body: { email: string }
       * Purpose: Sends a 6-digit verification code to user's email.
       */

      // await fetch("/api/auth/forgot-password", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ email }),
      // });

      // For now: mock behavior
      setTimeout(() => {
        setLoading(false);
        setStep(2);
        setMessage(`Verification code sent to ${email}`);
      }, 1000);
    } catch (error) {
      setLoading(false);
      setMessage("Something went wrong. Please try again.");
    }
  };

  // -------------------------------------
  // Step 2: Verify code
  // -------------------------------------
  const handleVerifyCode = async () => {
    if (!code.trim()) {
      setMessage("Please enter the verification code.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      /**
       * API: POST /api/auth/verify-reset-code
       * Body: { email: string, code: string }
       * Purpose: Validates the code sent to user's email.
       */

      // await fetch("/api/auth/verify-reset-code", { ... });

      // Mock success
      setTimeout(() => {
        setLoading(false);
        setStep(3);
        setMessage("Code verified. You can now reset your password.");
      }, 1000);
    } catch (error) {
      setLoading(false);
      setMessage("Invalid or expired code.");
    }
  };

  // -------------------------------------
  // Step 3: Reset password
  // -------------------------------------
  const handleResetPassword = async () => {
    if (!newPassword || !confirmPassword) {
      setMessage("Please fill in all password fields.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      /**
       * API: POST /api/auth/reset-password
       * Body: { email: string, newPassword: string }
       * Purpose: Updates user's password in the database.
       */

      // await fetch("/api/auth/reset-password", { ... });

      // Mock success
      setTimeout(() => {
        setLoading(false);
        setMessage("✅ Password reset successful! You can now log in.");
        setStep(1);
        setEmail("");
        setCode("");
        setNewPassword("");
        setConfirmPassword("");
      }, 1000);
    } catch (error) {
      setLoading(false);
      setMessage("Failed to reset password. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-md shadow-md p-6 rounded-2xl">
        <CardHeader>
          <h2 className="text-2xl font-semibold text-center text-gray-800">
            {step === 1 && "Forgot Password"}
            {step === 2 && "Verify Email Code"}
            {step === 3 && "Reset Password"}
          </h2>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* STEP 1 - Enter Email */}
          {step === 1 && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                />
              </div>
              <Button
                onClick={handleSendCode}
                className="w-full"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Verification Code"}
              </Button>
            </>
          )}

          {/* STEP 2 - Enter Code */}
          {step === 2 && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Enter 6-Digit Code
                </label>
                <Input
                  type="text"
                  placeholder="123456"
                  maxLength={6}
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="tracking-widest text-center text-lg"
                  disabled={loading}
                />
              </div>
              <Button
                onClick={handleVerifyCode}
                className="w-full"
                disabled={loading}
              >
                {loading ? "Verifying..." : "Verify Code"}
              </Button>

              <Button
                variant="ghost"
                className="w-full text-sm text-gray-500"
                onClick={() => setStep(1)}
                disabled={loading}
              >
                Change Email
              </Button>
            </>
          )}

          {/* STEP 3 - Reset Password */}
          {step === 3 && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  New Password
                </label>
                <Input
                  type="password"
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  disabled={loading}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <Input
                  type="password"
                  placeholder="Re-enter new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  disabled={loading}
                />
              </div>

              <Button
                onClick={handleResetPassword}
                className="w-full"
                disabled={loading}
              >
                {loading ? "Resetting..." : "Reset Password"}
              </Button>
            </>
          )}

          {/* Message / Feedback */}
          {message && (
            <p
              className={`text-center text-sm mt-2 ${
                message.includes("✅") ? "text-green-600" : "text-gray-600"
              }`}
            >
              {message}
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ForgotPassword;
