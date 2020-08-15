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
@Table(name="note")
public class Note {

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator = "note_Sequence")
    @SequenceGenerator(name = "note_Sequence", sequenceName = "NOTE_SEQ")
	@Column(name="idNote")
	private Long id;
	
	private Double note;
	
	private Date date;
	
	

	public Note() {
		super();
	}
	
	

	public Note(Long id) {
		super();
		this.id = id;
	}



	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Double getNote() {
		return note;
	}

	public void setNote(Double note) {
		this.note = note;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}
	
	
}

