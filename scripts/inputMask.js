const rootSelector = "[data-js-input-mask]";

class inputMask {
  constructor(rootElement) {
    this.rootElement = rootElement;
    this.init()
  }

  init() {
    const isLipReady = typeof window.IMask !== "undefined";

    if (isLipReady) {
      window.IMask(this.rootElement, {
        mask: this.rootElement.dataset.jsInputMask,
      });
    } else {
      console.error('The library "IMask" is not a connected!');
    }
  }
}

class inputMaskCollection {
  constructor() {
    this.init();
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new inputMask(element);
    });
  }
}

export default inputMaskCollection;
