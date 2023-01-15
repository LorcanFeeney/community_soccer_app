package com.soccerapp.soccerleagueapp.service;

import com.soccerapp.soccerleagueapp.dao.Teams;
import com.soccerapp.soccerleagueapp.repository.TeamsRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class TeamsService {

    private final TeamsRepository teamsRepository;

    public TeamsService(TeamsRepository teamsRepository) {
        this.teamsRepository = teamsRepository;
    }

    public List<Teams> getAllTeams(){
        return teamsRepository.findAll();
    }
}
