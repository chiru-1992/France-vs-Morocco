// ================================
// SECRET CODE
// ================================

const SECRET_CODE = "NINJA TURTLE";

// ================================
// GET ELEMENTS
// ================================

const container = document.getElementById("ticketContainer");
const unlockBtn = document.getElementById("unlockBtn");
const codeInput = document.getElementById("secretCode");
const message = document.getElementById("message");

// ================================
// CREATE ALL TICKETS
// ================================

tickets.forEach(ticket => {

container.innerHTML += `

<div class="ticket">

<div class="ticket-inner">

<div class="ticket-front">

<div class="ticket-number">
🎫 Ticket ${ticket.ticket}
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
// UNLOCK FUNCTION
// ================================

unlockBtn.addEventListener("click", unlockTickets);

codeInput.addEventListener("keydown", function(e){

if(e.key === "Enter"){
unlockTickets();
}

});

function unlockTickets(){

const code = codeInput.value.trim().toUpperCase();

if(code === SECRET_CODE){

message.textContent = "✅ Tickets Unlocked!";
message.style.color = "lime";

const allTickets = document.querySelectorAll(".ticket");

allTickets.forEach((ticket,index)=>{

setTimeout(()=>{

ticket.classList.add("flip");

},index*150);

});

unlockBtn.disabled = true;
codeInput.disabled = true;

}else{

message.textContent = "❌ Wrong Secret Code";
message.style.color = "red";

}

}
