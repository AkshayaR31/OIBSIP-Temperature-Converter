function convertTemperature() {
    const input = document.getElementById('temperatureInput').value;
    const unit = document.getElementById('unitSelect').value;
    const resultArea = document.getElementById('result');
    
    if (!isNaN(input)) {
      let convertedTemp;
      switch (unit) {
        case 'celsius':
          convertedTemp = (parseFloat(input) - 32) * (5 / 9);
          resultArea.innerHTML = `${convertedTemp.toFixed(2)}°C`;
          break;
        case 'fahrenheit':
          convertedTemp = (parseFloat(input) * (9 / 5)) + 32;
          resultArea.innerHTML = `${convertedTemp.toFixed(2)}°F`;
          break;
        case 'kelvin':
          convertedTemp = parseFloat(input) + 273.15;
          resultArea.innerHTML = `${convertedTemp.toFixed(2)} K`;
          break;
        default:
          resultArea.innerHTML = 'Invalid unit';
      }
    } else {
      resultArea.innerHTML = 'Please enter a valid number';
    }
  }
  