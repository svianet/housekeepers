// Fill an array in sequence with boolean values, since than there is the value into selected array
// Used to list of checkboxs
export function fillArray(arr: Array<any>, prop: string, arrSelected?: Array<any>): any[] {
  let initialCheck = new Array(arr.length).fill(false);
  if (arrSelected) {
    let ids = arrSelected.map(function(e) { return e[prop] });
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      initialCheck[index] = ids.includes(element[prop]);
    }
  }
  console.log(initialCheck);
  return initialCheck;
}

export function checkbox2Array(arr: any[]) {
  let result = Array();
  if (arr) {
    arr.forEach(element => {
      if (element.checked) {
        result.push(element.value);
      }
    });
  }
  return result;
}