const smashgg = require('smashgg.js');
smashgg.initialize('1dc0a5ed01e681d16702e6871e1ad23b');
const Phase = smashgg.Phase;
 
(async function(){
    let phase1 = await Phase.get(111483);
    
    console.log(phase1.getName()); // prints "Pools"
    console.log(phase1.getNumSeeds()); // prints 156

    let entrants = await phase1.getEntrants(); 
})()