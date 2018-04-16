package com.bitcoinforma.web;

import com.bitcoinforma.domain.Capital;
import com.bitcoinforma.domain.CapitalRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;
import java.util.Collection;

@RestController
@CrossOrigin
@RequestMapping("/api/capital")
public class CapitalRestController {

    private CapitalRepository repository;
    private Long latestId = null;

    @Inject
    public void setRepository(CapitalRepository repository) {
        this.repository = repository;
    }

    @RequestMapping(
            method = RequestMethod.POST)
    public ResponseEntity<?> addCapital(@RequestBody Capital capital) {
        Capital addedCapital = repository.save(capital);
        latestId = addedCapital.getId();
        return new ResponseEntity<>(addedCapital, HttpStatus.CREATED);
    }

    @RequestMapping(
            method = RequestMethod.GET)
    public ResponseEntity<Collection<Capital>> getAllCapitals() {
        return new ResponseEntity<>(repository.findAll(), HttpStatus.OK);
    }

    @RequestMapping(
            value = "/latest",
            method = RequestMethod.GET)
    public ResponseEntity<?> getLatest() {
        if(latestId != null){
            return new ResponseEntity<>(repository.findById(latestId), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    @RequestMapping(
            value = "/{id}",
            method = RequestMethod.GET)
    public ResponseEntity<Capital> getCapitalWithId(@PathVariable Long id) {
        return new ResponseEntity<>(repository.findOne(id), HttpStatus.OK);
    }

//    @RequestMapping(
//            params = {"timestamp"},
//            method = RequestMethod.GET)
//    public ResponseEntity<Collection<Capital>> findCapitalWithTimestamps(@RequestParam(value = "timestamp") String capitalTimestamp) {
//        return new ResponseEntity<>(repository.findByTimestamp(capitalTimestamp), HttpStatus.OK);
//    }

    @RequestMapping(
            value = "/{id}",
            method = RequestMethod.PUT)
    public ResponseEntity<Capital> updateCapitalFromDB(@PathVariable("id") long id, @RequestBody Capital capital) {

        Capital currentCapital = repository.findOne(id);
        currentCapital.setCapitalBtcValue(capital.getCapitalBtcValue());
        currentCapital.setCapitalEurValue(capital.getCapitalEurValue());
        currentCapital.setCapitalTimestamp(capital.getCapitalTimestamp());

        return new ResponseEntity<>(repository.save(currentCapital), HttpStatus.OK);
    }

    @RequestMapping(
            value = "/{id}",
            method = RequestMethod.DELETE)
    public void deleteCapitalWithId(@PathVariable Long id) {
        repository.delete(id);
    }

    @RequestMapping(
            method = RequestMethod.DELETE)
    public void deleteAllCapitals() {
        repository.deleteAll();
    }
}
