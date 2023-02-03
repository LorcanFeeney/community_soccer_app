package com.soccerapp.soccerleagueapp.dao;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;
import java.util.UUID;

@Entity
@Table(name = "matches")
@Data
public class Fixture {

    @Id
    @Column(name="match_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer teamName;

    @Column(name="home_team_id")
    private Integer homeTeamId;

    @Column(name="away_team_id")
    private Integer awayTeamId;

    @Column(name="match_date")
    private Date matchDate;

    @Column(name="league_id")
    private Integer leagueId;
}
