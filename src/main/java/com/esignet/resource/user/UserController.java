package com.esignet.resource.user;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @GetMapping("/public")
    public String homePage() {
        return "Hello from Spring boot app";
    }

    @GetMapping("/private")
    public String privateRoute() {
        return "Private Route";
    }
}
