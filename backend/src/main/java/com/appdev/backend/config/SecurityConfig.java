package com.appdev.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.ignoringRequestMatchers("/h2-console/**"))
            .headers(h -> h.frameOptions(f -> f.sameOrigin()))
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/actuator/health", "/api/health", "/h2-console/**").permitAll()
                .requestMatchers(HttpMethod.GET, "/api/plans/**").permitAll()
                .requestMatchers(HttpMethod.POST, "/api/plans/**").authenticated()
                .requestMatchers(HttpMethod.PUT, "/api/plans/**").authenticated()
                .requestMatchers(HttpMethod.DELETE, "/api/plans/**").authenticated()
                .anyRequest().authenticated()
            )
            .httpBasic(Customizer.withDefaults());
        return http.build();
    }
}
