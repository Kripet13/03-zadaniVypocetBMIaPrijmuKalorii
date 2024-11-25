function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const bmi = weight / (height * height);
    let result = '';

    if (isNaN(height) || isNaN(weight)) { alert('Prosím, vyplňte všechna pole.');
        return false; 
    }
        if (bmi < 18.5) {
            result = 'Podváha';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            result = 'Normální váha';
        } else if (bmi >= 25 && bmi <= 29.9) {
            result = 'Nadváha';
        } else {
            result = 'Obezita';
        }
        document.getElementById('bmiResult').innerText = `Vaše BMI je ${bmi.toFixed(2)} (${result})`;
       console.log('ok');
        return true;
}

function calculateBMR() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) * 100;
    const age = parseFloat(document.getElementById('age').value);
    const gender = parseFloat(document.getElementById('gender').value);
    const activityLevel = parseFloat(document.getElementById('activityLevel').value);
    let bmr = 0;
    if (isNaN(weight) || isNaN(height) || isNaN(age)) { alert('Prosím, vyplňte všechna pole.');
         return false;
    } 
    if (gender === 'ml') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    switch (activityLevel) {
        case 'low':
            bmr *= 1.2;
            break;
        case 'medium':
            bmr *= 1.55;
            break;
        case 'high':
            bmr *= 1.9;
            break;
    }
    document.getElementById('bmrResult').innerText = `Váš doporučený denní příjem kalorií je ${bmr.toFixed(2)} kcal`;
    console.log('ok');
    return true;
}

function repeatCalculation() {
        document.getElementById('weight').value = '';
        document.getElementById('height').value = '';
        document.getElementById('age').value = '';
        document.getElementById('gender').value = 'male';
        document.getElementById('activityLevel').value = 'low';
        document.getElementById('bmiResult').value = '';
        document.getElementById('bmrResult').value = '';
}

function endProgram() {
        alert('programukončen.');
}