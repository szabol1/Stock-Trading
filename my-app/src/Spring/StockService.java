// File: src/main/java/com/example/papertradingapp/service/StockService.java
package com.example.papertradingapp.service;

import com.example.papertradingapp.model.Stock;
import com.example.papertradingapp.model.User;
import com.example.papertradingapp.repository.StockRepository;
import com.example.papertradingapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StockService {

    @Autowired
    private StockRepository stockRepository;

    @Autowired
    private UserRepository userRepository;

    public Stock buyStock(Long userId, String stockName, double price, int quantity) {
        User user = userRepository.findById(userId).orElse(null);
        if (user != null && user.getBalance() >= price * quantity) {
            Stock stock = stockRepository.findByNameAndUser(stockName, user);
            if (stock == null) {
                stock = new Stock();
                stock.setName(stockName);
                stock.setUser(user);
            }
            stock.setQuantityHeld(stock.getQuantityHeld() + quantity);
            stock.setCurrentPrice(price);
            user.setBalance(user.getBalance() - price * quantity);
            userRepository.save(user);
            return stockRepository.save(stock);
        }
        return null;
    }

    public Stock sellStock(Long userId, String stockName, double price, int quantity) {
        User user = userRepository.findById(userId).orElse(null);
        if (user != null) {
            Stock stock = stockRepository.findByNameAndUser(stockName, user);
            if (stock != null && stock.getQuantityHeld() >= quantity) {
                stock.setQuantityHeld(stock.getQuantityHeld() - quantity);
                stock.setCurrentPrice(price);
                user.setBalance(user.getBalance() + price * quantity);
                userRepository.save(user);
                return stockRepository.save(stock);
            }
        }
        return null;
    }
}
