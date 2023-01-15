package com.soccerapp.soccerleagueapp.service;

import com.soccerapp.soccerleagueapp.dao.Competition;
import com.soccerapp.soccerleagueapp.repository.CompetitionRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompetitionService {

    CompetitionRepository competitionRepository;

    public List<Competition> getAllCompetitions(){
        return competitionRepository.findAll();
    }
}
