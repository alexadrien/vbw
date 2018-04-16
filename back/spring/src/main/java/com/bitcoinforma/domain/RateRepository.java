package com.bitcoinforma.domain;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface RateRepository extends JpaRepository<Rate, Long> {
    List<Rate> findById(Long id);
}
