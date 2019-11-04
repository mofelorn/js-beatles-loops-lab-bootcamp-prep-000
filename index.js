// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

var emptyArray = []
function theBeatlesPlay(musicians, instruments) {
  for (var counter = 0; counter < musicians.length; counter++) {
    emptyArray.push(`${musicians[counter]} plays ${instruments[counter]}`)
  }  
   return emptyArray
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
]
var counter = 0

function johnLennonFacts(facts) {  
 

  while (counter < facts.length) {
    box_facts.push(`${facts[counter]}!!!`)
    counter++
  }
}
