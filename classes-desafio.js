class gameClass{
   constructor(heroName, heroClass, attackType){
     this.heroName = heroName
     this.heroClass = heroClass
     this.attackType = attackType
   }
   writeOut(){
     console.log(`O player ${this.heroName} (${this.heroClass}) atacou usando ${this.attackType}.`)
   }
}

let arqueiroArcano = new gameClass("xCross", "Arqueiro Arcano", "Canhão Mágico")

arqueiroArcano.writeOut()