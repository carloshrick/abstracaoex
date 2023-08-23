export abstract class Veiculo{
    
marca:string;
modelo:string;

constructor(_marca:string, _modelo:string){
        this.marca = _marca;
        this.modelo = _modelo
    }

    Apresentar(){
        console.log(this.marca , this.modelo)
    }
}