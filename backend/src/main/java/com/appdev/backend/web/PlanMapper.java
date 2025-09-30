package com.appdev.backend.web;

import com.appdev.backend.domain.Plan;
import com.appdev.backend.web.dto.PlanRequest;
import com.appdev.backend.web.dto.PlanResponse;

public class PlanMapper {
    public static Plan toEntity(PlanRequest r) {
        Plan p = new Plan();
        p.setCode(r.code);
        p.setName(r.name);
        p.setPriceMonthly(r.priceMonthly);
        p.setMaxUsers(r.maxUsers);
        p.setDescription(r.description);
        return p;
    }
    public static void updateEntity(Plan p, PlanRequest r) {
        p.setName(r.name);
        p.setPriceMonthly(r.priceMonthly);
        p.setMaxUsers(r.maxUsers);
        p.setDescription(r.description);
    }
    public static PlanResponse toResponse(Plan p) {
        PlanResponse resp = new PlanResponse();
        resp.id = p.getId();
        resp.code = p.getCode();
        resp.name = p.getName();
        resp.priceMonthly = p.getPriceMonthly();
        resp.maxUsers = p.getMaxUsers();
        resp.description = p.getDescription();
        return resp;
    }
}
