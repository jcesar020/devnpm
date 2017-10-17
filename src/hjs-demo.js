import css from "./hjs-demo.sass";

var HjsDemo={
    word: "Hola Mundo",
    say: function(){
        console.log(this.word);
        console.log("despues de hola mundo");
    }
}

export default HjsDemo;
