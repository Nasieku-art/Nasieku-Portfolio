"use client"
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto ">
    <nav className="flex items-center justify-between">

  <div>
 <Image
 src="/image/Nasieku Logo.png" 
        alt="Mary Nasieku" 
        width={200} 
        height={100}
 />
 </div>
 <div className="text-amber-50 flex item-center gap-5 -py-6">
     
        <button>
          About
        </button>
   

  <button>
    Projects
  </button>

  <button>
    Experience
  </button>

  <button>
    Contact
  </button>

  <button>
    Resume
  </button>
 
 </div>

    </nav>
    
    </div>
  );
}
