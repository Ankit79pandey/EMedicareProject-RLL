package org.medicare.controller;

import org.medicare.services.*;
import java.util.List;

import org.medicare.entity.CartItem;
import org.medicare.entity.ContactUs;
import org.medicare.entity.Medicines;
import org.medicare.services.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v5")
public class Cartcontroller {
	@Autowired
	private CartService cartService;
	@Autowired
	private MedicineService medicineService;
	@Autowired
	private UserService userService;

	public Cartcontroller(CartService cartService, MedicineService medicineService) {
		super();
		this.cartService = cartService;
		this.medicineService = medicineService;
	}

	@GetMapping("/cart/{username}")
	public List<CartItem> getCart(@PathVariable("username") String username) {
		List<CartItem> Cart = cartService.getCart(username);
		return Cart;
	}

	@GetMapping("/cart/{username}/{medicineId}")
	public CartItem addToCart(@PathVariable("username") String username, @PathVariable("medicineId") int medicineId) {
		Medicines M = medicineService.findById(medicineId);
		int userId = userService.getUser(username).getUserId();
		CartItem Citem = new CartItem();
		Citem.setMedicineId(medicineId);
		Citem.setMedicineName(M.getMedicineName());
		Citem.setDescription(M.getDescription());
		Citem.setPrice(M.getPrice());
		Citem.setUserId(userId);
		cartService.addToCart(Citem);
		return Citem;
	}

	@DeleteMapping("/cart/{cartId}")
	public ResponseEntity<Object> deleteCart(@PathVariable("cartId") int cartId) {
		cartService.deleteCart(cartId);
		return new ResponseEntity<>("deleted successsfully", HttpStatus.OK);
	}
}
