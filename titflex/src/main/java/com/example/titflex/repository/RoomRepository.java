package com.example.titflex.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.titflex.model.Room;
import com.example.titflex.model.User;

@Repository
public interface RoomRepository extends JpaRepository<Room, Integer>{

	List<Room> findAllByUser(User user);
}
