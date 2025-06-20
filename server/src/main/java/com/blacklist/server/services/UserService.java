package com.blacklist.server.services;

import com.blacklist.server.entities.User;
import com.blacklist.server.models.UserLogin;
import com.blacklist.server.repositories.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // Devuelve el usuario si existe con ese username y password
    public Optional<User> getUserByLogin(UserLogin userLogin) {
        return userRepository.getUserByUsernameAndPassword(
                userLogin.getUsername(),
                userLogin.getPassword()
        );
    }

    // Devuelve el usuario por id
    public Optional<User> getUserById(Integer id) {
        return userRepository.findById(id);
    }
}