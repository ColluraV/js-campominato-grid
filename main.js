`use strict`


const btnConferma = document.querySelector(".conferma");
const fieldContainer = document.querySelector("[id=field-container]");

//selezione difficoltà
btnConferma.addEventListener("click",function(){
    let totblocchi = 0;

    const lvlSelect = document.querySelector("#difficolta").value;
    console.log (lvlSelect)

        if(lvlSelect==="facile"){
            totblocchi= 100 }
         
        if(lvlSelect==="medio"){
            totblocchi= 81 }
        
        if(lvlSelect==="difficile"){
            totblocchi= 49 }

    console.log(totblocchi)

    const campoPieno = fieldGen (totblocchi)


    fieldContainer.append(campoPieno)
    console.log(campoPieno)
})




  //generazione singolo blocco
function blockGen (contentBlock, totBlocchi){
    const div = document.createElement("div");
    const blocchiPerRiga = Math.sqrt(totBlocchi);
    
    div.classList.add("quadrato")

    //inserimento testo interno al div da sostituire con ciò che più aggrada

    div.textContent=contentBlock;

}


//generazione campo

function fieldGen (numBlocchi) {
    const campo = [];
  
    for (let i = 0; i < numBlocchi; i++) {
      
      const blocco = blockGen("sqr" + i, numBlocchi);
  
      campo.push(blocco);
    } console.log(campo)
    return campo;
  }



