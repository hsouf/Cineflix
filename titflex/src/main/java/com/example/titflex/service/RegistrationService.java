package com.example.titflex.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.titflex.model.RegistrationRequest;
import com.example.titflex.model.User;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class RegistrationService {
	
	
	private static UserService userService = new UserService();
	private static EmailValidator emailValidator = new EmailValidator();

	public static String register(RegistrationRequest request) {
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

}
