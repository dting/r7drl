export default class Entity {
  constructor(components = []) {
    this.components = new Map(components);
  }

  hasComponent(cls) {
    return this.components.has(cls.name);
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
