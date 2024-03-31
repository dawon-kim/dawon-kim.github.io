$(document).ready(function(){
    let timeline = new TimelineMax({ repeat: -1 });
    let arrow = document.getElementById("arrow-button");

    timeline.add(TweenLite.to(arrow, 0.5, { bottom: "4rem", ease: Power0.easeNone }));
    timeline.add(TweenLite.to(arrow, 0.5, { bottom: "5rem", ease: Power0.easeNone }));
   
    arrow.addEventListener("click", () => {
        TweenLite.to(window, 1.5, { scrollTo: "#carWrap" });
    });
});

