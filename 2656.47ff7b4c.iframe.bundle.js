"use strict";(self.webpackChunkfront_lib_mui_turborepo=self.webpackChunkfront_lib_mui_turborepo||[]).push([[2656],{"./node_modules/@mui/material/ListItemAvatar/ListItemAvatar.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>ListItemAvatar_ListItemAvatar});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),ListContext=__webpack_require__("./node_modules/@mui/material/List/ListContext.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getListItemAvatarUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiListItemAvatar",slot)}(0,generateUtilityClasses.Z)("MuiListItemAvatar",["root","alignItemsFlexStart"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["className"],ListItemAvatarRoot=(0,styled.ZP)("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,"flex-start"===ownerState.alignItems&&styles.alignItemsFlexStart]}})((({ownerState})=>(0,esm_extends.Z)({minWidth:56,flexShrink:0},"flex-start"===ownerState.alignItems&&{marginTop:8}))),ListItemAvatar_ListItemAvatar=react.forwardRef((function ListItemAvatar(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiListItemAvatar"}),{className}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),context=react.useContext(ListContext.Z),ownerState=(0,esm_extends.Z)({},props,{alignItems:context.alignItems}),classes=(ownerState=>{const{alignItems,classes}=ownerState,slots={root:["root","flex-start"===alignItems&&"alignItemsFlexStart"]};return(0,composeClasses.Z)(slots,getListItemAvatarUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(ListItemAvatarRoot,(0,esm_extends.Z)({className:(0,clsx_m.Z)(classes.root,className),ownerState,ref},other))}))},"./node_modules/@mui/material/ListItemButton/ListItemButton.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),_mui_base__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),_mui_system__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/system/esm/colorManipulator.js"),_styles_styled__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),_ButtonBase__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/material/ButtonBase/ButtonBase.js"),_utils_useEnhancedEffect__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@mui/material/utils/useEnhancedEffect.js"),_utils_useForkRef__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/@mui/material/utils/useForkRef.js"),_List_ListContext__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@mui/material/List/ListContext.js"),_listItemButtonClasses__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/ListItemButton/listItemButtonClasses.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["alignItems","autoFocus","component","children","dense","disableGutters","divider","focusVisibleClassName","selected","className"],ListItemButtonRoot=(0,_styles_styled__WEBPACK_IMPORTED_MODULE_5__.ZP)(_ButtonBase__WEBPACK_IMPORTED_MODULE_6__.Z,{shouldForwardProp:prop=>(0,_styles_styled__WEBPACK_IMPORTED_MODULE_5__.FO)(prop)||"classes"===prop,name:"MuiListItemButton",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,ownerState.dense&&styles.dense,"flex-start"===ownerState.alignItems&&styles.alignItemsFlexStart,ownerState.divider&&styles.divider,!ownerState.disableGutters&&styles.gutters]}})((({theme,ownerState})=>(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.Z)({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:theme.transitions.create("background-color",{duration:theme.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(theme.vars||theme).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${_listItemButtonClasses__WEBPACK_IMPORTED_MODULE_3__.Z.selected}`]:{backgroundColor:theme.vars?`rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})`:(0,_mui_system__WEBPACK_IMPORTED_MODULE_7__.Fq)(theme.palette.primary.main,theme.palette.action.selectedOpacity),[`&.${_listItemButtonClasses__WEBPACK_IMPORTED_MODULE_3__.Z.focusVisible}`]:{backgroundColor:theme.vars?`rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))`:(0,_mui_system__WEBPACK_IMPORTED_MODULE_7__.Fq)(theme.palette.primary.main,theme.palette.action.selectedOpacity+theme.palette.action.focusOpacity)}},[`&.${_listItemButtonClasses__WEBPACK_IMPORTED_MODULE_3__.Z.selected}:hover`]:{backgroundColor:theme.vars?`rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))`:(0,_mui_system__WEBPACK_IMPORTED_MODULE_7__.Fq)(theme.palette.primary.main,theme.palette.action.selectedOpacity+theme.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:theme.vars?`rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})`:(0,_mui_system__WEBPACK_IMPORTED_MODULE_7__.Fq)(theme.palette.primary.main,theme.palette.action.selectedOpacity)}},[`&.${_listItemButtonClasses__WEBPACK_IMPORTED_MODULE_3__.Z.focusVisible}`]:{backgroundColor:(theme.vars||theme).palette.action.focus},[`&.${_listItemButtonClasses__WEBPACK_IMPORTED_MODULE_3__.Z.disabled}`]:{opacity:(theme.vars||theme).palette.action.disabledOpacity}},ownerState.divider&&{borderBottom:`1px solid ${(theme.vars||theme).palette.divider}`,backgroundClip:"padding-box"},"flex-start"===ownerState.alignItems&&{alignItems:"flex-start"},!ownerState.disableGutters&&{paddingLeft:16,paddingRight:16},ownerState.dense&&{paddingTop:4,paddingBottom:4}))),__WEBPACK_DEFAULT_EXPORT__=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function ListItemButton(inProps,ref){const props=(0,_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_8__.Z)({props:inProps,name:"MuiListItemButton"}),{alignItems="center",autoFocus=!1,component="div",children,dense=!1,disableGutters=!1,divider=!1,focusVisibleClassName,selected=!1,className}=props,other=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_9__.Z)(props,_excluded),context=react__WEBPACK_IMPORTED_MODULE_0__.useContext(_List_ListContext__WEBPACK_IMPORTED_MODULE_10__.Z),childContext=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({dense:dense||context.dense||!1,alignItems,disableGutters})),[alignItems,context.dense,dense,disableGutters]),listItemRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);(0,_utils_useEnhancedEffect__WEBPACK_IMPORTED_MODULE_11__.Z)((()=>{autoFocus&&listItemRef.current&&listItemRef.current.focus()}),[autoFocus]);const ownerState=(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.Z)({},props,{alignItems,dense:childContext.dense,disableGutters,divider,selected}),classes=(ownerState=>{const{alignItems,classes,dense,disabled,disableGutters,divider,selected}=ownerState,slots={root:["root",dense&&"dense",!disableGutters&&"gutters",divider&&"divider",disabled&&"disabled","flex-start"===alignItems&&"alignItemsFlexStart",selected&&"selected"]},composedClasses=(0,_mui_base__WEBPACK_IMPORTED_MODULE_2__.Z)(slots,_listItemButtonClasses__WEBPACK_IMPORTED_MODULE_3__.t,classes);return(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.Z)({},classes,composedClasses)})(ownerState),handleRef=(0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_12__.Z)(listItemRef,ref);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_List_ListContext__WEBPACK_IMPORTED_MODULE_10__.Z.Provider,{value:childContext,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ListItemButtonRoot,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.Z)({ref:handleRef,href:other.href||other.to,component:(other.href||other.to)&&"div"===component?"button":component,focusVisibleClassName:(0,clsx__WEBPACK_IMPORTED_MODULE_13__.Z)(classes.focusVisible,focusVisibleClassName),ownerState,className:(0,clsx__WEBPACK_IMPORTED_MODULE_13__.Z)(classes.root,className)},other,{classes,children}))})}))},"./node_modules/@mui/material/ListItemText/ListItemText.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),_mui_base__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),_Typography__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),_List_ListContext__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/material/List/ListContext.js"),_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),_styles_styled__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),_listItemTextClasses__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/ListItemText/listItemTextClasses.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],ListItemTextRoot=(0,_styles_styled__WEBPACK_IMPORTED_MODULE_4__.ZP)("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[{[`& .${_listItemTextClasses__WEBPACK_IMPORTED_MODULE_3__.Z.primary}`]:styles.primary},{[`& .${_listItemTextClasses__WEBPACK_IMPORTED_MODULE_3__.Z.secondary}`]:styles.secondary},styles.root,ownerState.inset&&styles.inset,ownerState.primary&&ownerState.secondary&&styles.multiline,ownerState.dense&&styles.dense]}})((({ownerState})=>(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},ownerState.primary&&ownerState.secondary&&{marginTop:6,marginBottom:6},ownerState.inset&&{paddingLeft:56}))),__WEBPACK_DEFAULT_EXPORT__=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function ListItemText(inProps,ref){const props=(0,_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_6__.Z)({props:inProps,name:"MuiListItemText"}),{children,className,disableTypography=!1,inset=!1,primary:primaryProp,primaryTypographyProps,secondary:secondaryProp,secondaryTypographyProps}=props,other=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_7__.Z)(props,_excluded),{dense}=react__WEBPACK_IMPORTED_MODULE_0__.useContext(_List_ListContext__WEBPACK_IMPORTED_MODULE_8__.Z);let primary=null!=primaryProp?primaryProp:children,secondary=secondaryProp;const ownerState=(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({},props,{disableTypography,inset,primary:!!primary,secondary:!!secondary,dense}),classes=(ownerState=>{const{classes,inset,primary,secondary,dense}=ownerState,slots={root:["root",inset&&"inset",dense&&"dense",primary&&secondary&&"multiline"],primary:["primary"],secondary:["secondary"]};return(0,_mui_base__WEBPACK_IMPORTED_MODULE_2__.Z)(slots,_listItemTextClasses__WEBPACK_IMPORTED_MODULE_3__.L,classes)})(ownerState);return null==primary||primary.type===_Typography__WEBPACK_IMPORTED_MODULE_9__.Z||disableTypography||(primary=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Typography__WEBPACK_IMPORTED_MODULE_9__.Z,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({variant:dense?"body2":"body1",className:classes.primary,component:null!=primaryTypographyProps&&primaryTypographyProps.variant?void 0:"span",display:"block"},primaryTypographyProps,{children:primary}))),null==secondary||secondary.type===_Typography__WEBPACK_IMPORTED_MODULE_9__.Z||disableTypography||(secondary=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Typography__WEBPACK_IMPORTED_MODULE_9__.Z,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({variant:"body2",className:classes.secondary,color:"text.secondary",display:"block"},secondaryTypographyProps,{children:secondary}))),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(ListItemTextRoot,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({className:(0,clsx__WEBPACK_IMPORTED_MODULE_10__.Z)(classes.root,className),ownerState,ref},other,{children:[primary,secondary]}))}))},"./node_modules/@mui/material/node_modules/@mui/base/ClickAwayListener/ClickAwayListener.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/utils/esm/useForkRef/useForkRef.js"),_mui_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/utils/esm/useEventCallback/useEventCallback.js"),_mui_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/utils/esm/ownerDocument/ownerDocument.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function mapEventPropToEvent(eventProp){return eventProp.substring(2).toLowerCase()}const __WEBPACK_DEFAULT_EXPORT__=function ClickAwayListener(props){const{children,disableReactTree=!1,mouseEvent="onClick",onClickAway,touchEvent="onTouchEnd"}=props,movedRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1),nodeRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),activatedRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1),syntheticEventRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1);react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>(setTimeout((()=>{activatedRef.current=!0}),0),()=>{activatedRef.current=!1})),[]);const handleRef=(0,_mui_utils__WEBPACK_IMPORTED_MODULE_2__.Z)(children.ref,nodeRef),handleClickAway=(0,_mui_utils__WEBPACK_IMPORTED_MODULE_3__.Z)((event=>{const insideReactTree=syntheticEventRef.current;syntheticEventRef.current=!1;const doc=(0,_mui_utils__WEBPACK_IMPORTED_MODULE_4__.Z)(nodeRef.current);if(!activatedRef.current||!nodeRef.current||"clientX"in event&&function clickedRootScrollbar(event,doc){return doc.documentElement.clientWidth<event.clientX||doc.documentElement.clientHeight<event.clientY}(event,doc))return;if(movedRef.current)return void(movedRef.current=!1);let insideDOM;insideDOM=event.composedPath?event.composedPath().indexOf(nodeRef.current)>-1:!doc.documentElement.contains(event.target)||nodeRef.current.contains(event.target),insideDOM||!disableReactTree&&insideReactTree||onClickAway(event)})),createHandleSynthetic=handlerName=>event=>{syntheticEventRef.current=!0;const childrenPropsHandler=children.props[handlerName];childrenPropsHandler&&childrenPropsHandler(event)},childrenProps={ref:handleRef};return!1!==touchEvent&&(childrenProps[touchEvent]=createHandleSynthetic(touchEvent)),react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{if(!1!==touchEvent){const mappedTouchEvent=mapEventPropToEvent(touchEvent),doc=(0,_mui_utils__WEBPACK_IMPORTED_MODULE_4__.Z)(nodeRef.current),handleTouchMove=()=>{movedRef.current=!0};return doc.addEventListener(mappedTouchEvent,handleClickAway),doc.addEventListener("touchmove",handleTouchMove),()=>{doc.removeEventListener(mappedTouchEvent,handleClickAway),doc.removeEventListener("touchmove",handleTouchMove)}}}),[handleClickAway,touchEvent]),!1!==mouseEvent&&(childrenProps[mouseEvent]=createHandleSynthetic(mouseEvent)),react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{if(!1!==mouseEvent){const mappedMouseEvent=mapEventPropToEvent(mouseEvent),doc=(0,_mui_utils__WEBPACK_IMPORTED_MODULE_4__.Z)(nodeRef.current);return doc.addEventListener(mappedMouseEvent,handleClickAway),()=>{doc.removeEventListener(mappedMouseEvent,handleClickAway)}}}),[handleClickAway,mouseEvent]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children,childrenProps)})}},"./node_modules/date-fns/esm/formatDistanceToNowStrict/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>formatDistanceToNowStrict});var _lib_defaultOptions=__webpack_require__("./node_modules/date-fns/esm/_lib/defaultOptions/index.js"),getTimezoneOffsetInMilliseconds=__webpack_require__("./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js"),compareAsc=__webpack_require__("./node_modules/date-fns/esm/compareAsc/index.js"),toDate=__webpack_require__("./node_modules/date-fns/esm/toDate/index.js"),cloneObject=__webpack_require__("./node_modules/date-fns/esm/_lib/cloneObject/index.js"),_lib_assign=__webpack_require__("./node_modules/date-fns/esm/_lib/assign/index.js"),defaultLocale=__webpack_require__("./node_modules/date-fns/esm/_lib/defaultLocale/index.js"),requiredArgs=__webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js"),MILLISECONDS_IN_MINUTE=6e4,MINUTES_IN_DAY=1440,MINUTES_IN_MONTH=30*MINUTES_IN_DAY,MINUTES_IN_YEAR=365*MINUTES_IN_DAY;function formatDistanceToNowStrict(dirtyDate,options){return(0,requiredArgs.Z)(1,arguments),function formatDistanceStrict(dirtyDate,dirtyBaseDate,options){var _ref,_options$locale,_options$roundingMeth;(0,requiredArgs.Z)(2,arguments);var defaultOptions=(0,_lib_defaultOptions.j)(),locale=null!==(_ref=null!==(_options$locale=null==options?void 0:options.locale)&&void 0!==_options$locale?_options$locale:defaultOptions.locale)&&void 0!==_ref?_ref:defaultLocale.Z;if(!locale.formatDistance)throw new RangeError("locale must contain localize.formatDistance property");var comparison=(0,compareAsc.Z)(dirtyDate,dirtyBaseDate);if(isNaN(comparison))throw new RangeError("Invalid time value");var dateLeft,dateRight,localizeOptions=(0,_lib_assign.Z)((0,cloneObject.Z)(options),{addSuffix:Boolean(null==options?void 0:options.addSuffix),comparison});comparison>0?(dateLeft=(0,toDate.Z)(dirtyBaseDate),dateRight=(0,toDate.Z)(dirtyDate)):(dateLeft=(0,toDate.Z)(dirtyDate),dateRight=(0,toDate.Z)(dirtyBaseDate));var roundingMethodFn,roundingMethod=String(null!==(_options$roundingMeth=null==options?void 0:options.roundingMethod)&&void 0!==_options$roundingMeth?_options$roundingMeth:"round");if("floor"===roundingMethod)roundingMethodFn=Math.floor;else if("ceil"===roundingMethod)roundingMethodFn=Math.ceil;else{if("round"!==roundingMethod)throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");roundingMethodFn=Math.round}var unit,milliseconds=dateRight.getTime()-dateLeft.getTime(),minutes=milliseconds/MILLISECONDS_IN_MINUTE,dstNormalizedMinutes=(milliseconds-((0,getTimezoneOffsetInMilliseconds.Z)(dateRight)-(0,getTimezoneOffsetInMilliseconds.Z)(dateLeft)))/MILLISECONDS_IN_MINUTE,defaultUnit=null==options?void 0:options.unit;if("second"===(unit=defaultUnit?String(defaultUnit):minutes<1?"second":minutes<60?"minute":minutes<MINUTES_IN_DAY?"hour":dstNormalizedMinutes<MINUTES_IN_MONTH?"day":dstNormalizedMinutes<MINUTES_IN_YEAR?"month":"year")){var seconds=roundingMethodFn(milliseconds/1e3);return locale.formatDistance("xSeconds",seconds,localizeOptions)}if("minute"===unit){var roundedMinutes=roundingMethodFn(minutes);return locale.formatDistance("xMinutes",roundedMinutes,localizeOptions)}if("hour"===unit){var hours=roundingMethodFn(minutes/60);return locale.formatDistance("xHours",hours,localizeOptions)}if("day"===unit){var days=roundingMethodFn(dstNormalizedMinutes/MINUTES_IN_DAY);return locale.formatDistance("xDays",days,localizeOptions)}if("month"===unit){var months=roundingMethodFn(dstNormalizedMinutes/MINUTES_IN_MONTH);return 12===months&&"month"!==defaultUnit?locale.formatDistance("xYears",1,localizeOptions):locale.formatDistance("xMonths",months,localizeOptions)}if("year"===unit){var years=roundingMethodFn(dstNormalizedMinutes/MINUTES_IN_YEAR);return locale.formatDistance("xYears",years,localizeOptions)}throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'")}(dirtyDate,Date.now(),options)}}}]);