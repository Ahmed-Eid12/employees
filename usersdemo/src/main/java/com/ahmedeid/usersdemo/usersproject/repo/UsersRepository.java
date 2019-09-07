package com.ahmedeid.usersdemo.usersproject.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.ahmedeid.usersdemo.usersproject.entities.Users;

@Repository
public interface UsersRepository extends JpaRepository<Users, Integer> {

}
