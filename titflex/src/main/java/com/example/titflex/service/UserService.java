package com.example.titflex.service;

import java.time.LocalDateTime;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.titflex.model.ConfirmationToken;
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
	
	@Autowired
	private ConfirmationTokenService confirmationTokenService;
	
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
		
			// Token Generation
			String token = UUID.randomUUID().toString();
			
			ConfirmationToken confirmationToken = new ConfirmationToken(token,
															LocalDateTime.now(),
															LocalDateTime.now().plusMinutes(15),
															user
														); 
			
			confirmationTokenService.saveConfirmationToken(confirmationToken);
			
		return token;
	}
	
	 public int enableAppUser(String email) {
	        return userRepository.enableAppUser(email);
	 }

}
