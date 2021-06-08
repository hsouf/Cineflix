package com.example.titflex.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.titflex.model.Movie;
import com.example.titflex.model.User;
import com.example.titflex.repository.MovieRepository;
import com.example.titflex.repository.UserRepository;

@Service
public class MovieService {

	@Autowired
	MovieRepository movieRepository;
	
	@Autowired
	UserRepository userRepository;
	
	public List<Movie> getAllMovies() {
		 return movieRepository.findAll();
	}
	
	public List<String> moviesByRoom(int id){
		return movieRepository.moviesByRoom(id);
	}

	public List<User> usersByRoom(int roomId) {
		
		return userRepository.getAllUsers(roomId);
	}
}
