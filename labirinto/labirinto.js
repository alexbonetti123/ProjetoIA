module.exports = class Labirinto {
    constructor(linhas, colunas) {
        this.linhas = linhas
        this.colunas = colunas
        this.matriz = [[],[],[], [], []]
        this.listaPosicoes = []
        this.listaReintegrados = []
        this.sujos = 0
        this.limpos = 0
        this.contador = 0
    }
    getTamanhoLista() {
        return this.listaPosicoes.length
    }
    getLimpos() {
        return this.limpos
    }
    getSujos() {
        return this.sujos
    }
    iniciarLabirinto(x, y) {
        this.matriz[x][y] = 'A'
        for(let i = 0; i < this.linhas; i++){
            for(let j = 0; j < this.colunas; j++){
                let valor = Math.round(Math.random())
                if(valor === 1 && this.matriz[i][j] != 'A'){
                    this.matriz[i][j] = 'L'
                    this.limpos = this.limpos + 1
                }
                if(valor === 0 && this.matriz[i][j] != 'A'){
                    this.criarLista(i, j, 'S')
                    this.matriz[i][j] = 'S'
                    this.sujos = this.sujos + 1
                }
            }
        }
    }
    ordenarLista() {
        this.listaPosicoes.sort((a, b) => {
            if(a.soma < b.soma)
                return 1
            if(a.soma > b.soma)
                return -1
            if(a.soma == b.soma)
                return 0
        })
        this.listaReintegrados.sort((a, b) => {
            if(a.soma < b.soma)
                return 1
            if(a.soma > b.soma)
                return -1
            if(a.soma == b.soma)
                return 0
        })
        
    }
    getProxSujo() {
        if(this.listaPosicoes.length > 0){
            return this.listaPosicoes.pop()
        }else {
            return this.listaReintegrados.pop()
        }
    }
    criarLista(x, y, status) {
        this.listaPosicoes.push({
            linha:x,
            coluna:y,
            status:status,
            soma:x + y,
            reintegrou:false
        })
    }
    async movimentar(agPosAtual) {
        this.escreverLabirinto()
        let {x, y} = agPosAtual
        let limpou = false
        let elemento = this.getProxSujo()
        //Testando se posso mover para cima ou para baixo
        if(elemento.status === 'S'){
            if((elemento.linha - x === 1 || elemento.linha - x === -1) && limpou === false){
                this.matriz[x][y] = 'L'
                this.matriz[elemento.linha][elemento.coluna] = 'A'
                limpou = true
                this.limpos++
                //Retorna a nova posição do agente
                return {x:elemento.linha, y:elemento.coluna}
            }
            //Testando se pode se mover para os lados, ou seja, mover em Y(coluna)
            if((elemento.coluna - y === 1 || elemento.coluna - y === -1) && limpou === false){
                this.matriz[x][y] = 'L'
                this.matriz[elemento.linha][elemento.coluna] = 'A'
                limpou = true
                this.limpos++
                //Retorna a nova posição do agente
                return {x:elemento.linha, y:elemento.coluna}
            }
            if((elemento.linha - x === 1 || elemento.linha - x === -1) && (elemento.coluna - y === 1 || elemento.coluna - y === -1) && limpou === false){
                this.matriz[x][y] = 'L'
                this.matriz[elemento.linha][elemento.coluna] = 'A'
                limpou = true
                this.limpos++
                //Retorna a nova posição do agente
                return {x:elemento.linha, y:elemento.coluna}
            }
            
            if(limpou === false && elemento.reintegrou === false){ 
                elemento.reintegrou = true
                this.listaReintegrados.push(elemento)
                return {x, y}
            }
        }
        
    }
    
   
    escreverLabirinto(){
        console.log(this.matriz)
    }
}
