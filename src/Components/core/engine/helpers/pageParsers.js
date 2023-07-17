import { newColumn } from "./pageUtilities";

export const parseClasses = (classes) => {
  let output = "";

  Object.values(classes).map((cl) => {
    output += " " + cl;
  });

  return output;
};

export const parseColumns = async (row, rowId) => {
  // TODO -preserve column element on change column
  let output = [];
  let elements = [];
  let rawData = row.settings.cols;

  if (row.columns.length > 0) {
    for (let col of row.columns) {
      elements.push(col.elements);
    }
    for (let i = 1; i <= rawData.c; i++) {
      let newCol = newColumn(row, rowId);
      newCol.settings.type = rawData.s[i];
      let newEls = elements[i - 1];
      if (newEls?.length > 0) {
        let elArray = [];
        for (let j = 0; j < newEls.length; j++) {
          newEls[j].columnId = newCol.id;
          elArray.push(newEls[j]);
        }
        newCol.elements = elArray;
      } else {
        newCol.elements = [];
      }

      output.push(newCol);
    }
    console.log(output);
  } else {
    for (let i = 1; i <= rawData.c; i++) {
      let newCol = newColumn(row, rowId);
      newCol.settings.type = rawData.s[i];
      output.push(newCol);
    }
  }

  return output;
};
