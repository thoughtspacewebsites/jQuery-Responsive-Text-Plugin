jQuery-Responsive-Text-Plugin
=============================

The jQuery Responsive Text Plugin is an all in one solution for creating cross browser, scalable fonts.  This comes in handy creating fully responsive layouts that look the same on any device.

Installation
------------

In order to install the plugin, first download the source file and include it in your document with the following line:

```html
<script type="text/javascript" src="/path/to/jquery.responsivetext.js"></script>
```

Also, make sure you've included the jQuery library into your document.  You can do so by placing this line *before* the previous line in your document:

```html
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
```

After you've included these two lines, the only thing left to do is activate the plugin.  You can do so by including the following line in your site's jQuery file:

```javascript
$("body").responsiveText();
```

And voila, the plugin is now installed and activated.

Usage
-----

###Responsive Text

After activating the plugin, you can easily use it throughout your file by simply adding a class to your HTML file.  For instance, if you want to create a Header that resizes with the page, try the following line of code:

```html
<h1 class="responsive-text">This text will adapt to the screen</h1>
```

Items with the *responsive-text* class will grow and shrink with the screen.  There is a breakpoint at 768 pixels at which the font size will grow for mobile devices.  You can apply the *responsive-text* class to any text element, and it will automatically resize with the screen.

This plugin is developed in a way that allows you to use any standard font size in your document.  The plugin will run a variety of calculations on your text, and then output a responsive variation.  This means you can use standard sizing units, like px or pts.

To sum up, simply add the "responsive-text" class to any text that you want to size with the window.  In version 2.0, a new use has been introduced for this plugin.

###Text Fill

A very popular trend in web design is to create large, responsive slabs of text.  Say, for example, we have a div that's 500px wide, and we want to create a line of text that spans exactly 500 px width.  Until now, the only option was to resize your font-size property until the line was as close as possible to the width of its container.

This plugin offers an alternate way to size your text to a container.  By simply adding the "responsive-text-fill" class to an element, you can create full width blocks of text.  For example, try the following code in your document:

```html
<div style="width:960px;margin:auto;">
  <p class="responsive-text-fill">This text</p>
  <p class="responsive-text-fill">will resize to</p>
  <p class="responsive-text-fill">fill the parent container</p>
</div>
```

This example will create a centered, 960px panel which has three lines of text inside, all exactly 960px in width.  Note that you don't have to use pixel values for the parent container; percentages are perfectly fine as well.

Options
-------

This plugin features a variety of options to help fit your specific needs.  You can specify options upon plugin activation like so:

```javascript
$("body").responsiveText({
  topStop:"1440",
  bottomStop:"500"
});
```

###topStop
*int - default: 6000*

topStop is a number used to specify at what screen width elements with the "responsive-text" class should stop growing in size.  This value should always be greater than *breakPoint* and *bottomStop*.

###bottomStop
*int - default: 500*

bottomStop is a number used to specify at what screen width elements with the "responsive-text" class should stop shrinking in size.  This value should always be less than and *topStop*.

###breakPoint
*int - default: 768"

breakPoint is a number used to specify at what screen width elements with the "responsive-text" class should increase in size for mobile devices.  This value should always be less than *topStop*.  If you'd like to disable this option, you can set it o 0.

###resizeTime
*int - default: 50*

resizeTime is a number used for the debouncing function.  This keeps the plugin from overloading the users browser when the window is resized.  Instead of adapting the font size every time the size of the viewport changes, this number will be used to delay the resize until the window hasn't been resized for that amount of time.  If you'd like to increase the amount of repaints that occur when the window is resized, simply decrease this number.  Keep in mind that decreasing this number will cause the users browser to be more taxed.

Support
-------

If you require support, or would like to submit a feature request, feel free to send an email to contact@thoughtspacedesigns.com.

Donations
---------

If you like this plugin, feel free to donate to help our development by going to [this page](http://www.thoughtspacedesigns.com/plugins "Donate") and clicking the "Donate" button.
