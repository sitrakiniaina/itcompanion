package com.itu.companion.service;

import java.util.List;
import java.util.Optional;

import com.itu.companion.model.Publication;

public interface IPublicationService {

	Optional<Publication> findById(Long id);
	void deleteById(Long id);
	Publication save(Publication publication);
	List<Publication> findAll();	
}
