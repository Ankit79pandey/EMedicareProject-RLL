package org.medicare.controller;
import org.medicare.services.*;
import java.util.List;

import org.medicare.entity.Medicines;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/MedicineList")
public class MedicineController {
private MedicineService medicineService;

public MedicineController(MedicineService medicineService) {
	super();
	this.medicineService = medicineService;
}
@PostMapping("/medicines")
public Medicines insert(@RequestBody Medicines medicines)
{
	medicineService.insertMedicines(medicines);
	return medicines;
}
@GetMapping("/medicines")
public List<Medicines> getMedicineDetails() 
{
	List<Medicines> medicines = medicineService.getMedicineDetails();
	return medicines;
}

@GetMapping("/medicines/{medicineId}")
public Medicines getMedicineById(@PathVariable("medicineId") int medicineId) {	
	
	Medicines M = medicineService.findById(medicineId);
	return M;
}
@DeleteMapping("/medicines/{medicineId}")
public ResponseEntity<Object> deleteMedicine(@PathVariable("medicineId") int medicineId) {
	medicineService.deleteMedicines(medicineId);
	return new ResponseEntity<>("deleted successsfully", HttpStatus.OK);
	}
{
	
}
@PutMapping("/medicine/{medicineId}")
public ResponseEntity<Object> UpdateMedicines(@RequestBody Medicines medicine,@PathVariable int  medicineId){
	Medicines data= medicineService.updateMedicines(medicine, medicineId);
	
	if(data!=null)
		return new ResponseEntity<Object>(data,HttpStatus.OK);
	else
		return new ResponseEntity<Object>("User is Not Available",HttpStatus.NOT_FOUND);
}
}
