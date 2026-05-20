export default function Navbar(){
  return(
    <nav className="flex justify-between items-center p-5 fixed top-0 w-full bg-black/30 backdrop-blur-md z-50">
      <h1 className="text-2xl font-bold">StayRoute</h1>

      <div className="flex gap-5 text-sm">
        <a href="/">Home</a>
        <a href="/transfer">Transfer</a>
        <a href="/services">Services</a>
        <a href="/tours">Tours</a>
      </div>
    </nav>
  )
}