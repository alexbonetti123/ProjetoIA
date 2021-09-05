module.exports = class Labirinto {
    constructor(linhas, colunas) {
        this.linhas = linhas
        this.colunas = colunas
        this.matriz = [[],[],[]]
        this.listaPosicoes = []
    }
    iniciarLabirinto(x, y) {
        this.matriz[x][y] = 'A'
        this.criarLista(x, y, 'A')
        for(let i = 0; i < this.linhas; i++){
            for(let j = 0; j < this.colunas; j++){
                let valor = Math.round(Math.random())
                if(valor === 1 && this.matriz[i][j] != 'A'){
                    this.criarLista(i, j, 'L')
                    this.matriz[i][j] = 'L'
                }
                if(valor === 0 && this.matriz[i][j] != 'A'){
                    this.criarLista(i, j, 'S')
                    this.matriz[i][j] = 'S'
                }
            }
        }
    }
    getProxSujo() {
        for(let i = 0; i < this.listaPosicoes.length; i++){
            let elem = this.listaPosicoes[i]
            if(elem.status == 'S'){
                return {x:elem.linha, y:elem.coluna}
            }
        }
    }
    criarLista(x, y, status) {
        this.listaPosicoes.push({
            linha:x,
            coluna:y,
            status:status
        })
    }
    escreverLista() {
        this.listaPosicoes.map(pos => {
           console.log(pos)
        })
    }
    escreverLabirinto(){
        console.log(this.matriz)
    }
}