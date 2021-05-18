package com.example.titflex.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

@Entity
public class Movie {

	@SequenceGenerator(
			name = "movie_sequence",
			sequenceName = "movie_sequence",
			allocationSize = 1
	)
	@Id
	@GeneratedValue(
			strategy = GenerationType.SEQUENCE,
			generator = "movie_sequence"
	)
	private int ID;
	@Column(nullable = false)
	private String name;
	private String synopsis;
	private String path;
	private String category;
	private int watchTime;
	
	
	
	public Movie() {
		
	}

	public Movie(String name, String synopsis, String path, String category, int watchTime) {
		super();
		this.name = name;
		this.synopsis = synopsis;
		this.path = path;
		this.category = category;
		this.watchTime = watchTime;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSynopsis() {
		return synopsis;
	}

	public void setSynopsis(String synopsis) {
		this.synopsis = synopsis;
	}

	public String getPath() {
		return path;
	}

	public void setPath(String path) {
		this.path = path;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public int getWatchTime() {
		return watchTime;
	}

	public void setWatchTime(int watchTime) {
		this.watchTime = watchTime;
	}

}
