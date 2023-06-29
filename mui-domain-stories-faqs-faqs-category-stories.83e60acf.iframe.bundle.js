"use strict";(self.webpackChunkfront_lib_mui_turborepo=self.webpackChunkfront_lib_mui_turborepo||[]).push([[8793],{"./packages/mui-domain/stories/faqs/faqs-category.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Primary$parameters,_Primary$parameters2,_Primary$parameters2$,_Users_yoonsung0711_Repository_mui_components_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_Users_yoonsung0711_Repository_mui_components_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"DOMAIN/faqs/FaqsCategory",component:__webpack_require__("./packages/mui-domain/lib/faqs/index.tsx").xj,tags:["autodocs"],argTypes:{},args:{}};var Primary={args:{}};Primary.parameters=_objectSpread(_objectSpread({},Primary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {}\n}"},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2$=_Primary$parameters2.docs)||void 0===_Primary$parameters2$?void 0:_Primary$parameters2$.source)})})},"./packages/mui-domain/lib/faqs/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{xj:()=>FaqsCategory,gO:()=>FaqsForm,rG:()=>FaqsHero,UP:()=>FaqsList});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),colorManipulator=__webpack_require__("./node_modules/@mui/system/esm/colorManipulator.js"),Container=__webpack_require__("./node_modules/@mui/material/Container/Container.js"),Stack=__webpack_require__("./node_modules/@mui/material/Stack/Stack.js"),TextField=__webpack_require__("./node_modules/@mui/material/TextField/TextField.js"),InputAdornment=__webpack_require__("./node_modules/@mui/material/InputAdornment/InputAdornment.js"),dist=__webpack_require__("./node_modules/mui-common/dist/index.js"),__jsx=react.createElement,StyledRoot=(0,styled.ZP)("div")((function(_ref){var theme=_ref.theme;return(0,defineProperty.Z)({position:"relative",backgroundSize:"cover",backgroundPosition:"center",backgroundImage:"url(/assets/background/overlay_1.svg), url(/assets/images/faqs/hero.jpg)",padding:theme.spacing(10,0)},theme.breakpoints.up("md"),{height:560,padding:0})})),StyledContent=(0,styled.ZP)("div")((function(_ref3){var theme=_ref3.theme;return(0,defineProperty.Z)({textAlign:"center"},theme.breakpoints.up("md"),{bottom:80,textAlign:"left",position:"absolute"})}));function FaqsHero(){return __jsx(StyledRoot,null,__jsx(Container.Z,null,__jsx(StyledContent,null,__jsx("div",null,__jsx("br",null),__jsx(Stack.Z,{spacing:2,display:"inline-flex",direction:"row",sx:{color:"common.white"}})),__jsx(TextField.Z,{placeholder:"Search support...",InputProps:{startAdornment:__jsx(InputAdornment.Z,{position:"start"},__jsx(dist.Ir,{icon:"eva:search-fill",sx:{color:"text.disabled"}}))},sx:{mt:5,"& fieldset":{display:"none"},"& .MuiOutlinedInput-root":{width:280,color:"common.white",typography:"subtitle1",border:function border(theme){return"solid 1px ".concat((0,colorManipulator.Fq)(theme.palette.common.white,.24))},transition:function transition(theme){return theme.transitions.create(["box-shadow","width","background-color"],{duration:theme.transitions.duration.shorter})},"&.Mui-focused":{color:"grey.800",bgcolor:"common.white",width:{sm:320}}}}}))))}FaqsHero.displayName="FaqsHero",FaqsHero.__docgenInfo={description:"",methods:[],displayName:"FaqsHero"};var toConsumableArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),Accordion=__webpack_require__("./node_modules/@mui/material/Accordion/Accordion.js"),AccordionSummary=__webpack_require__("./node_modules/@mui/material/AccordionSummary/AccordionSummary.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),AccordionDetails=__webpack_require__("./node_modules/@mui/material/AccordionDetails/AccordionDetails.js"),mocks=__webpack_require__("./packages/mui-domain/lib/mocks/index.ts"),FaqsList_jsx=react.createElement,_faqs=(0,toConsumableArray.Z)(Array(8)).map((function(_,index){return{id:mocks.QJ.id(index),value:"panel".concat(index+1),heading:"Questions ".concat(index+1),detail:mocks.QJ.text.description(index)}}));function FaqsList(){return FaqsList_jsx("div",null,_faqs.map((function(accordion){return FaqsList_jsx(Accordion.Z,{key:accordion.id},FaqsList_jsx(AccordionSummary.Z,{expandIcon:FaqsList_jsx(dist.Ir,{icon:"eva:arrow-ios-downward-fill"})},FaqsList_jsx(Typography.Z,{variant:"subtitle1"},accordion.heading)),FaqsList_jsx(AccordionDetails.Z,null,FaqsList_jsx(Typography.Z,null,accordion.detail)))})))}FaqsList.displayName="FaqsList",FaqsList.__docgenInfo={description:"",methods:[],displayName:"FaqsList"};var Button=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),FaqsForm_jsx=react.createElement;function FaqsForm(){return FaqsForm_jsx(Stack.Z,{spacing:3},FaqsForm_jsx(Typography.Z,{variant:"h4"},"Haven't found the right help?"),FaqsForm_jsx(TextField.Z,{fullWidth:!0,label:"Name"}),FaqsForm_jsx(TextField.Z,{fullWidth:!0,label:"Email"}),FaqsForm_jsx(TextField.Z,{fullWidth:!0,label:"Subject"}),FaqsForm_jsx(TextField.Z,{fullWidth:!0,label:"Enter your message here.",multiline:!0,rows:4}),FaqsForm_jsx(Button.Z,{size:"large",variant:"contained"},"Submit Now"))}FaqsForm.displayName="FaqsForm",FaqsForm.__docgenInfo={description:"",methods:[],displayName:"FaqsForm"};var AppBar=__webpack_require__("./node_modules/@mui/material/AppBar/AppBar.js"),Toolbar=__webpack_require__("./node_modules/@mui/material/Toolbar/Toolbar.js"),Divider=__webpack_require__("./node_modules/@mui/material/Divider/Divider.js"),Drawer=__webpack_require__("./node_modules/@mui/material/Drawer/Drawer.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),Paper=__webpack_require__("./node_modules/@mui/material/Paper/Paper.js"),ListItemButton=__webpack_require__("./node_modules/@mui/material/ListItemButton/ListItemButton.js"),FaqsCategory_jsx=react.createElement,CATEGORIES=[{label:"Managing your account",icon:"/assets/icons/faqs/ic_account.svg",href:"#"},{label:"Payment",icon:"/assets/icons/faqs/ic_payment.svg",href:"#"},{label:"Delivery",icon:"/assets/icons/faqs/ic_delivery.svg",href:"#"},{label:"Problem with the Product",icon:"/assets/icons/faqs/ic_package.svg",href:"#"},{label:"Return & Refund",icon:"/assets/icons/faqs/ic_refund.svg",href:"#"},{label:"Guarantees and assurances",icon:"/assets/icons/faqs/ic_assurances.svg",href:"#"}];function FaqsCategory(){var isDesktop=(0,dist.Fs)("up","md"),_useState=(0,react.useState)(!1),open=_useState[0],setOpen=_useState[1];return isDesktop?FaqsCategory_jsx(Box.Z,{gap:2.5,display:"grid",gridTemplateColumns:{md:"repeat(3, 1fr)",lg:"repeat(6, 1fr)"},sx:{mb:15}},CATEGORIES.map((function(category){return FaqsCategory_jsx(CardDesktop,{category})}))):FaqsCategory_jsx(react.Fragment,null,FaqsCategory_jsx(AppBar.Z,{position:"absolute",color:"transparent",sx:{boxShadow:0}},FaqsCategory_jsx(Toolbar.Z,{sx:{justifyContent:"flex-end"}},FaqsCategory_jsx(Button.Z,{startIcon:FaqsCategory_jsx(dist.Ir,{icon:"eva:menu-2-fill"}),onClick:function handleOpen(){setOpen(!0)}},"Categories")),FaqsCategory_jsx(Divider.Z,null)),FaqsCategory_jsx(Drawer.ZP,{open,onClose:function handleClose(){setOpen(!1)}},FaqsCategory_jsx(Box.Z,{gap:1,display:"grid",gridTemplateColumns:"repeat(2, 1fr)",sx:{p:1}},CATEGORIES.map((function(category){return FaqsCategory_jsx(CardMobile,{key:category.label,category})})))))}function CardDesktop(_ref){var category=_ref.category,label=category.label,icon=category.icon;return FaqsCategory_jsx(Paper.Z,{variant:"outlined",sx:{px:3,py:5,borderRadius:2,textAlign:"center",borderColor:function borderColor(theme){return(0,colorManipulator.Fq)(theme.palette.grey[500],.12)},"&:hover":{}}},FaqsCategory_jsx(dist.Ee,{disabledEffect:!0,alt:icon,src:icon,sx:{mb:2,width:80,height:80,mx:"auto"}}),FaqsCategory_jsx(dist.b3,{variant:"subtitle2",persistent:!0},label))}function CardMobile(_ref2){var category=_ref2.category,label=category.label,icon=category.icon;return FaqsCategory_jsx(ListItemButton.Z,{key:label,sx:{py:2,maxWidth:140,borderRadius:1,textAlign:"center",typography:"body2",alignItems:"center",flexDirection:"column",justifyContent:"center",bgcolor:"background.neutral"}},FaqsCategory_jsx(dist.Ee,{alt:icon,src:icon,sx:{width:48,height:48,mb:1}}),category.label)}FaqsCategory.displayName="FaqsCategory",CardDesktop.displayName="CardDesktop",CardMobile.displayName="CardMobile",FaqsCategory.__docgenInfo={description:"",methods:[],displayName:"FaqsCategory"}}}]);