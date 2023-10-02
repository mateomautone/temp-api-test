fetch('https://api.open-meteo.com/v1/forecast?latitude=-34.9033&longitude=-56.1882&current_weather=true&forecast_days=1')
    .then(response => response.json())
    .then(data => document.getElementById('temp').innerHTML = data.current_weather.temperature)