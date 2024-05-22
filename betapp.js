document.getElementById('betForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const team1 = document.getElementById('team1').value;
    const team2 = document.getElementById('team2').value;
    const betAmount = document.getElementById('betAmount').value;

    // Přidání sázky do seznamu aktuálních sázek
    const betsList = document.getElementById('betsList');
    const betItem = document.createElement('li');
    betItem.textContent = `Sázkař: ${name} -  ${team1} vs. ${team2} - Sázka: ${betAmount}`;
    betsList.appendChild(betItem);

    // Vyčištění formuláře po přidání sázky
    document.getElementById('betForm').reset();
});