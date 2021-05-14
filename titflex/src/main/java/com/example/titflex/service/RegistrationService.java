package com.example.titflex.service;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.titflex.model.ConfirmationToken;
import com.example.titflex.model.RegistrationRequest;
import com.example.titflex.model.User;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class RegistrationService {
	
	@Autowired
	private UserService userService;
	@Autowired
	private EmailValidator emailValidator;
	@Autowired
	private ConfirmationTokenService confirmationTokenService;

	public  String register(RegistrationRequest request) {
		System.out.println(request);
		boolean isEmailValid = emailValidator.test(request.getEmail());
		
		if(!isEmailValid) {
			throw new IllegalStateException("Email not Valid !");
		}
		
		//System.out.println("isEmailValid : "+isEmailValid);
		return userService.signUp(
					new User(
							request.getUsername(), 
							request.getPassword(), 
							request.getEmail(), 
							request.getPays(), 
							request.getVille())
				);
	}
	
	@Transactional
	public String confirmToken(String token) throws Exception {
		ConfirmationToken confirmationToken = confirmationTokenService.getToken(token);
		
		if(confirmationToken == null)
			throw new Exception("Token not found !");
		
		if(confirmationToken.getConfirmedAt() != null)
			throw new Exception("Already confirmed !");
		
		LocalDateTime expiredAt = confirmationToken.getExpiresAt();
		
		if(expiredAt.isBefore(LocalDateTime.now()))
			throw new Exception("Token expired !");
		
		confirmationTokenService.setConfirmedAt(token);
		userService.enableAppUser(
                confirmationToken.getUser().getEmail());
		return "confirmed !";
	}

}
