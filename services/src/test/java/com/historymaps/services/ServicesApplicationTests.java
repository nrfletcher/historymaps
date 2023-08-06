package com.historymaps.services;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class ServicesApplicationTests {

	@Test
	void contextLoads() {
		assertEquals("This is the message", "This is right", "This is correct");
	}

}
