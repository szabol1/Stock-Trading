// File: src/main/java/com/example/papertradingapp/repository/UserRepository.java
package com.example.papertradingapp.repository;

import com.example.papertradingapp.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
