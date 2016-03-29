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

// var teamConstructor = function(name, rank, wins, losses) {
//   return {
//     name: name,
//     rank: rank,
//     wins: wins,
//     losses: losses
//   }
// }

var gamesArray = gameInfo();

var findTeam = function(element, index, array) {

}

var allTeams = function(games) {
  var teams = [];
  teams.push(new Team("Patriots"));
  teams.push(new Team("Broncos"));

  for (var i = 0; i < games.length; i++) {
    var homeTeamName = games[i].home_team;
    var awayTeamName = games[i].away_team;
    teams.forEach(function(element, index, array) {
      if (team.name !== homeTeamName && team.name !== awayTeamName) {
        array.push()
      } else {

      }
    }
  );
    debugger;
    // teams.find(findTeam);

    // var homeTeam = new Team(games[i].home_team);
    // var awayTeam = new Team(games[i].away_team);
    // if (teams.indexOf(homeTeam) === -1) {

      // teams.push(homeTeam);
    }
    // if (teams.indexOf(awayTeam) === -1) {
    //   teams.push(awayTeam);
    // }
  }
  return teams;
}

// allTeams(gamesArray);

// var teamsArray = function() {
//   var teams = [];
//   for (var i = 0; i < gameInfo().length; i++) {
//     var homeTeam = gameInfo()[i].home_team;
//     var awayTeam = gameInfo()[i].away_team;
//     teams.push(homeTeam, awayTeam);
//   }
//   return teams.sort();
// }

// var uniqueTeams = function() {
//   var teams = teamsArray().slice();
//   var results = [];
//   for (var i = 0; i < teams.length - 1; i++) {
//     if (teams[i + 1] !== teams[i]) {
//       results.push(teams[i]);
//     }
//   }
//   return results;
// }

//
// var uniqueTeams = function() {
//   var teams = [];
//   for (var i = 0; i < allTeams().length; i++) {
//     if (teams)
//   }
// }
