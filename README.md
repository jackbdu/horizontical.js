# horizontical.js

Horizontal HTML element movement triggered by vertical scrolling.

Check out the [demo](jackbdu.github.io/horizontical.js) or see its [source code](index.html).

## Setup

Download and include ```horizontical.js``` in your document.
```html
<script src="/path/to/horizontical.js"></script>
```

## Usage

### HTML

```html
<div class="h-wrapper">       <!-- the area of the page being vertically scrolled through under the hood -->
  <div class="h-viewport">    <!-- the visible area of the horizontically scrolled elements -->
    <div class="h-container"> <!-- the div containing the elements to be moved horizontically -->
      <!-- the elements to be moved horizontically -->
    </div>
  </div>
</div>
```

### CSS

```css
.h-wrapper {
  /* adjust the h-wrapper styles here */
  /* note: the h-wrapper height is dynamically adjusted by the library */
}
.h-viewport {
  /* adjust the h-viewport styles here */
  /* note: the h-viewport should not be bigger than the browser viewport */
}
.h-container {
  /* adjust the h-container styles here */
  /* note: the h-container width should be bigger than the viewport-width */
}
```
