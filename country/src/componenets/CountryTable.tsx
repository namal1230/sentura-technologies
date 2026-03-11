import type { Country } from "../types/Country"

interface Props {
  countries: Country[]
  onSelect: (country: Country) => void
}

function CountryTable({ countries, onSelect }: Props) {

  return (
    <table border={1} width="100%">
      <thead>
        <tr>
          <th>Flag</th>
          <th>Name</th>
          <th>Capital</th>
          <th>Region</th>
          <th>Population</th>
        </tr>
      </thead>

      <tbody>
        {countries.map((country, index) => (

          <tr
            key={index}
            onClick={() => onSelect(country)}
            style={{ cursor: "pointer" }}
          >

            <td>
              <img src={country.flag} width="40" />
            </td>

            <td>{country.name}</td>
            <td>{country.capital}</td>
            <td>{country.region}</td>
            <td>{country.population}</td>

          </tr>

        ))}
      </tbody>
    </table>
  )
}

export default CountryTable