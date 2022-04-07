package com.kp.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "menu")
public class Menu {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

	@Column(name = "foodMenu")
	private Integer foodMenu;
	
	@Column(name = "foodMenuType")
	private String foodMenuType;
	
	@Column(name = "foodMenuItems")
	private String foodMenuItems;
	
	@Column(name = "foodMenuCost")
	private String foodMenuCost;
	
	@Column(name = "status")
	private String status;
	
	
	public Menu()
	{
		
	}
	
	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getFoodMenu() {
		
		return foodMenu;
	}
	public void setFoodMenu(Integer foodMenu) {
		this.foodMenu = foodMenu;
	}
	public String getFoodMenuType() {
		return foodMenuType;
	}
	public void setFoodMenuType(String foodMenuType) {
		this.foodMenuType = foodMenuType;
	}
	public String getFoodMenuItems() {
		return foodMenuItems;
	}
	public void setFoodMenuItems(String foodMenuItems) {
		this.foodMenuItems = foodMenuItems;
	}
	public String getFoodMenuCost() {
		return foodMenuCost;
	}
	public void setFoodMenuCost(String foodMenuCost) {
		this.foodMenuCost = foodMenuCost;
	}
	
	public String getStatus() {
		return status;
	}


	public void setStatus(String status) {
		this.status = status;
	}
	
	
	
	
	
	
	
}
