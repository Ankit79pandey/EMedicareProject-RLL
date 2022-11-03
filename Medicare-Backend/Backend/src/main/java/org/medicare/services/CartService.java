package org.medicare.services;

import java.util.List;

import org.medicare.entity.CartItem;

public interface CartService {

	void insertCart(CartItem cart);

	void addToCart(CartItem Citem);

	void deleteCart(int cartId);
    //will delete the specific id of cart associated with the product added in cart of that user
	List<CartItem> getCart(String username);
    //will get the cart of user with his username
}
