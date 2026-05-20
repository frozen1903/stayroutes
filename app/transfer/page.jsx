export default function Transfer(){
  return(
    <div className="min-h-screen p-10 max-w-3xl mx-auto">
      <h1 className="text-5xl font-bold mb-10">Airport Transfer</h1>

      <div className="grid gap-5">
        <input className="bg-white/10 p-4 rounded-xl" placeholder="Full Name"/>
        <input className="bg-white/10 p-4 rounded-xl" placeholder="Flight Number"/>
        <input className="bg-white/10 p-4 rounded-xl" placeholder="Guests"/>

        <a href="https://wa.me/905555555555" className="bg-yellow-500 text-black text-center p-4 rounded-xl font-bold">
          Send Via WhatsApp
        </a>
      </div>
    </div>
  )
}