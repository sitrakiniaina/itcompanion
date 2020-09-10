package com.itu.companion.api.facebook;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

import org.springframework.context.annotation.Bean;
import org.springframework.social.facebook.api.Post;
import com.itu.companion.api.ApiBinding;
import com.itu.companion.model.Publication;
import com.itu.companion.security.oauth2.user.FacebookOAuth2UserInfo;



public class Facebook extends ApiBinding{

	//v8.0
	private static final String GRAPH_API_BASE_URL = "https://graph.facebook.com/v8.0";
	private static final String Access_token  = "EAAExH7WgYiYBAE4RISI6okxeplSZCZBZBkBL7l6QvTXZCbvtH2XTqTG6APLWYsClfQW3fsDCoeodi5t3bOYqU5NvLvSwi5xoSgD4FF6s9vUuRZAZBCSz7jF2xtGiVwGBand6TbJjlfRm4L2rJp7N77nUCYVE6ZArpj2XYDZA2rvRaR5ZCIT5r4QuHUty1aIQci4Pr0va4zJ2QMZAIuvtngwmtC1SSOrLt4Udi3QsCxd7aDEymWPeHk4eqSZAxw3mSqtTxYZD";
	
	
	public Facebook(String access_token) {
		super(access_token);
	}

	public FacebookOAuth2UserInfo getProfile() {
		Map<String, Object> attributes = restTemplate.getForObject(GRAPH_API_BASE_URL + "/me?fields=id,name,email,picture",Map.class);
		return new FacebookOAuth2UserInfo(attributes);
	}
	
	public Map<String, Object> getFeed() {
		 return restTemplate.getForObject(GRAPH_API_BASE_URL + "/321046339120059/feed", Map.class);
	}
	
	public String postFeed(Publication publication) {

		return "";
	}
	
	
	
}
