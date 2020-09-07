package com.itu.companion.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.itu.companion.model.Promotion;
import com.itu.companion.model.Publication;
import com.itu.companion.repository.PublicationRepository;

public class PublicationService implements IPublicationService {

	@Autowired
	private PublicationRepository repository;

	@Override
	public Optional<Publication> findById(Long id) {
		return repository.findById(id);
	}

	@Override
	public void deleteById(Long id) {
		repository.deleteById(id);		
	}

	@Override
	public Publication save(Publication promotion) {
		return repository.save(promotion);
	}

	@Override
	public List<Publication> findAll() {
		return repository.findAll();
	}
	
	

}
