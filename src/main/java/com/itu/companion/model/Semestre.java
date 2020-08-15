package com.itu.companion.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="semestre")
public class Semestre {

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator = "semestre_Sequence")
    @SequenceGenerator(name = "publication_Sequence", sequenceName = "SEMESTRE_SEQ")
	@Column(name="idSemestre")
	private Long id;

	private String libelle;
	
	
	
	public Semestre() {
		super();
	}
	

	
	
	public Semestre(Long id) {
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
	
	
	
	
	
	
	
}
