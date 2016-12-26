/**
 * Created by Denis Ahapau on 11/14/2016.
 */
JasmineConsoleReporter = require('jasmine-console-reporter');
jasmine.getEnv().addReporter(new JasmineConsoleReporter({
    colors: 1,           // (0|false)|(1|true)|2
    cleanStack: 1,       // (0|false)|(1|true)|2|3
    verbosity: 4,        // (0|false)|1|2|(3|true)|4
    listStyle: 'indent', // "flat"|"indent"
    activity: false
}));

var reporters = require('jasmine-reporters');
var junitReporter = new reporters.JUnitXmlReporter({
    savePath: 'reports',
    consolidateAll: true
});
jasmine.getEnv().addReporter(junitReporter);