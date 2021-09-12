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
    async moverAgente() {
        let retorno = await this.labirinto.movimentar({x:this.posX, y:this.posY})
        if(retorno !== undefined) {
            console.log("Retorno: " + retorno.x + ", " + retorno.y)
            this.posX = retorno.x
            this.posY = retorno.y
        }
    }
    async inicarLimpeza() {
        this.labirinto.ordenarLista()
       for(let i = 0; i < this.labirinto.getTamanhoLista(); i++){
           this.moverAgente()
           await this.sleep(5000)
       }
       await this.sleep(2000)
       console.log("Minha eficiência foi de: " + this.verificarPorcetangemEficiencia() + "%")
    }
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    verificarPorcetangemEficiencia() {
        let pct = 100 * (this.labirinto.getLimpos() / (this.labirinto.linhas * this.labirinto.colunas))
        return pct.toFixed(2)
    }
    escreverLabirinto() {
        this.labirinto.escreverLabirinto()
    }
}