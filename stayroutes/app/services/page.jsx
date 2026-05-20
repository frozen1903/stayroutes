export default function HotelServices(){
  return(
    <div className="min-h-screen p-10 max-w-5xl mx-auto">
      <h1 className="text-5xl font-bold mb-10">Hotel Services</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <a href="https://wa.me/905555555555" className="card">Need Towels</a>
        <a href="https://wa.me/905555555555" className="card">Need Cleaning</a>
        <a href="https://wa.me/905555555555" className="card">Call Reception</a>
      </div>
    </div>
  )
}