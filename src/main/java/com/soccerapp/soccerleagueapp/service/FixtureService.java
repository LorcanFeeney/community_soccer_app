package com.soccerapp.soccerleagueapp.service;

import com.soccerapp.soccerleagueapp.dao.Fixture;
import com.soccerapp.soccerleagueapp.dao.Teams;
import com.soccerapp.soccerleagueapp.repository.FixtureRepository;
import com.soccerapp.soccerleagueapp.repository.TeamsRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class FixtureService {

    private final FixtureRepository fixtureRepository;

    public FixtureService(FixtureRepository fixtureRepository) {
        this.fixtureRepository = fixtureRepository;
    }

    public List<Fixture> getAllfixtures(){
        return fixtureRepository.findAll();
    }
}
