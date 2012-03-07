# jQuery Car - A Lightweight Carousel Plugin
__jQuery Car__ is meant to do one thing, and one thing only - Infinitely circulate thru slides, with a 'fast backward/forward' effect after passing an end.

Apart from jQuery and some bundled CSS, the plugin doesn't require a thing.
For custom easing functions, The [jQuery Easing Plugin](http://gsgd.co.uk/sandbox/jquery/easing/) is recommended.

# Usage
Some basic examples can be found at `index.html`
## Markup
Your container must have an id (i.e. `car1`), and inside it hold a `<ul>` with `li` for each slide.
The markup for controls is pretty strict, and should look like this:


`<div class="car-controls" data-for="car1">
    <a href="#" class="prev">Previous</a>
    <a href="#" class="next">Next</a>
</div>`

## JavaScript
Include jQuery, the car plugin and then initalize it on the container like so:
`$('#car1').car();`

# Settings
###__duration__ (Number: default `400`)
Duration os transition between slides, in ms.
###__easing__ (String: `'swing'`)
Name of the regular easing function you'd like to use.
###__loopEasing__ (String: `'easeOutBack'`):
Name of the easing function to use when looping to the other end of the carousel.

## Example:
`$('#car2').car({
    duration: 1000,
    easing: 'easeOutQuad',
    loopEasing: 'easeInElastic'
});`