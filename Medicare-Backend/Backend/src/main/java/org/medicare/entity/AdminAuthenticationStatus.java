package org.medicare.entity;


public class AdminAuthenticationStatus {
private String admin;
private String password;
private boolean adminAuthenticated;
 


public AdminAuthenticationStatus() {
	super();
	// TODO Auto-generated constructor stub
}


public AdminAuthenticationStatus(String admin, String password, boolean adminAuthenticated) {
	super();
	this.admin = admin;
	this.password = password;
	this.adminAuthenticated = adminAuthenticated;
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
public boolean isAdminAuthenticated() {
	return adminAuthenticated;
}
public void setAdminAuthenticated(boolean adminAuthenticated) {
	this.adminAuthenticated = adminAuthenticated;
}


}
