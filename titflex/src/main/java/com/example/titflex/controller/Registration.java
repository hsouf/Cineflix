package com.example.titflex.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.titflex.model.Movie;
import com.example.titflex.model.RegistrationRequest;
import com.example.titflex.service.MovieService;
import com.example.titflex.service.RegistrationService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping(path = "/api")
@AllArgsConstructor
public class Registration {

	@Autowired
	private RegistrationService registrationService;
	
	@PostMapping("/registration")
	public String register(@RequestBody RegistrationRequest request) {
		return registrationService.register(request);
	}
	
	@GetMapping("/test")
	public String test() {
		return "This is a test";
	}
	
	@GetMapping(path = "/confirm")
    public String confirm(@RequestParam("token") String token) throws Exception {
        return registrationService.confirmToken(token);
    }
	
	@Autowired
	private MovieService movieService;
	
	@GetMapping("/movies")
	public List<Movie> movies(){
		return movieService.getAllMovies();
	}
}
