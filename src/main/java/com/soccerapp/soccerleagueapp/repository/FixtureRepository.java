package com.soccerapp.soccerleagueapp.repository;

import com.soccerapp.soccerleagueapp.dao.Fixture;
import com.soccerapp.soccerleagueapp.dao.Teams;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface FixtureRepository extends JpaRepository<Fixture, UUID> {
    List<Fixture> findAll();
}
