package com.example.titflex.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.titflex.model.User;
import com.example.titflex.repository.UserRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserService implements UserDetailsService{

	private final static String USER_NOT_FOUND_MSG = "user with email %s not found";
	@Autowired
	private UserRepository userRepository;
	private final BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
	
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		return userRepository.findByEmail(email)
				.orElseThrow(()-> new UsernameNotFoundException(
													String.format(USER_NOT_FOUND_MSG, email)));
	}
	
	public String signUp(User user) {
		System.out.println("USER : "+user.getEmail());
		
			boolean userExists = userRepository.findByEmail(user.getEmail()).isPresent();
			
			if(userExists)
				throw new IllegalStateException("Email already taken!");
			
			String encodedPassword = bCryptPasswordEncoder.encode(user.getPassword());
		
			user.setPassword(encodedPassword);
		
			userRepository.save(user);
		
		
		return "It Works !! ";
	}

}
