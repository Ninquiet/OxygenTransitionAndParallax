# Ninquiet
## _OxygenTransitionAndParallax, _

**Observation:**
this needs jQuery to works, so if you don't have it just add this code to some part of your website that let you add HTML code:
```sh
<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
```

## Features

- Implementation of Parallax with Paroller.js
- Simple animation pre-made to execute when are visible
- Possibility to create your own animations

OxygenTransitionAndParallax its simple to use, just add OTAP.js code in some part of your website that let you introduce JavaScript code, and do the same with OTAP.css in some CSS part.

Then just add some of this class yo your components in order to achieve the animation:

**To perform a basic parallax animation:**
```sh
parallaxBasic
```

**To perform an animation example from RIGHT to LEFT**
__in **the father** container (need to keep being visible when the object don't):
(this is the class that says to the code that a child of this component is going to be animated)
```sh
baseTransition
```
and (this says to the CSS which animation will be performed in the child)
```sh
transitionLeft
```
__in **the child** that animates (the child that we want to animate):
```sh
transitionChild
```



And that's all :D!!!
The only thing that changes from one kind of animation to other, is the second class of the father, just change transitionLeft to whatever of the next animations:

```sh
transitionLeft
```
```sh
transitionRight
```
```sh
transitionRightFast
```

__________________
This code is still to improve, I will be happy to know about your experiences and comments.
