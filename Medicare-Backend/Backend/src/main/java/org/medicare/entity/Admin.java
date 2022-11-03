package org.medicare.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity


public class Admin {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
private int adminId;
private String admin;
private String password;


public int getAdminId() {
	return adminId;
}
public void setAdminId(int adminId) {
	this.adminId = adminId;
}
public String getAdmin() {
	return admin;
}
public void setAdmin(String admin) {
	this.admin = admin;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}



}
