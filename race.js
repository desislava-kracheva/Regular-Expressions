function solve(arr){

    let names = arr.shift().split(', ');

    let racers = {};

    names.forEach(name => {
        
racers[name] = 0;
    });

    for (const line of arr) {
        if(line == 'end of race'){
            break;
        }
        let patternNames = /[A-Za-z]/g
        let match = line.match(patternNames);
        let name = match.join('');
        if(racers.hasOwnProperty(name)){
let patternDigits = /[0-9]/g;
let digits = line.match(patternDigits);
let sum = digits.map(Number)
.reduce((a,b) => a+b);

racers[name]+= sum;


        }
        
        
    }


let sorted = Object.keys(racers).sort((a,b) => racers[b] - racers[a])
console.log(`1st place: ${sorted[0]}\n2nd place: ${sorted[1]}\n3rd place: ${sorted[2]}`);

}
solve([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
  ]
  )