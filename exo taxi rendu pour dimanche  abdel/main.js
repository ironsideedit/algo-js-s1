class Character {
    constructor (name, hp, Random){
      this.name = name
      this.hp = hp
      this.Random = Random
    }
    trajet(playlisst){
        let Changeetaxi = 10
        let nombrefeux = 10
    
       while(nombrefeux < 30 && this.hp >0 ){
        console.log ("le personnage a perdu 1 hp")
            nombrefeux ++ 
            

            if (playlisst[0] ==="anissa-wejdene"){
                this.hp--
                
                console.log("jhon a changer de taxi")
                console.log("il a écoutez wejdene")
            }
       
            if (john === 0){
                break 
            }
            if (nombrefeux === 30){
                break
            } 
       }
    }
}
let john = new Character("john",20)
let music = ["anissa-wejdene", "hola-PLk","demain-PLK","coeur en miettes-damso","often-the weeknd"]
rnd = new Random([0][9])
console.log(john)
console.log(music)
john.trajet(music) 
