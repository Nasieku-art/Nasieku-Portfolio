import Link from "next/link";
import Signup from "../nav/page";

export default function Dashboard() {
  return (
    <div>
      <div className="text-rose-500 flex justify-center p-5">
        This is a Dashboaaaaaaaaaaaaaaard!
      </div>
      <Link href="signup" className="btn btn-warning">
        SignUp
      </Link>
    </div>
  );
}
