package com.kp.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kp.demo.entity.Menu;

public interface MenuRepository extends JpaRepository<Menu, Integer>  {

}
