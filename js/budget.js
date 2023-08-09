function getValueById(idName){
    const inputField = document.getElementById(idName).value;
    const inputValue = parseFloat(inputField);
    return inputValue;
}
function getTextValueById(idName){
    const text = document.getElementById(idName).innerText;
    const value = parseFloat(text);
    return value;
}

function setValueById(idName, value){
    const textField = document.getElementById(idName);
    textField.innerText = value;
}

document.getElementById('calculate-btn').addEventListener('click', function(){
    // get players list
    const totalPlyers = document.getElementById('player-list').children.length;
    const perPlayerCost = getValueById('per-player-cost');
    const totalPlayerCost = totalPlyers * perPlayerCost;
    setValueById('expenses', totalPlayerCost);
    
})

document.getElementById('calculate-total-btn').addEventListener('click',function(){
    const playersExpenses = getTextValueById('expenses');
    const managerCost = getValueById('manager-cost');
    const coachCost = getValueById('coach-cost');

    const totalCost = playersExpenses + managerCost + coachCost;

    setValueById('total', totalCost);

})