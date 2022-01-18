# Code Styler

[![GitHub](https://img.shields.io/github/license/maythamfahmi/CodeStyler)](https://github.com/maythamfahmi/CodeStyler/blob/main/LICENSE)


# Introdution
:rocket: CodeStyler is a simple Open Source to style your code for html using JavaScript and CSS.

Webpage: https://itbackyard.dk/codestyler/

## Installation

You can download CodeStyler via [Releases](https://github.com/maythamfahmi/codestyler/releases) or cloning this repository. 

Just copy following folder and files:

- css
    - CodeStyler.css
- js
    - CodeStyler.js

to your project directory.

And add following to your html header
```html
<link rel="stylesheet" href="./css/CodeStyler.css">
```

And add following at the end of html just before </body> tag
```javascript
<script src="./js/CodeStyler.js"></script>
```

## Versions

#### [![Release%20Code](https://img.shields.io/badge/release%20code-v0.0.2-blue?style=social)](https://github.com/maythamfahmi/CodeStyler/releases/tag/v0.0.2)

- Refacotring
- Documentation


#### [![Release%20Code](https://img.shields.io/badge/release%20code-v0.0.1-blue?style=social)](https://github.com/maythamfahmi/CodeStyler/releases/tag/v0.0.1)

- Init release 2019

## Issues

Please report issues [here](https://github.com/maythamfahmi/CodeStyler/issues).

## How to use
After adding the library folder to your working project, you can go a head and follow some of the examples below. We have also provided example folder that show the same examples.

### Customization
```javascript
<script type="text/javascript">
    var addLines = true; // if addLines is not set, by default is true
    var fontSize = 0; // if fontSize is not set, by default 0, which is size 14
</script>
<script src="./js/CodeStyler.js"></script>
```

### View HTML line
```html
<pre><&zwj;div>Hello World!<&zwj;/div></pre>
```

### Copy code as URL
```html
<p>Code Sample <a href="#" onclick="codeCopy('code1')">(Copy code to clipboard as Link)</a></p>
    <pre><code><span id='code1'>public static void Main()
{
    Console.WriteLine("Test");
}</span></code></pre>
```

### Code Sample with copy code button inside pre tag
```html
<div class="code">
        <pre><span id='code2'>void Start()
{
    Console.WriteLine("I will start");
}</span></pre>
        <button class="codeButton" onclick="codeCopy('code2')">Copy</button>
    </div>
```

### Make code editable, this feature is not part of this library but it is a HTML5 feature
```html
<p>This code inside is editable!</p>
    <div class="code">
        <pre contenteditable='true'><span id='code3'>void Editable()
{
    Console.WriteLine("Edit me");
}</span></pre>
        <button class='codeButton' onclick="codeCopy('code3')">Copy</button>
    </div>
```

## Contributing

I need your help, so if you have good knowledge of JavaScript and CSS, just grab one of the issues and add a pull request.
The same is valid, if you have idea for improvement, adding new feature or even documentation improvement and enhancemnet, you are more than welcome to contribute.

### How to contribute:

[Here](https://www.dataschool.io/how-to-contribute-on-github/) is a link to learn how to contribute if you are not a ware of how to do it.
