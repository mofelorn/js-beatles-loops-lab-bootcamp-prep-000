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

function johnLennonFacts(facts) {  
  var counter = 0
  var array =[]
  while (counter < facts.length) {
    array.push(`${facts[counter]}!!!`)
    counter++
  }
  return array
}
