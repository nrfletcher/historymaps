package com.historymaps.repository;

import com.historymaps.model.Marker;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MarkerRepository extends JpaRepository<Marker, Long> {
    List<Marker> getAllMarkers();
}
