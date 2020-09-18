package com.itu.companion.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.itu.companion.model.Typepublication;
import com.itu.companion.repository.TypepublicationRepository;

@Service
public class TypepublicationService implements ITypepublicationService{

	@Autowired
	private TypepublicationRepository repository;
	
	@Override
	public List<Typepublication> findAll() {
		// TODO Auto-generated method stub
		return repository.findAll();
	}

}
