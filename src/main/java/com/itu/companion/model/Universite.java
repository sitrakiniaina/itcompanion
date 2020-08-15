package com.itu.companion.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="universite")
public class Universite {

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator = "universite_Sequence")
    @SequenceGenerator(name = "universite_Sequence", sequenceName = "UNIVERSITE_SEQ")
	@Column(name="idUniversite")
	private Long id;
	
	private String libelle;
	private String adresse;
	private int lon;
	private int lat;
	
	
	public Universite() {
		super();
	}


	public Universite(Long id) {
		super();
		this.id = id;
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getLibelle() {
		return libelle;
	}


	public void setLibelle(String libelle) {
		this.libelle = libelle;
	}


	public String getAdresse() {
		return adresse;
	}


	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}


	public int getLon() {
		return lon;
	}


	public void setLon(int lon) {
		this.lon = lon;
	}


	public int getLat() {
		return lat;
	}


	public void setLat(int lat) {
		this.lat = lat;
	}
	
	
	
	
}
