package com.soccerapp.soccerleagueapp.controller;

import com.soccerapp.soccerleagueapp.dao.Competition;
import com.soccerapp.soccerleagueapp.service.CompetitionService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/competitions")
public class CompetitionController {

    CompetitionService competitionService;

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public List<Competition> getCompetitions(){
        List<Competition> competitions = this.competitionService.getAllCompetitions();
        return competitions;
    }
}
