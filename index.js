const Labirinto = require("./labirinto/labirinto")
const Agente = require("./agente/agente")
let lab = new Labirinto(3, 3);
let ag = new Agente(0, 0, lab)

lab.iniciarLabirinto(ag.getPosX(), ag.getPosY())

ag.inicarLimpeza()


