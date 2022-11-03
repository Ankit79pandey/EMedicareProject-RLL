package org.medicare.dao;

import java.util.List;

import org.medicare.entity.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartRepository extends JpaRepository<CartItem, Integer> {
	
	CartItem findByMedicineId(int MedicineId) ;
	List<CartItem> findByUserId(int userId) ;
}