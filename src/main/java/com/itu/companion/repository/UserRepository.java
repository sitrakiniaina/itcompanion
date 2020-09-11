package com.itu.companion.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.itu.companion.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

	Optional<User> findByEmail(String email);

	Boolean existsByEmail(String email);
}
