// Generated by CoffeeScript 1.9.2
module.exports = function(spec) {
  return function(model) {
    var message, res, subject, test, tests;
    res = {};
    res.isvalid = true;
    for (subject in spec) {
      tests = spec[subject];
      res[subject] = {
        isvalid: true,
        messages: []
      };
      for (message in tests) {
        test = tests[message];
        if (test(model)) {
          continue;
        }
        res.isvalid = false;
        res[subject].isvalid = false;
        res[subject].messages.push(message);
      }
    }
    return res;
  };
};
