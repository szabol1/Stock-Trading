// File: src/main/java/com/example/papertradingapp/controller/StockController.java
package com.example.papertradingapp.controller;

import com.example.papertradingapp.model.Stock;
import com.example.papertradingapp.service.StockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/stocks")
public class StockController {

    @Autowired
    private StockService stockService;

    @PostMapping("/buy")
    public Stock buyStock(@RequestParam Long userId, @RequestParam String stockName,
                          @RequestParam double price, @RequestParam int quantity) {
        return stockService.buyStock(userId, stockName, price, quantity);
    }

    @PostMapping("/sell")
    public Stock sellStock(@RequestParam Long userId, @RequestParam String stockName,
                           @RequestParam double price, @RequestParam int quantity) {
        return stockService.sellStock(userId, stockName, price, quantity);
    }
}
