package org.medicare.test;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.medicare.dao.CartRepository;
import org.medicare.entity.CartItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class CartTest {
	@Autowired
	CartRepository cartrepository;
	
	@Test
	public void insertMedicines() {
		CartItem C = new CartItem();
		C.setMedicineId(1);
		C.setMedicineName("alo");
		C.setPrice(75);
		C.setDescription("nothing");
		cartrepository.save(C);
		assertNotNull(cartrepository.findById(1).get());
	} 
	@Test
	public void showAllMedicines() {
		List<CartItem> list = cartrepository.findAll();
		assertThat(list).size().isGreaterThan(0);
	}
	@Test
	public void deleteMedicine() {
		cartrepository.deleteById(1);
		assertThat(cartrepository.existsById(1)).isFalse();
	}
}
