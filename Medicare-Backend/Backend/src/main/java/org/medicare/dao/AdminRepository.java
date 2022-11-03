package org.medicare.dao;

import org.medicare.entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface AdminRepository extends JpaRepository<Admin, Integer>{
Admin findByAdminAndPassword(String admin,String password);
}
