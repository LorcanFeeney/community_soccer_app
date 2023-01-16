package com.soccerapp.soccerleagueapp.repository;

import com.soccerapp.soccerleagueapp.dao.LeagueData;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface LeagueRepository extends JpaRepository<LeagueData, Integer> {
    List<LeagueData> findAll();
}
