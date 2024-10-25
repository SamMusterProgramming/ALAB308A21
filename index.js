const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion : {
            name : "Frank",
            type : "Flea",
            belongings : ["small hat","sunglasses"]
        }
    },
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
        }
    }

    //As an additional practice exercise, create a loop that logs each item in Robin’s inventory.

    adventurer.inventory.forEach(invent => {
        console.log(invent)
    })
  
//     Add a “companion” sub-object to “Leo” with the following properties:
// The companion’s name is “Frank.”
// The companion’s type is “Flea.”
// The companion has its own belongings, which includes a small hat and sunglasses.
  
//    console.log(adventurer.roll())
//    console.log(adventurer.roll())
    

   class Character{
     static MAX_HEALTH = 100;
     constructor(name){
        this.name = name ;
        this.health = 100;
        this.inventory =[]
    }
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
        return result;
        }

   }

   const robin = new Character("Robin");
   robin.inventory =  ["sword", "potion", "artifact"];
   robin.companion = new Character('Leo')
   robin.companion.type = "cat";
   robin.companion.companion = new Character("Frank");
   robin.companion.companion.type = "Flea";
   robin.companion.companion.inventory = ["small hat", "sunglasses"]; 
    console.log('\n')
    robin.roll();
    robin.companion.roll();

    //Part 3: Class Features

    class Adventurer extends Character {
        ROLES = ["Fighter","Healer","Wizard"];
        constructor (name,role, companion) {
          super(name);
          this.role = this.checkRoles (role);
          this.inventory.push("bedroll", "50 gold coins");
          // we add a companion cause adventure can have a companion
          this.companion = companion ; 
        }
        scout () {
          console.log(`${this.name} is scouting ahead...`);
          super.roll();
        }
        checkRoles (role){
           return this.ROLES.includes(role)? role : "";
        }
        // add duel here
        duel(adventurer){
           console.log(`the battle between ${this.name} and ${adventurer.name} is about to begin , enjoy the show`)
           let roundCount = 1;
           while(this.health>50 && adventurer.health >50) {
            console.log(`Round : ${roundCount}`)
            if(this.roll() > adventurer.roll()) {adventurer.health --; console.log(this.name + ` won this round , 1 point will be deduct from ` + adventurer.name)}
            else { this.health --; console.log(adventurer.name + ` won this round , 1 point will be deduct from ` + this.name)}
            roundCount++;
           }
           if (this.health > 50) return this.name
           else return adventurer.name
        }
      }

      class companion extends Character {
        constructor(name,type,companion,staff) {
            super(name)
            // added type here cause companion has a type 
            this.type = type;
            this.belongings = staff;
            this.companion = companion;
            // added companion cause a companion has a companion 
           
        }
        roll(){
            super.roll()
        }
      }
       console.log('\n')
       console.log('Robin and his companion using classes')
      const newRobin = new Adventurer("Robin", "Healer", new companion("Leo","cat", new companion('Frank',"Flea",null,["small hat","sunglasses"]) )) ;
      console.log(newRobin );
      console.log( newRobin.companion);
      console.log( newRobin.companion.companion);
       newRobin.companion.roll();
       newRobin.companion.companion.roll();
       newRobin.roll();
      

       //Part 6: Developing Skills
       // after adding duel(adventure) method to adventure class
   
     const samir = new Adventurer("samir","Healer", new companion("Jack","dog",null))
     const nesta = new Adventurer("nesta","Wizard", new companion("debbie","cat",null))

     console.log("the winner is  " + samir.duel(nesta))
     
      