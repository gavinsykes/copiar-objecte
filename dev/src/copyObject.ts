/**
 * @author Gavin Sykes <gavin@gavinsykes.uk> (https://gavinsykes.uk/) [@gavinsykes_uk](https://twitter.com/gavinsykes_uk)
 * @license MIT
 */

const isObject: (item: unknown) => boolean = function (item) {
  return item && typeof item === 'object' && !Array.isArray(item);
};

/**
 * copyObject takes a JavaScript object as its argument and returns an unlinked clone of that object.
 *
 * The return value is a clone of the input.
 *
 * @param {unknown} original - the object to clone.
 *
 * @returns {Record<string, unknown>} - the cloned object.
 *
 */
export function copyObject(
  original: unknown
): Record<string, unknown> {
  if (!isObject(original)) return {};
  const returnedObject: Record<string, unknown> = {};
  Object.entries(original as Record<string, unknown>).map(
    (c) => (returnedObject[c[0]] = isObject(c[1]) ? copyObject(c[1]) : c[1])
  );
  return returnedObject;
}
