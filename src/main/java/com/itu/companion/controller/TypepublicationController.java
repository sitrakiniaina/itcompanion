package com.itu.companion.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.itu.companion.service.ITypepublicationService;

@RestController
public class TypepublicationController {
	@Autowired
	private ITypepublicationService typepepublicationService;
	
	ObjectMapper om = new ObjectMapper();
	
	@RequestMapping("/api/typepublication")
	public ResponseEntity<Object> listTypePublication() throws JsonProcessingException{
		return new ResponseEntity<>(om.writeValueAsString(typepepublicationService.findAll()) ,HttpStatus.OK);
	}
}
