export default class Component {
  constructor(componentType)  {
    if (componentType === undefined) {
      throw new Error('Must specify componentType');
    }
    this.componentType= componentType;
  }

  getComponentType() {
    return this.componentType;
  }
}
