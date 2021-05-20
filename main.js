class vaso{
    constructor({...arg}){
        this.diametro = arg.diametro;
        this.alto = arg.alto;
        this.material = arg.material;
    }
    fill(p1=''){
        return `El vaso esta lleno ${(p1) ? `de ${p1} su clase es vaso` : `de Agua` }`;
    }
    drain(){
        return `El vaso esta vacio`;
    }
}
class vasoVidrio extends vaso{
    constructor({...arg}){
        super({...arg});
        this.estampado = arg.estampado;
    }
    fill(p1=''){
        return `El vaso esta lleno ${(p1) ? `de ${p1} su clase es vasoVidrio` : `de la clase vasoVidrio` }`;
    }
    get getllenarVaso(){
        return super.fill();
    }
}
class vasoPorcelana extends vasoVidrio{
    constructor({...arg}){
        super({...arg});
    }
    fill(){
        return super.getllenarVaso;
    }
}
const data = {
    diametro: "Circular",
    alto: "11 cm",
    material: "Porcelana",
    estampado: "Sol",
}
const obj = new vasoPorcelana(data);
console.log(obj);
console.log(obj.fill('Agua'));



