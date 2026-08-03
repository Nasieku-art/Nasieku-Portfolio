export default function Contact() {
  return (
    <main className="min-h-screen flex justify-center">
      <div className="w-full max-w-md ">
        <h1 className="text-5xl font-bold">Get in touch</h1>
        <p className=" text-sm mb-6">
          Reach out through any of the channels below.
        </p>

        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium">Email</p>
            <a
              href="mailto:nasiekunasiekumary77@gmail.com"
              className="text-sm text-teal-600 hover:underline"
            >
              nasiekunasiekumary77@gmail.com
            </a>
          </div>

          <div>
            <p className="text-sm font-medium">Phone</p>
            <a
              href="tel:+254701391756"
              className="text-sm text-teal-600 hover:underline"
            >
              +254701391756
            </a>
          </div>

          <div>
            <p className="text-sm font-medium">Location</p>
            <p className="text-sm">Nairobi, Kenya</p>
          </div>
        </div>
      </div>
      <div>
        
      </div>
    </main>
  );
}
