const items=[
  'Airport Transfer',
  'Room Service',
  'Tours',
  'Reception',
]

export default function Services(){
  return(
    <section className="grid md:grid-cols-4 gap-6 p-8 max-w-7xl mx-auto -mt-24 relative z-10">
      {items.map((item,index)=>(
        <div key={index} className="card">
          <h2 className="text-2xl font-bold mb-3">{item}</h2>
          <p className="text-gray-300">
            Premium guest experience module.
          </p>
        </div>
      ))}
    </section>
  )
}