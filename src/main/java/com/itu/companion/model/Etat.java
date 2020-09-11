package com.itu.companion.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="etat")
public class Etat {
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator = "etat_Sequence")
    @SequenceGenerator(name = "etat_Sequence", sequenceName = "ETAT_SEQ")
	@Column(name="idEtat")
	private Long id;
	private String code;
	private String libelle;
	
	
	public Etat() {
		super();
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getCode() {
		return code;
	}


	public void setCode(String code) {
		this.code = code;
	}


	public String getLibelle() {
		return libelle;
	}


	public void setLibelle(String libelle) {
		this.libelle = libelle;
	}


	
	
	
	
	
	
}
