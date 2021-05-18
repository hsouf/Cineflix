package com.example.titflex.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.titflex.model.Movie;
import com.example.titflex.repository.MovieRepository;

@Service
public class MovieService {

	@Autowired
	MovieRepository movieRepository;
	
	public List<Movie> getAllMovies() {
		 return movieRepository.findAll();
	}
}
