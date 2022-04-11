
const baseTransitionClassName = 'baseTransition'; // DONT CHANGE
const onTransitionClassName = 'onTransition'; // DONT CHANGE
const notOnTransitionClassName ='notOnTransition'; // DONT CHANGE

const parallaxBasicClassName = 'parallaxBasic'; // DONT CHANGE
const parallaxBasicValue = '0.1';

const parallaxMediumClassName = 'parallaxMedium'; // DONT CHANGE
const parallaxMediumValue = '0.2';


function CallBackObserver(entries, observer)
{
    entries.forEach(entry => {
    var txt = entry.target.id + " visibility: " + entry.isIntersecting;
    if (entry.isIntersecting)
    {
        if (jQuery("#"+entry.target.id).hasClass(notOnTransitionClassName))
        {
            jQuery("#"+entry.target.id).removeClass(notOnTransitionClassName);
        }
        jQuery("#"+entry.target.id).addClass(onTransitionClassName);
    }
    else
    {
        if (jQuery("#"+entry.target.id).hasClass(onTransitionClassName)){
        jQuery("#"+entry.target.id).removeClass(onTransitionClassName);
        }
        jQuery("#"+entry.target.id).addClass(notOnTransitionClassName);
    }
    
    //console.log(txt);

});
}

let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
};

// Start Observer
let observer = new IntersectionObserver(CallBackObserver, options);
let queryTest = document.querySelectorAll("."+baseTransitionClassName);
if (queryTest != null) {
    queryTest.forEach(element => observer.observe(element));
}


// Add All ParallaxBasic values 
let queryParallaxBasic = document.querySelectorAll("."+ parallaxBasicClassName);
if (queryParallaxBasic != null) {
    queryParallaxBasic.forEach(function(element) { 
        element.classList.add('plax');
        element.setAttribute("data-paroller-type","foreground");
        element.setAttribute("data-paroller-factor",parallaxBasicValue);
        element.setAttribute("data-paroller-direction","vertical");
    });
}

// Add All ParallaxBasic values 
let queryParallaxMedium = document.querySelectorAll("."+ parallaxMediumClassName);
if (queryParallaxMedium != null) {
    queryParallaxMedium.forEach(function(element) { 
        element.classList.add('plax');
        element.setAttribute("data-paroller-type","foreground");
        element.setAttribute("data-paroller-factor",parallaxMediumValue);
        element.setAttribute("data-paroller-direction","vertical");
    });
}

jQuery('.plax').paroller();

//