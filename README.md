# jQuery Plugin - Fixed Background Image

Fixed background image while scrolling through content of a page. Once new page is scrolled to then new background image of a new page will be shown.

## Getting Started

Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/nnattawat/fixedbg/master/dist/jquery.fixedbg.min.js
[max]: https://raw.github.com/nnattawat/fixedbg/master/src/fixedbg.js

In your web page:

```html

<div class="page">
	<!-- Content -->
</div>
<div class="page">
	<!-- Content -->
</div>

<style type="text/css">
.page:nth-child(1){
    background-image: url("pic1.jpg");
  }
  .page:nth-child(2){
    background-image: url("pic2.jpg");
  }
</style>

<script src="jquery.js"></script>
<script src="jquery.fixedbg.min.js"></script>
<script>
$(function($) {
  $(".page").fixedBG(); 
});
</script>
```

## Documentation
_(Coming soon)_

## Examples
_For the demo, I will create a Github page soon. For now you can clone the project and open /demo/index.html in your Browser_

## Release History
_(Nothing yet)_
