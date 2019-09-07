package com.ahmedeid.usersdemo.usersproject.restapi;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ahmedeid.usersdemo.usersproject.entities.Users;
import com.ahmedeid.usersdemo.usersproject.services.UsersServices;

@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping("/users")
public class RestUserController {

	
	// get all users to view on web as angular project
	@Autowired
	private UsersServices userServices;
	
	@GetMapping("/allusers")
	public List<Users> allUsers() {
		return userServices.findAll();
	}
	
	// get user by it's id 
	@GetMapping("/allusers/{userId}")
	public Users getUserById(@PathVariable Integer userId) {
		Users user = userServices.findById(userId);
		if(user == null) {
			throw new RuntimeException("user not found at id = " + userId);
		}
		return user;
	}
	
	// save user
	@PostMapping("/allusers")
	public Users addUser(@RequestBody Users user) {	
		userServices.saveUsers(user);
		return user;
	}
	// update user
	@PutMapping("/allusers/{userId}")
	public ResponseEntity<Users> updataUser(@PathVariable Integer userId , @RequestBody Users user) {
		Users getUser = userServices.findById(userId);
		
		if(getUser != null && getUser.getId() == user.getId()) {
			return new ResponseEntity<>(userServices.saveUsers(user) , HttpStatus.OK);
		}
		return new ResponseEntity("user id not found !!! :(", HttpStatus.NOT_FOUND);
	}
	// delete user 
	@DeleteMapping("/allusers/{userId}")
	public ResponseEntity removeUser(@PathVariable Integer userId) {
		Users user = userServices.findById(userId);
		if(user == null) {
			throw new RuntimeException("user not found at id = " + userId);
		}
		userServices.deleteUser(userId);
		return new ResponseEntity<>("<h3>Employee Deleted at Id : </h3>" + userId , HttpStatus.NO_CONTENT) ;
	}
}



























