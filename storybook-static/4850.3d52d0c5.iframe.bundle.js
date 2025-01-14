"use strict";(self.webpackChunkmise_react=self.webpackChunkmise_react||[]).push([[4850],{"./src/components/theme/components/sections/order-online/CategorySelector/CategorySelector.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>CategorySelector});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/next@15.1.0_@babel+core@7.26.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.97.1_esbuild@0.24.0_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.97.1_esbuild@0.24.0_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.97.1_esbuild@0.24.0_/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.97.1_esbuild@0.24.0_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.97.1_esbuild@0.24.0_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.97.1_esbuild@0.24.0_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),CategorySelector_module=__webpack_require__("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.97.1_esbuild@0.24.0_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.49_typescript@5.7.2_webpack@5.97.1_esbuild@0.24.0_/node_modules/postcss-loader/dist/cjs.js!./src/components/theme/components/sections/order-online/CategorySelector/CategorySelector.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(CategorySelector_module.A,options);const CategorySelector_CategorySelector_module=CategorySelector_module.A&&CategorySelector_module.A.locals?CategorySelector_module.A.locals:void 0;var react=__webpack_require__("./node_modules/.pnpm/next@15.1.0_@babel+core@7.26.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js");function CategorySelector(props){var _categoryList__name,_categoryList_;const{categoryList=[],onCategoryItemClick}=props,[categoryIndexOffset,setCategoryIndexOffset]=(0,react.useState)(0),[currentSelectedIndex,setCurrentSelectedIndex]=(0,react.useState)(0);return(0,jsx_runtime.jsxs)("div",{id:"category-selector",className:`${CategorySelector_CategorySelector_module["categories-selector__wrapper"]} scrollbar--hidden`,children:[categoryList.length>0&&(null===(_categoryList_=categoryList[0])||void 0===_categoryList_||null===(_categoryList__name=_categoryList_.name)||void 0===_categoryList__name?void 0:_categoryList__name.length)&&(0,jsx_runtime.jsx)("template",{children:"order-again"===categoryList[0].square_online_id&&(0,jsx_runtime.jsx)("div",{id:"category-order-again",tabIndex:0,className:`${CategorySelector_CategorySelector_module["categories-selector__item"]} ${CategorySelector_CategorySelector_module["categories-selector__item"]} ${CategorySelector_CategorySelector_module["categories-selector__item--selected"]}`,onClick:()=>{setCurrentSelectedIndex(0),onCategoryItemClick&&onCategoryItemClick(categoryList[0],0)},children:(0,jsx_runtime.jsx)("span",{children:categoryList[0].name})})}),categoryList.map(((category,index)=>{const isSelected=currentSelectedIndex===index+categoryIndexOffset;if(category.name)return(0,jsx_runtime.jsx)("div",{id:`category-${category.square_online_id}`,tabIndex:0,className:`${CategorySelector_CategorySelector_module["categories-selector__item"]} ${isSelected?CategorySelector_CategorySelector_module["categories-selector__item--selected"]:""}`,onClick:()=>{setCurrentSelectedIndex(index+categoryIndexOffset),onCategoryItemClick&&onCategoryItemClick(category,index+categoryIndexOffset)},children:(0,jsx_runtime.jsx)("span",{children:category.name})},category.square_online_id)}))]})}CategorySelector.__docgenInfo={description:"",methods:[],displayName:"CategorySelector",props:{categoryList:{required:!1,tsType:{name:"Array",elements:[{name:"ICategoryList"}],raw:"ICategoryList[]"},description:""},onCategoryItemClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(category: ICategoryList, index: number) => void",signature:{arguments:[{type:{name:"ICategoryList"},name:"category"},{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""}}}},"./src/components/theme/components/sections/order-online/ItemList/ItemList.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>ItemList});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@15.1.0_@babel+core@7.26.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),_components_theme_partials_components_collection_List_List__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/theme/partials/components/collection/List/List.tsx");function ItemList(props){const{categoryList,fulfillment="",categoryTitleSettings={showTitle:!0},itemTitleSettings,itemImageSettings,onQuickAddClick}=props,filteredCategories=categoryList.filter((category=>category.is_computed_category||category.availability[fulfillment].should_display_now));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"order-online-item-list",children:filteredCategories.map(((category,_categorySectionId)=>{const availableCategoryItems=category.items.filter((item=>fulfillment&&item.fulfillment.methods[fulfillment]&&!item.only_subscribable));return 0===availableCategoryItems.length?null:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{id:`section_${category.square_online_id}`,className:"order-online-page__items-wrapper",children:[categoryTitleSettings.showTitle&&category.name&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{className:"heading-5 heading-with-margin order-online-page__heading",children:category.name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_theme_partials_components_collection_List_List__WEBPACK_IMPORTED_MODULE_1__.A,{collectionItems:availableCategoryItems.map((item=>({item,template:"card",settings:{title:itemTitleSettings,image:itemImageSettings},action:"TODO:"}))),columnAttrs:{"data-col-xs-12":"","data-col-sm-8":"","data-col-md-6":""},onQuickAddClick})]},category.square_online_id)}))})}ItemList.__docgenInfo={description:"",methods:[],displayName:"ItemList",props:{categoryList:{required:!0,tsType:{name:"Array",elements:[{name:"ICategoryList"}],raw:"ICategoryList[]"},description:""},fulfillment:{required:!1,tsType:{name:"Methods"},description:""},categoryTitleSettings:{required:!1,tsType:{name:"ICategoryTitleSettings"},description:""},itemTitleSettings:{required:!1,tsType:{name:"IItemTitleSettings"},description:""},itemImageSettings:{required:!1,tsType:{name:"IItemImageSettings"},description:""},onQuickAddClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: ICollectionItem) => void",signature:{arguments:[{type:{name:"ICollectionItem"},name:"item"}],return:{name:"void"}}},description:""}}}},"./src/components/theme/components/sections/order-online/ItemListSectionContent/ItemListSectionContent.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>ItemListSectionContent});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@15.1.0_@babel+core@7.26.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),_components_theme_config_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/theme/config/constants.ts"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/next@15.1.0_@babel+core@7.26.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js"),_ItemList_ItemList__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/theme/components/sections/order-online/ItemList/ItemList.tsx"),_test_data_ericm_prod_data__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/test-data/ericm_prod_data.ts"),_CategorySelector_CategorySelector__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/theme/components/sections/order-online/CategorySelector/CategorySelector.tsx"),_global_global__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/global/global.ts"),console=__webpack_require__("./node_modules/.pnpm/console-browserify@1.2.0/node_modules/console-browserify/index.js");function ItemListSectionContent(props){let{categoryMenuSettings={showMenu:!0},categoryTitleSettings,itemTitleSettings,itemImageSettings,locationId,fulfillment="PICKUP",availability,shouldScrollToSection,locations,onQuickAddClick}=props;const defaultValues=(0,_global_global__WEBPACK_IMPORTED_MODULE_6__.w)(),defaultFulfillment=fulfillment||defaultValues.defaultFulfillment,location=null==locations?void 0:locations.find((x=>(null==location?void 0:location.id)===locationId)),defaultLocation=location,defaultLocationId=null==defaultLocation?void 0:defaultLocation.id;let avaialabilityBy=_components_theme_config_constants__WEBPACK_IMPORTED_MODULE_1__.A.AVAILABILITY_ORDERING;defaultFulfillment===_components_theme_config_constants__WEBPACK_IMPORTED_MODULE_1__.A.FULFILLMENT_PICKUP?avaialabilityBy=_components_theme_config_constants__WEBPACK_IMPORTED_MODULE_1__.A.AVAILABILITY_READY:defaultFulfillment===_components_theme_config_constants__WEBPACK_IMPORTED_MODULE_1__.A.FULFILLMENT_DELIVERY&&(avaialabilityBy=_components_theme_config_constants__WEBPACK_IMPORTED_MODULE_1__.A.AVAILABILITY_DELIVER),availability||(availability={by:avaialabilityBy,time:{from:_components_theme_config_constants__WEBPACK_IMPORTED_MODULE_1__.A.AVAILABILITY_NOW}});null==defaultLocation||defaultLocation.square_online_id;(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((()=>{const handleHashChange=()=>{console.log("Hash changed:",window.location.hash)};return window.addEventListener("hashchange",handleHashChange),()=>{window.removeEventListener("hashchange",handleHashChange)}}),[]);const onWindowScroll=(0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((()=>{}),[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{onScroll:onWindowScroll,children:[(null==categoryMenuSettings?void 0:categoryMenuSettings.showMenu)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CategorySelector_CategorySelector__WEBPACK_IMPORTED_MODULE_5__.A,{categoryList:[{items:[],square_online_id:"",name:"Small Plates",is_computed_category:!0,availability:{}},{items:[],square_online_id:"",name:"Entrees",is_computed_category:!0,availability:{}},{items:[],square_online_id:"",name:"Drinks",is_computed_category:!0,availability:{}},{items:[],square_online_id:"",name:"Merch",is_computed_category:!0,availability:{}},{items:[],square_online_id:"",name:"Dinner",is_computed_category:!0,availability:{}}]})}),!1,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ItemList_ItemList__WEBPACK_IMPORTED_MODULE_3__.A,{categoryList:[{items:_test_data_ericm_prod_data__WEBPACK_IMPORTED_MODULE_4__.p.map((x=>x.item)),square_online_id:"",name:"Small Plates",is_computed_category:!0,availability:{}}],fulfillment:defaultFulfillment,categoryTitleSettings,itemTitleSettings,itemImageSettings,onQuickAddClick})]})}ItemListSectionContent.__docgenInfo={description:"",methods:[],displayName:"ItemListSectionContent",props:{categoryMenuSettings:{required:!1,tsType:{name:"ICategoryMenuSettings"},description:""},categoryTitleSettings:{required:!1,tsType:{name:"ICategoryTitleSettings"},description:""},itemTitleSettings:{required:!1,tsType:{name:"IItemTitleSettings"},description:""},itemImageSettings:{required:!1,tsType:{name:"IItemImageSettings"},description:""},locationId:{required:!1,tsType:{name:"string"},description:""},fulfillment:{required:!1,tsType:{name:"Methods"},description:""},availability:{required:!1,tsType:{name:"IAvailability"},description:""},shouldScrollToSection:{required:!1,tsType:{name:"boolean"},description:""},locations:{required:!1,tsType:{name:"Array",elements:[{name:"Location"}],raw:"Location[]"},description:""},onQuickAddClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: ICollectionItem) => void",signature:{arguments:[{type:{name:"ICollectionItem"},name:"item"}],return:{name:"void"}}},description:""}}}},"./src/components/theme/partials/components/collection/List/List.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>List});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@15.1.0_@babel+core@7.26.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/next@15.1.0_@babel+core@7.26.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js"),_Card_Card__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/theme/partials/components/collection/Card/Card.tsx");function List(props){const{collectionItems,columnAttrs,settings={columns:3,layout:"tiles",itemCardBackground:"",itemCardBorder:""},onQuickAddClick}=props,collectionLayout=settings.layout,isCarousel=(settings.itemCardBackground,settings.itemCardBorder,"carousel"===collectionLayout),updateCollectionImageHeight=(Array.from(new Set(collectionItems.map((item=>item.template)))).length,(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((()=>{}),[]));return isCarousel?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:"Carousel List!"}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:`collection collection--${collectionLayout}`,onResize:updateCollectionImageHeight,children:collectionItems.map(((listItem,listItemIndex)=>"simple"===listItem.template?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:"Simple"},listItemIndex):"card"===listItem.template?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Card_Card__WEBPACK_IMPORTED_MODULE_2__.A,{item:listItem.item,settings:listItem.settings,itemAction:listItem.action,columnAttrs:columnAttrs||{"data-col-xs-12":"","data-col-sm-6":""},highPriorityImage:listItemIndex<3,collectionLayout:"tiles",onQuickAddClick:()=>onQuickAddClick(listItem)},listItemIndex):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:"Tile"},listItemIndex)))})}List.__docgenInfo={description:"",methods:[],displayName:"List",props:{collectionItems:{required:!0,tsType:{name:"Array",elements:[{name:"ICollectionItem"}],raw:"ICollectionItem[]"},description:""},columnAttrs:{required:!0,tsType:{name:"signature",type:"object",raw:"{ [key: string]: string }",signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]}},description:""},settings:{required:!1,tsType:{name:"IListSettings"},description:""},onQuickAddClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: ICollectionItem) => void",signature:{arguments:[{type:{name:"ICollectionItem"},name:"item"}],return:{name:"void"}}},description:""}}}},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.97.1_esbuild@0.24.0_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.49_typescript@5.7.2_webpack@5.97.1_esbuild@0.24.0_/node_modules/postcss-loader/dist/cjs.js!./src/components/theme/components/sections/order-online/CategorySelector/CategorySelector.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.97.1_esbuild@0.24.0_/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.97.1_esbuild@0.24.0_/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".CategorySelector_categories-selector__wrapper__gDh3B {\n    position: sticky;\n    top: 0;\n    z-index: var(--theme-z-index-header);\n    box-sizing: border-box;\n    display: flex;\n    gap: var(--space-x3);\n    width: 100vw;\n    padding: 0 var(--theme-container-padding);\n    margin-bottom: var(--space-x3);\n    overflow-x: auto;\n    background-color: var(--theme-body-color);\n    border-bottom: 1px solid var(--theme-divider-20);\n\n    /* Same transition (transition-duration & transition-timing-function) as header's .slide-down-leave-active */\n    transition: top 0.3s ease-in;\n\n    /* Accelerate the transition since the header \"leave\" transition is slightly faster */\n    transition-delay: -30ms;\n}\n\n/* Allow the Category Selector to vertically stack underneath the site header when Site Header is visible */\n.CategorySelector_is-site-header-visible__Le5ET .CategorySelector_categories-selector__wrapper__gDh3B {\n    top: var(--header-height, 0px);\n\n    /* Same transition (transition-duration & transition-timing-function) as header's .slide-down-enter-active */\n    transition: top 0.3s ease-out;\n\n    /* Delay the transition since the header \"enter\" transition is slightly slower */\n    transition-delay: 30ms;\n}\n\n@media (min-width: 700px) {\n    .CategorySelector_categories-selector__wrapper__gDh3B {\n        margin-left: calc(var(--theme-container-padding) * -1);\n    }\n}\n\n.CategorySelector_categories-selector__wrapper__gDh3B .CategorySelector_ui-carousel__navigation--overlay__rwADt {\n    margin-top: calc(var(--space) * -1);\n}\n\n.CategorySelector_categories-selector__wrapper__gDh3B .CategorySelector_categories-selector__item__GEhZO {\n    position: relative;\n    padding: var(--space-x2) 0;\n    font: var(--theme-paragraph-30-medium);\n    color: var(--theme-text-20);\n    letter-spacing: var(--theme-paragraph-30-letter-spacing);\n    white-space: nowrap;\n    cursor: pointer;\n}\n\n.CategorySelector_categories-selector__wrapper__gDh3B .CategorySelector_categories-selector__item--selected__u2MTC {\n    color: var(--theme-text-10);\n}\n\n.CategorySelector_categories-selector__item--selected__u2MTC::after {\n    position: absolute;\n    bottom: 0;\n    display: block;\n    width: 100%;\n    height: 2px;\n    content: '';\n    background: var(--theme-text-10);\n}\n","",{version:3,sources:["webpack://./src/components/theme/components/sections/order-online/CategorySelector/CategorySelector.module.css"],names:[],mappings:"AAAA;IACI,gBAAgB;IAChB,MAAM;IACN,oCAAoC;IACpC,sBAAsB;IACtB,aAAa;IACb,oBAAoB;IACpB,YAAY;IACZ,yCAAyC;IACzC,8BAA8B;IAC9B,gBAAgB;IAChB,yCAAyC;IACzC,gDAAgD;;IAEhD,4GAA4G;IAC5G,4BAA4B;;IAE5B,qFAAqF;IACrF,uBAAuB;AAC3B;;AAEA,2GAA2G;AAC3G;IACI,8BAA8B;;IAE9B,4GAA4G;IAC5G,6BAA6B;;IAE7B,gFAAgF;IAChF,sBAAsB;AAC1B;;AAEA;IACI;QACI,sDAAsD;IAC1D;AACJ;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,kBAAkB;IAClB,0BAA0B;IAC1B,sCAAsC;IACtC,2BAA2B;IAC3B,wDAAwD;IACxD,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,cAAc;IACd,WAAW;IACX,WAAW;IACX,WAAW;IACX,gCAAgC;AACpC",sourcesContent:[".categories-selector__wrapper {\n    position: sticky;\n    top: 0;\n    z-index: var(--theme-z-index-header);\n    box-sizing: border-box;\n    display: flex;\n    gap: var(--space-x3);\n    width: 100vw;\n    padding: 0 var(--theme-container-padding);\n    margin-bottom: var(--space-x3);\n    overflow-x: auto;\n    background-color: var(--theme-body-color);\n    border-bottom: 1px solid var(--theme-divider-20);\n\n    /* Same transition (transition-duration & transition-timing-function) as header's .slide-down-leave-active */\n    transition: top 0.3s ease-in;\n\n    /* Accelerate the transition since the header \"leave\" transition is slightly faster */\n    transition-delay: -30ms;\n}\n\n/* Allow the Category Selector to vertically stack underneath the site header when Site Header is visible */\n.is-site-header-visible .categories-selector__wrapper {\n    top: var(--header-height, 0px);\n\n    /* Same transition (transition-duration & transition-timing-function) as header's .slide-down-enter-active */\n    transition: top 0.3s ease-out;\n\n    /* Delay the transition since the header \"enter\" transition is slightly slower */\n    transition-delay: 30ms;\n}\n\n@media (min-width: 700px) {\n    .categories-selector__wrapper {\n        margin-left: calc(var(--theme-container-padding) * -1);\n    }\n}\n\n.categories-selector__wrapper .ui-carousel__navigation--overlay {\n    margin-top: calc(var(--space) * -1);\n}\n\n.categories-selector__wrapper .categories-selector__item {\n    position: relative;\n    padding: var(--space-x2) 0;\n    font: var(--theme-paragraph-30-medium);\n    color: var(--theme-text-20);\n    letter-spacing: var(--theme-paragraph-30-letter-spacing);\n    white-space: nowrap;\n    cursor: pointer;\n}\n\n.categories-selector__wrapper .categories-selector__item--selected {\n    color: var(--theme-text-10);\n}\n\n.categories-selector__item--selected::after {\n    position: absolute;\n    bottom: 0;\n    display: block;\n    width: 100%;\n    height: 2px;\n    content: '';\n    background: var(--theme-text-10);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"categories-selector__wrapper":"CategorySelector_categories-selector__wrapper__gDh3B","is-site-header-visible":"CategorySelector_is-site-header-visible__Le5ET","ui-carousel__navigation--overlay":"CategorySelector_ui-carousel__navigation--overlay__rwADt","categories-selector__item":"CategorySelector_categories-selector__item__GEhZO","categories-selector__item--selected":"CategorySelector_categories-selector__item--selected__u2MTC"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);