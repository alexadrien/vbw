package com.bitcoinforma.domain;

import javax.persistence.*;

@Entity
public class Rate {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private float rateValue;
    private String rateTimestamp;

    public Rate(float rateValue, String rateTimestamp) {
        this.rateValue = rateValue;
        this.rateTimestamp = rateTimestamp;
    }

    public Rate() {
    }

    public Long getId() {
        return id;
    }

    public float getRateValue() {
        return rateValue;
    }

    public void setRateValue(float rateValue) {
        this.rateValue = rateValue;
    }

    public String getRateTimestamp() {
        return rateTimestamp;
    }

    public void setRateTimestamp(String rateTimestamp) {
        this.rateTimestamp = rateTimestamp;
    }
    
    public void setId(Long id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "Rate{" +
                "id=" + id +
                ", rateValue='" + rateValue + '\'' +
                ", rateTimestamp='" + rateTimestamp + '\'' +
                '}';
    }
}
