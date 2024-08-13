package com.esignet.resource.user;

import jakarta.websocket.server.PathParam;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

@RestController
public class UserController {

    @GetMapping("/public")
    public String homePage() {
        return "Hello from Spring boot app";
    }

    @GetMapping("/userInfo")
    public String userIfo(@RequestParam("code") String code, @RequestParam("state") String state) {
        return "Welcome to user information";
    }

    @GetMapping("/private")
    public String privateRoute() {
        return "Private Route";
    }
}
