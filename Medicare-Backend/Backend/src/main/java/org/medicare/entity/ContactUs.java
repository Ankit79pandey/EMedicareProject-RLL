package org.medicare.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity

public class ContactUs {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int cId;	
private String name;
private String emailId;
private long contactNo;
private String description;
public int getcId() {
	return cId;
}
public void setcId(int cId) {
	this.cId = cId;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getEmailId() {
	return emailId;
}
public void setEmailId(String emailId) {
	this.emailId = emailId;
}
public long getContactNo() {
	return contactNo;
}
public void setContactNo(long contactNo) {
	this.contactNo = contactNo;
}
public String getDescription() {
	return description;
}
public void setDescription(String description) {
	this.description = description;
}


}
