const container = document.getElementById("ticketContainer");
const unlockBtn = document.getElementById("unlockBtn");
const codeInput = document.getElementById("secretCode");
const message = document.getElementById("message");

// Create tickets
tickets.forEach(ticket => {

const card = document.createElement("div");

card.className = "ticket";

card.innerHTML = `
<div class="ticket-inner">

<div class="ticket-front">

<div class="ticket-number">🎫 Ticket ${ticket.ticket}</div>

<div class="lock">🔒</div>

<div class="locked">LOCKED</div>

<div class="buyer">
Buyer<br>
<b>${ticket.buyer}</b>
</div>

</div>

<div class="ticket-back">

<h3>🎫 Ticket ${ticket.ticket}</h3>

<div class="players">

<div class="player">
<img src="${ticket.france.image}">
<div class="country">🇫🇷 France</div>
<div class="player-name">${ticket.france.name}</div>
<div class="jersey">#${ticket.france.number}</div>
</div>

<div class="player">
<img src="${ticket.morocco.image}">
<div class="country">🇲🇦 Morocco</div>
<div class="player-name">${ticket.morocco.name}</div>
<div class="jersey">#${ticket.morocco.number}</div>
</div>

</div>

<div class="buyer-bottom">
Buyer: <b>${ticket.buyer}</b>
</div>

</div>

</div>
`;

container.appendChild(card);

});

// Unlock button

unlockBtn.onclick = function () {

if (codeInput.value.trim().toUpperCase() === SECRET_CODE) {

message.innerHTML = "✅ Tickets Unlocked!";

document.querySelectorAll(".ticket").forEach(ticket => {
ticket.classList.add("flip");
});

} else {

message.innerHTML = "❌ Wrong Secret Code";

}

};
