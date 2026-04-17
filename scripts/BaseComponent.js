class BaseComponent {
  constructor() {
    if (this.constructor === BaseComponent) {
      throw new Error("It is not impossible to create an instance of an abstract class BaseComponent!");
    }
  }

  getProxyState(initialState) {
    return new Proxy(initialState, {
      get: (target, prop) => {
        return target[prop];
      },
      set: (target, prop, newValue) => {
        const oldValue = target[prop];

        target[prop] = newValue;

        if (newValue !== oldValue) {
          this.updateUI();
        }

        return true;
      },
    });
  }

  updateUI() {
    throw new Error("The need realize method  updateUI!");
  }
}

export default BaseComponent;
