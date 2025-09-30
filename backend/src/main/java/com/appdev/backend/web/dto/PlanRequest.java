package com.appdev.backend.web.dto;

import jakarta.validation.constraints.*;
import java.math.BigDecimal;

/**
 * API input for creating/updating plans.
 * maxUsers = seats per subscription (owner counts). Single-user => 1.
 */
public class PlanRequest {
    @NotBlank @Size(max = 100) public String code;
    @NotBlank @Size(max = 200) public String name;
    @NotNull @DecimalMin("0.00") @Digits(integer = 10, fraction = 2) public BigDecimal priceMonthly;
    @Min(1) public int maxUsers; // single-seat plan -> 1
    @Size(max = 500) public String description;
}