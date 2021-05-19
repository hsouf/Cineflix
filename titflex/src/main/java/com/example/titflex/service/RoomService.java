package com.example.titflex.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.titflex.model.Room;
import com.example.titflex.model.User;
import com.example.titflex.repository.RoomRepository;

@Service
public class RoomService {

	@Autowired
	private RoomRepository roomRepository;
	
	public Room getRoomByID(int id) {
		Optional<Room> result = roomRepository.findById(id);
		return result.get();
	}
	
	public List<Room> getRoomByUser(User user){
		return roomRepository.findAllByUser(user);
	}
	
	public void saveRoom(Room room) {
		roomRepository.save(room);
	}
}
