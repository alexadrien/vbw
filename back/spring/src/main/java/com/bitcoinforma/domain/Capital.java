package com.bitcoinforma.domain;

import javax.persistence.*;

@Entity
public class Capital {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private float capitalEurValue;
    private float capitalBtcValue;
    private String capitalTimestamp;

    public Capital(float capitalEurValue, float capitalBtcValue, String capitalTimestamp) {
        this.capitalEurValue = capitalEurValue;
        this.capitalBtcValue = capitalBtcValue;
        this.capitalTimestamp = capitalTimestamp;
    }

    public Capital() {
    }

    public Long getId() {
        return id;
    }

    public String getCapitalTimestamp() {
        return capitalTimestamp;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public float getCapitalEurValue() {
        return capitalEurValue;
    }

    public float getCapitalBtcValue() {
        return capitalBtcValue;
    }

    public void setCapitalEurValue(float capitalEurValue) {
        this.capitalEurValue = capitalEurValue;
    }

    public void setCapitalBtcValue(float capitalBtcValue) {
        this.capitalBtcValue = capitalBtcValue;
    }
    
    

    public void setCapitalTimestamp(String capitalTimestamp) {
        this.capitalTimestamp = capitalTimestamp;
    }

    

    @Override
    public String toString() {
        return "Capital{" +
                "id=" + id +
                ", capitalEurValue='" + capitalEurValue + '\'' +
                ", capitalBtcValue='" + capitalBtcValue + '\'' +
                ", capitalTimestamp='" + capitalTimestamp + '\'' +
                '}';
    }
}
