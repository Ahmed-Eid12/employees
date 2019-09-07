package com.ahmedeid.usersdemo.usersproject.services;

import java.util.List;


import com.ahmedeid.usersdemo.usersproject.entities.Users;

public interface UsersServices {
	
	
	// CRUD for User
	
	public List<Users> findAll();
	
	public Users findById(Integer id);
	
	public Users saveUsers(Users user);
	
	public void deleteUser(Integer id);
}
