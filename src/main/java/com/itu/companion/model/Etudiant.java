package com.itu.companion.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="etudiant")
public class Etudiant {

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator = "etudiant_Sequence")
    @SequenceGenerator(name = "etudiant_Sequence", sequenceName = "ETUDIANT_SEQ")
	@Column(name="idEtudiant")
	private Long id;
	
	private String code;
	private String nom;
	private String prenom;
	private Date dateNaissance;
	
	@ManyToOne
	@JoinColumn(name = "idPromotion", referencedColumnName = "idPromotion")
	private Promotion promotion;
	
	@ManyToOne
	@JoinColumn(name = "idUniversite", referencedColumnName = "idUniversite")
	private Universite universite;
	
	
	public Etudiant() {
		super();
	}


	public Etudiant(Long id) {
		super();
		this.id = id;
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
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getPrenom() {
		return prenom;
	}
	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}
	public Date getDateNaissance() {
		return dateNaissance;
	}
	public void setDateNaissance(Date dateNaissance) {
		this.dateNaissance = dateNaissance;
	}
	public Promotion getPromotion() {
		return promotion;
	}
	public void setPromotion(Promotion promotion) {
		this.promotion = promotion;
	}


	public Universite getUniversite() {
		return universite;
	}


	public void setUniversite(Universite universite) {
		this.universite = universite;
	}
	
	
}
