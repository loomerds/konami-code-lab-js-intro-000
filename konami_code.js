const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let newArr = [];

function init() {
  var keyListener = document.body.addEventListener('keydown', (e)=>{
    e.stopPropagation();
    newArr.push(e.key);
    compareArrs();
  })
}

function compareArrs() {

  for(let i=0; i<newArr.length; i++) {
    if(newArr[i]!==codes[i]) {
      if(newArr[i]===codes[0]) {
        newArr = [newArr[i]];
        return;
      } else {
        newArr = [];
        return;
      }
    } else {
        continue;
    }
  }
  if(newArr.length===codes.length) {
    alert("You matched the codes!")
  }
}
