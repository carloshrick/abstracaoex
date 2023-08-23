import {Veiculo} from "./Veiculo";



class Moto extends Veiculo{

cilindradas:number



constructor(_cilindradas:number, marca:string , modelo:string){
    super(marca, modelo)
    this.cilindradas = _cilindradas
} 

}

let moto = new Moto(4,'henda','sla')
moto.Apresentar()
