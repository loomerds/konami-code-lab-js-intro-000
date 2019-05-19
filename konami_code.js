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
  var keyListener = document.boody.addEventListener('keydown', compareArrs);
  //var keyListener = document.body.addEventListener('keydown', (e)=>{
    //newArr.push(e.key);
    //compareArrs();
  })
}

function compareArrs(e) {
  newArr.push(e.key)
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
