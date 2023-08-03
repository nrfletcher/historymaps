package com.historymaps.controller;

import com.historymaps.model.Marker;
import com.historymaps.repository.MarkerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/history")
public class MarkerController {

    @Autowired
    MarkerRepository markerRepository;

    @GetMapping("/markers")
    public ResponseEntity<List<Marker>> getAllMarkers(@RequestParam(required = false) String title) {
        try {
            List<Marker> markers = new ArrayList<>();

            if (title == null)
                markerRepository.findAll().forEach(markers::add);

            if (markers.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(markers, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/markers/{id}")
    public ResponseEntity<Marker> getMarkerById(@PathVariable("id") long id) {
        Optional<Marker> markerData = markerRepository.findById(id);

        return markerData.map(marker -> new ResponseEntity<>(marker, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/markers")
    public ResponseEntity<Marker> createMarker(@RequestBody Marker marker) {
        try {
            Marker _marker = markerRepository
                    .save(new Marker(marker.getLatitude(), marker.getLongitude(), marker.getImg(), marker.getTitle(), marker.getDate(), marker.getYear(), marker.getDescription(), marker.getWiki()));
            return new ResponseEntity<>(_marker, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/markers/{id}")
    public ResponseEntity<Marker> updateMarker(@PathVariable("id") long id, @RequestBody Marker marker) {
        Optional<Marker> markerData = markerRepository.findById(id);

        if (markerData.isPresent()) {
            Marker _marker = markerData.get();
            _marker.setDate(marker.getDate());
            _marker.setDescription(marker.getDescription());
            _marker.setYear(marker.getYear());
            _marker.setImg(marker.getImg());
            _marker.setLatitude(marker.getLatitude());
            _marker.setLongitude(marker.getLongitude());
            _marker.setTitle(marker.getTitle());
            _marker.setWiki(marker.getWiki());

            return new ResponseEntity<>(markerRepository.save(_marker), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/markers/{id}")
    public ResponseEntity<HttpStatus> deleteMarker(@PathVariable("id") long id) {
        try {
            markerRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/markers")
    public ResponseEntity<HttpStatus> deleteAllMarkers() {
        try {
            markerRepository.deleteAll();
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
