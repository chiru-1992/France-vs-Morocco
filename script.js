// ================================
// SECRET CODE
// ================================

const SECRET_CODE = "NINJA TURTLE";

// ================================
// ALL TICKETS
// ================================

const tickets = [

{
ticket:1,
buyer:"Priyanka",

france:{
name:"Kylian Mbappé",
number:"10",
country:"France",
image:"images/france/kylian_mbappe.jpg"
},

morocco:{
name:"Achraf Hakimi",
number:"2",
country:"Morocco",
image:"images/morocco/achraf_hakimi.jpg"
}

},

{
ticket:2,
buyer:"Niraj",

france:{
name:"Ousmane Dembélé",
number:"7",
country:"France",
image:"images/france/ousmane_dembele.jpg"
},

morocco:{
name:"Noussair Mazraoui",
number:"3",
country:"Morocco",
image:"images/morocco/noussair_mazraoui.jpg"
}

},

{
ticket:3,
buyer:"Niraj",

france:{
name:"Marcus Thuram",
number:"9",
country:"France",
image:"images/france/marcus_thuram.jpg"
},

morocco:{
name:"Zakaria El Ouahdi",
number:"13",
country:"Morocco",
image:"images/morocco/zakaria_el_ouahdi.jpg"
}

},

{
ticket:4,
buyer:"Karan",

france:{
name:"Michael Olise",
number:"11",
country:"France",
image:"images/france/michael_olise.jpg"
},

morocco:{
name:"Issa Diop",
number:"14",
country:"Morocco",
image:"images/morocco/issa_diop.jpg"
}

},

{
ticket:5,
buyer:"Nitu",

france:{
name:"Bradley Barcola",
number:"12",
country:"France",
image:"images/france/bradley_barcola.jpg"
},

morocco:{
name:"Chadi Riad",
number:"18",
country:"Morocco",
image:"images/morocco/chadi_riad.jpg"
}

},{
ticket:6,
buyer:"Ashwin",

france:{
name:"Désiré Doué",
number:"20",
country:"France",
image:"images/france/desire_doue.jpg"
},

morocco:{
name:"Youssef Belammari",
number:"19",
country:"Morocco",
image:"images/morocco/youssef_belammari.jpg"
}

},

{
ticket:7,
buyer:"Diwakar",

france:{
name:"Jean-Philippe Mateta",
number:"22",
country:"France",
image:"images/france/jean_philippe_mateta.jpg"
},

morocco:{
name:"Redouane Halhal",
number:"25",
country:"Morocco",
image:"images/morocco/redouane_halhal.jpg"
}

},

{
ticket:8,
buyer:"Ashwin",

france:{
name:"Rayan Cherki",
number:"24",
country:"France",
image:"images/france/rayan_cherki.jpg"
},

morocco:{
name:"Anass Salah-Eddine",
number:"26",
country:"Morocco",
image:"images/morocco/anass_salah_eddine.jpg"
}

},

{
ticket:9,
buyer:"Nitu",

france:{
name:"Maghnes Akliouche",
number:"25",
country:"France",
image:"images/france/maghnes_akliouche.jpg"
},

morocco:{{
ticket:11,
buyer:"Kamna",

france:{
name:"Adrien Rabiot",
number:"14",
country:"France",
image:"images/france/adrien_rabiot.jpg"
},

morocco:{
name:"Ayyoub Bouaddi",
number:"6",
country:"Morocco",
image:"images/morocco/ayyoub_bouaddi.jpg"
}

},

{
ticket:12,
buyer:"Karan",

france:{
name:"Aurélien Tchouaméni",
number:"8",
country:"France",
image:"images/france/aurelien_tchouameni.jpg"
},

morocco:{
name:"Chemsdine Talbi",
number:"7",
country:"Morocco",
image:"images/morocco/chemsdine_talbi.jpg"
}

},

{
ticket:13,
buyer:"Nikita",

france:{
name:"Manu Koné",
number:"6",
country:"France",
image:"images/france/manu_kone.jpg"
},

morocco:{
name:"Azzedine Ounahi",
number:"8",
country:"Morocco",
image:"images/morocco/azzedine_ounahi.jpg"
}

},

{
ticket:14,
buyer:"Kamna",

france:{
name:"Warren Zaïre-Emery",
number:"18",
country:"France",
image:"images/france/warren_zaire_emery.jpg
  {
ticket:16,
buyer:"Manisha",

france:{
name:"Lucas Digne",
number:"3",
country:"France",
image:"images/france/lucas_digne.jpg"
},

morocco:{
name:"Gessime Yassine",
number:"16",
country:"Morocco",
image:"images/morocco/gessime_yassine.jpg"
}

},

{
ticket:17,
buyer:"Aditya",

france:{
name:"Dayot Upamecano",
number:"4",
country:"France",
image:"images/france/dayot_upamecano.jpg"
},

morocco:{
name:"Bilal El Khannouss",
number:"23",
country:"Morocco",
image:"images/morocco/bilal_el_khannouss.jpg"
}

},

{
ticket:18,
buyer:"Nikita",

france:{
name:"Jules Koundé",
number:"5",
country:"France",
image:"images/france/jules_kounde.jpg"
  {
ticket:21,
buyer:"Manisha",

france:{
name:"Theo Hernández",
number:"19",
country:"France",
image:"images/france/theo_hernandez.jpg"
},

morocco:{
name:"Ayoub El Kaabi",
number:"20",
country:"Morocco",
image:"images/morocco/ayoub_el_kaabi.jpg"
}

},

{
ticket:22,
buyer:"Satish",

france:{
name:"Lucas Hernández",
number:"21",
country:"France",
image:"images/france/lucas_hernandez.jpg"
},

morocco:{
name:"Ayoube Amaimouni",
number:"21",
country:"Morocco",
image:"images/morocco/ayoube_amaimouni.jpg"
}

},

{
ticket:23,
buyer:"Priyanka",

france:{
name:"Maxence Lacroix",
number:"26",
country:"France",
image:"images/france/maxence_lacroix.jpg"
},

morocco:{
name:"Amine Sbai",
number:"22",
country:"Morocco",
image:"images/morocco/amine_sbai.jpg"
}

}

];
},

morocco:{
name:"Neil El Aynaoui",
number:"24",
country:"Morocco",
image:"images/morocco/neil_el_aynaoui
  // ================================
// CREATE ALL TICKETS
// ================================

const container = document.getElementById("ticketContainer");

tickets.forEach(ticket => {

const ticketHTML = `

<div class="ticket">

    <div class="ticket-inner">

        <!-- FRONT -->

        <div class="ticket-front">

            <div class="ticket-number">
                🎫 TICKET ${ticket.ticket}
            </div>

            <div class="lock">🔒</div>

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
