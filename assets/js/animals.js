"use strict";

import {Animal} from "./animal.js"

export class Leon extends Animal {
    // constructor(nombre, edad, img, comentarios, sonido){
    //     super(nombre, edad, img, comentarios, sonido);
    // }

    // constructor(...arguments) {
    //   super(...arguments);
    // }
    Rugir(){
        this.playerPlay()

    }
}

export class Lobo extends Animal {
    // constructor(nombre, edad, img, comentarios, sonido){
    //     super(nombre, edad, img, comentarios, sonido);
    // }
    Aullar(){
        this.playerPlay()

    }
}

export class Oso extends Animal {
    // constructor(nombre, edad, img, comentarios, sonido){
    //     super(nombre, edad, img, comentarios, sonido);
    // }
    Grunir(){
        this.playerPlay()

    }
}

export class Serpiente extends Animal {
    // constructor(nombre, edad, img, comentarios, sonido){
    //     super(nombre, edad, img, comentarios, sonido);
    // }
    Sisear(){
        this.playerPlay()

    }
}

export class Aguila extends Animal {
    // constructor(nombre, edad, img, comentarios, sonido){
    //     super(nombre, edad, img, comentarios, sonido);
    // }
    Chillar(){
        this.playerPlay()

    }
}