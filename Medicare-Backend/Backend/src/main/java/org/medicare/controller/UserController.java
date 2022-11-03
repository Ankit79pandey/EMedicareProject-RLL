package org.medicare.controller;

import org.medicare.entity.AuthenticationStatus;
import org.medicare.entity.User;
import org.medicare.services.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class UserController {
private UserService userService;
 
public UserController(UserService userService) {
	super();
	this.userService = userService;
}
@PostMapping("/users")
public ResponseEntity insert(@RequestBody User user) {
	userService.insertUser(user);
	return new ResponseEntity<User>(HttpStatus.CREATED);
}

@PostMapping("/user")
public ResponseEntity<AuthenticationStatus> authenticate(@RequestBody User user) {
	System.out.println(user.getUsername()+"\t"+user.getPassword());
	AuthenticationStatus status=userService.getStatus(user.getUsername(), user.getPassword());
	return new ResponseEntity<AuthenticationStatus>(status,HttpStatus.ACCEPTED);
	
}
@GetMapping("/users/{username}")
public  ResponseEntity <User> getUser(@PathVariable("username") String username ) {
	User user=userService.getUser(username);
	return new ResponseEntity<User>(user,HttpStatus.OK);
}

@PutMapping("/users/{username}")
public ResponseEntity<User> updateUser(@PathVariable("username") String username,@RequestBody User user) {
	User new_user=userService.updateUser(username,user);
	return new ResponseEntity<User>(new_user,HttpStatus.OK);
	
}
}
