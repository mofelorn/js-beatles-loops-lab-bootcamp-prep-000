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

var counter = 0
var box_facts = []

function johnLennonFacts(facts) {  
  while (counter < facts.length) {
    box_facts.push(`${facts[counter]}!!!`)
    counter++
  }
}
