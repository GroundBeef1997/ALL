package com.julienProject.julienProject.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController 
public class HelloRessource {

		@RequestMapping({"/hello"})
		public String hello() {
			System.out.println("Bonjour !");
			return "Hello world";
		}
		
		
}
