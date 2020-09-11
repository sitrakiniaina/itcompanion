package com.itu.companion.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.itu.companion.model.Promotion;
import com.itu.companion.repository.PromotionRepository;

@Service
public class PromotionService implements IPromotionService{

	@Autowired
	private PromotionRepository repository;
	
	@Override
	public Promotion findById(Long id) {
		return repository.findById(id).get();
	}

	@Override
	public void deleteById(Long id) {
		 repository.deleteById(id);
	}

	@Override
	public Promotion save(Promotion promotion) {
		
		return repository.save(promotion);
	}

	@Override
	public List<Promotion> findAll() {
		return repository.findAll();
	}

}
