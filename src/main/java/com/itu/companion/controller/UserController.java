package com.itu.companion.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.itu.companion.exception.ResourceNotFoundException;
import com.itu.companion.model.User;
import com.itu.companion.repository.UserRepository;
import com.itu.companion.security.CurrentUser;
import com.itu.companion.security.UserPrincipal;

@RestController
public class UserController {

	@Autowired
	private UserRepository userRepository;

	@CrossOrigin(origins="*")
	@GetMapping("/user/me")
	@PreAuthorize("hasRole('USER')")
	public User getCurrentUser(@CurrentUser UserPrincipal userPrincipal) {
		return userRepository.findById(userPrincipal.getId())
				.orElseThrow(() -> new ResourceNotFoundException("User", "id", userPrincipal.getId()));
	}
	
	@CrossOrigin(origins="*")
	@RequestMapping(
		    value = "/api/user/metestapi",
		    produces = "application/json",
		    method = RequestMethod.GET)
	//@GetMapping("api/user/metestapi")
	public User getCurrentUser() {
		return userRepository.findById(1L)
				.orElseThrow(() -> new ResourceNotFoundException("User", "id", 1));
	}
}
