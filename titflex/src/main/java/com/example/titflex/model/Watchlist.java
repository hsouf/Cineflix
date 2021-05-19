package com.example.titflex.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;

@Entity
public class Watchlist {

	@SequenceGenerator(
			name = "watchlist_sequence",
			sequenceName = "watchlist_sequence",
			allocationSize = 1
	)
	@Id
	@GeneratedValue(
			strategy = GenerationType.SEQUENCE,
			generator = "watchlist_sequence"
	)
	private int id;

	@OneToOne
	@JoinColumn(
				nullable = false,
				name = "ref_owner"
			)
	private User user;

	public Watchlist() {
		
	}

	public Watchlist(User user) {
		super();
		this.user = user;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
	public int getId() {
		return this.id;
	}
	
	
}
