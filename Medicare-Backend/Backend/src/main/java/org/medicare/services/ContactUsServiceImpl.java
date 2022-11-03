package org.medicare.services;

import java.util.List;

import org.medicare.dao.ContactUsRepository;
import org.medicare.entity.ContactUs;
import org.springframework.stereotype.Service;

@Service
public class ContactUsServiceImpl implements ContactUsService {
private ContactUsRepository contactUsRepository;

public ContactUsServiceImpl(ContactUsRepository contactUsRepository) {
	super();
	this.contactUsRepository = contactUsRepository;
}

@Override
public void insertMsg(ContactUs contactUs) {
	contactUsRepository.save(contactUs);
	
}

@Override
public List<ContactUs> getQueries() {
	// TODO Auto-generated method stub
	List<ContactUs> C = contactUsRepository.findAll();
	return C;
}

}
