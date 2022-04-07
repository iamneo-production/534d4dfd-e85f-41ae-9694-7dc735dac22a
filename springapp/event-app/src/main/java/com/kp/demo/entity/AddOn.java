package com.kp.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "addon")
public class AddOn {


	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	@Column(name = "addonName")
	private String addonName;

	@Column(name = "addonDescription")
	private String addonDescription;
	
	@Column(name = "AddAddonPrice")
	private String AddAddonPrice;
	
	@Column(name = "status")
	private String status;
	
	public AddOn() {   
		
	}
	
	
	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}
	public String getAddonName() {
		return addonName;
	}
	public void setAddonName(String addonName) {
		this.addonName = addonName;
	}
	public String getAddonDescription() {
		return addonDescription;
	}
	public void setAddonDescription(String addonDescription) {
		this.addonDescription = addonDescription;
	}
	public String getAddAddonPrice() {
		return AddAddonPrice;
	}
	public void setAddAddonPrice(String addAddonPrice) {
		AddAddonPrice = addAddonPrice;
	}
	
	public String getStatus() {
		return status;
	}


	public void setStatus(String status) {
		this.status = status;
	}
	
	
}
