class Persona{

    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido; 
    }


    getNombre(){
        return this.nombre
       
    }

    getApellido(){
        return this.apellido;
    }
}

//para aplicar herencia, usamos:
class Mascota extends Persona{
    constructor(nombre, Persona){
        super(Persona)
        this.patron = Persona
        this.nombre= nombre
    }

    getNombreMascota(){
        return this.nombre;
    }

    getPatron(){
        return this.patron;
    }

}

//el sig metodo es para usarlo en el html
function nombrePersona(){
    var persona = new Persona("kiko", "gomez")
    //alert("persona: "+persona.getNombre()+" "+persona.getApellido())
    var mascota = new Mascota("tito", persona)
    alert("mascota "+mascota.getNombreMascota() + ", dueño: "+mascota.getPatron().getNombre())
}