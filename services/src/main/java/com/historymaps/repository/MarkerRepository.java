package com.historymaps.repository;

import com.historymaps.model.Marker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface MarkerRepository extends JpaRepository<Marker, Long> {
}
