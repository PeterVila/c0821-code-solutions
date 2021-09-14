/* exported whatIsThis, someObject */

function whatIsThis() {
  return this;
} // Returns window

var someObject = {
  aProperty: 'hullo there',
  getThis: function () {
    return this;
  }
}; // Returns someObject
