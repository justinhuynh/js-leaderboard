var gameInfo = function(){
  return [
   {
     home_team: "Patriots",
     away_team: "Broncos",
     home_score: 7,
     away_score: 3
   },
   {
     home_team: "Broncos",
     away_team: "Colts",
     home_score: 3,
     away_score: 0
   },
   {
     home_team: "Patriots",
     away_team: "Colts",
     home_score: 11,
     away_score: 7
   },
   {
     home_team: "Steelers",
     away_team: "Patriots",
     home_score: 7,
     away_score: 21
   }
 ]
}

// YOUR CODE HERE

function Team(name, rank, wins, losses) {
  this.name = name;
  this.rank = rank;
  this.wins = wins;
  this.losses = losses;
}

var gamesArray = gameInfo();

var findTeamByName = function(teamArray, teamName) {
  for (var i = 0; i < teamArray.length; i++) {
    var teamObject = teamArray[i];
    if (teamObject.name === teamName) {
      return teamObject;
    }
  }
  return false;
}

var allTeams = function(games) {
  var teams = [];

  for (var i = 0; i < games.length; i++) {
    var homeTeamName = games[i].home_team;
    var awayTeamName = games[i].away_team;

    if (!findTeamByName(teams, homeTeamName)) {
      teams.push(new Team(homeTeamName));
    }

    if (!findTeamByName(teams, awayTeamName)) {
      teams.push(new Team(awayTeamName));
    }
  }

  return teams;
}
