// block up
const blockUp = document.querySelector(".block-up");
const area = document.getElementById("textarea");
const txtUp = document.querySelector(".block-up_txt");

// buttons
const buttons = document.querySelector(".buttons");
const btnEdit = document.querySelector(".btn-edit");
const btnStyle = document.querySelector(".btn-style");
const btnSave = document.querySelector(".btn-save");
const btnColor = document.querySelector(".style-color-txt");
const btnBgrd = document.querySelector(".style-color-bgrd");

btnEdit.addEventListener("click", () => {
  edit.style.display = "block";
  style.style.display = "none";
});

btnStyle.addEventListener("click", () => {
  edit.style.display = "none";
  style.style.display = "block";
});

btnSave.addEventListener("click", () => {
  txtUp.innerHTML = area.value;
  
  // add table 
  const trCount = document.forms["tr"].countTr.value;
  const tdCount = document.forms["td"].countTd.value;

  const borderWidthValue = document.forms["border-style"].borderWidth.value;

  const borderTypeSelected = document.getElementById("borderType");
  let showSelectType = borderTypeSelected.options[borderTypeSelected.selectedIndex].value;

  const borderColorSelected = document.getElementById("borderColor");
  let showSelectColor = borderColorSelected.options[borderColorSelected.selectedIndex].value;

  const tdWidth = document.forms["td-width"].widthTD.value;
  const tdHeight = document.forms["td-height"].heightTD.value;

  let tbl = document.createElement("table");
  let tblBody = document.createElement("tbody");

  for (let i = 0; i < trCount; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < tdCount; j++) {
      let cell = document.createElement("td");
      let cellText = document.createTextNode("TD");
      cell.style.border = `${borderWidthValue}px ${showSelectType} ${showSelectColor}`;
      cell.style.width = `${tdWidth}px`;
      cell.style.height = `${tdHeight}px`;
      row.style.border = `${borderWidthValue}px ${showSelectType} ${showSelectColor}`;
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    tblBody.appendChild(row);
  }
  tbl.appendChild(tblBody);
  txtUp.appendChild(tbl);
  tbl.style.borderCollapse = "collapse";
  tbl.style.border = `${borderWidthValue}px ${showSelectType} ${showSelectColor}`;

  // list
  const countLiValue = document.forms["txtCountLi"].li.value;
  const marksSelected = document.getElementById("selectMarks");
  let showSelectMark = marksSelected.options[marksSelected.selectedIndex].value;

  let ul = document.createElement("ul");
  for (let k = 0; k < countLiValue; k++) {
    let li = document.createElement("li");
    let liTxt = document.createTextNode(`item ${k}`);
    li.style.listStyleType = `${showSelectMark}`;
    li.appendChild(liTxt);
    ul.appendChild(li);
  }
  txtUp.appendChild(ul);
});

const block = document.querySelector(".block");

btnColor.addEventListener("click", () => {
  if(block.style.display === "none" || block.style.display === "") {
    block.style.display = "grid";
  } else {
    block.style.display = "none";
  }

  document.querySelector(".block_first").onclick = () => txtUp.style.color = "yellow";
  document.querySelector(".block_second").onclick = () => txtUp.style.color = "blue";
  document.querySelector(".block_third").onclick = () => txtUp.style.color = "green";
  document.querySelector(".block_fourth").onclick = () => txtUp.style.color = "grey";
  document.querySelector(".block_fifth").onclick = () => txtUp.style.color = "orange";
  document.querySelector(".block_sixth").onclick = () => txtUp.style.color = "red";
  document.querySelector(".block_seventh").onclick = () => txtUp.style.color = "greenyellow";
  document.querySelector(".block_eighth").onclick = () => txtUp.style.color = "pink";
  document.querySelector(".block_ninth").onclick = () => txtUp.style.color = "blueviolet";
})

btnBgrd.addEventListener("click", () => {
  if(block.style.display === "none" || block.style.display === "") {
    block.style.display = "grid";
  } else {
    block.style.display = "none";
  }

  document.querySelector(".block_first").onclick = () => blockUp.style.backgroundColor = "yellow";
  document.querySelector(".block_second").onclick = () => blockUp.style.backgroundColor = "blue";
  document.querySelector(".block_third").onclick = () => blockUp.style.backgroundColor = "green";
  document.querySelector(".block_fourth").onclick = () => blockUp.style.backgroundColor = "grey";
  document.querySelector(".block_fifth").onclick = () => blockUp.style.backgroundColor = "orange";
  document.querySelector(".block_sixth").onclick = () => blockUp.style.backgroundColor = "red";
  document.querySelector(".block_seventh").onclick = () => blockUp.style.backgroundColor = "greenyellow";
  document.querySelector(".block_eighth").onclick = () => blockUp.style.backgroundColor = "pink";
  document.querySelector(".block_ninth").onclick = () => blockUp.style.backgroundColor = "blueviolet";
})

const blockDown = document.querySelector(".block-down");

// block edit
const edit = document.querySelector(".edit");

// block style
const style = document.querySelector(".style");

// forms
const radio = document.forms.radio;
const checkbox = document.forms.checkbox;

let chooseRadio = () => {
  txtUp.style.fontSize = radio.fontSize.value;
}

let myFunction = () => {
  const fontSelected = document.getElementById("selection");
  let showSelectFont = fontSelected.options[fontSelected.selectedIndex].value;
  txtUp.style.fontFamily = `${showSelectFont}`;
}

checkbox.bold.addEventListener("click", () => {
  checkbox.bold.checked == true ? txtUp.style.fontWeight = "bold" : txtUp.style.fontWeight = "normal";
})

checkbox.cursive.addEventListener("click", () => {
  checkbox.cursive.checked == true ? txtUp.style.fontStyle = "italic" : txtUp.style.fontStyle = "normal";
})


// table second
const btnAdd = document.querySelector(".btn-add");
const chooseVar = document.querySelector(".choose-var");
const chooseVarTable = document.querySelector(".choose-var_table");

btnAdd.addEventListener("click", () => {
  chooseVar.style.display = "block";
  blockUp.style.backgroundColor = "rgb(217, 252, 255)";
  txtUp.style.display = "none";
  buttons.style.display = "none";
  blockDown.style.display = "none";
  chooseVarTable.style.display = "none";
})

let chooseVariantTable = () => {
  blockUp.style.height = "85%";
}

let chooseVariantList = () => {
  blockUp.style.height = "45%";
}

// table
const tableBlock = document.querySelector(".choose-var_table");
const tableInput = document.getElementById("table");
const btnCreateTable = document.querySelector(".create-table");

tableInput.addEventListener("click", () => {
  tableBlock.style.display = "block";
  listBlock.style.display = "none";
})

btnCreateTable.addEventListener("click", () => {
  chooseVar.style.display = "none";
  txtUp.style.display = "block";
  buttons.style.display = "flex";
  blockDown.style.display = "block";
  blockUp.style.height = "100%"
});

// list

const listBlock = document.querySelector(".choose-var_list");
const listInput = document.getElementById("list");
const btnCreateList = document.querySelector(".create-list");

listInput.addEventListener("click", () => {
  listBlock.style.display = "block";
  tableBlock.style.display = "none";
})

btnCreateList.addEventListener("click", () => {
  chooseVar.style.display = "none";
  txtUp.style.display = "block";
  buttons.style.display = "flex";
  blockDown.style.display = "block";
  blockUp.style.height = "100%"
});