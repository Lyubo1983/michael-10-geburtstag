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


// Wetter-Widget Backup-System  
document.addEventListener('DOMContentLoaded', function() {  
    // Prüfe, ob das Wetter-Widget geladen wurde  
    const weatherEmbed = document.querySelector('.weather-embed iframe');  
    const weatherBackup = document.getElementById('weather-backup');  
      
    if (weatherEmbed) {  
        // Fallback anzeigen, falls Widget nach 5 Sekunden nicht lädt  
        setTimeout(() => {  
            weatherEmbed.addEventListener('error', showWeatherBackup);  
              
            // Prüfe ob Widget-Inhalt geladen wurde  
            try {  
                if (weatherEmbed.contentDocument || weatherEmbed.contentWindow) {  
                    // Widget erfolgreich geladen  
                    console.log('Wetter-Widget geladen');  
                } else {  
                    showWeatherBackup();  
                }  
            } catch (e) {  
                // Cross-Origin, aber wahrscheinlich geladen  
                console.log('Wetter-Widget wahrscheinlich geladen (Cross-Origin)');  
            }  
        }, 5000);  
    }  
      
    function showWeatherBackup() {  
        if (weatherBackup) {  
            weatherBackup.style.display = 'block';  
            console.log('Wetter-Backup wird angezeigt');  
              
            // Aktualisiere Backup mit realistischen Februarwerten  
            updateWeatherBackup();  
        }  
    }  
      
    function updateWeatherBackup() {  
        const now = new Date();  
        const partyDate = new Date(2026, 1, 8); // 8. Februar 2026  
          
        // Februar in Bayern - realistische Werte  
        const februaryWeather = [  
            { icon: '❄️', temp: '-2°C bis 3°C', desc: 'Kalt mit möglichem Schnee - perfekt fürs Eislaufen!' },  
            { icon: '☁️', temp: '0°C bis 5°C', desc: 'Bewölkt und winterlich - ideales Eislaufwetter!' },  
            { icon: '🌤️', temp: '1°C bis 6°C', desc: 'Teilweise sonnig aber kalt - super für Outdoor-Spaß!' }  
        ];  
          
        const randomWeather = februaryWeather[Math.floor(Math.random() * februaryWeather.length)];  
          
        const iconElement = weatherBackup.querySelector('.weather-icon');  
        const tempElement = weatherBackup.querySelector('.weather-temp');  
        const descElement = weatherBackup.querySelector('.weather-desc');  
          
        if (iconElement) iconElement.textContent = randomWeather.icon;  
        if (tempElement) tempElement.textContent = randomWeather.temp;  
        if (descElement) descElement.textContent = randomWeather.desc;  
    }  
});
