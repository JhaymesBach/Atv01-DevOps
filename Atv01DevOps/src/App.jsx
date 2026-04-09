import CarCard from "./CarCard"
import Cars from "./Cars"
import "./App.css"

export default function App() {
  return (
    <div>
      <h1>ZOC AUTOS</h1>

      {Cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  )
}


