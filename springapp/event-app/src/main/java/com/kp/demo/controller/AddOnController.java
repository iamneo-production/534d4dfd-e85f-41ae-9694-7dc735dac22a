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

import com.kp.demo.entity.AddOn;
import com.kp.demo.repository.AddOnRepository;


@CrossOrigin
@RestController
@RequestMapping("/addon")
public class AddOnController {
    @Autowired
	AddOnRepository addonRepository;
    
    @GetMapping("/list")
	public ResponseEntity<List<AddOn>> getAllAddOns() {
		try {
			List<AddOn> addons = addonRepository.findAll();
			if (addons.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(addons, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	
	@PostMapping("/add")
	public ResponseEntity<AddOn> addBook(@RequestBody AddOn model) {
		try {
			AddOn addon = addonRepository.save(model);
			return new ResponseEntity<>(addon, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<HttpStatus> deleteAddOn(@PathVariable("id") Integer id) {
		try {
			addonRepository.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@PutMapping("/update/{id}")
	public ResponseEntity<AddOn> updateAddOn(@PathVariable("id") Integer id, @RequestBody AddOn model) {
		Optional<AddOn> existingAddOn = addonRepository.findById(id);
		if (existingAddOn.isPresent()) {
			AddOn addon = existingAddOn.get();
			addon.setAddonName(model.getAddonName());
			addon.setAddonDescription(model.getAddonDescription());
			addon.setAddAddonPrice(model.getAddAddonPrice());
		
			return new ResponseEntity<>(addonRepository.save(addon), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}
