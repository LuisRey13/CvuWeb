// ------------------------ Inicialización de Ids
let CV_foto=document.getElementById("CV_foto")
let botonA0="";let botonA1="";let botonA2="";
let botonS0=""; let botonS1=""; let botonS2=""; 
let triangle0="";let triangle1="";let triangle2="";
let titulo_0="";let titulo_1="";let titulo_2="";
let H_0=""; let H_1=""; let H_2=""; 
for(let b =0;b<3;b++){
    eval("botonA"+String(b)+" = document.getElementById('botonA"+String(b)+"');");
    eval("botonS"+String(b)+" = document.getElementById('botonS"+String(b)+"');");
    eval("triangle"+String(b)+" = document.getElementById('triangle"+String(b)+"');");
    eval("titulo_"+String(b)+"= document.getElementById('titulo_"+String(b)+"');");
    eval("H_"+String(b)+"= document.getElementsByClassName('H_"+String(b)+"');");
}
let estudios =  document.getElementById("Iestudios")
let drpdwnStds_0="";let drpdwnStds_1="";let drpdwnStds_2="";let drpdwnStds_3="";
// ----------------------- Centra los dropdowns de estudios
for(let b=0;b<=3;b++){eval("drpdwnStds_"+String(b)+" = document.getElementById('estds_"+String(b)+"');");}
// ----------------------- Inicializa width de dropdown de programas
let sftwrd_0=""; let sftwrd_1=""; let sftwrd_2=""; let sftwrd_3=""; let sftwrd_4=""; let sftwrd_5=""; let sftwrd_6=""; let sftwrd_7="";
let drpDwnSftwr=document.getElementsByClassName("drpdwnSftwr")
for (let cid = 0; cid < drpDwnSftwr.length; cid++) {
    eval("sftwrd_"+String(cid)+" = document.getElementById('"+drpDwnSftwr[cid].id+"')");
}
let img_prgrms = document.getElementsByClassName("img_prgrms")
let hexaHab_foto = document.getElementById("hexaHab_foto")
// ----------------------- Se adecua el tamaño del contenedor
function initContenedor(){
    contenedor = document.getElementById("contenedor");

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

// ----------------------- Se obtene el tamaño del contenedor
let contenedor = document.getElementById("contenedor");
let rectcontenedor = contenedor.getBoundingClientRect();
let contenedorW=rectcontenedor.width*.9; let contenedorH=rectcontenedor.height*.9;

let posBS=[50,70,50]; let indxBS=[11,11,10]
let posBA=[50,30,50]; let indxBA=[10,10,11]

// ----------------------- Se inicializa TODO para cada cambio
function initBotons(){
    contenedor = document.getElementById("contenedor");
    rectcontenedor = contenedor.getBoundingClientRect();
    contenedorW=rectcontenedor.width*.9; contenedorH=rectcontenedor.height*.9;

    CV_foto.style.opacity=.7 // <<<< Opacidad Foto
    for(let b=0;b<3;b++){
        // ------------------------ Inicialización de Botones
        eval("botonA"+String(b)+'.style.left = "'+String(posBA[b])+'%";')
        eval("botonA"+String(b)+".style.zIndex ="+String(indxBA[b]))
        eval("botonA"+String(b)+'.style.fontSize ="'+String(Math.floor(contenedorW*.039))+'px";')
        eval("botonS"+String(b)+'.style.left = "'+String(posBS[b])+'%";')
        eval("botonS"+String(b)+".style.zIndex ="+String(indxBS[b]))
        eval("botonS"+String(b)+'.style.fontSize ="'+String(Math.floor(contenedorW*.039))+'px";')
        // ------------------------ Inicialización de Triangulos
        if(b==0||b==2){
            eval("triangle"+String(b)+'.style.borderTop = ""')
            eval("triangle"+String(b)+'.style.borderBottom = "'+String(Math.floor(contenedorH))+'px solid transparent"');
            eval("triangle"+String(b)+'.style.borderLeft = "'+String(Math.floor(contenedorW*.3))+'px solid rgb(0, 0, 0)"');
            eval("triangle"+String(b)+'.style.left = "0px"')
            eval("triangle"+String(b)+'.style.right = ""')
        }else{
            eval("triangle"+String(b)+'.style.borderTop = "'+String(Math.floor(contenedorH))+'px solid rgb(0, 0, 0)"');
            eval("triangle"+String(b)+'.style.borderLeft = "'+String(Math.floor(contenedorW*.3))+'px solid transparent"');
            eval("triangle"+String(b)+'.style.left = ""')
            eval("triangle"+String(b)+'.style.right = "0px"')
        }
        // ------------------------ Inicialización de titulos
        eval("titulo_"+String(b)+'.style.fontSize = "'+String(Math.floor(contenedorW*.06))+'px";');
        eval("titulo_"+String(b)+'.style.opacity = 1');
        // ------------------------ Inicialización de Hs
        if(eval("H_"+String(b))){
            for (let Hh of eval("H_"+String(b))){
                eval('Hh.style.fontSize = "'+String(Math.floor(contenedorW*.057/(b*.6+1)))+'px";');
                eval('Hh.style.opacity = 1');}}        
    }
    // ------------------------ Inicialización de drpdwnStds
    for(let b=0;b<=3;b++){
        eval('drpdwnStds_'+String(b)+'.style.width = "'+String(contenedorW*.79)+'px"')
        eval('drpdwnStds_'+String(b)+'.style.left = "'+String(-contenedorW*.9/4*b)+'px"')}
    estudios.style.opacity=1
    // ------------------------ Inicialización de drpdwnSoftware
    for (let cid = 0; cid < drpDwnSftwr.length; cid++) {
        eval("sftwrd_"+String(cid)+".style.width='"+contenedorW*drpDwnSftwr[cid].id.at(-1)*.139+"px'");
    }
    for (let Hh of img_prgrms){
        Hh.style.width=contenedorW/7+"px";
        Hh.style.height=contenedorH/11+"px";
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
                triangle0.style.borderTop = String(Math.floor(1.4*hs*contenedorH/100))+"px solid rgb(0, 0, 0)";
                triangle0.style.borderLeft = String(Math.floor(contenedorW-hs*contenedorW/100))+"px solid transparent";
                triangle0.style.left = "";
                triangle0.style.right ="0px";
                hs++
            }else{
                triangle0.style.borderLeft = String(Math.floor(contenedorW*.3+2.3*ht*contenedorW/100))+"px solid rgb(0, 0, 0)";
                triangle0.style.borderBottom = String(Math.floor(contenedorH-3.33*ht*contenedorH/100))+"px solid transparent";
                ht++;}
            
        }
        if(pageId=="pagina2"){
            // ------------------------------------------- Movimiento botones
            botonA1.style.left = String(30+cb/103*20)+"%"; 
            botonS1.style.left = String(70-cb/103*20)+"%";
            botonA1.style.zIndex=11
            botonS1.style.zIndex=10
            // ------------------------------------------- Mueve Triangulo Antihorario
            if(contenedorH-3.33*hs*contenedorH/100<=0){
                triangle1.style.borderLeft = String(Math.floor(contenedorW-ht*contenedorW/100))+"px solid rgb(0, 0, 0)";
                triangle1.style.borderBottom = String(Math.floor(1.4*ht*contenedorH/100))+"px solid transparent";
                triangle1.style.left = "0px";
                triangle1.style.right ="";
                ht++;
            }else{
                triangle1.style.borderTop = String(Math.floor(contenedorH-3.33*hs*contenedorH/100))+"px solid rgb(0, 0, 0)";
                triangle1.style.borderLeft = String(Math.floor(contenedorW*.3+2.3*hs*contenedorW/100))+"px solid transparent";
                hs++;    
            }
        }
        // ------------------------------------------------ Desaparición Letras
        if(cb<=50){
            CV_foto.style.opacity=String(.7*(50-cb)/50)
            eval("titulo_"+String(parseInt(pageId.at(-1))-1)+".style.opacity = "+String((50-cb)/50))
            for(let b =0;b<3;b++){
                if(eval("H_"+String(b))){
                    for (let Hh of eval("H_"+String(b))) {
                        eval("Hh.style.opacity = "+String((50-cb)/50))
                    }
                }
            }
            estudios.style.opacity=String((50-cb)/50)
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
                triangle2.style.borderTop = String(Math.floor(1.4*hs*contenedorH/100))+"px solid rgb(0, 0, 0)";
                triangle2.style.borderLeft = String(Math.floor(contenedorW-hs*contenedorW/100))+"px solid transparent";
                triangle2.style.left = "";
                triangle2.style.right ="0px";
                hs++
            }else{
                triangle2.style.borderLeft = String(Math.floor(contenedorW*.3+ht*contenedorW/100))+"px solid rgb(0, 0, 0)";
                triangle2.style.borderBottom = String(Math.floor(contenedorH-3.33*ht*contenedorH/100))+"px solid transparent";
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
                triangle1.style.borderLeft = String(Math.floor(contenedorW-ht*contenedorW/100))+"px solid rgb(0, 0, 0)";
                triangle1.style.borderBottom = String(Math.floor(1.4*ht*contenedorH/100))+"px solid transparent";
                triangle1.style.left = "0px";
                triangle1.style.right ="";
                ht++;
            }else{
                triangle1.style.borderTop = String(Math.floor(contenedorH-3.33*hs*contenedorH/100))+"px solid rgb(0, 0, 0)";
                triangle1.style.borderLeft = String(Math.floor(contenedorW*.3+hs*contenedorW/100))+"px solid transparent";
                hs++;    
            }

        }
        // ------------------------------------------------ Desaparición Letras
        if(cb<=50){
            CV_foto.style.opacity=String(.7*(50-cb)/50)
            eval("titulo_"+String(parseInt(pageId.at(-1)))+".style.opacity = "+String((50-cb)/50))
            for(let b =0;b<3;b++){
                if(eval("H_"+String(b))){
                    for (let Hh of eval("H_"+String(b))) {
                        eval("Hh.style.opacity = "+String((50-cb)/50))
                    }
                }
            }
            estudios.style.opacity=String((50-cb)/50)
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


// ----------------------- Palpitar
let cs=0;
const palpitar = () => {
    if(cs<=Math.PI){cs+=Math.PI/100}
    else{cs=0}
    let esc= Math.sin(cs);
    contenedor.style.boxShadow = "0 0 "+String(esc*30)+"px rgb(0, 153, 255), 0 0 "+String(esc*30)+"px rgb(0, 153, 255), 0 0 "+String(esc*66)+"px rgb(0, 153, 255)";
    setTimeout(palpitar, 100);
    // ------------------------------------------------ Animación exagono
    hexaHab_foto.style.scale = cs/Math.PI
    
}

palpitar()
/* -------------------- Funciones para dinámicas -------------------- */
window.addEventListener("load", initContenedor);
window.addEventListener("resize", initContenedor);

window.addEventListener("load", initBotons);
window.addEventListener("resize", initBotons);
window.addEventListener("scroll", initBotons);
