// function getAndSetPlayer(name, list){
//     // get player name
//     const playerName = document.getElementById(name).innerText;
//     // get order list items
//     const playerList = document.querySelectorAll(list);
//     let index = -1;
//     // find the first empty list item among five items
//     for(let i=0; i<playerList.length; i++){
//         if(!playerList[i].innerText){
//             index = i;
//             break;
//          }
//     }
//     // set player name
//     if(index != -1){
//         playerList[index].innerText = playerName;
//     }
//     else{
//         alert("You can only select up to 5 players.");
//     }
// }

// document.getElementById('select-btn1').addEventListener('click',function(event){
//     getAndSetPlayer('messi','.list');
//     event.target.setAttribute('disabled', '');
//     event.target.classList.add('bg-green-600');
// })

document
  .getElementById("players-container")
  .addEventListener("click", function (event) {
    const selectedElement = event.target;
    if (selectedElement.innerText === "SELECT") {
      const selectCalculateContainer = document.getElementById('selection-calculation');
      selectCalculateContainer.classList.remove('right-[-300px]');
      document.body.classList.add('overflow-hidden');

      const button = event.target;
      const playerName = event.target.parentNode.children[0].innerText;

      const playerListContainer = document.getElementById("player-list");
      if (playerListContainer.children.length < 5) {
        const li = document.createElement("li");
        li.classList.add("mb-4");
        li.innerText = playerName;
        playerListContainer.appendChild(li);
        button.setAttribute("disabled", "disabled");
        button.classList.add("bg-red-600");
        button.innerText = "SELECTED";
      } else {
        alert("You can only add five players");
      }
    }
  });
// document.getElementById('select-btn2').addEventListener('click',function(){
//     getAndSetPlayer('neymar','.list');
// })
// document.getElementById('select-btn3').addEventListener('click',function(){
//     getAndSetPlayer('mbappe','.list');
// })
// document.getElementById('select-btn4').addEventListener('click',function(){
//     getAndSetPlayer('vitor','.list');
// })
// document.getElementById('select-btn5').addEventListener('click',function(){
//     getAndSetPlayer('ramos','.list');
// })
// document.getElementById('select-btn6').addEventListener('click',function(){
//     getAndSetPlayer('sanches','.list');
// })
// document.getElementById('select-btn7').addEventListener('click',function(){
//     getAndSetPlayer('dybala','.list');
// })
// document.getElementById('select-btn8').addEventListener('click',function(){
//     getAndSetPlayer('fernando','.list');
// })
// document.getElementById('select-btn9').addEventListener('click',function(){
//     getAndSetPlayer('ronaldo','.list');
// })
