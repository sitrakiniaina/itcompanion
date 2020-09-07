package com.itu.companion.service;

import java.util.List;

import com.itu.companion.model.Promotion;

public interface IPromotionService {
	Promotion findById(Long id);
	void deleteById(Long id);
	Promotion save(Promotion promotion);
	List<Promotion> findAll();	
}
