const TBL = document.getElementById("tab-data");
//const table = renderTblHeading();
let table;

function renderTblHeading () {
    //const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTextArr = ["Name", "HouseHold", "HouseSize", "Footprint", "Actions"];
  
  headingTextArr.forEach(function(text){
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });
  
  thead.appendChild(tr);
  const newTable = document.createElement("table");
  newTable.appendChild(thead);
  //const table = document.createElement("table");
  //table.appendChild(thead);
  //return table;
  return newTable;
}
  
function renderTbl(data){
  //const table = renderTblHeading();
  const tbody = document.createElement("tbody");
  //const tr = document.createElement("tr");
  //const trTextArr = ["Andrew", 3, "Large", 20,];

  data.forEach(item => {
    const tr = document.createElement("tr");
    const trTextArr = [`${item.firstName} ${item.lastName}`, item.houseM, item.houseS, item.cfpTotal];
    
    trTextArr.forEach(function(text) {
      const td = document.createElement("td");
      td.textContent = text;
      tr.appendChild(td);
    });

    const td = document.createElement("td");
    const btnEdit = document.createElement("button");
    const btnDel = document.createElement("button");
    btnEdit.textContent = "Edit";
    btnDel.textContent = "Del";
    td.appendChild(btnEdit);
    td.appendChild(btnDel);
    tr.appendChild(td);
    tbody.appendChild(tr);
    //table.appendChild(tbody);
    //TBL.appendChild(table);
  });

  //TBL.appendChild(table);
  if (table) {
    //table.querySelector("tbody")?.remove();
    table.appendChild(tbody);
  } else {
    table = renderTblHeading();
    table.appendChild(tbody);
    TBL.appendChild(table);
  }
}

renderTbl([]);

export {renderTbl, renderTblHeading};
