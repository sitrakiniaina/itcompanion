package com.itu.companion.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.itu.companion.model.Publication;

@Repository
public interface PublicationRepository extends JpaRepository<Publication, Long>{
	
}
