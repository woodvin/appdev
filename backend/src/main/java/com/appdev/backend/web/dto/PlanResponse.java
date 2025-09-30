package com.appdev.backend.web.dto;

import java.math.BigDecimal;

/** What the API returns for a Plan (no internals leaked). */
public class PlanResponse {
    public Long id;
    public String code;
    public String name;
    public BigDecimal priceMonthly;
    public int maxUsers;
    public String description;
}