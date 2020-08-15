package com.itu.companion.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

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
	private String facebookId;
	
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

	public String getFacebookId() {
		return facebookId;
	}

	public void setFacebookId(String facebookId) {
		this.facebookId = facebookId;
	}

	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	
	
	
}
