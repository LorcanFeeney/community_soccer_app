#Teams
INSERT INTO Teams (team_id, league_id, team_name, coach_name)
VALUES (1, 2, 'Athlunkard Ville', 'Keith Kerley');

INSERT INTO Teams (team_id, league_id, team_name, coach_name)
VALUES (2, 2, 'Geraldines', 'Gary Kelly');

INSERT INTO Teams (team_id,  league_id,  team_name, coach_name)
VALUES (3, 2,  'Moyross', 'TBC');

INSERT INTO Teams (team_id,  league_id, team_name, coach_name)
VALUES (4, 2, 'Murroe', 'TBC');

INSERT INTO Teams (team_id,  league_id, team_name, coach_name)
VALUES (5, 2, 'Newport', 'TBC');

INSERT INTO Teams (team_id, league_id, team_name, coach_name)
VALUES (6, 1, 'Fairview Rangers', 'TBC');

INSERT INTO Teams (team_id, league_id, team_name, coach_name)
VALUES (7, 1, 'Pike Rovers', 'Gary Kelly');

INSERT INTO Teams (team_id,  league_id,  team_name, coach_name)
VALUES (8, 1,  'Aisling Annacotty', 'TBC');

INSERT INTO Teams (team_id,  league_id, team_name, coach_name)
VALUES (9, 1, 'Nenagh', 'TBC');

INSERT INTO Teams (team_id,  league_id, team_name, coach_name)
VALUES (10, 1, 'Ballynanty Rovers', 'TBC');


#Leagues
INSERT INTO Leagues (league_id, league_name)
VALUES (1, 'Premier League');

INSERT INTO Leagues (league_id, league_name)
VALUES (2, 'Premier A');


#League_Table
INSERT INTO League_Table (id, team_id, team_name, league_id, matches_played, matches_won, matches_draw, matches_loss, goals_for, goals_against, points)
VALUES (1, 1, 'Athlunkard Ville', 2, 10, 5, 3, 2, 20, 15, 18);

INSERT INTO League_Table (id, team_id, team_name, league_id, matches_played, matches_won, matches_draw, matches_loss, goals_for, goals_against, points)
VALUES (2, 2, 'Geraldines', 2, 10, 6, 2, 2, 25, 10, 20);

INSERT INTO League_Table (id, team_id, team_name, league_id, matches_played, matches_won, matches_draw, matches_loss, goals_for, goals_against, points)
VALUES (3, 3, 'Moyross', 2, 10, 4, 3, 3, 18, 18, 15);

INSERT INTO League_Table (id, team_id, team_name, league_id, matches_played, matches_won, matches_draw, matches_loss, goals_for, goals_against, points)
VALUES (4, 4, 'Murroe', 2, 10, 4, 4, 2, 15, 18, 16);

INSERT INTO League_Table (id, team_id, team_name, league_id, matches_played, matches_won, matches_draw, matches_loss, goals_for, goals_against, points)
VALUES (5, 5, 'Newport',2, 10, 5, 2, 3, 20, 20, 17);

INSERT INTO League_Table (id, team_id, team_name, league_id, matches_played, matches_won, matches_draw, matches_loss, goals_for, goals_against, points)
VALUES (1, 6, 'Fairview Rangers', 1, 10, 5, 3, 2, 20, 15, 18);

INSERT INTO League_Table (id, team_id, team_name, league_id, matches_played, matches_won, matches_draw, matches_loss, goals_for, goals_against, points)
VALUES (2, 7, ' Pike Rovers', 1, 10, 6, 2, 2, 25, 10, 20);

INSERT INTO League_Table (id, team_id, team_name, league_id, matches_played, matches_won, matches_draw, matches_loss, goals_for, goals_against, points)
VALUES (3, 8, 'Aisling Annacotty', 1, 10, 4, 3, 3, 18, 18, 15);

INSERT INTO League_Table (id, team_id, team_name, league_id, matches_played, matches_won, matches_draw, matches_loss, goals_for, goals_against, points)
VALUES (4, 9, 'Nenagh', 1, 10, 4, 4, 2, 15, 18, 16);

INSERT INTO League_Table (id, team_id, team_name, league_id, matches_played, matches_won, matches_draw, matches_loss, goals_for, goals_against, points)
VALUES (5, 10, 'Ballynanty Rovers',1, 10, 5, 2, 3, 20, 20, 17);