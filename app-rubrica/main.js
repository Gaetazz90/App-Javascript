
//CATTURA ELEMENTI

let colCard = document.querySelector("#colCard");
let btnshow = document.querySelector("#btnshow");

let btnadd = document.querySelector("#btnadd");
let inputname = document.querySelector("#inputname");
let inputnumber = document.querySelector("#inputnumber");

let btnremove = document.querySelector("#btnremove");
let inputname2 = document.querySelector("#inputname2");

let check = false;


//OGGETTO

let rubrica = {

    contactlist: [
        {contactname: "Luca", contactnumber: 3332225657},
        {contactname: "Gigi", contactnumber: 3332227678},
        {contactname: "Jacopo", contactnumber: 3334442121},
        {contactname: "Matteo", contactnumber: 3338985657},
        {contactname: "Raffaele", contactnumber: 3334449090}
    ],


    showcontact: function() {
        colCard.innerHTML = " ";
        this.contactlist.forEach( (contatto) => {
            let divcard = document.createElement("div");
            divcard.classList.add("card-custom", "d-flex", "justify-content-around", "align-items-center");
            divcard.innerHTML = 
            ` 
            <p>Nome: ${contatto.contactname} </p>
            <p>Numero: ${contatto.contactnumber} </p>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" 
                 class="bi bi-trash-fill" id="icondelete"  viewBox="0 0 16 16">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
            </svg>
    
            `
            colCard.appendChild(divcard);

        } );

        let icondelete = document.querySelectorAll("#icondelete");

        icondelete.forEach((icona,i) => {
            icona.addEventListener("click", () => {
                this.contactlist.splice(i,1);
                this.showcontact();
            })
        })
       
    },

    addcontact: function(newname, newnumber) {
        //Questa condizione è commentata perchè mi funziona solo 1 volta, ovvero se lo provo a fare più volte non funziona più. 
        //Comunque questa è la logica che verifica se un nome è già esistente nella lista contatti, 
        //e quindi se è già presente nella lista, allora fa apparire l'alert e non me lo aggiunge alla lista.

        
        //CONDIZIONE DI VERIFICA NOME GIà ESISTENTE
        // let nomeEsistente = this.contactlist.some(contatto => contatto.contactname === newname);

        // if (nomeEsistente) {
        //     alert("Contatto già esistente, cambia nome");
        //     return;
        // }

        if( newname && newname != " " && newnumber ){ 
                this.contactlist.push({contactname: newname, contactnumber: newnumber});
                rubrica.showcontact();
            }
           
        else {    
                alert("Devi inserire tutti i dati!");
                    colCard.innerHTML = " ";
                    btnshow.innerHTML = "Show Contacts";
                                 
        }
        
        
    },

    //Questa funzione è commentata perchè in realtà non mi serve...per cancellare un contatto uso direttamente l'icona, 
    //quindi questa la volevo trasformare in un MODIFICA CONTATTO ma non ho mai implementato la logica giusta.    
    // removecontact: function(nomerimosso) {
    //     let namesmap = this.contactlist.map((contatto) => contatto.contactname) 
    //     let index = namesmap.indexOf(nomerimosso);
    //     this.contactlist.splice(index, 1);    
        
    // }

};

// FINE OGGETTO



// EVENTI

btnshow.addEventListener("click", () => {

    if( check == false) {
        rubrica.showcontact();
        check = true;
        btnshow.innerHTML = "Hide Contacts";
    } else{
        colCard.innerHTML = " ";
        check = false;
        btnshow.innerHTML = "Show Contacts";
    }
    
}),


btnadd.addEventListener("click", () => {

    rubrica.addcontact(inputname.value, inputnumber.value);
    inputname.value = " ";
    inputnumber.value = " ";
    
    if( check == false) {
        rubrica.showcontact();
        check = true;
        btnshow.innerHTML = "Hide Contacts";
    } else{
        colCard.innerHTML = " ";
        check = false;
        btnshow.innerHTML = "Show Contacts";
    }    
        
})

//Qui è commentato per lo stesso motivo di sopra della funzione removecontact.
// btnremove.addEventListener("click", () => {
//   rubrica.removecontact(inputname2.value);
//   inputname2.value = " ";
//   rubrica.showcontact();

// } )







