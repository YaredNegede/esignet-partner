package com.esignet.resource;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.security.config.annotation.web.oauth2.resourceserver.OAuth2ResourceServerSecurityMarker;

@OAuth2ResourceServerSecurityMarker
@SpringBootApplication(exclude = { SecurityAutoConfiguration.class})
public class ResourceApplication {

	public static void main(String[] args) {
		SpringApplication.run(ResourceApplication.class, args);
	}

}
