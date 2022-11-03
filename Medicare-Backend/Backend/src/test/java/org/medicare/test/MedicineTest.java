package org.medicare.test;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.medicare.dao.MedicineRepository;
import org.medicare.entity.Medicines;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class MedicineTest {
	@Autowired
	MedicineRepository medicinerepository;

	/*@Test
	void contextLoads() {
	}*/
	
	@Test
	public void insertMedicines() {
		Medicines M = new Medicines();
		//M.setMedicineId(105);
		M.setMedicineName("tiger");
		M.setManufactureDate("22-02-2020");
		M.setType("syrup");
		M.setPrice(90);
		M.setDescription("nothing much");
		M.setExpdate("25-02-2020");
		M.setStatus("available");
		M.setSeller("medcare");
		medicinerepository.save(M);
		assertNotNull(medicinerepository.findById(99).get());
	} 
	
	@Test
	public void showAllMedicines() {
		List<Medicines> list = medicinerepository.findAll();
		assertThat(list).size().isGreaterThan(0);
	}
	
	@Test
	public void getMedicineById() {
		Medicines M = medicinerepository.findByMedicineId(95);
		assertEquals(95, M.getMedicineId());
		
	}
	
	@Test
	public void deleteMedicine() {
		medicinerepository.deleteById(98);
		assertThat(medicinerepository.existsById(98)).isFalse();
	}
	
	@Test
	public void updateMedicine() {
		Medicines M = medicinerepository.findByMedicineId(96);
		M.setPrice(20);
		medicinerepository.save(M);
		assertNotEquals(500, medicinerepository.findByMedicineId(96).getPrice());
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}
