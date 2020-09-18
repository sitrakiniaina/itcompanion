package com.itu.companion.controller;




import javax.inject.Inject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.itu.companion.api.facebook.Facebook;
import com.itu.companion.model.Publication;
import com.itu.companion.service.IPublicationService;
import com.itu.companion.service.PublicationService;


@RestController
public class ConnectionController {
	
	private Facebook facebook;
	
	private IPublicationService publicationService;
//
	@Autowired
	public ConnectionController(Facebook facebook,IPublicationService pubservice) {
		this.facebook = facebook;
		publicationService = pubservice;
	}
	

	
	@RequestMapping("/")
	public ResponseEntity<String> index() {
		
//		return new ResponseEntity<>(facebook.getProfile(),HttpStatus.OK);
		return new ResponseEntity<>("Greetings from Spring Boot",HttpStatus.OK);
	}
	
	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public ResponseEntity<Object> LogIn(){	
		
		return new ResponseEntity<>(facebook.getFeed(),HttpStatus.OK);
		
	}
	
	@RequestMapping(value = "api/testfacebook", method = RequestMethod.GET)
	public ResponseEntity<Object> testFacebook() throws JsonMappingException, JsonProcessingException{	
		Publication publication = publicationService.findById(1L).get();
		String test = facebook.postFeed(publication);
		return new ResponseEntity<>(test,HttpStatus.OK);
		
	}
}
