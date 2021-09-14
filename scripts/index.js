let isMobile = false;

window.onresize = () => {
    isMobile = document.body.clientWidth < 700;
}

window.onload = () => {
    isMobile = document.body.clientWidth < 700;

    let bgVideos = document.getElementsByClassName("bgVideo");
    Array.from(bgVideos).forEach(vid => vid.play());

    let showcase = document.getElementById("showcase");
    let showcaseItems = [];
    projects.forEach(item => {
        let showcaseItem = new ShowcaseItem(item);
        showcaseItems.push(showcaseItem);
        $(showcase).append(showcaseItem.JItem);
        showcaseItem.clickListeners.push(() => {
            showcaseItems.forEach(element => {
                if (element == showcaseItem) return;
                element.hide();
            });
        });
    });

    let arrow = document.getElementById("arrow");
    arrow.addEventListener("click", () => {
        document.getElementById("projects").scrollIntoView();
    });
};

function lerp(value, target, t) {
    return (1 - t) * value + t * target;
}

// let wheelEvent = (e) => {
//     e.preventDefault();
//     let v = 0;
//     let interval = setInterval(() => {
//         v = lerp(v, e.deltaY, 0.03);
//         showcase.scrollLeft = showcase.scrollLeft + v;
//     }, 10);
//     setTimeout(() => {
//         clearInterval(interval);
//     }, 100);
// }
// function attachScroll() {
//     if (showcase.scrollWidth > showcase.clientWidth && !showcaseScrollAttached) {
//         showcaseScrollAttached = true;
//         showcase.addEventListener("wheel", wheelEvent);
//     } else {
//         showcaseScrollAttached = false;
//         showcase.removeEventListener("wheel", wheelEvent);
//     }
// }
// $(window).scroll(() => {
//     // Scroll progress [0-1]
//     let scroll = $(window).scrollTop() / ($(document).height() - $(window).height());
//     scroll = Math.min(Math.max(scroll, 0), 1);
//     // $('#main').css({
//     //     opacity: () => Math.sqrt(scroll)
//     // });
// });
