class Shape {
    constructor(title, titleColor, shapeColor) {
        this.title = title;
        this.titleColor = titleColor;
        this.shapeColor = shapeColor;
    }
}

class Circle extends Shape {
    constructor(title, titleColor, shapeColor) {
        super(title, titleColor, shapeColor)
    }

    renderSVG() {
        return `<circle cx="50" cy="50" r="50" fill="${this.shapeColor}"/><text x="150" y="150" font-size="48" text-anchor="middle" fill="${this.titleColor}">${this.title}</text>`;
    }
}

class Square extends Shape {
    constructor(title, titleColor, shapeColor) {
        super(title, titleColor, shapeColor)
    }

    renderSVG() {
        return `<rect x="50" y="50" width="150" height="150" fill="${this.shapeColor}"/><text x="150" y="150" font-size="48" text-anchor="middle" fill="${this.titleColor}">${this.title}</text>`;
    }
}

class Triangle extends Shape {
    constructor(title, titleColor, shapeColor) {
        super(title, titleColor, shapeColor)
    }

    renderSVG() {
        return `<polygon points="50,0 100,100 0,100" fill="${this.shapeColor}"/><text x="150" y="150" font-size="48" text-anchor="middle" fill="${this.titleColor}">${this.title}</text>`;
    }
}



module.exports = {Shape, Square, Triangle, Circle};