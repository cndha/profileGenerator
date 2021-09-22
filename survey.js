const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// rl.question('What do you think of Node.js? ', (answer) => {
//   console.log(`Thank you for your valuable feedback: ${answer}`);

rl.question('What is your name? Nicknames accepted.', (name) => {
  rl.question('What is an activity you like doing?', (activity) => {
    rl.question('What do you listen to while doing that?', (listenTo) => {
      rl.question('Which meal is your favourite? (ie. Dinner, Brunch, etc)', (favMeal) => {
        rl.question('What is your favourite thing to eat for that meal?', (favFood) => {
          rl.question('Which sport is your abosolute favourite?', (favSport) => {
            rl.question('What What is your superpower? In a few words, tell us what you are amazing at!', (superpower) => {
  
              console.log(`${name} loves listening ${listenTo} while ${activity}, devouring ${favFood} for ${favMeal}, prefers ${favSport} over any other sport, and is amazing at ${superpower}.`);
            
              rl.close();
            });
          });
        });
      });
    });
  });
});