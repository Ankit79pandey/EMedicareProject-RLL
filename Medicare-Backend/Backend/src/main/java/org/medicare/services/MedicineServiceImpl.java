package org.medicare.services;

import java.util.List;

import org.medicare.dao.MedicineRepository;
import org.medicare.entity.Medicines;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class MedicineServiceImpl implements MedicineService{
private MedicineRepository medicineRepository;

public MedicineServiceImpl(MedicineRepository medicineRepository) {
	super();
	this.medicineRepository = medicineRepository;
}

@Autowired
private MedicineRepository medicineRepo;

@Override
public void insertMedicines(Medicines medicines) {
	medicineRepository.save(medicines);
	
}

//@Override
//public void updateMedicines(Medicines medicine) {
//	//Medicines m =medicineRepository.findById(medicine.getMedicineId()).orElse(null);
//	medicineRepository.save(medicine);
//}

@Override
public void deleteMedicines(int medicineId) {
	//Medicines m = medicineRepository.getById(medicineId);
	medicineRepository.deleteById(medicineId);
}

@Override
public Medicines findById(int medicineId) {
	Medicines m = medicineRepository.findByMedicineId(medicineId);
	return m;
}

@Override
public List<Medicines> getMedicineDetails() {
	List<Medicines> medicines = medicineRepository.findAll();
	return medicines;
}


public Medicines updateMedicines(Medicines medicine, int medicineId) {
	if(medicineRepo.findById(medicineId).isPresent())
	{
		Medicines old= medicineRepo.findById(medicineId).get();
		old.setSeller(medicine.getSeller());
	old.setStatus(medicine.getStatus());
		old.setDescription(medicine.getDescription());
		old.setExpdate(medicine.getExpdate());
		old.setManufactureDate(medicine.getManufactureDate());
		old.setMedicineName(medicine.getMedicineName());
		old.setPrice(medicine.getPrice());
		old.setType(medicine.getType());
		old.setStock(medicine.getStock());

		return medicineRepo.save(old);
	}
	else
	{
		return null;
	}
}

@Override
public Medicines updateMedicine(Medicines medicine, int medicineId) {
	// TODO Auto-generated method stub
	return null;
}

//public Medicines updateMedicine(Medicines medicine, int medicineId) {
//	// TODO Auto-generated method stub
//	if(medicineRepo.findById(medicineId).isPresent())
//	{
//		Medicines old= medicineRepo.findById(medicineId).get();
//		old.setSeller(medicine.getSeller());
//	old.setStatus(medicine.getStatus());
//		old.setDescription(medicine.getDescription());
//		old.setExpdate(medicine.getExpdate());
//		old.setManufactureDate(medicine.getManufactureDate());
//		old.setMedicineName(medicine.getMedicineName());
//		old.setPrice(medicine.getPrice());
//		old.setType(medicine.getType());
//
//		return medicineRepository.save(old);
//	}
//	else
//	{
//		return null;
//	}}
}


