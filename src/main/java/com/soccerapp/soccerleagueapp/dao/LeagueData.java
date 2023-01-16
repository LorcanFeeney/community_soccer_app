package com.soccerapp.soccerleagueapp.dao;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.UUID;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "league_table")
@Data
public class LeagueData {

    @Id
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(name="team_id")
    private Integer teamId;

    @Column(name="team_name")
    private String teamName;

    @Column(name="league_id")
    private Integer leagueId;

    @Column(name="matches_played")
    private Integer matchesPlayed;

    @Column(name="matches_won")
    private Integer matchesWon;

    @Column(name="matches_draw")
    private Integer matchesDraw;

    @Column(name="matches_loss")
    private Integer matchesLoss;

    @Column(name="goals_for")
    private Integer goalsFor;

    @Column(name="goals_against")
    private Integer goalsAgainst;

    @Column(name="points")
    private Integer points;

}
