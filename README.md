## CSS file icons

Pure CSS file icons for popular extensions

## Icons
[<img src="https://raw.githubusercontent.com/colorswall/CSS-file-icons/master/src/images/icons.png" alt="CSS file icons" data-canonical-src="https://raw.githubusercontent.com/colorswall/CSS-file-icons/master/src/images/icons.png" width="721" height="241" />](https://colorswall.github.io/CSS-file-icons/)

[demo](https://colorswall.github.io/CSS-file-icons/)

## Usage
Include `css-file-icons.css` to html or install via npm
```
npm i css-file-icons --save
```
include css file `css-file-icons.css` from folder `build`

## Example
```
<div class="fi fi-doc">
    <div class="fi-content">doc</div>
</div>
```

## File extensions
 Icons for files doc, docx, log, txt, wps, csv, dat, ppt, xml, mp3, wav, avi, mov, mp4, 3ds, max, gif, ai, svg, pdf, xls, xlsx, sql, exe, js, html, xhtml, css, asp, ttf, dll, 7z, zip, c, cs, java, swift, torrent, php, hh, go, py, rss, rb.

 ```
 .fi.fi-*extension*
 // where *extension* = file extension.
 // example: .fi.fi-doc
 ```

## Sponsors
The following wonderful companies have sponsored CSS file icons
<a href="https://opencollective.com/css-file-icons#backer" target="_blank"><img src="https://opencollective.com/static/images/become_sponsor.svg"></a>
[Learn more about becoming a sponsor!](https://opencollective.com/css-file-icons#sponsor)
<a href="https://opencollective.com/css-file-icons#sponsor" target="_blank"><img src="https://opencollective.com/static/images/become_backer.svg"></a>

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
