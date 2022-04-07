package com.kp.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.kp.demo.entity.Menu;
import com.kp.demo.repository.MenuRepository;

@CrossOrigin
@RestController
@RequestMapping("/menu")
public class FoodMenuController {
	
	@Autowired
	MenuRepository menuRepository;

	
	@PostMapping("/add")
	public ResponseEntity<Menu> addMenu(@RequestBody Menu model) {
		try {
			Menu menu = menuRepository.save(model);
			return new ResponseEntity<>(menu, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	
	@GetMapping("/list")
	public ResponseEntity<List<Menu>> getAllBooks() {
		try {
			List<Menu> menus = menuRepository.findAll();
			if (menus.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(menus, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<HttpStatus> deleteMenu(@PathVariable("id") Integer id) {
		try {
			menuRepository.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	
	@PutMapping("/update/{id}")
	public ResponseEntity<Menu> updateMenu(@PathVariable("id") Integer id, @RequestBody Menu model) {
		Optional<Menu> existingMenu = menuRepository.findById(id);
		if (existingMenu.isPresent()) {
			Menu menu = existingMenu.get();
			menu.setFoodMenu(model.getFoodMenu());
			menu.setFoodMenuType(model.getFoodMenuType());
			menu.setFoodMenuItems(model.getFoodMenuItems());
			menu.setFoodMenuCost(model.getFoodMenuCost());
			
			return new ResponseEntity<>(menuRepository.save(menu), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}
