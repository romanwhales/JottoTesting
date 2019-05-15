/**
 * 
 * @param {ShallowWrapper} wrapper 
 * @param {String} val 
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper,val) => {
    return wrapper.find(`[data-test="${val}"]`)
}