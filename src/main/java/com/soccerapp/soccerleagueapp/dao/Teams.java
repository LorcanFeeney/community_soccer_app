package com.soccerapp.soccerleagueapp.dao;


import lombok.Data;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "teams")
@Data
public class Teams {

    @Id
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @Column(name="team_name")
    private String teamName;

    @Column(name="short_hand")
    private String shortHand;

    @Column(name="pitch_address")
    private String pitchAddress;



}
