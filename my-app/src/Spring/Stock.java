// File: src/main/java/com/example/papertradingapp/model/Stock.java
package com.example.papertradingapp.model;

import lombok.Data;
import javax.persistence.*;
import java.util.Objects;

@Entity
@Data
public class Stock {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private double currentPrice;
    private int quantityHeld;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;


    public Stock() {
    }

    public Stock(Long id, String name, double currentPrice, int quantityHeld, User user) {
        this.id = id;
        this.name = name;
        this.currentPrice = currentPrice;
        this.quantityHeld = quantityHeld;
        this.user = user;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getCurrentPrice() {
        return this.currentPrice;
    }

    public void setCurrentPrice(double currentPrice) {
        this.currentPrice = currentPrice;
    }

    public int getQuantityHeld() {
        return this.quantityHeld;
    }

    public void setQuantityHeld(int quantityHeld) {
        this.quantityHeld = quantityHeld;
    }

    public User getUser() {
        return this.user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Stock id(Long id) {
        setId(id);
        return this;
    }

    public Stock name(String name) {
        setName(name);
        return this;
    }

    public Stock currentPrice(double currentPrice) {
        setCurrentPrice(currentPrice);
        return this;
    }

    public Stock quantityHeld(int quantityHeld) {
        setQuantityHeld(quantityHeld);
        return this;
    }

    public Stock user(User user) {
        setUser(user);
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof Stock)) {
            return false;
        }
        Stock stock = (Stock) o;
        return Objects.equals(id, stock.id) && Objects.equals(name, stock.name) && currentPrice == stock.currentPrice && quantityHeld == stock.quantityHeld && Objects.equals(user, stock.user);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, currentPrice, quantityHeld, user);
    }

    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", name='" + getName() + "'" +
            ", currentPrice='" + getCurrentPrice() + "'" +
            ", quantityHeld='" + getQuantityHeld() + "'" +
            ", user='" + getUser() + "'" +
            "}";
    }
    
}
