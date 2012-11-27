THIS IS A REMOTE CONTROL BASED ON [BRAZILJS REMOTE CONTROL](https://github.com/braziljs/remote-control)

---

# Google Remote Control

A tool to control the Google HTML5 presentation through a cell phone.

## Dependencies
* [nodejs](http://nodejs.org)
* [socket.io](http://socket.io)
* [Google HTML5 Presentation](http://html5slides.googlecode.com/svn/trunk/slides.js)

## How to install
Install socket.io:
```cli
npm install socket.io
```

## How to use
Run app.js:
```cli
node app.js
```
The server will be available at port 81 [http:localhost:81](http:localhost:81), but you can change if you want.  

Now, go to your Google HTML5 presentation and include the following scripts:

```html
<!-- I'm counting on you already have this script, after all this is a control for Google Html5 Presentation -->
<script src="http://html5slides.googlecode.com/svn/trunk/slides.js"></script>

<script src="http://localhost:81/socket.io/socket.io.js"></script>
<script src="path/to/google-remote-control.js"></script>
```

Add this code to your presentation file:

```javascript
var control = new GoogleRemoteControl();

// Key to sync with other devices
// IMPORTANT: MAKE THE USER ENTERS THE KEY IN PRODUCTION MODE
var key= 10;  

// Connect
control.connect('http://localhost:81', key);
```

Now point your phone browser to your IP address on port 81.  
You must see a page with 3 buttons.  
If everything is ok, now you are able to control your HTML5 presentation with your phone.
