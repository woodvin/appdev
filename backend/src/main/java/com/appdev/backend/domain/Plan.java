package com.appdev.backend.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import java.math.BigDecimal;

@Entity
public class Plan {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank @Size(max = 100)
    @Column(unique = true, nullable = false)
    private String code; // e.g., FREE, PREMIUM

    @NotBlank @Size(max = 200)
    private String name;

    @NotNull @DecimalMin("0.00") @Digits(integer = 10, fraction = 2)
    private BigDecimal priceMonthly; // GBP/month

    /**
     * Seats included in ONE subscription of this plan (owner counts as a seat).
     * Single-user plan => maxUsers = 1
     */
    @Min(1)
    private int maxUsers;

    @Size(max = 500)
    private String description;

    public Plan() {}

    // getters/setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getCode() { return code; }
    public void setCode(String code) { this.code = code; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public BigDecimal getPriceMonthly() { return priceMonthly; }
    public void setPriceMonthly(BigDecimal priceMonthly) { this.priceMonthly = priceMonthly; }
    public int getMaxUsers() { return maxUsers; }
    public void setMaxUsers(int maxUsers) { this.maxUsers = maxUsers; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
}