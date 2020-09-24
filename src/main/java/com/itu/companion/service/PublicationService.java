package com.itu.companion.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.itu.companion.model.Promotion;
import com.itu.companion.model.Publication;
import com.itu.companion.repository.PublicationRepository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

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

	@Override
	public List<Publication> findAll(String titre, int page, int limit) {
		Pageable pageable = PageRequest.of(page, limit);
		return (List<Publication>) repository.findByTitreContainingAndTypepublicationId(titre, 1L, pageable);
	}

	@Override
	public Page<Publication> findAllPage(String titre,Long type, int page, int limit) {
		Pageable pageable = PageRequest.of(page, limit);
		return repository.findByTitreContainingAndTypepublicationId(titre,type, pageable);
	}

	@Override
	public Page<Publication> findAllPage(String name, int page, int limit) {
		// TODO Auto-generated method stub
		return null;
	}
	
	

}
