// ================================
// SECRET CODE
// ================================

const SECRET_CODE = "NINJA TURTLE";


// ================================
// ALL 23 TICKETS
// ================================

const tickets = [

{
ticket:1,
buyer:"Priyanka",

france:{
name:"Kylian Mbappé",
number:"10",
country:"France",
image:"images/france/mbappe.jpg"
},

morocco:{
name:"Achraf Hakimi",
number:"2",
country:"Morocco",
image:"images/morocco/hakimi.jpg"
}

},

{
ticket:2,
buyer:"Niraj",

france:{
name:"Ousmane Dembélé",
number:"7",
country:"France",
image:"images/france/dembele.jpg"
},

morocco:{
name:"Noussair Mazraoui",
number:"3",
country:"Morocco",
image:"images/morocco/mazraoui.jpg"
}

},

{
ticket:3,
buyer:"Niraj",

france:{
name:"Marcus Thuram",
number:"9",
country:"France",
image:"images/france/thuram.jpg"
},

morocco:{
name:"Zakaria El Ouahdi",
number:"13",
country:"Morocco",
image:"images/morocco/el-ouahdi.jpg"
}

},

{
ticket:4,
buyer:"Karan",

france:{
name:"Michael Olise",
number:"11",
country:"France",
image:"images/france/olise.jpg"
},

morocco:{
name:"Issa Diop",
number:"14",
country:"Morocco",
image:"images/morocco/diop.jpg"
}

},

{
ticket:5,
buyer:"Nitu",

france:{
name:"Bradley Barcola",
number:"12",
country:"France",
image:"images/france/barcola.jpg"
},

morocco:{
name:"Chadi Riad",
number:"18",
country:"Morocco",
image:"images/morocco/riad.jpg"
}

},

{
ticket:6,
buyer:"Ashwin",

france:{
name:"Désiré Doué",
number:"20",
country:"France",
image:"images/france/doue.jpg"
},

morocco:{
name:"Youssef Belammari",
number:"19",
country:"Morocco",
image:"images/morocco/belammari.jpg"
}

},

{
ticket:7,
buyer:"Diwakar",

france:{
name:"Jean-Philippe Mateta",
number:"22",
country:"France",
image:"images/france/mateta.jpg"
},

morocco:{
name:"Redouane Halhal",
number:"25",
country:"Morocco",
image:"images/morocco/halhal.jpg"
}

},

{
ticket:8,
buyer:"Ashwin",

france:{
name:"Rayan Cherki",
number:"24",
country:"France",
image:"images/france/cherki.jpg"
},

morocco:{
name:"Anass Salah-Eddine",
number:"26",
country:"Morocco",
image:"images/morocco/salah-eddine.jpg"
}

},

{
ticket:9,
buyer:"Nitu",

france:{
name:"Maghnes Akliouche",
number:"25",
country:"France",
image:"images/france/akliouche.jpg"
},

morocco:{
name:"Marwane Saadane",
number:"5",
country:"Morocco",
image:"images/morocco/saadane.jpg"
}

},

{
ticket:10,
buyer:"Pranika",

france:{
name:"N'Golo Kanté",
number:"13",
country:"France",
image:"images/france/kante.jpg"
},

morocco:{
name:"Sofyan Amrabat",
number:"4",
country:"Morocco",
image:"images/morocco/amrabat.jpg"
}

},

];{
ticket:11,
buyer:"Kamna",

france:{
name:"Adrien Rabiot",
number:"14",
country:"France",
image:"images/france/rabiot.jpg"
},

morocco:{
name:"Ayyoub Bouaddi",
number:"6",
country:"Morocco",
image:"images/morocco/bouaddi.jpg"
}

},

{
ticket:12,
buyer:"Karan",

france:{
name:"Aurélien Tchouaméni",
number:"8",
country:"France",
image:"images/france/tchouameni.jpg"
},

morocco:{
name:"Chemsdine Talbi",
number:"7",
country:"Morocco",
image:"images/morocco/talbi.jpg"
}

},

{
ticket:13,
buyer:"Nikita",

france:{
name:"Manu Koné",
number:"6",
country:"France",
image:"images/france/kone.jpg"
},

morocco:{
name:"Azzedine Ounahi",
number:"8",
country:"Morocco",
image:"images/morocco/ounahi.jpg"
}

},

{
ticket:14,
buyer:"Kamna",

france:{
name:"Warren Zaïre-Emery",
number:"18",
country:"France",
image:"images/france/zaire-emery.jpg"
},

morocco:{
name:"Ismael Saibari",
number:"11",
country:"Morocco",
image:"images/morocco/saibari.jpg"
}

},

{
ticket:15,
buyer:"Sishir",

france:{
name:"Malo Gusto",
number:"2",
country:"France",
image:"images/france/gusto.jpg"
},

morocco:{
name:"Samir El Mourabet",
number:"15",
country:"Morocco",
image:"images/morocco/el-mourabet.jpg"
}

},

{
ticket:16,
buyer:"Manisha",

france:{
name:"Lucas Digne",
number:"3",
country:"France",
image:"images/france/digne.jpg"
},

morocco:{
name:"Gessime Yassine",
number:"16",
country:"Morocco",// ================================
// CREATE ALL TICKETS
// ================================

const container = document.getElementById("ticketContainer");

tickets.forEach(ticket => {

container.innerHTML += `

<div class="ticket">

<div class="ticket-inner">

<!-- FRONT -->

<div class="ticket-front">

<div class="ticket-number">
🎫 TICKET ${ticket.ticket}
</div>

<div class="lock">
🔒
</div>

<div class="locked">
LOCKED
</div>

<div class="buyer">
Buyer<br>
<b>${ticket.buyer}</b>
</div>

</div>

<!-- BACK -->

<div class="ticket-back">

<div class="ticket-title">
🎫 Ticket ${ticket.ticket}
</div>

<div class="players">

<div class="player">

<img src="${ticket.france.image}" alt="${ticket.france.name}">

<div class="country">
🇫🇷 FRANCE
</div>

<div class="player-name">
${ticket.france.name}
</div>

<div class="jersey">
Jersey #${ticket.france.number}
</div>

</div>

<div class="player">

<img src="${ticket.morocco.image}" alt="${ticket.morocco.name}">

<div class="country">
🇲🇦 MOROCCO
</div>

<div class="player-name">
${ticket.morocco.name}
</div>

<div class="jersey">
Jersey #${ticket.morocco.number}
</div>

</div>

</div>

<div class="buyer-bottom">
Buyer : <b>${ticket.buyer}</b>
</div>

</div>

</div>

</div>

`;

});


// ================================
// UNLOCK CODE
// ================================

const unlockBtn = document.getElementById("unlockBtn");
const codeInput = document.getElementById("secretCode");
const message = document.getElementById("message");

unlockBtn.addEventListener("click", unlockTickets);

codeInput.addEventListener("keypress", function(e){

if(e.key==="Enter"){
unlockTickets();
}

});

function unlockTickets(){
