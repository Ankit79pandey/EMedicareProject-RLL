package org.medicare.services;

import java.util.List;

import org.medicare.dao.CartRepository;
import org.medicare.dao.UserRepository;
import org.medicare.entity.CartItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CartServiceImpl implements CartService {
	@Autowired
	private CartRepository cartRepository;
	@Autowired
	private UserRepository userRepository;

	public CartServiceImpl(CartRepository cartRepository) {
		super();
		this.cartRepository = cartRepository;
	}

	@Override
	public void addToCart(CartItem Citem) {
		cartRepository.save(Citem);
	}

	@Override
	public void deleteCart(int cartId) {
		cartRepository.deleteById(cartId);

	}

	@Override
	public List<CartItem> getCart(String username) {
		int id = userRepository.findByUsername(username).getUserId();
		List<CartItem> cart = cartRepository.findByUserId(id);
		return cart;
	}

	@Override
	public void insertCart(CartItem cart) {
		cartRepository.save(cart);
		// TODO Auto-generated method stub

	}

	/*
	 * @Override public Cart findById(int medicineId) { // TODO Auto-generated
	 * method stub Cart C = CartRepository.findByMedicineId(medicineId); return C; }
	 */
}
