function initContenedor(){
    let contenedor = document.getElementById("contenedor");

    const anchoPantalla = window.innerWidth;
    const altoPantalla = window.innerHeight;

    if(anchoPantalla<altoPantalla){
        contenedor.style.width=String(anchoPantalla*.9)+"px";
        contenedor.style.height=String(anchoPantalla*.9)*9/6+"px";
    }else{
        contenedor.style.height=String(altoPantalla*.9)+"px";
        contenedor.style.width=String(altoPantalla*.9)*6/9+"px";
    }
}

let rectcontenedor = contenedor.getBoundingClientRect();
var contenedorW=rectcontenedor.width*.9; var contenedorH=rectcontenedor.height*.9;

let posBS=[50,70,50]; let indxBS=[11,11,10]
let posBA=[50,30,50]; let indxBA=[10,10,11]

function initBotons(){
    contenedor = document.getElementById("contenedor");
    rectcontenedor = contenedor.getBoundingClientRect();
    contenedorW=rectcontenedor.width*.9; contenedorH=rectcontenedor.height*.9;

    for(let b =0;b<3;b++){
        // ------------------------ Inicialización de Botones
        eval("let botonA"+String(b)+" = document.getElementById('botonA"+String(b)+"');");
        eval("botonA"+String(b)+'.style.left = "'+String(posBA[b])+'%";')
        eval("botonA"+String(b)+".style.zIndex ="+String(indxBA[b]))
        eval("let botonS"+String(b)+" = document.getElementById('botonS"+String(b)+"');");
        eval("botonS"+String(b)+'.style.left = "'+String(posBS[b])+'%";')
        eval("botonS"+String(b)+".style.zIndex ="+String(indxBS[b]))
        // ------------------------ Inicialización de Triangulos
        eval("let triangle"+String(b)+" = document.getElementById('triangle"+String(b)+"');");
        if(b==0||b==2){
            eval("triangle"+String(b)+'.style.borderTop = ""')
            eval("triangle"+String(b)+'.style.borderBottom = "'+String(Math.round(contenedorH))+'px solid transparent"');
            eval("triangle"+String(b)+'.style.borderLeft = "'+String(Math.round(contenedorW*.3))+'px solid rgb(0, 0, 0)"');
            eval("triangle"+String(b)+'.style.left = "0px"')
            eval("triangle"+String(b)+'.style.right = ""')
        }else{
            eval("triangle"+String(b)+'.style.borderTop = "'+String(Math.round(contenedorH))+'px solid rgb(0, 0, 0)"');
            eval("triangle"+String(b)+'.style.borderLeft = "'+String(Math.round(contenedorW*.3))+'px solid transparent"');
            eval("triangle"+String(b)+'.style.left = ""')
            eval("triangle"+String(b)+'.style.right = "0px"')
        }
    }
}

function blockBotons(estado){
    for(let b =0;b<3;b++){
        // ------------------------ Se habilitan - deshabilitan botones
        eval("let botonA"+String(b)+" = document.getElementById('botonA"+String(b)+"');");
        eval("botonA"+String(b)+".disabled = "+estado)
        eval("let botonS"+String(b)+" = document.getElementById('botonS"+String(b)+"');");
        eval("botonS"+String(b)+".disabled = "+estado)
    }
}

function nextPage(pageId) {
    blockBotons(true)
    let ht=0; let hs=0; let cb=0;
    const movimiento = () => {
        if(pageId=="pagina1"){
            // ------------------------------------------- Movimiento botones
            botonA0.style.left = String(50-cb/103*20)+"%"; 
            botonS0.style.left = String(50+cb/103*20)+"%";
            // ------------------------------------------- Mueve Triangulo Horario
            if(contenedorH-3.33*ht*contenedorH/100<=0){
                triangle0.style.borderTop = String(1.4*hs*contenedorH/100)+"px solid rgb(0, 0, 0)";
                triangle0.style.borderLeft = String(contenedorW-hs*contenedorW/100)+"px solid transparent";
                triangle0.style.left = "";
                triangle0.style.right ="0px";
                hs++
            }else{
                triangle0.style.borderLeft = String(contenedorW*.3+ht*contenedorW/100)+"px solid rgb(0, 0, 0)";
                triangle0.style.borderBottom = String(contenedorH-3.33*ht*contenedorH/100)+"px solid transparent";
                ht++;
            }
        }
        if(pageId=="pagina2"){
            // ------------------------------------------- Movimiento botones
            botonA1.style.left = String(30+cb/103*20)+"%"; 
            botonS1.style.left = String(70-cb/103*20)+"%";
            botonA1.style.zIndex=11
            botonS1.style.zIndex=10
            // ------------------------------------------- Mueve Triangulo Antihorario
            if(contenedorH-3.33*hs*contenedorH/100<=0){
                triangle1.style.borderLeft = String(contenedorW-ht*contenedorW/100)+"px solid rgb(0, 0, 0)";
                triangle1.style.borderBottom = String(1.4*ht*contenedorH/100)+"px solid transparent";
                triangle1.style.left = "0px";
                triangle1.style.right ="";
                ht++;
            }else{
                triangle1.style.borderTop = String(contenedorH-3.33*hs*contenedorH/100)+"px solid rgb(0, 0, 0)";
                triangle1.style.borderLeft = String(contenedorW*.3+hs*contenedorW/100)+"px solid transparent";
                hs++;    
            }
        }
        if(cb>=100){
            const currentActivePage = document.querySelector(".pagina.active");
            currentActivePage.classList.remove("active");
            const nextPage = document.getElementById(pageId);
            nextPage.classList.add("active");
            initBotons()
            blockBotons(false)
            return; // Salir del ciclo
        }
        cb++;
        setTimeout(movimiento, 10);
    }
    movimiento(pageId); // Iniciar el ciclo
}

function previousPage(pageId) {
    blockBotons(true)
    console.log(pageId)
    let ht=0; let hs=0; let cb=0;
    const movimiento = () => {
        if(pageId=="pagina1"){
            // ------------------------------------------- Movimiento botones
            botonA2.style.left = String(50-cb/103*20)+"%";
            botonS2.style.left = String(50+cb/103*20)+"%";
            // ------------------------------------------- Mueve Triangulo Horario
            if(contenedorH-3.33*ht*contenedorH/100<=0){
                triangle2.style.borderTop = String(1.4*hs*contenedorH/100)+"px solid rgb(0, 0, 0)";
                triangle2.style.borderLeft = String(contenedorW-hs*contenedorW/100)+"px solid transparent";
                triangle2.style.left = "";
                triangle2.style.right ="0px";
                hs++
            }else{
                triangle2.style.borderLeft = String(contenedorW*.3+ht*contenedorW/100)+"px solid rgb(0, 0, 0)";
                triangle2.style.borderBottom = String(contenedorH-3.33*ht*contenedorH/100)+"px solid transparent";
                ht++;
            }
        }
        if(pageId=="pagina0"){
            // ------------------------------------------- Movimiento botones
            botonA1.style.left = String(30+cb/103*20)+"%"; 
            botonS1.style.left = String(70-cb/103*20)+"%";
            botonA1.style.zIndex=10
            botonS1.style.zIndex=11
            // ------------------------------------------- Mueve Triangulo Antihorario
            if(contenedorH-3.33*hs*contenedorH/100<=0){
                triangle1.style.borderLeft = String(contenedorW-ht*contenedorW/100)+"px solid rgb(0, 0, 0)";
                triangle1.style.borderBottom = String(1.4*ht*contenedorH/100)+"px solid transparent";
                triangle1.style.left = "0px";
                triangle1.style.right ="";
                ht++;
            }else{
                triangle1.style.borderTop = String(contenedorH-3.33*hs*contenedorH/100)+"px solid rgb(0, 0, 0)";
                triangle1.style.borderLeft = String(contenedorW*.3+hs*contenedorW/100)+"px solid transparent";
                hs++;    
            }

        }



        if(cb>=100){
            const currentActivePage = document.querySelector(".pagina.active");
            currentActivePage.classList.remove("active");
            const nextPage = document.getElementById(pageId);
            nextPage.classList.add("active");
            initBotons()
            blockBotons(false)
            return; // Salir del ciclo
        }
        cb++;
        setTimeout(movimiento, 10);
    }
    movimiento(pageId); // Iniciar el ciclo
}


// Mostrar la primera página por defecto
window.onload = function() {
    initBotons()
    document.getElementById("pagina0").classList.add("active");
}


/* -------------------- Funciones para dinámicas -------------------- */
window.addEventListener("load", initContenedor);
window.addEventListener("resize", initContenedor);

window.addEventListener("load", initBotons);
window.addEventListener("resize", initBotons);
window.addEventListener("scroll", initBotons);

