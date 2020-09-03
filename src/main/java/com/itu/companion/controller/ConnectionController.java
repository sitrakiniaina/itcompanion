package com.itu.companion.controller;




import javax.inject.Inject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.itu.companion.api.facebook.Facebook;


@RestController
public class ConnectionController {
	
//	private Facebook facebook;
//
//	@Autowired
//	public ConnectionController(Facebook facebook) {
//		this.facebook = facebook;
//	}
	

	
	@RequestMapping("/")
	public ResponseEntity<String> index() {
		
//		return new ResponseEntity<>(facebook.getProfile(),HttpStatus.OK);
		return new ResponseEntity<>("Greetings from Spring Boot",HttpStatus.OK);
	}
	
//	@RequestMapping(value = "/login", method = RequestMethod.GET)
//	public ResponseEntity<Object> LogIn(){
////		if(!facebook.isAuthorized()) {
////			return "redirect:/connect/facebook";
////		}
////		PostData post = new PostData("321046339120059");
////		post.message("message");			
////		facebook.feedOperations().post(post);
//		
//		return new ResponseEntity<>(facebook.getProfile(),HttpStatus.OK);
//		
//	}
}
