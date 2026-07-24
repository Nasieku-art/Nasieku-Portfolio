import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto">
    <main>
<h1 className="flex justify-center  text-teal-600  text-3xl font-serif ">
  <div>
 <Image
 src="/image/MN Logo.svg" 
        alt="Mary Nasieku" 
        width={500} 
        height={300}
 />
 </div>
</h1>
    </main>
    </div>
  );
}
