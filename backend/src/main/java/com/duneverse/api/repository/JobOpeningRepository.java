package com.duneverse.api.repository;

import com.duneverse.api.model.JobOpening;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface JobOpeningRepository extends JpaRepository<JobOpening, Long> {
    List<JobOpening> findByVertical(String vertical);
}
