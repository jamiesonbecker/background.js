*Now also available in [unframework.js](https://github.com/jamiesonbecker/unframework.js)*

background.js
=============

Background is a tiny javascript method that simply runs any background
processes every 1/4 second for you. It's very simple to use and only 319
bytes.

Background processes can be useful for things like cleaning caches, counting
items, logging a user out after a period of inactivity, etc.  Javascript is the
only requirement.

If 250ms (1/4 second) is too frequent for you, just change the 250 number in
the script to something a little bit slower. For example, 1000 would run your functions every 
1 second. If you do this, you should probably rename the object to background1sec or similar
so that you can run different ones throughout your code.

Don't use blocking methods; a safety feature of this script is that it won't run the same task over again until
previous has completed, so if one hangs, none of the future copies (of the same function) will not run. (However, if you have four different methods,
and one hangs, the other three will still run properly.)

One big feature of this code is that you can add and remove background tasks at any point in your
script's operation. For example, you can add one after login and then remove it at logout.

Don't do too much. You can kill some browsers with too many background tasks.


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
retain the copyright line and link back to this github repo.)

