import {Veiculo} from "./Veiculo";

class Carro extends Veiculo{
    portas:number
        constructor(_portas:number, marca:string , modelo:string){
        super(marca, modelo)
        this.portas = _portas
    } 
}




let carro = new Carro(4, 'fghj', 'jdjms' )
carro.Apresentar()