function copyObject(original: any): object {
  let returnedObject = {};
  Object.entries(original).map((c,i,a) => returnedObject[c[0]] = c[1]);
  return returnedObject;
}

module.exports = copyObject;
