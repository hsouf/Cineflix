package com.example.titflex.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.titflex.model.User;
import com.example.titflex.repository.UserRepository;

@Service
public class FriendsService {

	@Autowired
	private UserRepository repository;
	
	public List<User> myUsers(int id) {
		return repository.allFriends(id);
	}
}
