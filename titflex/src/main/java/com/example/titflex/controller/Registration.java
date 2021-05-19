package com.example.titflex.controller;

import static com.auth0.jwt.algorithms.Algorithm.HMAC512;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.auth0.jwt.JWT;
import com.example.titflex.JWT.JwtProperties;
import com.example.titflex.model.Movie;
import com.example.titflex.model.RegistrationRequest;
import com.example.titflex.model.Room;
import com.example.titflex.model.User;
import com.example.titflex.repository.UserRepository;
import com.example.titflex.service.MovieService;
import com.example.titflex.service.RegistrationService;
import com.example.titflex.service.RoomService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping(path = "/api")
@AllArgsConstructor
public class Registration {

	@Autowired
	private RegistrationService registrationService;
	
	@PostMapping("/registration")
	public String register(@RequestBody RegistrationRequest request) {
		return registrationService.register(request);
	}
	
	@GetMapping("/test")
	public String test() {
		return "This is a test";
	}
	
	@GetMapping(path = "/confirm")
    public String confirm(@RequestParam("token") String token) throws Exception {
        return registrationService.confirmToken(token);
    }
	
	@Autowired
	private MovieService movieService;
	
	@GetMapping("/movies")
	public List<Movie> movies(){
		return movieService.getAllMovies();
	}
	
	@Autowired
	private RoomService roomService;
	
	@Autowired
	private UserRepository userRepository;
	
	@RequestMapping(value = "/create_room", method = RequestMethod.POST)
	public Room createRoom(@RequestBody Room room, @RequestHeader("Authorization") String jwtToken) {
		System.out.println(jwtToken);
		String token = jwtToken.replace(JwtProperties.TOKEN_PREFIX,"");
		int user_id = 0;
		System.out.println(token);
		User principal;
		if (token != null) {
            // parse the token and validate it
            String userName = JWT.require(HMAC512(JwtProperties.SECRET.getBytes()))
                    .build()
                    .verify(token)
                    .getSubject();

            System.out.println(userName);
            // Search in the DB if we find the user by token subject (username)
            // If so, then grab user details and create spring auth token using username, pass, authorities/roles
            if (userName != null) {
                Optional<User> user = userRepository.findByUsername(userName);
                principal = user.get();
                user_id = principal.getID();
            }
        }else {
        	return null;
        }
		
		Room rm = new Room(room.getName(), room.getMaxUsers(), room.getVisibility(), userRepository.findById(user_id).get(), room.getWatchlist());
		roomService.saveRoom(rm);
		return rm;
	}
	
}
