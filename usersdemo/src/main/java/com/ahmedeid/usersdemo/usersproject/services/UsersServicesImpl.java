package com.ahmedeid.usersdemo.usersproject.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ahmedeid.usersdemo.usersproject.entities.Users;
import com.ahmedeid.usersdemo.usersproject.repo.UsersRepository;

@Service
public class UsersServicesImpl implements UsersServices {

	@Autowired
	private UsersRepository userRepo;
	
	@Override
	public List<Users> findAll() {
		return userRepo.findAll();
	}

	@Override
	public Users findById(Integer id) {
		return userRepo.getOne(id);
	}

	@Override
	public Users saveUsers(Users user) {
		return userRepo.save(user);
	}

	@Override
	public void deleteUser(Integer id) {
		userRepo.delete(findById(id));
	}

}
