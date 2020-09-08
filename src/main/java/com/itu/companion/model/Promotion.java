package com.itu.companion.model;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;



@Entity
@Table(name="promotion")
public class Promotion {

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator = "promotion_Sequence")
    @SequenceGenerator(name = "promotion_Sequence", sequenceName = "PROMOTION_SEQ")
	@Column(name="idPromotion")
	private Long id;
	
	private String libelle;
	private Date dateDebut;
	private Date dateFin;
	private String facebookid;
	
	@ManyToMany(cascade = CascadeType.PERSIST)
	@JsonBackReference
	@JoinTable(
	  name = "promotion_publication", 
	  joinColumns = @JoinColumn(name = "idPublication"), 
	  inverseJoinColumns = @JoinColumn(name = "idPromotion"))
	private Set<Publication> publications = new HashSet<>();
	
	
	
	public Promotion() {
		super();
	}

	public Promotion(Long id) {
		super();
		this.id = id;
	}
	
	public String getLibelle() {
		return libelle;
	}

	public void setLibelle(String libelle) {
		this.libelle = libelle;
	}

	public Date getDateDebut() {
		return dateDebut;
	}

	public void setDateDebut(Date dateDebut) {
		this.dateDebut = dateDebut;
	}

	public Date getDateFin() {
		return dateFin;
	}

	public void setDateFin(Date dateFin) {
		this.dateFin = dateFin;
	}

	

	public String getFacebookid() {
		return facebookid;
	}

	public void setFacebookid(String facebookid) {
		this.facebookid = facebookid;
	}

	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}

	public Set<Publication> getPublications() {
		return publications;
	}

	public void setPublications(Set<Publication> publications) {
		this.publications = publications;
	}
	
	public void setPublication(Publication publication) {
		this.publications.add(publication);	
		publication.getPromotions().add(this);
	}
	
	
	
	
}
