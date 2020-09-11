package com.itu.companion.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.itu.companion.model.Publication;

public interface PublicationRepository extends JpaRepository<Publication, Long>{
	
}
