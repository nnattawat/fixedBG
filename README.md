# jQuery Plugin - Fixed Background Image

A jQuery plugin to fix background image while scrolling through content of a page. Once new page is scrolled to then a background image changes. The plugin works responsively with both short and long contents. You can learn more on [github.io](http://nnattawat.github.io/fixedBG/)

## Getting Started

Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/nnattawat/fixedbg/master/dist/jquery.fixedbg.min.js
[max]: https://raw.github.com/nnattawat/fixedbg/master/dist/jquery.fixedbg.js

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

## Documentation and Example
Please refer to [github.io](http://nnattawat.github.io/fixedBG/)
