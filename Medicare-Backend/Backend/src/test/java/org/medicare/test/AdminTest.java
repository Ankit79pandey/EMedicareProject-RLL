package org.medicare.test;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.medicare.dao.AdminRepository;
import org.medicare.entity.Admin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class AdminTest {
	@Autowired
	AdminRepository adminrepository;

	@Test
	public void insertAdmin() {
		Admin A = new Admin();
		A.setAdmin("abc");
		A.setPassword("123@");
		adminrepository.save(A);
		assertNotNull(adminrepository.findById(3).get());
	} 
	@Test
	public void adminAuth() {
		Admin A = adminrepository.findByAdminAndPassword("abc", "123@");
		assertEquals("abc", A.getAdmin());
		assertEquals("123@", A.getPassword());
}
	
}
