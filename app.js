const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const accelerationRadio = document.getElementById('accelerationRadio');
const finalSpeedRadio = document.getElementById('finalSpeedRadio');
const initialSpeedRadio = document.getElementById('initialSpeedRadio');
const timeRadio = document.getElementById('timeRadio');

let acceleration;
let finalSpeed = v1;
let initialSpeed = v2;
let time = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

accelerationRadio.addEventListener('click', function() {
  variable1.textContent = 'Final Speed (m/s)';
  variable2.textContent = 'Initial Speed (m/s)';
  variable3.textContent = 'Time (s)';
  finalSpeed = v1;
  initialSpeed = v2;
  time = v3; 
});
finalSpeedRadio.addEventListener('click', function() {
  variable1.textContent = 'Acceleration (m/s²)';
  variable2.textContent = 'Initial Speed (m/s)';
  variable3.textContent = 'Time (s)';
  acceleration = v1;
  initialSpeed = v2;
  time = v3; 
});
initialSpeedRadio.addEventListener('click', function() {
  variable1.textContent = 'Acceleration (m/s²)';
  variable2.textContent = 'Final Speed (m/s)';
  variable3.textContent = 'Time (s)';
  acceleration = v1;
  finalSpeed = v2;
  time = v3; 
});
timeRadio.addEventListener('click', function() {
  variable1.textContent = 'Acceleration (m/s²)';
  variable2.textContent = 'Final Speed (m/s)';
  variable3.textContent = 'Initial Speed (m/s)';
  acceleration = v1;
  finalSpeed = v2;
  initialSpeed = v3; 
});

btn.addEventListener('click', function() {
  if(accelerationRadio.checked)
    result.textContent = `Acceleration = ${computeAcceleration().toFixed(2)} (m/s²)`;
  else if(finalSpeedRadio.checked)
    result.textContent = `Final Speed = ${computeFinalSpeed().toFixed(2)} (m/s)`;
  else if(initialSpeedRadio.checked)
    result.textContent = `Initial Speed = ${computeInitialSpeed().toFixed(2)} (m/s)`;
  else if(timeRadio.checked)
    result.textContent = `Time = ${computeTime()} (s)`;
})

function computeAcceleration() {
  return (Number(finalSpeed.value) - Number(initialSpeed.value)) / Number(time.value);
}

function computeFinalSpeed() {
  return (Number(acceleration.value) * Number(time.value)) + Number(initialSpeed.value);
}

function computeInitialSpeed() {
  return Number(finalSpeed.value) - (Number(time.value) * Number(acceleration.value));
}

function computeTime() {
  return (Number(finalSpeed.value) - Number(initialSpeed.value)) / Number(acceleration.value);
}

