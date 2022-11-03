package org.medicare.services;

import org.medicare.entity.AuthenticationStatus;
import org.medicare.entity.User;


public interface UserService {
 void insertUser(User user);
 AuthenticationStatus getStatus(String username,String password);
User getUser(String username);
User updateUser(String username, User user);
}
