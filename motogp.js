var motoGP = [
  {
    circuit: "Losail",
    location: "Qatar",
    winner: {
      firstName: "Andrea",
      lastName: "Dovizioso",
      country: "Italy"
    }
  },
  {
    circuit: "Autodromo",
    location: "Argentine",
    winner: {
      firstName: "Cal",
      lastName: "Crutchlow",
      country: "UK"
    }
  },
  {
    circuit: "De Jerez",
    location: "Spain",
    winner: {
      firstName: "Valentino",
      lastName: "Rossi",
      country: "Italy"
    }
  },
  {
    circuit: "Mugello",
    location: "Italy",
    winner: {
      firstName: "Andrea",
      lastName: "Dovizioso",
      country: "Italy"
    }
  }
];

let result = {};

motoGP.forEach(event => {
  let country = event.winner.country;
  let fullName = `${event.winner.firstName} ${event.winner.lastName}`;
  let winLocation = `${event.circuit}, ${event.location}`;

  if (!result[country]) {
    result[country] = {
      winningCircuits: [],
      totalWin: 0
    };
  }

  result[country].winningCircuits.push({
    name: fullName,
    winLocation: winLocation
  });

  result[country].totalWin += 1;
});


Object.keys(result).forEach(country => {

  console.log(country + ":");
  console.log("-----------");
  console.log("  winningCircuits:");
  result[country].winningCircuits.forEach(item => {
  console.log("=====================================");
    console.log(`    name: ${item.name}`);
    console.log(`    winLocation: ${item.winLocation}`);
  });
  console.log("=====================================");
  console.log(`  totalWin: ${result[country].totalWin}\n`);
});