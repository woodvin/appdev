package com.appdev.backend.web;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

record Health(String status) {}

@RestController
public class HealthController {
    @GetMapping("/api/health")
    public Health health() {
        return new Health("OK");
    }
}