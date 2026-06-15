package com.example.weather.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.weather.service.WeatherService;

@Controller
public class RequestHandler {

    private final WeatherService weatherService;

    RequestHandler(WeatherService weatherService) {
        this.weatherService = weatherService;
    }

    @PostMapping("/sampleRequest")
    public ResponseEntity<?> sampleResponse(@RequestBody String requestBody){
        System.out.println("Request Body:"+requestBody);
        weatherService.printResponse();

        return null;
    }
}
