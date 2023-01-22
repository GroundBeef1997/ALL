package com.julienProject.julienProject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;


@ComponentScan(basePackages={"com.julienProject"})
@SpringBootApplication
public class JulienProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(JulienProjectApplication.class, args);
	}

}
