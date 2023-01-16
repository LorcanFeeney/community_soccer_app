package com.soccerapp.soccerleagueapp.controller;

import com.soccerapp.soccerleagueapp.dao.LeagueData;
import com.soccerapp.soccerleagueapp.service.LeagueService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/leagues")
public class LeagueDataController {

    private final LeagueService leagueService;

    public LeagueDataController(LeagueService leagueService) {
        this.leagueService = leagueService;
    }

    @RequestMapping(value = "/data", method = RequestMethod.GET)
    public List<LeagueData> getTeams(){
        List<LeagueData> teams = this.leagueService.getLeagueData();
        return teams;
    }
}
