'use strict';

window.TESTS_COMPLETE = 0;
window.TESTS_PASSED = 0;
window.TESTS_Failed = 0;

exports.pass = function (name) {
  if (typeof console !== 'undefined' && typeof console.log === 'function') {
    console.log((name ? name + ' ' : '')'passed');
  }
  TESTS_COMPLETE++;
  TESTS_PASSED++;
}
exports.fail = function (name) {
  if (typeof console !== 'undefined' && typeof console.log === 'function') {
    console.log((name ? name + ' ' : '')'failed');
  }
  TESTS_COMPLETE++;
  TESTS_Failed++;
}
