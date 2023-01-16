package com.soccerapp.soccerleagueapp.service;

import com.soccerapp.soccerleagueapp.dao.LeagueData;
import com.soccerapp.soccerleagueapp.dao.Teams;
import com.soccerapp.soccerleagueapp.repository.LeagueRepository;
import com.soccerapp.soccerleagueapp.repository.TeamsRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class LeagueService {

    private final LeagueRepository leagueRepository;

    public LeagueService(LeagueRepository leagueRepository) {
        this.leagueRepository = leagueRepository;
    }

    public List<LeagueData> getLeagueData(){
        return leagueRepository.findAll();
    }
}
