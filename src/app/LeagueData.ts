export interface LeagueData {
  id: number;
  teamId: number;
  teamName: string;
  leagueId: number;
  matchesPlayed: number;
  matchesWon: number;
  matchesDraw: number;
  matchesLoss: number;
  goalsFor: number;
  goalsAgainst: number;
  points: any;
}

export interface League {
  id: number;
  leagueName: string;
  activeTeams: any[];
}
