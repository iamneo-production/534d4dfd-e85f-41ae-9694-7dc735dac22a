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


import com.kp.demo.entity.Theme;
import com.kp.demo.repository.ThemeRepository;

@CrossOrigin
@RestController
@RequestMapping("/theme")
public class ThemeController {
	
	@Autowired
	ThemeRepository themeRepository;
	
	@GetMapping("/list")
	public ResponseEntity<List<Theme>> getAllThemes() {
		try {
			List<Theme> themes = themeRepository.findAll();
			if (themes.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(themes, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<HttpStatus> deleteTheme(@PathVariable("id") Integer id) {
		try {
			themeRepository.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	
	@PostMapping("/add")
	public ResponseEntity<Theme> addTheme(@RequestBody Theme model) {
		try {
			Theme theme = themeRepository.save(model);
			return new ResponseEntity<>(theme, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	
	@PutMapping("/update/{id}")
	public ResponseEntity<Theme> updateTheme(@PathVariable("id") Integer id, @RequestBody Theme model) {
		Optional<Theme> existingTheme = themeRepository.findById(id);
		if (existingTheme.isPresent()) {
			Theme theme = existingTheme.get();
			theme.setThemeName(model.getThemeName());
			theme.setThemeImageURL(model.getThemeImageURL());
			theme.setThemeDescription(model.getThemeDescription());
			theme.setThemePhotographer(model.getThemePhotographer());
			theme.setThemeVideographer(model.getThemeVideographer());
			theme.setThemeReturnGift(model.getThemeReturnGift());
			theme.setThemeCost(model.getThemeCost());
			
			return new ResponseEntity<>(themeRepository.save(theme), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}

	


