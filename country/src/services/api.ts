import axios from "axios"
import type { Country } from "../types/Country"

const API_URL = "http://localhost:8080/api/countries"

export const fetchCountries = async (search: string = ""): Promise<Country[]> => {

  const response = await axios.get<Country[]>(API_URL, {
    params: { search }
  })

  return response.data
}