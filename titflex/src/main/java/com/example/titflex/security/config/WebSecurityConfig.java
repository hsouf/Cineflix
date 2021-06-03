package com.example.titflex.security.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.example.titflex.JWT.JWTAuthenticationFilter;
import com.example.titflex.repository.UserRepository;
import com.example.titflex.service.UserService;

import lombok.AllArgsConstructor;

@Configuration
@AllArgsConstructor
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter{

	@Autowired
	public UserRepository userRepository;
	@Bean
	public UserService userDetailsService() {
		return new UserService();
	}
	@Bean
	public BCryptPasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	

	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.csrf().disable()
        	.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
        	.and()
        	// add jwt filters (1. authentication, 2. authorization)
        	.addFilter(new JWTAuthenticationFilter(authenticationManager()))
        	.addFilter(new JWTAuthenticationFilter(authenticationManager()))
        	.authorizeRequests()
        // configure access rules
        	.antMatchers(HttpMethod.POST, "/login").permitAll()
        	.antMatchers("/api/*").permitAll()
        	.antMatchers("/api/video/stream/*/*").permitAll()
        	.anyRequest().authenticated();
		
		
		/*.csrf().disable()
				.authorizeRequests()
					.antMatchers("/api/registration").permitAll()
					.and().formLogin(); */
	}
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.authenticationProvider(authenticationProvider());
	}
	
	@Bean
	public DaoAuthenticationProvider authenticationProvider() {
		DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
		authProvider.setUserDetailsService(userDetailsService());
		authProvider.setPasswordEncoder(passwordEncoder());
		
		return authProvider;
	}
	
}
