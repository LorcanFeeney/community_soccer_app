package com.soccerapp.soccerleagueapp.controller;


import com.soccerapp.soccerleagueapp.dao.Fixture;
import com.soccerapp.soccerleagueapp.dao.Teams;
import com.soccerapp.soccerleagueapp.service.FixtureService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/fixtures")
public class Fixtures {

    private final FixtureService fixtureService;

    public Fixtures(FixtureService fixtureService) {
        this.fixtureService = fixtureService;
    }

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public List<Fixture> getFixtures(){
        return this.fixtureService.getAllfixtures();
    }
}
