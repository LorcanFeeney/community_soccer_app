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
public class TeamsDTO {
    UUID id;
    String name;
    String shortHand;
    String pitchAddress;
}
