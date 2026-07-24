"use client"
import Link from "next/link";
import Dashboard from "../dashboard/page";
export default function Signup() {
  const handleSubmit = (e) => {
    try {
      alert("Sign up submitted!");
    } catch (error) {}
  };

  return (
    <div>
      <div className=" flex justify-center p-3 text-amber-600 gap-4">
        <div className="bg-amber-500 rounded-3xl px-4 text-black py-1">
          <button onClick={e=>handleSubmit(e)}>SignUp</button>
        </div>
      </div>
      <Link href="dashboard">Dashboard</Link>
    </div>
  );
}
