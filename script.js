// Datum der Party einfügen (Jahr, Monat-1, Tag, Stunde, Minute)  
const partyDate = new Date(2026, 02, 08, 15, 0, 0); // Beispiel: 15. Februar 2026, 15:00  
  
function updateCountdown() {  
    const now = new Date();  
    const timeLeft = partyDate - now;  
      
    if (timeLeft > 0) {  
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));  
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));  
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));  
          
        document.getElementById('countdown').textContent =   
            `Noch ${days} Tage, ${hours} Stunden und ${minutes} Minuten bis zur Party! ⏰`;  
    } else {  
        document.getElementById('countdown').textContent = "Die Party hat begonnen! 🎉";  
    }  
}  
  
// Countdown alle Minute aktualisieren  
updateCountdown();  
setInterval(updateCountdown, 60000);  

