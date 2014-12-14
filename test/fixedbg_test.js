(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module('jQuery#fixedBG', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('.page');
    }
  });

  test('is chainable', function() {
    expect(1);
    // Not a bad test to run on collection methods.
    strictEqual(this.elems.fixedBG(), this.elems, 'should be chainable');
  });

  test('the first element', function() {
    expect(1);
    strictEqual(this.elems.fixedBG().first().css("background-attachment"), "fixed", 'should be fixed');
  });

  test('default setting', function() {
    var doms = this.elems.fixedBG();
    doms.each( function() {
      strictEqual($(this).css('background-size'), "cover", 'background-size should be cover');
      strictEqual($(this).css('background-repeat'), "no-repeat", 'background-repeat should be no-repeat');
    });
  });

}(jQuery));
