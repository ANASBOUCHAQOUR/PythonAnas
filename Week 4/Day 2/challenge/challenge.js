const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];
  
  // 1. Usernames with !
  const usernames = [];
  for (const player of gameInfo) {
    usernames.push(`${player.username}!`);
  }
  console.log(usernames); // ["john!", "becky!", "susy!", "tyson!"]
  
  // 2. Winners (score > 5)
  const winners = [];
  for (const player of gameInfo) {
    if (player.score > 5) {
      winners.push(player.username);
    }
  }
  console.log(winners); // ["becky", "susy"]
  
  // 3. Total score
  let totalScore = 0;
  for (const player of gameInfo) {
    totalScore += player.score;
  }
  console.log(totalScore); // 71  