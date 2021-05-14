package com.example.titflex.repository;

import java.util.Optional;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Repository;

import com.example.titflex.model.User;


@Repository
@Transactional(readOnly = true)
public interface UserRepository extends JpaRepository<User, Integer>{
	@Nullable
	Optional<User> findByEmail(String email);
	
	@Transactional
    @Modifying
    @Query("UPDATE User a " +
            "SET a.enabled = TRUE WHERE a.email = ?1")
    int enableAppUser(String email);
}
