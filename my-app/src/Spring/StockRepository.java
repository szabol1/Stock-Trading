// File: src/main/java/com/example/papertradingapp/repository/StockRepository.java
package com.example.papertradingapp.repository;

import com.example.papertradingapp.model.Stock;
import com.example.papertradingapp.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StockRepository extends JpaRepository<Stock, Long> {
    Stock findByNameAndUser(String name, User user);
}
