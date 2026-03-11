import type { Country } from "../types/Country"

interface Props {
  country: Country | null
  onClose: () => void
}

function CountryModal({ country, onClose }: Props) {

  if (!country) return null

  return (

    <div style={overlayStyle}>

      <div style={modalStyle}>

        <h2>{country.name}</h2>

        <img src={country.flag} width="120" />

        <p><b>Capital:</b> {country.capital}</p>
        <p><b>Region:</b> {country.region}</p>
        <p><b>Population:</b> {country.population}</p>

        <button onClick={onClose}>Close</button>

      </div>

    </div>
  )
}

const overlayStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}

const modalStyle: React.CSSProperties = {
  background: "white",
  padding: "20px",
  borderRadius: "10px"
}

export default CountryModal