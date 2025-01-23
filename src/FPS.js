export default class FPS {
    constructor() {
        this.startTime = Date.now();
        this.frameCount = 0;
        this.fps = 0;

        // Create a DOM element to display FPS
        this.domElement = document.createElement('div');
        this.domElement.style.position = 'fixed';
        this.domElement.style.top = '10px';
        this.domElement.style.left = '10px';
        this.domElement.style.color = 'white';
        this.domElement.style.backgroundColor = 'black';
        this.domElement.style.padding = '5px';
        this.domElement.style.fontFamily = 'Arial, sans-serif';
        this.domElement.style.zIndex = '1000';
        this.domElement.innerHTML = 'FPS: 0';
    }

    update() {
        this.frameCount++;
        const currentTime = Date.now();
        const deltaTime = currentTime - this.startTime;

        if (deltaTime >= 1000) {
            this.fps = Math.round((this.frameCount * 1000) / deltaTime);
            this.domElement.innerHTML = `FPS: ${this.fps}`;
            this.startTime = currentTime;
            this.frameCount = 0;
        }
    }

    getDOMElement() {
        return this.domElement;
    }
}