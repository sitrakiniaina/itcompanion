package com.itu.companion.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import com.itu.companion.model.Publication;

@Repository
public interface PublicationRepository extends JpaRepository<Publication, Long>{
//	List<Publication> findByTitreContaining(String titre, Pageable pageable);
	
	Page<Publication> findByTitreContainingAndTypepublicationId(String titre,Long id, Pageable pageable);
}
