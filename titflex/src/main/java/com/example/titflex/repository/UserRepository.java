package com.example.titflex.repository;

import java.util.List;
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
	
	@Nullable
	Optional<User> findByUsername(String userName);
	
	
	@Transactional
    @Modifying
    @Query("UPDATE User a " +
            "SET a.enabled = TRUE WHERE a.email = ?1")
    int enableAppUser(String email);
	
	@Query(value = "select u.* from Friends f, user u where f.id_user = ?  and u.ID = f.id_user2;",
			nativeQuery = true)
	List<User> allFriends(int id);

	@Query(value = "select U.* from roomusers RU, user U where RU.refRoom = ? and U.ID = RU.refUser;",
			nativeQuery = true)
	List<User> getAllUsers(int roomId);
}
