package com.example.titflex.service;

import java.time.LocalDateTime;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.titflex.model.ConfirmationToken;
import com.example.titflex.repository.ConfirmationTokenRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class ConfirmationTokenService {

	@Autowired
	private ConfirmationTokenRepository confirmationTokenRepository;
	
	public void saveConfirmationToken(ConfirmationToken token) {
		confirmationTokenRepository.save(token);
	}
	
	public ConfirmationToken getToken(String token) {
		Optional<ConfirmationToken> result = confirmationTokenRepository.findByToken(token);
		if(result.isPresent()) {
			return result.get();
		}
		return null;
	}
	
	public int setConfirmedAt(String token) {
        return confirmationTokenRepository.updateConfirmedAt(
                token, LocalDateTime.now());
    }
}
