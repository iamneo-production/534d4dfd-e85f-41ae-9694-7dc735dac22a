package com.kp.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kp.demo.entity.Theme;

public interface ThemeRepository extends JpaRepository<Theme, Integer> {

}
