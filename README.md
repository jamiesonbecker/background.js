*Now also available in [unframework.js](https://github.com/jamiesonbecker/unframework.js)*

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
    
You can add more of these tasks in the same way:

    background.cache_cleaner = function() {
        if (cache_size > too_big)
            cache = cache.slice(1000);
    }

Here's another contrived example:

    background.timeout = function() {
        if (user.login_time < now)
            app.logout();
    }
    

It's pretty simple. Add as many of these background tasks as you like. The catch?
Keep them short and non-blocking or your app will get throttled by the browser.

That's it!



License
-------

Released under the MIT license. Feel free to incorporate in any code (please
retain the single copyright line and link back to this github repo.)

