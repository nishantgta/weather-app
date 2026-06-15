package com.example.weather.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class WeatherService {

    public void printResponse(){
        String uri="https://api.open-meteo.com/v1/forecast?latitude=28.66&longitude=77.45&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m";
        RestTemplate restTemplate = new RestTemplate();
        String result = restTemplate.getForObject(uri, String.class);
        System.out.println("Result of weather API");
        System.out.println(result);
    }
}
