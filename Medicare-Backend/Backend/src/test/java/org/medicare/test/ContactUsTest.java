package org.medicare.test;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.medicare.dao.ContactUsRepository;
import org.medicare.entity.ContactUs;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class ContactUsTest {
		@Autowired
		ContactUsRepository contactusrepository;

		@Test
		public void insertContactUs() {
			ContactUs CU = new ContactUs();
			//CU.setCId(1);
			CU.setName("dhanush");
			CU.setEmailId("@gmail.com");
			CU.setContactNo(789456123);
			CU.setDescription("NO Description");
			contactusrepository.save(CU);
			assertNotNull(contactusrepository.findById(2).get());
		} 

}
