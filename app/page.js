import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto flex justify-start">
    <div className="flex ">
<h1 className=" justify-center  text-teal-600  font-serif ">
  <div>
 <Image
 src="/image/Nasieku Logo.png" 
        alt="Mary Nasieku" 
        width={200} 
        height={100}
 />
 </div>
 <div className="text-amber-50 flex items-center gap-5">
      <div >
        <button>
          About
        </button>
      </div>
<div>
  <button>
    Projects
  </button>
</div>
<div>
  <button>
    Experience
  </button>
</div>
<div>
  <button>
    Contact
  </button>
</div>
<div>
  <button>
    Resume
  </button>
</div>
    </div>
</h1>
    </div>
    
    </div>
  );
}
