class ShowcaseItem {
    constructor(item) {
        this.item = item;

        // jquery Slide
        this.JSlide = $("<div>").addClass("slide");
        this.JSlide.append(`<div><img src="./resources/${item.img}.png" alt="Gradient"><h2>${item.name}</h2></div>`);
        let text = $(`<p>${item.text}${(item.link) ? `<br><span class="hint">(Click to open)</span>` : ``}</p>`);
        this.JSlide.append(text);

        // jquery Item
        this.JItem = $("<div>").addClass("item");
        this.JItem.append(this.JSlide);

        this.open = false;

        // Event listeners
        this.JItem.mouseover(() => this.show());
        this.JItem.mouseout(() => this.hide());
        this.JItem.on("click", () => this.click());

        this.clickListeners = [];

    }

    show() {
        this.open = true;
        this.JSlide.css({
            "top": (isMobile) ? "-28vh" : "-28vh"
        });
    }

    hide() {
        this.open = false;
        this.JSlide.css({
            "top": "5%"
        });
    }

    click() {
        if (this.open) {
            if (this.item.link) 
                window.open(this.item.link, '_blank').focus();
        } else {
            this.show();
            this.clickListeners.forEach(listener => {
                listener();
            });
        }
    }
}