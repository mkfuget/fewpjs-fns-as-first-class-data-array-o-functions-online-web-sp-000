function wakeDog(dogName, dogBreed)
{
  var out = `Wake ${dogName} the ${dogBreed}`;
}
function leashDog(dogName, dogBreed)
{
  var out = `leash ${dogName} the ${dogBreed}`
}
function walkToPark(dogName, dogBreed)
{
  var out = `Walk to the park with ${dogName} the ${dogBreed}`
}
function throwFrisbee(dogName, dogBreed)
{
  var out = `Throw the frisbee for ${dogName} the ${dogBreed}`
}
function walkHome(dogName, dogBreed)
{
  console.log(`Wake ${dogName} the ${dogBreed}`);
}
function unleashDog(dogName, dogBreed)
{
  console.log(`Wake ${dogName} the ${dogBreed}`);
}
var routine = [
  WakeDog(),
  leashDog(),
  walkToPark(),
  throwFrisbee(),
  walkHome(),
  unleahDog()
]
