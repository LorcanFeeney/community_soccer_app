CREATE TABLE IF NOT EXISTS competition (
   competition_id UUID PRIMARY KEY,
   competition_name VARCHAR (1050) UNIQUE NOT NULL,
   is_knock_out BOOLEAN
);

CREATE TABLE IF NOT EXISTS teams (
   team_id UUID PRIMARY KEY,
   team_name VARCHAR (1050) UNIQUE NOT NULL,
   short_hand VARCHAR (50) NOT NULL,
   pitch_address VARCHAR NOT NULL
);