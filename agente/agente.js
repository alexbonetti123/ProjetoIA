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
       while(this.labirinto.listaPosicoes.length > 0 || this.labirinto.listaReintegrados.length > 0){
            this.moverAgente()
           await this.sleep(3000)
       }
       this.escreverLabirinto()
       await this.sleep(2000)
       let eficiencia = this.verificarPorcetangemEficiencia()
       alert("A eficiência do robô foi de " + eficiencia + "%")
       /*E = eficiencia
        E > 90 -> LOL, perfeito
        E >= 70 -> Podia ser muito melhor
        E >= 50 -> Ta na média
        E < 50 -> hiper inteligente? kkkkk
       */
       if(eficiencia == 100)
        alert("Classificação: Só não é melhor que um pé de bergamota carregado")
        else if(eficiencia >= 90 && eficiencia < 100)
        alert("Tá saindo da jaula o monstro")
        else if(eficiencia >= 70 && eficiencia < 90)
        alert("Classificação: Moises, não consegue né?")
        else if(eficiencia < 70 && eficiencia >= 50)
        alert("Classificação: Cuidado, hein! Você tá na média")
        else
        alert("Classificação: Hiper inteligente? kkkkk")
        

    }
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    verificarPorcetangemEficiencia() {
        let totalElem = this.labirinto.linhas * this.labirinto.colunas
        let limpos = this.labirinto.getLimpos() +1
        let pct = limpos / totalElem * 100
        if(isNaN(pct))
            return 100
        return pct.toFixed(2)
    }
    escreverLabirinto() {
        this.labirinto.escreverLabirinto()
    }
    
}