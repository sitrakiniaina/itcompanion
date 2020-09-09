package com.itu.companion.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.itu.companion.model.Promotion;
import com.itu.companion.model.Publication;
import com.itu.companion.repository.PublicationRepository;

@Service
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
	@Transactional
	public Publication save(Publication publication) {

		return repository.save(publication);
	}

	@Override
	public List<Publication> findAll() {
		return repository.findAll();
	}
	
	

}
