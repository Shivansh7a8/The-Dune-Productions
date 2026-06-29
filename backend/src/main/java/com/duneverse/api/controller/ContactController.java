package com.duneverse.api.controller;

import com.duneverse.api.model.ContactMessage;
import com.duneverse.api.repository.ContactMessageRepository;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
public class ContactController {

    private final ContactMessageRepository repository;

    public ContactController(ContactMessageRepository repository) {
        this.repository = repository;
    }

    @PostMapping
    public ResponseEntity<?> submit(@Valid @RequestBody ContactMessage message) {
        ContactMessage saved = repository.save(message);
        return ResponseEntity.ok(saved);
    }

    @GetMapping
    public ResponseEntity<?> list() {
        return ResponseEntity.ok(repository.findAll());
    }
}
