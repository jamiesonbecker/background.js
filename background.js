// background.js
// Copyright (c) 2013 Jamieson Becker (MIT)
// https://github.com/jamiesonbecker/background.js
// run background tasks every 250 ms.
var background = {};
(run_background_tasks = function() {
    for (var taskname in background) {background[taskname]()}
    setTimeout(run_background_tasks, 250);
})();
