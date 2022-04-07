package com.kp.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "theme")
public class Theme {
	
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	@Column(name = "themeName")
	private String themeName;
	
	@Column(name = "themeImageURL")
	private String themeImageURL;
	
	@Column(name = "themeDescription")
	private String themeDescription;
	
	@Column(name = "themePhotographer")
	private String themePhotographer;
	
	@Column(name = "themeVideographer")
	private String themeVideographer;
	
	@Column(name = "ThemeReturnGift")
	private String ThemeReturnGift;
	
	@Column(name = "ThemeCost")
	private String ThemeCost;
	
	@Column(name = "status")
	private String status;
	
	
	public Theme()
	{
		
	}
	
	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}
	
	public String getThemeName() {
		return themeName;
	}
	public void setThemeName(String themeName) {
		this.themeName = themeName;
	}
	public String getThemeImageURL() {
		return themeImageURL;
	}
	public void setThemeImageURL(String themeImageURL) {
		this.themeImageURL = themeImageURL;
	}
	public String getThemeDescription() {
		return themeDescription;
	}
	public void setThemeDescription(String themeDescription) {
		this.themeDescription = themeDescription;
	}
	public String getThemePhotographer() {
		return themePhotographer;
	}
	public void setThemePhotographer(String themePhotographer) {
		this.themePhotographer = themePhotographer;
	}
	public String getThemeVideographer() {
		return themeVideographer;
	}
	public void setThemeVideographer(String themeVideographer) {
		this.themeVideographer = themeVideographer;
	}
	public String getThemeReturnGift() {
		return ThemeReturnGift;
	}
	public void setThemeReturnGift(String themeReturnGift) {
		ThemeReturnGift = themeReturnGift;
	}
	public String getThemeCost() {
		return ThemeCost;
	}
	public void setThemeCost(String themeCost) {
		ThemeCost = themeCost;
	}
	

	public String getStatus() {
		return status;
	}


	public void setStatus(String status) {
		this.status = status;
	}
}























