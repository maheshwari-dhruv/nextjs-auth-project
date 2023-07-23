"use client";

export default function SignUpPage() {
  return (
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
              />
              <input
                className="w-full px-6 py-3 mt-5 text-sm font-medium text-white placeholder-white bg-transparent border-2 border-white focus:outline-none focus:bg-transparent"
                type="email"
                placeholder="Email"
              />
              <input
                className="w-full px-6 py-3 mt-5 text-sm font-medium text-white placeholder-white bg-transparent border-2 border-white focus:outline-none focus:bg-transparent"
                type="password"
                placeholder="Password"
              />
              <button className="flex items-center justify-center w-full py-4 mt-5 font-semibold tracking-wide text-white transition-all duration-300 ease-in-out bg-transparent border-2 border-white hover:bg-white hover:text-black focus:shadow-outline focus:outline-none">
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
                <span className="ml-3">Sign Up</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
