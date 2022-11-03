package org.medicare.controller;

import java.util.List;

import org.medicare.entity.ContactUs;
import org.medicare.services.ContactUsService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v3")
public class ContactUsController {
private ContactUsService contactService;

public ContactUsController(ContactUsService contactService) {
	super();
	this.contactService = contactService;
}
@GetMapping("/contactUs")
public List<ContactUs> getContactus(){
	List<ContactUs> c = contactService.getQueries();
	return c;
}

@PostMapping("/contactUs")
public ResponseEntity insert(@RequestBody ContactUs contactUs) {
	contactService.insertMsg(contactUs);
	return new ResponseEntity<>(HttpStatus.CREATED);
}
}
