"use strict";(self.webpackChunkmise_react=self.webpackChunkmise_react||[]).push([[3222],{"./src/components/theme/components/sections/order-online/OrderOnlineItemList/OrderOnlineItemList.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,NoMenu:()=>NoMenu,NoTitle:()=>NoTitle,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"theme/sections/order-online/OrderOnlineItemList",component:__webpack_require__("./src/components/theme/components/sections/order-online/OrderOnlineItemList/OrderOnlineItemList.tsx").A},Default={args:{categoryMenuSettings:[{showMenu:!0}],categoryTitleSettings:[{showTitle:!0}],itemTitleSettings:[{isVisible:!0,showDescription:!0}],locations:{id:"1",name:"Location 1"}}},NoMenu={args:{categoryMenuSettings:[{showMenu:!1}],categoryTitleSettings:[{showTitle:!0}],itemTitleSettings:[{isVisible:!0,showDescription:!0}],locations:{id:"2",name:"Location 2"}}},NoTitle={args:{categoryMenuSettings:[{showMenu:!0}],categoryTitleSettings:[{showTitle:!1}],itemTitleSettings:[{isVisible:!0,showDescription:!0}],locations:{id:"3",name:"Location 3"}}},__namedExportsOrder=["Default","NoMenu","NoTitle"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    categoryMenuSettings: [{\n      showMenu: true\n    }],\n    categoryTitleSettings: [{\n      showTitle: true\n    }],\n    itemTitleSettings: [{\n      isVisible: true,\n      showDescription: true\n    }],\n    locations: {\n      id: '1',\n      name: 'Location 1'\n    }\n  }\n}",...Default.parameters?.docs?.source}}},NoMenu.parameters={...NoMenu.parameters,docs:{...NoMenu.parameters?.docs,source:{originalSource:"{\n  args: {\n    categoryMenuSettings: [{\n      showMenu: false\n    }],\n    categoryTitleSettings: [{\n      showTitle: true\n    }],\n    itemTitleSettings: [{\n      isVisible: true,\n      showDescription: true\n    }],\n    locations: {\n      id: '2',\n      name: 'Location 2'\n    }\n  }\n}",...NoMenu.parameters?.docs?.source}}},NoTitle.parameters={...NoTitle.parameters,docs:{...NoTitle.parameters?.docs,source:{originalSource:"{\n  args: {\n    categoryMenuSettings: [{\n      showMenu: true\n    }],\n    categoryTitleSettings: [{\n      showTitle: false\n    }],\n    itemTitleSettings: [{\n      isVisible: true,\n      showDescription: true\n    }],\n    locations: {\n      id: '3',\n      name: 'Location 3'\n    }\n  }\n}",...NoTitle.parameters?.docs?.source}}}},"./src/components/theme/components/sections/order-online/OrderOnlineItemList/OrderOnlineItemList.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>OrderOnlineItemList});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@15.1.0_@babel+core@7.26.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),_DesktopCart_DesktopCart__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/theme/components/sections/order-online/DesktopCart/DesktopCart.tsx"),_ItemListSectionContent_ItemListSectionContent__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/theme/components/sections/order-online/ItemListSectionContent/ItemListSectionContent.tsx");function OrderOnlineItemList(props){const{categoryMenuSettings={showMenu:!0},categoryTitleSettings={showTitle:!0},itemTitleSettings={isVisible:!0,showDescription:!0},locations}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"row order-item-list__row",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{id:"order-online-item-list-section-content",className:"col order-item-list__container","data-col-xs-12":!0,"data-col-sm-7":!0,"data-col-md-8":!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ItemListSectionContent_ItemListSectionContent__WEBPACK_IMPORTED_MODULE_2__.A,{categoryMenuSettings,categoryTitleSettings,itemTitleSettings,locations})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DesktopCart_DesktopCart__WEBPACK_IMPORTED_MODULE_1__.A,{isSiteHeaderVisible:!1,hasSingleSupportedFulfillment:!1,defaultFulfillment:"DELIVERY"})]})}OrderOnlineItemList.__docgenInfo={description:"",methods:[],displayName:"OrderOnlineItemList",props:{categoryMenuSettings:{required:!1,tsType:{name:"ICategoryMenuSettings"},description:""},categoryTitleSettings:{required:!1,tsType:{name:"ICategoryTitleSettings"},description:""},itemTitleSettings:{required:!1,tsType:{name:"IItemTitleSettings"},description:""},locations:{required:!1,tsType:{name:"Array",elements:[{name:"ILocation"}],raw:"ILocation[]"},description:""}}}}}]);