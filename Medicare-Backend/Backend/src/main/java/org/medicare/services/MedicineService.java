package org.medicare.services;
import org.medicare.entity.*;
import java.util.List;



public interface MedicineService {
	void insertMedicines(Medicines medicines);
//	Medicines updateUser(Medicines medicines,int medicineId);
//	
	void deleteMedicines(int medicineId);
	Medicines findById(int medicineId);
	List<Medicines>getMedicineDetails();
	Medicines updateMedicine(Medicines medicine, int medicineId);
	Medicines updateMedicines(Medicines medicine, int medicineId);
	
	
}
