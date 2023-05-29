# The Problem

- Production
export { default as Component } from '@/components' => only one component

- Development
export { default as ComponentA } from '@/components'
export { default as ComponentB } from '@/components'

```javascript
/***/
"./src/components/Dialog/index.tsx": /*!*****************************************!*\
!*** ./src/components/Dialog/index.tsx ***!
\*****************************************/
/***/
(function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    eval(.......);

    /***/
}
),

/***/
"./src/components/Modal/index.tsx": /*!****************************************!*\
!*** ./src/components/Modal/index.tsx ***!
\****************************************/
/***/
(function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    eval(........)
    /***/
}
),
```




# The Solution