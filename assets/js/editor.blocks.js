!function(e){var n={};function c(s){if(n[s])return n[s].exports;var i=n[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,c),i.l=!0,i.exports}c.m=e,c.c=n,c.d=function(e,n,s){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:s})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)c.d(s,i,function(n){return e[n]}.bind(null,i));return s},c.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="",c(c.s=0)}([function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n\n// EXTERNAL MODULE: ./blocks/responsive-screenshots/editor.scss\nvar editor = __webpack_require__(1);\n\n// EXTERNAL MODULE: ./blocks/responsive-screenshots/style.scss\nvar style = __webpack_require__(2);\n\n// CONCATENATED MODULE: ./blocks/responsive-screenshots/index.js\n\n\n/**\n * Internal block libraries\n */\n\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar RichText = wp.editor.RichText;\n/**\n * Example of a custom SVG path taken from fontastic\n*/\n\nvar iconEl = wp.element.createElement(\'svg\', {\n  width: 20,\n  height: 20\n}, wp.element.createElement(\'path\', {\n  d: "M17.5,9.69V1.56a.31.31,0,0,0-.31-.31H1.56a.31.31,0,0,0-.31.31V9.69a.31.31,0,0,0,.31.31H17.19a.31.31,0,0,0,.31-.31Zm1.25-8.13V12.19a1.57,1.57,0,0,1-1.56,1.56H11.88a2.18,2.18,0,0,0,.15.76c.11.26.21.49.31.69a1.06,1.06,0,0,1,.16.42.58.58,0,0,1-.19.44.57.57,0,0,1-.43.19h-5a.65.65,0,0,1-.63-.63,1,1,0,0,1,.16-.42c.1-.2.2-.43.31-.69a2.12,2.12,0,0,0,.16-.76H1.56a1.47,1.47,0,0,1-1.1-.46A1.47,1.47,0,0,1,0,12.19V1.56A1.47,1.47,0,0,1,.46.46,1.47,1.47,0,0,1,1.56,0H17.19a1.47,1.47,0,0,1,1.1.46A1.47,1.47,0,0,1,18.75,1.56Z"\n}));\n/**\n * Register block\n */\n\n/* harmony default export */ var responsive_screenshots = (registerBlockType("rs-block/responsive-screenshots", {\n  title: __("Responsive Screenshots", "rs-block"),\n  description: __("Generate a mockup with devices and responsive screenshots.", "rs-block"),\n  category: "common",\n  icon: iconEl,\n  keywords: [__("Responsive", "rs-block"), __("Screenshots", "rs-block"), __("Mockups", "rs-block")],\n  edit: function edit(props) {\n    return wp.element.createElement(\'div\', null, \'Responsive screenshots block goes here.\');\n  },\n  save: function save(props) {\n    return wp.element.createElement(\'div\', null, \'Responsive screenshots block goes here.\');\n  }\n}));\n// CONCATENATED MODULE: ./blocks/index.js\n/**\n * Import the block\n */\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Jsb2Nrcy9yZXNwb25zaXZlLXNjcmVlbnNob3RzL2luZGV4LmpzPzllMjQiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL2luZGV4LmpzPzA1OWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9lZGl0b3Iuc2Nzc1wiO1xuaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG4vKipcbiAqIEludGVybmFsIGJsb2NrIGxpYnJhcmllc1xuICovXG5cbnZhciBfXyA9IHdwLmkxOG4uX187XG52YXIgcmVnaXN0ZXJCbG9ja1R5cGUgPSB3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGU7XG52YXIgUmljaFRleHQgPSB3cC5lZGl0b3IuUmljaFRleHQ7XG4vKipcbiAqIEV4YW1wbGUgb2YgYSBjdXN0b20gU1ZHIHBhdGggdGFrZW4gZnJvbSBmb250YXN0aWNcbiovXG5cbnZhciBpY29uRWwgPSB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ3N2ZycsIHtcbiAgd2lkdGg6IDIwLFxuICBoZWlnaHQ6IDIwXG59LCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7XG4gIGQ6IFwiTTE3LjUsOS42OVYxLjU2YS4zMS4zMSwwLDAsMC0uMzEtLjMxSDEuNTZhLjMxLjMxLDAsMCwwLS4zMS4zMVY5LjY5YS4zMS4zMSwwLDAsMCwuMzEuMzFIMTcuMTlhLjMxLjMxLDAsMCwwLC4zMS0uMzFabTEuMjUtOC4xM1YxMi4xOWExLjU3LDEuNTcsMCwwLDEtMS41NiwxLjU2SDExLjg4YTIuMTgsMi4xOCwwLDAsMCwuMTUuNzZjLjExLjI2LjIxLjQ5LjMxLjY5YTEuMDYsMS4wNiwwLDAsMSwuMTYuNDIuNTguNTgsMCwwLDEtLjE5LjQ0LjU3LjU3LDAsMCwxLS40My4xOWgtNWEuNjUuNjUsMCwwLDEtLjYzLS42MywxLDEsMCwwLDEsLjE2LS40MmMuMS0uMi4yLS40My4zMS0uNjlhMi4xMiwyLjEyLDAsMCwwLC4xNi0uNzZIMS41NmExLjQ3LDEuNDcsMCwwLDEtMS4xLS40NkExLjQ3LDEuNDcsMCwwLDEsMCwxMi4xOVYxLjU2QTEuNDcsMS40NywwLDAsMSwuNDYuNDYsMS40NywxLjQ3LDAsMCwxLDEuNTYsMEgxNy4xOWExLjQ3LDEuNDcsMCwwLDEsMS4xLjQ2QTEuNDcsMS40NywwLDAsMSwxOC43NSwxLjU2WlwiXG59KSk7XG4vKipcbiAqIFJlZ2lzdGVyIGJsb2NrXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0ZXJCbG9ja1R5cGUoXCJycy1ibG9jay9yZXNwb25zaXZlLXNjcmVlbnNob3RzXCIsIHtcbiAgdGl0bGU6IF9fKFwiUmVzcG9uc2l2ZSBTY3JlZW5zaG90c1wiLCBcInJzLWJsb2NrXCIpLFxuICBkZXNjcmlwdGlvbjogX18oXCJHZW5lcmF0ZSBhIG1vY2t1cCB3aXRoIGRldmljZXMgYW5kIHJlc3BvbnNpdmUgc2NyZWVuc2hvdHMuXCIsIFwicnMtYmxvY2tcIiksXG4gIGNhdGVnb3J5OiBcImNvbW1vblwiLFxuICBpY29uOiBpY29uRWwsXG4gIGtleXdvcmRzOiBbX18oXCJSZXNwb25zaXZlXCIsIFwicnMtYmxvY2tcIiksIF9fKFwiU2NyZWVuc2hvdHNcIiwgXCJycy1ibG9ja1wiKSwgX18oXCJNb2NrdXBzXCIsIFwicnMtYmxvY2tcIildLFxuICBlZGl0OiBmdW5jdGlvbiBlZGl0KHByb3BzKSB7XG4gICAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JywgbnVsbCwgJ1Jlc3BvbnNpdmUgc2NyZWVuc2hvdHMgYmxvY2sgZ29lcyBoZXJlLicpO1xuICB9LFxuICBzYXZlOiBmdW5jdGlvbiBzYXZlKHByb3BzKSB7XG4gICAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JywgbnVsbCwgJ1Jlc3BvbnNpdmUgc2NyZWVuc2hvdHMgYmxvY2sgZ29lcyBoZXJlLicpO1xuICB9XG59KTsiLCIvKipcbiAqIEltcG9ydCB0aGUgYmxvY2tcbiAqL1xuaW1wb3J0IFwiLi9yZXNwb25zaXZlLXNjcmVlbnNob3RzL1wiOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n')},function(module,exports){eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Jsb2Nrcy9yZXNwb25zaXZlLXNjcmVlbnNob3RzL2VkaXRvci5zY3NzPzA2NDAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n")},function(module,exports){eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Jsb2Nrcy9yZXNwb25zaXZlLXNjcmVlbnNob3RzL3N0eWxlLnNjc3M/Yzk4NyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n")}]);