package com.itu.companion.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="matiere")
public class Matiere {

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator = "matiere_Sequence")
    @SequenceGenerator(name = "matiere_Sequence", sequenceName = "MATIERE_SEQ")
	@Column(name="idMatiere")
	private Long id;
	private String code;
	private String libelle;
	private int coefficient;
	
	
	
	public Matiere() {
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
	public int getCoefficient() {
		return coefficient;
	}
	public void setCoefficient(int coefficient) {
		this.coefficient = coefficient;
	}
	
}
