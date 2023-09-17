'use strict';

const components_index = require('./shared/web-component-starter.1241acfc.cjs');
require('lit');

function defineWebComponents() {
  Object.keys(components_index.components).forEach((key) => {
    const componentName = key.replace(/([A-Z])/g, "-$1").toLowerCase().slice(1);
    const component = components_index.components[key];
    window.customElements.define(componentName, component);
  });
}
function defineWebComponent(componentName, component) {
  window.customElements.define(componentName, component);
}

exports.defineWebComponent = defineWebComponent;
exports.defineWebComponents = defineWebComponents;
