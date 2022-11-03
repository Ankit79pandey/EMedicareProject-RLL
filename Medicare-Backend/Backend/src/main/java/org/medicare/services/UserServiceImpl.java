package org.medicare.services;

import org.medicare.dao.UserRepository;
import org.medicare.entity.AuthenticationStatus;
import org.medicare.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class UserServiceImpl implements UserService {
private UserRepository userRepository;

@Autowired
private UserRepository userRepo;

public UserServiceImpl(UserRepository userRepository) {
	super();
	this.userRepository = userRepository;
	
}
	@Override
	public void insertUser(User user) {
		userRepository.save(user);
		
	}

	@Override
	public AuthenticationStatus getStatus(String username, String password) {
		AuthenticationStatus status;
		User user=userRepo.findByUsernameAndPassword(username, password);
		if(user!=null) {
			status=new AuthenticationStatus(user.getUsername(), user.getPassword(), true);
		}
		else
		{
			status=new AuthenticationStatus(null,null,false);
		}
		return status;
		
	}
	@Override
	public User getUser(String username) {
		User user=userRepository.findByUsername(username);
		return user;
	}
	@Override
	public User updateUser(String username,User user) {
		User old_user=userRepository.findByUsername(username);
		User temp_user=user;
		temp_user.setUserId(old_user.getUserId());
		User new_user =userRepository.save(temp_user);
		return new_user;
		
		
	}


}
