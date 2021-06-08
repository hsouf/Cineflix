package com.example.titflex.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.titflex.model.Movie;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Integer>{

	@Query(value = "select M.name from movie M, room R, watchlistmovies W where R.ID = :roomID and W.refWatchList = R.ref_watchlist and W.refMovie = M.ID;",
			nativeQuery = true)
	List<String> moviesByRoom(@Param("roomID") int roomID);
}
