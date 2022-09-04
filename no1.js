class gShip {
    constructor(draft, crew){
        this.draft = draft
        this.crew = crew
    }

    ship(draft, crew){
        let fcrew = crew * 1.5
        if( draft > 20){
            return 'Banyak nih muatan kapalnya'
        }else{
            if(draft <= fcrew){
                return 'Lebih banyak muatan orangnya'
            }else{
                return 'Banyak nih muatan kapalnya'
            }
        }
    }
}

const emptyShip = new gShip()
console.log(emptyShip.ship(21, 10))
console.log(emptyShip.ship(17, 10))
console.log(emptyShip.ship(10, 10))
