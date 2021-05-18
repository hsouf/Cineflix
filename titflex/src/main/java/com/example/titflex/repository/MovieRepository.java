package com.example.titflex.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.titflex.model.Movie;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Integer>{

	
}
