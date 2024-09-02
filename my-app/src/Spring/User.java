// File: src/main/java/com/example/papertradingapp/model/User.java
package com.example.papertradingapp.model;

import lombok.Data;
import javax.persistence.*;
import java.util.List;
import java.util.Objects;

@Entity
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private double balance = 100000.0;  // Default starting balance

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Stock> portfolio;

    public User() {
    }

    public User(Long id, String username, double balance, List<Stock> portfolio) {
        this.id = id;
        this.username = username;
        this.balance = balance;
        this.portfolio = portfolio;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public double getBalance() {
        return this.balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    public List<Stock> getPortfolio() {
        return this.portfolio;
    }

    public void setPortfolio(List<Stock> portfolio) {
        this.portfolio = portfolio;
    }

    public User id(Long id) {
        setId(id);
        return this;
    }

    public User username(String username) {
        setUsername(username);
        return this;
    }

    public User balance(double balance) {
        setBalance(balance);
        return this;
    }

    public User portfolio(List<Stock> portfolio) {
        setPortfolio(portfolio);
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof User)) {
            return false;
        }
        User user = (User) o;
        return Objects.equals(id, user.id) && Objects.equals(username, user.username) && balance == user.balance && Objects.equals(portfolio, user.portfolio);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, username, balance, portfolio);
    }

    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", username='" + getUsername() + "'" +
            ", balance='" + getBalance() + "'" +
            ", portfolio='" + getPortfolio() + "'" +
            "}";
    }


}
