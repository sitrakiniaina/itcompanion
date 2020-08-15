package com.itu.companion.model;

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
	private Long idEtat;
	private String code;
	private String libelle;
	
	
	public Etat() {
		super();
	}


	public Etat(Long idEtat) {
		super();
		this.idEtat = idEtat;
	}

	public Etat(Long idEtat, String code, String libelle) {
		super();
		this.idEtat = idEtat;
		this.code = code;
		this.libelle = libelle;
	}


	public Long getIdEtat() {
		return idEtat;
	}


	public void setIdEtat(Long idEtat) {
		this.idEtat = idEtat;
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
