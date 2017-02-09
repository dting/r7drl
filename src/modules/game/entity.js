export default class Entity {
  constructor(components = []) {
    this.components = new Map(components);
  }

  hasComponent(componentType) {
    return this.components.has(componentType);
  }

  getComponent(componentType) {
    return this.components.get(componentType);
  }

  setComponent(component) {
    this.components.set(component.getComponentType(), component);
    return this;
  }

  copy() {
    return new Entity([...this.components.entries()]);
  }
}
