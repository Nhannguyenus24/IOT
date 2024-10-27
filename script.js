document.addEventListener('DOMContentLoaded', () => {
    const updateTime = () => {
      const now = new Date();
      document.getElementById('time').textContent = now.toLocaleTimeString();
      document.getElementById('date').textContent = now.toLocaleDateString();
    };
  
    setInterval(updateTime, 1000);
    updateTime();
  
    // Điều khiển khóa cửa
    const doorLock = document.getElementById('doorLock');
    doorLock.addEventListener('click', () => {
      if (doorLock.textContent === 'Locked') {
        doorLock.textContent = 'Unlocked';
        doorLock.style.backgroundColor = '#43b581';
      } else {
        doorLock.textContent = 'Locked';
        doorLock.style.backgroundColor = '#7289da';
      }
    });
  });

  const sliderContainer = document.getElementById("brightness-slider");
  const brightnessLevel = document.getElementById("brightness-level");
  const sliderFill = sliderContainer.querySelector(".slider-fill");
  
  let isDragging = false;
  
  // Update the brightness level based on the position
 // Update the brightness level based on the position
function updateBrightness(event) {
  const rect = sliderContainer.getBoundingClientRect();
  const offsetX = event.clientX - rect.left;
  const sliderWidth = sliderContainer.clientWidth;
  let newPercentage = Math.min(100, Math.max(0, (offsetX / sliderWidth) * 100));
  const lightStatus = document.getElementById('lightStatus');

  // Update light status based on brightness
  if (newPercentage === 0) {
      lightStatus.textContent = "off";
  } else {
      lightStatus.textContent = "on";
  }

  // Set the new width and display the percentage
  sliderFill.style.width = `${newPercentage}%`;
  brightnessLevel.textContent = `${Math.round(newPercentage)}%`;

  // Calculate and set the opacity based on the new percentage
  const opacityValue = newPercentage / 100; // Convert percentage to a value between 0 and 1
  sliderFill.style.opacity = opacityValue; // Set the opacity
}

  
  // Start dragging
  sliderContainer.addEventListener("mousedown", (event) => {
      isDragging = true;
      updateBrightness(event);
  });
  
  // Continue dragging
  document.addEventListener("mousemove", (event) => {
      if (isDragging) {
          updateBrightness(event);
      }
  });
  
  // Stop dragging
  document.addEventListener("mouseup", () => {
      isDragging = false;
  });
  

  document.addEventListener('DOMContentLoaded', () => {
    const weatherDesc = document.getElementById('weatherDesc');
    const weather = weatherDesc.textContent.trim(); 

    let icon;
    if (weather === 'Sunny') {
        icon = '☀️'; 
    } else if (weather === 'Cloudy') {
        icon = '☁️'; 
    } else if (weather === 'Rainy') {
        icon = '🌧️'; 
    } else {
        icon = '';
    }

    if (icon) {
        weatherDesc.innerHTML += ` <span class="weather-icon">${icon}</span>`;
    }
});
