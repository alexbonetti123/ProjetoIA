module.exports = class Agente {
    constructor(posX, posY, labirinto) {
        this.posX = posX
        this.posY = posY
        this.labirinto = labirinto
    }
    getPosX() {
        return this.posX
        
    }
    getPosY() {
        return this.posY
    }
    escreverLabirinto() {
        console.log(this.labirinto.escreverLista())
    }
}