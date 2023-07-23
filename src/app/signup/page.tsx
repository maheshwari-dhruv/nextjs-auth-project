"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function SignUpPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    username: "",
    email: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(true);
  const [loading, setLoading] = React.useState(false);

  const onSignUp = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Sign Up Success.", response.data);
      router.push("/login");
    } catch (error: any) {
      console.error("Sign Up Failed", error.message);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    }
  }, [user]);

  return !loading ? (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div>
          <div className="flex justify-center w-full px-6 py-3 mb-10 font-semibold text-black bg-white border-2 border-white">
            <h1>Sign Up Form</h1>
          </div>
          <div className="flex-1 w-full mt-10">
            <div className="max-w-xs mx-auto">
              <input
                className="w-full px-6 py-3 text-sm font-medium text-white placeholder-white bg-transparent border-2 border-white focus:outline-none focus:bg-transparent"
                type="text"
                placeholder="Username"
                id="username"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
              <input
                className="w-full px-6 py-3 mt-5 text-sm font-medium text-white placeholder-white bg-transparent border-2 border-white focus:outline-none focus:bg-transparent"
                type="email"
                placeholder="Email"
                id="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
              <input
                className="w-full px-6 py-3 mt-5 text-sm font-medium text-white placeholder-white bg-transparent border-2 border-white focus:outline-none focus:bg-transparent"
                type="password"
                placeholder="Password"
                id="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
              <button
                className="flex items-center justify-center w-full py-4 mt-5 font-semibold tracking-wide text-white transition-all duration-300 ease-in-out bg-transparent border-2 border-white hover:bg-white hover:text-black focus:shadow-outline focus:outline-none"
                onClick={onSignUp}
              >
                <svg
                  className="w-6 h-6 -ml-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <path d="M20 8v6M23 11h-6" />
                </svg>
                <span className="ml-3">
                  {buttonDisabled ? "No SignUp" : "Sign Up"}
                </span>
              </button>
            </div>
          </div>
          <div className="flex justify-center mt-6 text-white">
            <p>
              Already a user? <Link href="/login">Login Here</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div>
          <h1>Processing</h1>
        </div>
      </div>
    </>
  );
}
