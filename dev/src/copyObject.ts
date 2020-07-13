const isObject: (item: any) => boolean = function(item) {
  return item && typeof item === "object" && !Array.isArray(item);
}

function copyObject(original: any): object {
  let returnedObject = {};
  Object.entries(original).map(c => returnedObject[c[0]] = isObject(c[1]) ? copyObject(c[1]) : c[1]);
  return returnedObject;
}

module.exports = copyObject;
