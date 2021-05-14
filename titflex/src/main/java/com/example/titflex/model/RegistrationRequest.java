package com.example.titflex.model;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class RegistrationRequest {
	
	private String username;
	private String password;
	private String email;
	private String pays;
	private String ville;

	public RegistrationRequest(String username, String password, String email, String pays, String ville) {
		super();
		this.username = username;
		this.password = password;
		this.email = email;
		this.pays = pays;
		this.ville = ville;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPays() {
		return pays;
	}

	public void setPays(String pays) {
		this.pays = pays;
	}

	public String getVille() {
		return ville;
	}

	public void setVille(String ville) {
		this.ville = ville;
	}

	@Override
	public String toString() {
		return "RegistrationRequest [username=" + username + ", password=" + password + ", email=" + email + ", pays="
				+ pays + ", ville=" + ville + "]";
	}
	
	
	
}
