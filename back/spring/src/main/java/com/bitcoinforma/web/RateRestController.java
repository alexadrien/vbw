package com.bitcoinforma.web;

import com.bitcoinforma.domain.Rate;
import com.bitcoinforma.domain.RateRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;
import java.util.Collection;

@RestController
@CrossOrigin
@RequestMapping("/api/rates")
public class RateRestController {

    private RateRepository repository;
    private Long latestId = null;

    @Inject
    public void setRepository(RateRepository repository) {
        this.repository = repository;
    }

    @RequestMapping(
            method = RequestMethod.POST)
    public ResponseEntity<?> addRate(@RequestBody Rate rate) {
        Rate addedRate = repository.save(rate);
        latestId = addedRate.getId();
        return new ResponseEntity<>(addedRate, HttpStatus.CREATED);
    }

    @RequestMapping(
            method = RequestMethod.GET)
    public ResponseEntity<Collection<Rate>> getAllRates() {
        return new ResponseEntity<>(repository.findAll(), HttpStatus.OK);
    }

    @RequestMapping(
            value = "/latest",
            method = RequestMethod.GET)
    public ResponseEntity<Collection<Rate>> getLatestRate() {
        if(latestId != null){
            return new ResponseEntity<>(repository.findById(latestId), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    @RequestMapping(
            value = "/{id}",
            method = RequestMethod.GET)
    public ResponseEntity<Rate> getRateWithId(@PathVariable Long id) {
        return new ResponseEntity<>(repository.findOne(id), HttpStatus.OK);
    }

//    @RequestMapping(
//            params = {"timestamp"},
//            method = RequestMethod.GET)
//    public ResponseEntity<Collection<Rate>> findRateWithTimestamps(@RequestParam(value = "timestamp") String rateTimestamp) {
//        return new ResponseEntity<>(repository.findByTimestamp(rateTimestamp), HttpStatus.OK);
//    }

    @RequestMapping(
            value = "/{id}",
            method = RequestMethod.PUT)
    public ResponseEntity<Rate> updateRateFromDB(@PathVariable("id") long id, @RequestBody Rate rate) {

        Rate currentRate = repository.findOne(id);
        currentRate.setRateValue(rate.getRateValue());
        currentRate.setRateTimestamp(rate.getRateTimestamp());

        return new ResponseEntity<>(repository.save(currentRate), HttpStatus.OK);
    }

    @RequestMapping(
            value = "/{id}",
            method = RequestMethod.DELETE)
    public void deleteRateWithId(@PathVariable Long id) {
        repository.delete(id);
    }

    @RequestMapping(
            method = RequestMethod.DELETE)
    public void deleteAllRates() {
        repository.deleteAll();
    }
}
