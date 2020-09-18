package com.itu.companion.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.itu.companion.model.Typepublication;

@Repository
public interface TypepublicationRepository extends JpaRepository<Typepublication, Long>{
	
}
