package org.medicare.services;

import org.medicare.entity.Admin;
import org.medicare.entity.AdminAuthenticationStatus;

public interface AdminService {
void insertAdmin(Admin admin);
AdminAuthenticationStatus getAdminStatus(String admin,String password);
}
