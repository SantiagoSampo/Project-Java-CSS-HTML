//Sebastian Luciardi (274754);Santiago Sampo (322388)

class Tema {
    constructor(elNombre, Ladescripcion) {
        this.descripcion = Ladescripcion
        this.nombre = elNombre;
    }
}

class Pregunta{
    constructor(tema, nivel, textopreg, respcorr, respincorr) {
        this.tema = tema;
        this.nivel = nivel;
        this.textopreg = textopreg;
        this.respcorr = respcorr;
        this.respincorr = respincorr;
}

}

class Sistema{
    constructor() {
        this.preguntas = [];
        this.tema = []
    }
    
agregarTemas(Eltema){
    this.tema.push(Eltema)
}

darTemas(){
    return this.tema;
}

agregarPreguntas1(UnaPregunta){ 
    this.preguntas.push(UnaPregunta)
}

preguntastabla(){
    return this.preguntas;
}

preguntastotales(){
    return this.preguntas.length;
}

darLista() {
    return this.tema;
}

Prompreguntas() {
    if (this.tema.length === 0) {
        return 0;
    }
    return this.preguntas.length / this.tema.length;
}

devolverTemapornom(nombre) {
    for (let t of this.tema) {
        if (t.nombre === nombre) {
            return true;
        }
    }
}

Trepe(nom){
    let esta = false;
    for(let i = 0; i < this.tema.length && !esta; i++){
        if(this.tema[i].nombre == nom){
            esta = true;
        }
    }
    return esta;
}

ordenartabla(OrdeCrec){
    if (OrdeCrec){
        this.preguntas.sort((y, z) => {
            let comparar = y.tema.nombre.localeCompare(z.tema.nombre);
            if (comparar === 0) {
                comparar = y.nivel - z.nivel;
            }
            return comparar;
        });
    } else {
        this.preguntas.sort((y, z) => {
            let comparar = z.tema.nombre.localeCompare(y.tema.nombre);
            if (comparar === 0) {
                comparar = z.nivel - y.nivel;
            }
            return comparar;
        });
    }
    return this.preguntas;
 }
}