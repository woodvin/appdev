package com.appdev.backend.web;

import com.appdev.backend.domain.Plan;
import com.appdev.backend.repo.PlanRepository;
import com.appdev.backend.web.dto.PlanRequest;
import com.appdev.backend.web.dto.PlanResponse;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/plans")
public class PlanController {

    private final PlanRepository repo;

    public PlanController(PlanRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<PlanResponse> all() {
        return repo.findAll().stream().map(PlanMapper::toResponse).toList();
    }

    @GetMapping("/{code}")
    public ResponseEntity<PlanResponse> byCode(@PathVariable String code) {
        return repo.findByCode(code)
                .map(PlanMapper::toResponse)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<PlanResponse> create(@RequestBody @Valid PlanRequest req) {
        if (repo.existsByCode(req.code)) return ResponseEntity.badRequest().build();
        Plan saved = repo.save(PlanMapper.toEntity(req));
        return ResponseEntity.created(URI.create("/api/plans/" + saved.getCode()))
                .body(PlanMapper.toResponse(saved));
    }

    @PutMapping("/{code}")
    public ResponseEntity<PlanResponse> update(@PathVariable String code, @RequestBody @Valid PlanRequest req) {
        return repo.findByCode(code)
                .map(p -> {
                    PlanMapper.updateEntity(p, req);
                    return ResponseEntity.ok(PlanMapper.toResponse(repo.save(p)));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{code}")
    public ResponseEntity<Object> delete(@PathVariable String code) {
        return repo.findByCode(code)
                .map(p -> { repo.delete(p); return ResponseEntity.noContent().build(); })
                .orElse(ResponseEntity.notFound().build());
    }
}