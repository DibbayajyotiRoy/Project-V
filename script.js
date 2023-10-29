// Locomotive js -- smooth scrolling

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

//gsap to animate

gsap.from(".nlink",{
    stagger: .2,
    y:20,
    duration:1,
    ease: Power2,
    opacity:0

})


Shery.textAnimate("#headings h1" /* Element to target.*/, {
    //Parameters are optional.
    style: 2,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });


  gsap.from(".anim2",{
    y:30,
    stagger:.3,
    duration:1,
    ease: Power2,
    opacity:0
  })


  Shery.imageEffect("#imgntext img",{
    style:3,
    config:{"uFrequencyX":{"value":12.4,"range":[0,100]},"uFrequencyY":{"value":12,"range":[0,100]},"uFrequencyZ":{"value":10,"range":[0,100]},"geoVertex":{"range":[1,64],"value":11.93},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7499999503294646},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.83,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}} ,
   
  })

  Shery.imageEffect(".imgeff img",{
    style:5,
    config: {"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6666666445908718},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.36,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    
   
  })

  gsap.from("#imgntext img",{
    z: -3,
    opacity:0,
    duration:2,
    ease:Expo.easenInOut
  })

  Shery.imageEffect("#b-img ", {
    style:4,
    config: {"a":{"value":0,"range":[0,30]},"b":{"value":-1,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.975301593281987},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.17,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":33}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.38,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    
    gooey:true
  })


  document.querySelector("#f-text button")
  .addEventListener("mouseover", function(){
    gsap.to("#future video",{
     opacity: 1 ,
     duration:1.5,
     ease: Power4
    })
  })


  document.querySelector("#f-text button")
  .addEventListener("mouseleave", function(){
    gsap.to("#future video",{
      opacity: 0 ,
      duration:1.5,
      ease: Power4
     })
  })

