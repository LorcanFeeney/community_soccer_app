package com.soccerapp.soccerleagueapp.repository;

import com.soccerapp.soccerleagueapp.dao.Teams;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface TeamsRepository extends JpaRepository<Teams, UUID> {
    List<Teams> findAll();
}
