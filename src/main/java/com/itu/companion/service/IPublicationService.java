package com.itu.companion.service;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;

import com.itu.companion.model.Publication;

public interface IPublicationService {

	Optional<Publication> findById(Long id);
	void deleteById(Long id);
	Publication save(Publication publication);
	List<Publication> findAll();	
	List<Publication> findAll(String name, int page, int limit);
	Page<Publication> findAllPage(String name, int page, int limit);
	Page<Publication> findAllPage(String titre, Long type, int page, int limit);
}
