package com.soccerapp.soccerleagueapp.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class LeagueDataDTO {
    Integer id;
    Integer teamId;
    String teamName;
    Integer leagueId;
    Integer matchesPlayed;
    Integer matchesWon;
    Integer matchesDraw;
    Integer matchesLoss;
    Integer goalsFor;
    Integer goalsAgainst;
    Integer points;
}
