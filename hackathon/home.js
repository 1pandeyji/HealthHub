function updateHealthValues () {
  const bpInput = document.getElementById('bpInput').value
  const sugarInput = document.getElementById('sugarInput').value

  // Display entered values or "N/A" if input is empty
  document.getElementById('bpValue').innerText = bpInput || 'N/A'
  document.getElementById('sugarValue').innerText = sugarInput || 'N/A'

  // Check for health tips based on entered values
  checkHealthTips(parseFloat(bpInput), parseFloat(sugarInput))
}

function checkHealthTips (bp, sugar) {
  let healthTips = ''

  if (!isNaN(bp)) {
    if (bp > 140) {
      healthTips +=
        'High Blood Pressure: Consider consulting a healthcare professional. '
    } else if (bp < 90) {
      healthTips +=
        'Low Blood Pressure: Ensure you are well-hydrated and consider consulting a healthcare professional. '
    }
    else {
      healthTips += "Blood Pressure is in a good range. Keep it up! ";
  }
  }

  if (!isNaN(sugar)) {
    if (sugar > 150) {
      healthTips +=
        'High Sugar Level: Consider reducing sugar intake and consulting a healthcare professional, Maintain a Healthy Diet'

        
        
    } else if (sugar < 70) {
      healthTips +=
        'Low Sugar Level: Consume a snack or meal to raise your blood sugar level and consult a healthcare professional. '
    }
    else {
      healthTips += "Sugar Level is in a good range. Well done! ";
  }
  }

  if (healthTips !== '') {
    alert('Health Tips:\n' + healthTips)
  }
}
