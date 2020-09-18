package com.itu.companion.api.facebook;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.social.facebook.api.Post;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.itu.companion.api.ApiBinding;
import com.itu.companion.model.Promotion;
import com.itu.companion.model.Publication;
import com.itu.companion.security.oauth2.user.FacebookOAuth2UserInfo;



public class Facebook extends ApiBinding{

	//v8.0
	private static final String GRAPH_API_BASE_URL = "https://graph.facebook.com/v8.0";
	private static final String Access_token  = "EAAIoD1s2PTMBAEninXuAJnbGL3WtFKiSxvtZCceNSKqDVdaem0NPJiWbPhG0iFcAXItXTfe2iepuvQuh9zq6M8koFcyiFXWsaV59qaArEmGCDhHaICsuLP6HGQCxd4gW6ZA1xYDQ9ZBtgXUc6fjZAvDJLfimOdJ6iSpbGfy0E2pRRsr452u59xLo30sUvnKuxG7lEZBfc4QJxqtnCAOQV1Q0YVZBNZCjZBEaAentcVjbIUm1ZCvIe5ZBY9VV8Pe8Lubl8ZD";
	private ObjectMapper om = new ObjectMapper();
	
	public Facebook(String access_token) {
		super(Access_token);
	}

	public FacebookOAuth2UserInfo getProfile() {
		Map<String, Object> attributes = restTemplate.getForObject(GRAPH_API_BASE_URL + "/me?fields=id,name,email,picture",Map.class);
		return new FacebookOAuth2UserInfo(attributes);
	}
	
	public Map<String, Object> getFeed() {
		 return restTemplate.getForObject(GRAPH_API_BASE_URL + "/321046339120059/feed", Map.class);
	}
	
	public  String postFeed(Publication publication) throws JsonMappingException, JsonProcessingException {
		
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
		MultiValueMap<String, String> map= new LinkedMultiValueMap<String, String>();
		map.add("message", publication.getTitre());
		map.add("link", publication.getLien());
		HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<MultiValueMap<String, String>>(map, headers);
		
		for(Promotion promotion : publication.getPromotions()) {
			String  url = GRAPH_API_BASE_URL+"/"+promotion.getFacebookid()+"/feed";
			ResponseEntity<String> response  = restTemplate.postForEntity( url, request , String.class);
			Map<String, Object> resp = om.readValue(response.getBody(), Map.class);
			//return resp.get("id").toString() ;
		}
		return "OK";
		
	}
	
	
	
}
