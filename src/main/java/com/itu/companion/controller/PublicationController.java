package com.itu.companion.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.itu.companion.model.Promotion;
import com.itu.companion.model.Publication;
import com.itu.companion.service.IPromotionService;
import com.itu.companion.service.IPublicationService;

@RestController
public class PublicationController {

	@Autowired
	private IPublicationService publicationService;
	
	@Autowired
	private IPromotionService promotionService;
	
	private ObjectMapper om = new ObjectMapper();
	
	@RequestMapping("/api/savePublication")
	public ResponseEntity<Object> savePublication(){
		Publication publication = new Publication();
		publication.setTitre("publication 1");
		publication.setDescription("description");
		publication.setLien("https://www.facebook.com/");
		Promotion p1= promotionService.findById(1L);
		p1.setPublication(publication);
		Promotion p2= promotionService.findById(2L);
		p2.setPublication(publication);
	
		publicationService.save(publication);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@RequestMapping("/api/savePromotion")
	public ResponseEntity<Object> savePromotion(){
		Promotion promotion = new Promotion();
		promotion.setLibelle("Promotion 2");
		promotion.setFacebookid("321046339120059");
		promotionService.save(promotion);
		return new ResponseEntity<>(HttpStatus.OK);
	} 
	
	@RequestMapping("/api/listPublication")
	public ResponseEntity<Object> listPublication() throws JsonProcessingException{
		return new ResponseEntity<>(om.writeValueAsString(publicationService.findAll()) ,HttpStatus.OK);
	}
	
}
