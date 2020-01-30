/**
 * Return ShallowWrapper containing node(s) with the given date-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};
