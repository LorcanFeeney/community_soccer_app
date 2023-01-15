package com.soccerapp.soccerleagueapp.controller;

import com.soccerapp.soccerleagueapp.dao.Teams;
import com.soccerapp.soccerleagueapp.service.TeamsService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/teams")
public class TeamController {

    private final TeamsService teamsService;

    public TeamController(TeamsService teamsService) {
        this.teamsService = teamsService;
    }

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public List<Teams> getTeams(){
        System.out.println("Lorcan");
        List<Teams> teams = this.teamsService.getAllTeams();
        return teams;
    }
}
