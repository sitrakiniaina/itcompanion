package com.itu.companion.controller;

import javax.transaction.Transactional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.itu.companion.api.facebook.Facebook;
import com.itu.companion.model.Promotion;
import com.itu.companion.model.Publication;
import com.itu.companion.service.IPromotionService;
import com.itu.companion.service.IPublicationService;
import com.itu.companion.util.ScraperUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;

@RestController
public class PublicationController {

	@Autowired
	private IPublicationService publicationService;
	
	@Autowired
	private IPromotionService promotionService;
	
	@Autowired
	private Facebook facebook;
	
	private ObjectMapper om = new ObjectMapper();
	

	@Transactional
	@PostMapping("/api/publication/save")
	public ResponseEntity<Object> savePublication(@RequestBody Publication publication) throws Exception{	
		
		Publication temp = new Publication() ;
		temp.getPromotions().clear();
		for (Promotion promotion : publication.getPromotions()) {
			temp.addPromotion(promotion);	
		}
		publication.getPromotions().clear();
		for (Promotion prom : temp.getPromotions()) {
			Promotion tempprom = promotionService.findById(prom.getId());
			publication.addPromotion(tempprom);	
		}	
		publication.setOgImage(ScraperUtils.getOGImage(publication.getLien()));
		publicationService.save(publication);
		facebook.postFeed(publication);	
		return new ResponseEntity<>(publication,HttpStatus.OK);
	}
	
	@RequestMapping("/api/savePromotion")
	public ResponseEntity<Object> savePromotion(){
		Promotion promotion = new Promotion();
		promotion.setLibelle("Promotion 2");
		promotion.setFacebookid("321046339120059");
		promotionService.save(promotion);
		return new ResponseEntity<>(HttpStatus.OK);
	} 
	
	@RequestMapping("/api/publication")
	public ResponseEntity<Object> listPublication() throws JsonProcessingException{
		return new ResponseEntity<>(om.writeValueAsString(publicationService.findAll()) ,HttpStatus.OK);
	}
	
	@RequestMapping(value = "/api/publication/pagination", method = RequestMethod.GET)
	public ResponseEntity<Object> listPublication(@RequestParam(value = "page", defaultValue = "0") int page,
			@RequestParam(value = "limit", defaultValue = "10") int limit,
			@RequestParam(value = "titre", defaultValue = "") String titre,
			@RequestParam(value = "type", defaultValue = "") Long type) throws JsonProcessingException {
		
//		Page<Publication> pageable = new PageImpl<>(publicationService.findAllPage(titre,page,limit));
		return new ResponseEntity<>((om.writeValueAsString(publicationService.findAllPage(titre,type,page,limit))),HttpStatus.OK);

//		return new ResponseEntity<>(om.writeValueAsString(publicationService.findAll(titre,page,limit)) ,HttpStatus.OK);
	}
	
	@RequestMapping(value = "/api/publication/testscsraper", method = RequestMethod.GET)
	public ResponseEntity<Object> testScraper(@RequestParam(value = "url") String  url) throws Exception {		
		return new ResponseEntity<>(ScraperUtils.getOGImage("https://www.baeldung.com/java-with-jsoup") ,HttpStatus.OK);
	}
	
}
