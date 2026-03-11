import { useEffect, useState } from "react"
import { fetchCountries } from "./services/api"
import type { Country } from "./types/Country"
import CountryTable from "./componenets/CountryTable"
import CountryModal from "./componenets/CountryModal"

function App() {

  const [countries, setCountries] = useState<Country[]>([])
  const [search, setSearch] = useState("")
  const [selected, setSelected] = useState<Country | null>(null)

  useEffect(() => {
    loadCountries()
  }, [search])

  const loadCountries = async () => {
    const data = await fetchCountries(search)
    setCountries(data)
  }

  return (

    <div style={{ padding: "20px" }}>

      <h1>Countries</h1>

      <input
        placeholder="Search country..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "20px", padding: "8px" }}
      />

      <CountryTable
        countries={countries}
        onSelect={setSelected}
      />

      <CountryModal
        country={selected}
        onClose={() => setSelected(null)}
      />

    </div>
  )
}

export default App