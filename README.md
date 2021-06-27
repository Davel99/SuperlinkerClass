# SuperlinkerClass
This is a native javascript class for the front-end development. You can use it to improve your links appearence.

# Simple example
Just add the following classnames to your <a> tags on the HTML document
  
```html
  <div class="">
    <a href="https://www.facebook.com"  class="superlink-blank">
      Facebook
    </a>
  </div>
  <div class="">
    <a href="www.twitter.com" class="superlink">
      Twitter
    </a>
  </div>
```
"superlink-blank" is the default class for the links you want to open on a new page.
"superlink" is the default class for the links you want to open on the same page.
  
  Then you have to load the "superlinker.js" file on your page BEFORE your main javascript file.
```html
  <script src="superlinker.js"></script>
  <script src="main.js"></script>
```

Now you have to add the javascript code on your main.js
  
```javascript
  window.onload = function(){
    var superlink = new superlinker();
    superlink.exe();
}
 
```
  
# Explanation
  
  The superlinker class construct is able to get a specific configuration. Let's see the default values if you doesn't specify them.
  
```javascript
  var superlink = new superliker({
            blankClass: 'superlink-blank',  
            selfClass: 'superlink',         
            hoverClass: 'hovered',          
            hover: {                
                color: 'rgba(255,255,255,0.1)',
                transition: 'all 0.75s ease-in-out',
                fontResize: 1.4
            }
        });
```
  1. blankClass (String): This is the classname for the links that are going to be opened on a new page.
  2. selfClass (String): This is the classname for the links that are going to be opened on the same page.
  3. hoverClass (String|Boolean): This is the classname for the parent element of the <a> tag (so you can change its properties on CSS). Write FALSE if you don't want the       classname.
  4. hover (Object|Boolean): This is an object that gets the hover event configuration. Put false if you don't want the hover effects.
        - color (String|Boolean): This is the background-color CSS property that javascript is going to rewrite on the parent element during the hover event. Write FALSE if you don't want a color change.
        - transition (String): This is the transition CSS property that javascript is going to rewrite on the parent element.
        - fontResize (Integer|Boolean): This is the multiplier number for the fontsize on the parent element, so you can get an animation during the hover event. Write FALSE if you don't wan't a fontsize resizing. 
 
