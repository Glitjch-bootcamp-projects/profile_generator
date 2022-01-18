const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profileGenerator = "";
rl.question("What's your name? Nicknames are also acceptable :) ", (profileName) => {
  console.log(`Thank you for your valuable feedback: ${profileName} \n`);
  profileGenerator += profileName;
  rl.question("What's an activity you like doing? ", (favoriteActivity) => {
    console.log(`Thank you for your valuable feedback: ${favoriteActivity} \n`);
          profileGenerator += ` likes to ${favoriteActivity} `;

    rl.question("What do you listen to while doing that? ", (favoriteAudio) => {
      console.log(`Thank you for your valuable feedback: ${favoriteAudio} \n`);
          profileGenerator += `while listening to ${favoriteAudio}. `;

      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (favoriteMeal) => {
        console.log(`Thank you for your valuable feedback: ${favoriteMeal} \n`);
          profileGenerator += `Ask ${profileName} about the best meal of the day, and you'll get ${favoriteMeal}. `;

        rl.question("What's your favourite thing to eat for that meal? ", (favoriteFoodofMeal) => {
          console.log(`Thank you for your valuable feedback: ${favoriteFoodofMeal} \n`);
          profileGenerator += `You better love ${favoriteFoodofMeal} when you're sharing a table with ${profileName}, because it's all about sharing good food with good people. `;

          rl.question("Which sport is your absolute favourite? ", (favoriteSport) => {
          console.log(`Thank you for your valuable feedback: ${favoriteSport} \n`);
          profileGenerator += `Have we mentioned that ${favoriteSport} gets ${profileName}'s heart racing?`;

            rl.question("Last question. What is your superpower? In a few words, tell us what you are amazing at ", (amazingTalent) => {
            console.log(`Thank you for your valuable feedback: ${amazingTalent} \n`);
            profileGenerator += `The best part, well, one of the best parts, is that ${profileName} is amazing at ${amazingTalent}`;

console.log(profileGenerator)
rl.close();
});
});
});
});
});
});
});
