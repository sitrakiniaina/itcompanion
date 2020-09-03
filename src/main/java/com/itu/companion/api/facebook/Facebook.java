package com.itu.companion.api.facebook;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

import org.springframework.social.facebook.api.Post;
import com.itu.companion.api.ApiBinding;
import com.itu.companion.security.oauth2.user.FacebookOAuth2UserInfo;


public class Facebook extends ApiBinding{

	//v8.0
	private static final String GRAPH_API_BASE_URL = "https://graph.facebook.com/v8.0";
	public Facebook(String accessToken) {
		super(accessToken);
	}

	public FacebookOAuth2UserInfo getProfile() {
		Map<String, Object> attributes = restTemplate.getForObject(GRAPH_API_BASE_URL + "/me?fields=id,name,email,picture",Map.class);
		return new FacebookOAuth2UserInfo(attributes);
	}
	
	public List<Post> getFeed() {
		 return Arrays.asList(restTemplate.getForObject(GRAPH_API_BASE_URL + "/me/feed", Post[].class));
	}
}
