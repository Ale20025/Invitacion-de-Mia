const FechaEvento=new Date("November 15, 2026 16:00:00").getTime();

setInterval(()=>{
    const ahora=new Date().getTime();
    const diferencia=FechaEvento-ahora;

    const dias=Math.floor (diferencia/(1000*60*60*24));
    const horas=Math.floor((diferencia/(1000*60*60))%24);

    const minutos=Math.floor((diferencia /(1000*60))%60);
    const segundos=Math.floor((diferencia/1000)%60);

    document.getElementById("Dias").textContent=dias;
    document.getElementById("Horas").textContent=horas;
    document.getElementById("Minutos").textContent=minutos;
    document.getElementById("Segundos").textContent=segundos;
}, 1000);

//musica

let Musica=document.getElementById("Musica");
let Sonido=document.getElementById("Sonido");

Sonido.addEventListener("click", function () {

    if(Musica.paused){
        Musica.play();
        Sonido.style.backgroundImage=`url("imagenes/audioff.jpeg")`;
        console.log(Sonido.style.backgroundImage);
    }

    else{
        Musica.pause();
        Sonido.style.backgroundImage=`url("imagenes/audion.jpeg")`;
        console.log(Sonido.style.backgroundImage);
    }
});