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
@Table(name="publication")
public class Publication {

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator = "publication_Sequence")
    @SequenceGenerator(name = "publication_Sequence", sequenceName = "PUBLICATION_SEQ")
	@Column(name="idPublication")
	private Long id;
	private String titre;
	private String description;
	private Date dateDebut;
	private Date dateFin;
	private String heureDebut;
	private String heureFin;
	
	@ManyToOne
	@JoinColumn(name = "idtypepublication", referencedColumnName = "idtypepublication")
	private Typepublication typepublication;
	
	
	public Publication() {
		super();
	}
	
	
	public Publication(Long id) {
		super();
		this.id = id;
	}


	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getTitre() {
		return titre;
	}
	public void setTitre(String titre) {
		this.titre = titre;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
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
	public String getHeureDebut() {
		return heureDebut;
	}
	public void setHeureDebut(String heureDebut) {
		this.heureDebut = heureDebut;
	}
	public String getHeureFin() {
		return heureFin;
	}
	public void setHeureFin(String heureFin) {
		this.heureFin = heureFin;
	}
	
	
}
