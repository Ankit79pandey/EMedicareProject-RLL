package org.medicare.test;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.medicare.dao.UserRepository;
import org.medicare.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class UserTest {
	@Autowired
	UserRepository userrepository;

	@Test
	public void insertUser() {
	User U = new User ();
		//U.setUserId(1);
		U.setFirst_name("dhoni");
		U.setLast_name("MS");
		U.setMobile_no("741852963");
		U.setAge(40);
		U.setUsername("Dhoni");
		U.setPassword("@123");
		U.setGender("Male");
		userrepository.save(U);
		assertNotNull(userrepository.findById(7).get());
	}
	@Test
	public void userAuth() {
		User U = userrepository.findByUsernameAndPassword("anyone", "anything");
		assertEquals("anyone", U.getUsername());
		assertEquals("anything", U.getPassword());
	}
}
