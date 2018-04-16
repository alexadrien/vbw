/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.bitcoinforma;

import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.net.URL;
import java.nio.charset.Charset;
import java.sql.Timestamp;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.json.JSONObject;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

/**
 *
 * @author alex-adrienauger
 */
@Component
public class ScheduledClass {
    
    @Scheduled(cron="0 0 * * * *")
    public void addCurrentRate() {
        InputStream is = null;
        try {
            String url = "https://www.bitstamp.net/api/v2/ticker/btceur/";
            is = new URL(url).openStream();
            BufferedReader rd = new BufferedReader(new InputStreamReader(is, Charset.forName("UTF-8")));
            StringBuilder sb = new StringBuilder();
            int cp;
            while ((cp = rd.read()) != -1) {
                sb.append((char) cp);
            }   String jsonText = sb.toString();
            JSONObject json = new JSONObject(jsonText);
            String rate = json.get("last").toString();
            String nowTS = new Timestamp(System.currentTimeMillis()).toString();
            nowTS = "\"" + nowTS + "\"";
            HttpResponse<String> response = Unirest.post("http://ec2-35-180-43-100.eu-west-3.compute.amazonaws.com:8081/api/rates")
                    .header("Content-Type", "application/json")
                    .header("Authorization", "Basic dXNlcjo4WUduR25KQ1lnZ05SenY=")
                    .header("Cache-Control", "no-cache")
                    .header("Postman-Token", "4ac12312-2a20-46e8-afa5-21f49caaba9f")
                    .body("{\n\t\"rateValue\": "+rate+",\n\t\"rateTimestamp\": "+nowTS+"\n}")
                    .asString();
            is.close();
        } catch (MalformedURLException ex) {
            Logger.getLogger(ScheduledClass.class.getName()).log(Level.SEVERE, null, ex);
        } catch (IOException ex) {
            Logger.getLogger(ScheduledClass.class.getName()).log(Level.SEVERE, null, ex);
        } catch (UnirestException ex) {
            Logger.getLogger(ScheduledClass.class.getName()).log(Level.SEVERE, null, ex);
        } finally {
            try {
                is.close();
            } catch (IOException ex) {
                Logger.getLogger(ScheduledClass.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
    }
    
}
