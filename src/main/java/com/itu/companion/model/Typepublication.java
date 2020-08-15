package com.itu.companion.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="typepublication")
public class Typepublication {
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator = "typepublication_Sequence")
    @SequenceGenerator(name = "typepublication_Sequence", sequenceName = "TYPEPUB_SEQ")
	private Long idType;
	private String code;
	private String libelle;
	
	
	
	public Typepublication() {
		super();
	}
	
	public Typepublication(Long idType) {
		super();
		this.idType = idType;
	}

	public Typepublication(Long idType, String code, String libelle) {
		super();
		this.idType = idType;
		this.code = code;
		this.libelle = libelle;
	}
	public Long getIdType() {
		return idType;
	}
	public void setIdType(Long idType) {
		this.idType = idType;
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
