## CSS file icons

Pure CSS file icons for popular extensions

## Icons
![CSS file icons](https://raw.githubusercontent.com/colorswall/CSS-file-icons/master/src/images/icons.png)

[demo](https://colorswall.github.io/CSS-file-icons/)

## Usage
Include `css-file-icons.css` to html.

## Example
```
<div class="fi fi-doc">
    <div class="fi-content">doc</div>
</div>
```

## File extensions
 Icons for files doc, docx, log, txt, wps, csv, dat, ppt, xml, mp3, wav, avi, mov, mp4, 3ds, max, gif, ai, svg, pdf, xls, xlsx, sql, exe, js, html, xhtml, css, asp, ttf, dll, 7z, zip, c, cs, java, swift, torrent, php, hh, go.

 ```
 .fi.fi-*extension*
 // where *extension* = file extension.
 // example: .fi.fi-doc
 ```

## Sizes
 ```
.fi.fi-size-sm // default
.fi.fi-size-md
.fi.fi-size-lg
.fi.fi-size-x
 ```

## SCSS Mixins
#### New icon color
```
@mixin fi-color($class, $color, $text_color:$file_icon_text_color)
```
#### Icon size
```
@mixin fi-size($class, $width, $height, $arrow_h, $font_size)
```
