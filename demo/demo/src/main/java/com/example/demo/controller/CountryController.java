package com.example.demo.controller;

import com.example.demo.dto.CountryDTO;
import com.example.demo.service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/countries")
@CrossOrigin
public class CountryController {

    @Autowired
    private CountryService service;

    @GetMapping
    public List<CountryDTO> getCountries(
            @RequestParam(required = false) String search) {

        List<CountryDTO> countries = service.getCountries();

        if (search == null || search.isEmpty()) {
            return countries;
        }

        return countries.stream()
                .filter(c -> c.getName().toLowerCase()
                        .contains(search.toLowerCase()))
                .toList();
    }

}