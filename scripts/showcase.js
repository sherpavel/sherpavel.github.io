class ShowcaseItem {
    constructor(item) {
        this.item = item;

        // jquery Slide
        this.JSlide = $("<div>").addClass("slide");
        this.JSlide.append(`<div><img src="./resources/${item.img}" alt=" "><h2>${item.name}</h2></div>`);
        let text = $(`<p>${item.text}${(item.link) ? `<br><span class="hint">(Click to open)</span>` : ``}</p>`);
        this.JSlide.append(text);

        // jquery Item
        this.JItem = $("<div>").addClass("item");
        this.JItem.append(this.JSlide);

        this.open = false;
        this.lastOpen = 0;

        // Event listeners
        this.JItem.mouseenter(() => this.show());
        this.JItem.mouseleave(() => this.hide());
        this.JItem.on("click", () => this.click());
        this.clickListeners = [];
    }

    show() {
        this.open = true;
        this.lastOpen = Date.now();
        this.JSlide.css({
            "top": (isMobile) ? "-28vh" : "-28vh"
        });
    }

    hide() {
        this.open = false;
        this.lastOpen = 0;
        this.JSlide.css({
            "top": "5%"
        });
    }

    click() {
        if (this.open && Date.now() - this.lastOpen > 200) {
            if (this.item.link)
                window.open(this.item.link, '_blank').focus();
        }
        this.clickListeners.forEach(listener => {
            listener();
        });
    }
}