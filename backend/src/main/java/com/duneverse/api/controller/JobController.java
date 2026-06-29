package com.duneverse.api.controller;

import com.duneverse.api.model.JobApplication;
import com.duneverse.api.model.JobOpening;
import com.duneverse.api.repository.JobApplicationRepository;
import com.duneverse.api.repository.JobOpeningRepository;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/careers")
public class JobController {

    private final JobOpeningRepository jobRepo;
    private final JobApplicationRepository applicationRepo;

    public JobController(JobOpeningRepository jobRepo, JobApplicationRepository applicationRepo) {
        this.jobRepo = jobRepo;
        this.applicationRepo = applicationRepo;
    }

    @GetMapping("/jobs")
    public List<JobOpening> getJobs(@RequestParam(required = false) String vertical) {
        if (vertical != null && !vertical.isBlank()) {
            return jobRepo.findByVertical(vertical);
        }
        return jobRepo.findAll();
    }

    @PostMapping("/apply")
    public ResponseEntity<?> apply(@Valid @RequestBody JobApplication application) {
        JobApplication saved = applicationRepo.save(application);
        return ResponseEntity.ok(saved);
    }
}
