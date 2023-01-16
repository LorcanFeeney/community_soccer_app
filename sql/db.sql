CREATE TABLE Leagues (
                         league_id INT PRIMARY KEY,
                         league_name VARCHAR(255) NOT NULL
);

CREATE TABLE Teams (
                       team_id INT PRIMARY KEY,
                       league_id INT NOT NULL,
                       team_name VARCHAR(255) NOT NULL,
                       coach_name VARCHAR(255),
                       FOREIGN KEY (league_id) REFERENCES Leagues (league_id)
);

CREATE TABLE Players (
                         player_id INT PRIMARY KEY,
                         player_name VARCHAR(255) NOT NULL,
                         team_id INT NOT NULL,
                         FOREIGN KEY (team_id) REFERENCES Teams(team_id)
);


CREATE TABLE Matches (
                         match_id INT PRIMARY KEY,
                         home_team_id INT NOT NULL,
                         away_team_id INT NOT NULL,
                         home_team_goals INT,
                         away_team_goals INT,
                         match_date DATE NOT NULL,
                         FOREIGN KEY (home_team_id) REFERENCES Teams(team_id),
                         FOREIGN KEY (away_team_id) REFERENCES Teams(team_id)
);

CREATE TABLE Goals (
                       goal_id INT PRIMARY KEY,
                       match_id INT NOT NULL,
                       team_id INT NOT NULL,
                       player_id INT NOT NULL,
                       goal_time INT,
                       FOREIGN KEY (match_id) REFERENCES Matches(match_id),
                       FOREIGN KEY (team_id) REFERENCES Teams(team_id),
                       FOREIGN KEY (player_id) REFERENCES Players(player_id)
);

CREATE TABLE League_Table (
                              id INT PRIMARY KEY,
                              team_id INT NOT NULL,
                              team_name VARCHAR(255) NOT NULL,
                              league_id INT NOT NULL,
                              matches_played INT,
                              matches_won INT,
                              matches_draw INT,
                              matches_loss INT,
                              goals_for INT,
                              goals_against INT,
                              points INT,
                              FOREIGN KEY (team_id) REFERENCES Teams(team_id),
                              FOREIGN KEY (team_name) REFERENCES Teams(team_name),
                              FOREIGN KEY (league_id) REFERENCES Leagues(league_id)
);