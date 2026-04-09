import CarCard from "./CarCard"
import Cars from "./Cars"
import "./App.css"
import { useState } from "react"

export default function App() {
  const [busca, setBusca] = useState("")
  return (
    <div>
      <header className="header">
      <h1 >ZOC AUTOS</h1>
      </header>

      <input
        type="text"
        placeholder="Buscar carro..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />

      {Cars
        .filter(car =>
          car.nome.toLowerCase().includes(busca.toLowerCase())
        )
        .map(car => (
          <CarCard key={car.id} car={car} />
          ))}           


<footer className="footer">
  <p>© 2026 ZOC AUTOS</p>
</footer>
    </div>
  )
}


