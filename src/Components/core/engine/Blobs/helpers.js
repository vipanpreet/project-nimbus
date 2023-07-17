export const findElement = (page, element) => {
  let containerSelected = page.structure.find((cc) => cc.id == element.containerId);
  let rowSelected = containerSelected.rows.find((rr) => rr.id == element.rowId);
  let colSelected = rowSelected.columns.find((c) => c.id == element.columnId);
  let elSelected = {};
  if (element.hasOwnProperty("innerRowId")) {
    let innerRowSelected = colSelected.elements.find((c) => c.id == element.innerRowId);
    let innerColumnSelected = innerRowSelected.columns.find((c) => c.id == element.innerColumnId);
    elSelected = innerColumnSelected.elements.find((el) => el.id === element.id);
  } else {
    elSelected = colSelected.elements.find((el) => el.id === element.id);
  }
  return elSelected;
};

export const findColumn = (page, element) => {
  let containerSelected = page.structure.find((container) => container.id == element.containerId);
  let rowSelected = containerSelected.rows.find((row) => row.id == element.rowId);
  let colSelected = rowSelected.columns.find((c) => c.id == element.columnId);

  if (element.hasOwnProperty("innerRowId")) {
    let innerRowSelected = colSelected.elements.find((c) => c.id == element.innerRowId);
    colSelected = innerRowSelected.columns.find((c) => c.id == element.innerColumnId);
  }
  return colSelected;
};
