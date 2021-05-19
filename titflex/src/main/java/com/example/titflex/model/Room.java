package com.example.titflex.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;

@Entity
public class Room {
	
	@SequenceGenerator(
			name = "room_sequence",
			sequenceName = "room_sequence",
			allocationSize = 1
	)
	@Id
	@GeneratedValue(
			strategy = GenerationType.SEQUENCE,
			generator = "room_sequence"
	)
	private int id;
	@Column(nullable=false)
	private String name;
	private int maxUsers = 1;
	
	@Enumerated(EnumType.ORDINAL)
	private Visibility visibility;
	
	
	@OneToOne
	@JoinColumn(
				nullable = false,
				name = "ref_owner"
			)
	private User user;
	
	@OneToOne
	@JoinColumn(
				name = "ref_watchlist"
			)
	private Watchlist watchlist;

	
	public Room() {}
	
	public Room(String name, int maxUsers, Visibility visibility, User user, Watchlist watchlist) {
		super();
		this.name = name;
		this.maxUsers = maxUsers;
		this.visibility = visibility;
		this.user = user;
		this.watchlist = watchlist;
	}

	public int getId() {
		return id;
	}


	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getMaxUsers() {
		return maxUsers;
	}

	public void setMaxUsers(int maxUsers) {
		this.maxUsers = maxUsers;
	}

	public Visibility getVisibility() {
		return visibility;
	}

	public void setVisibility(Visibility visibility) {
		this.visibility = visibility;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Watchlist getWatchlist() {
		return watchlist;
	}

	public void setWatchlist(Watchlist watchlist) {
		this.watchlist = watchlist;
	}
	

}
