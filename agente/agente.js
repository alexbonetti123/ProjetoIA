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
    proxSujo() {
        let res = this.labirinto.getProxSujo()
        return res
    }
    escreverLabirinto() {
        console.log(this.labirinto.escreverLista())
    }
}