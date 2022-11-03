package org.medicare.dao;

import org.medicare.entity.ContactUs;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface ContactUsRepository extends JpaRepository<ContactUs, Integer>{

}
