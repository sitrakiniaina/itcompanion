package com.itu.companion;

import java.util.Map;

import javax.inject.Scope;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClientService;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.context.annotation.RequestScope;

import com.itu.companion.api.facebook.Facebook;


@Configuration
public class SocialConfig {
	@Bean
	public Facebook facebook() {
//		RestTemplate resttemplate = new RestTemplate();
//		String url ="https://graph.facebook.com/oauth/access_token?grant_type=fb_exchange_token";
//				url+="&client_id=335487237644838";
//				url+="&client_secret=2e8abbadf81fbd8f038a96a798647a34";
//				url+="&fb_exchange_token=7ab7b7ed81bcf6e588791121fe1569ff";
//		Map<String, Object> response = resttemplate.getForObject(url,Map.class);		
		String token ="EAAExH7WgYiYBAJBgZCLsfpO3ZCVtUh9fibyXp6sYS1TYZBB764L0r504gSbHTN7037UGrluZCILYBfN0KPz0ZCV3YuvluR9SVrXOJIIBe48rUTarmqdHpBnJMfjbav8iwl7vDId4v6v12JWL4cuRK8LWJQGN4cDaOpBSUPuTlgSb3uMzmCqBG";
	
		return new Facebook(token); 
	}

}
