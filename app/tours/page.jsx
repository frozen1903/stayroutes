const tours=[
  'Bosphorus Cruise',
  'Old City Tour',
  'Cappadocia Tour'
]

export default function Tours(){
  return(
    <div className="min-h-screen p-10 max-w-6xl mx-auto">
      <h1 className="text-5xl font-bold mb-10">Popular Tours</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {tours.map((tour,index)=>(
          <div key={index} className="card">
            <h2 className="text-3xl font-bold mb-5">{tour}</h2>

            <a href="https://wa.me/905555555555" className="bg-yellow-500 text-black px-6 py-3 rounded-xl inline-block">
              Book Tour
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}