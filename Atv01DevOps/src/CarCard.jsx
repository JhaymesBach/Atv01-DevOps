export default function CarCard({ car }) {
  return (
    <div className="card">
      <div className="image-area">
        <img src={car.image} alt={car.nome} />
      </div>

      <div className="card-content">
        <h2>{car.nome}</h2>
        <p>Ano: {car.ano}</p>
        <p className="preco">R$ {car.preco}</p>
      </div>
    </div>
  )
}