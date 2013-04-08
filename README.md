background.js
=============

Background is a tiny javascript method that simply runs any background
processes every 1/4 second for you. It's very simple to use and only 319
bytes.

Background processes can be useful for things like cleaning caches, counting
items, logging a user out after a period of inactivity, etc.  Javascript is the
only requirement.


Usage
-----

After adding the plugin somewhere in your loading stack, just add a background
task anywhere in your code:

    background.testing = function() {
        console.log("displaying this message every 250ms.");
    }

Add as many of these background tasks as you like, but keep them short and
non-blocking or you'll rapidly kill the browser.

That's all there is to it!



License
-------

Released under the MIT license. Feel free to incorporate in any code (please
retain the copyright line and link back to this github repo.)

