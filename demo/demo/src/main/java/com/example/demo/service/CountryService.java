package com.example.demo.service;

import com.example.demo.dto.CountryDTO;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class CountryService {

    private final RestTemplate restTemplate = new RestTemplate();

    private List<CountryDTO> cache = new ArrayList<>();
    private long lastFetchTime = 0;

    public List<CountryDTO> getCountries() {

        long now = System.currentTimeMillis();

        // refresh every 10 minutes
        if (cache.isEmpty() || (now - lastFetchTime) > 600000) {

            String url = "https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags";

            List<Map<String,Object>> response =
                    restTemplate.getForObject(url, List.class);

            cache = response.stream().map(country -> {

                CountryDTO dto = new CountryDTO();

                Map nameMap = (Map) country.get("name");
                dto.setName((String) nameMap.get("common"));

                List capitalList = (List) country.get("capital");
                dto.setCapital(capitalList != null ? (String) capitalList.get(0) : "N/A");

                dto.setRegion((String) country.get("region"));

                dto.setPopulation(((Number) country.get("population")).longValue());

                Map flags = (Map) country.get("flags");
                dto.setFlag((String) flags.get("png"));

                return dto;

            }).toList();

            lastFetchTime = now;
        }

        return cache;
    }

}