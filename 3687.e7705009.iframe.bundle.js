"use strict";(self.webpackChunkfront_lib_mui_turborepo=self.webpackChunkfront_lib_mui_turborepo||[]).push([[3687],{"./node_modules/notistack/notistack.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ds:()=>useSnackbar});var react=__webpack_require__("./node_modules/react/index.js"),clsx_m=(__webpack_require__("./node_modules/react-dom/index.js"),__webpack_require__("./node_modules/clsx/dist/clsx.m.js"));let e={data:""},t=t=>"object"==typeof window?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||e,l=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,a=/\/\*[^]*?\*\/|  +/g,n=/\n+/g,o=(e,t)=>{let r="",l="",a="";for(let n in e){let c=e[n];"@"==n[0]?"i"==n[1]?r=n+" "+c+";":l+="f"==n[1]?o(c,n):n+"{"+o(c,"k"==n[1]?"":t)+"}":"object"==typeof c?l+=o(c,t?t.replace(/([^,])+/g,(e=>n.replace(/(^:.*)|([^,])+/g,(t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)))):n):null!=c&&(n=/^--/.test(n)?n:n.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=o.p?o.p(n,c):n+":"+c+";")}return r+(t&&a?t+"{"+a+"}":a)+l},c={},s=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+s(e[r]);return t}return e},i=(e,t,r,i,p)=>{let u=s(e),d=c[u]||(c[u]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(u));if(!c[d]){let t=u!==e?e:(e=>{let t,r,o=[{}];for(;t=l.exec(e.replace(a,""));)t[4]?o.shift():t[3]?(r=t[3].replace(n," ").trim(),o.unshift(o[0][r]=o[0][r]||{})):o[0][t[1]]=t[2].replace(n," ").trim();return o[0]})(e);c[d]=o(p?{["@keyframes "+d]:t}:t,r?"":"."+d)}let f=r&&c.g?c.g:null;return r&&(c.g=c[d]),((e,t,r,l)=>{l?t.data=t.data.replace(l,e):-1===t.data.indexOf(e)&&(t.data=r?e+t.data:t.data+e)})(c[d],t,i,f),d},p=(e,t,r)=>e.reduce(((e,l,a)=>{let n=t[a];if(n&&n.call){let e=n(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;n=t?"."+t:e&&"object"==typeof e?e.props?"":o(e,""):!1===e?"":e}return e+l+(null==n?"":n)}),"");function u(e){let r=this||{},l=e.call?e(r.p):e;return i(l.unshift?l.raw?p(l,[].slice.call(arguments,1),r.p):l.reduce(((e,t)=>Object.assign(e,t&&t.call?t(r.p):t)),{}):l,t(r.target),r.g,r.o,r.k)}u.bind({g:1}),u.bind({k:1});__webpack_require__("./node_modules/console-browserify/index.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype),subClass.prototype.constructor=subClass,subClass.__proto__=superClass}function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var noOp=function noOp(){return""},SnackbarContext=react.createContext({enqueueSnackbar:noOp,closeSnackbar:noOp}),breakpoints_downXs="@media (max-width:599.95px)",breakpoints_upSm="@media (min-width:600px)",Transition=function(_React$Component){function Transition(props){var _this;_this=_React$Component.call(this,props)||this;var initialStatus,appear=props.appear;return _this.appearStatus=null,props.in?appear?(initialStatus="exited",_this.appearStatus="entering"):initialStatus="entered":initialStatus=props.unmountOnExit||props.mountOnEnter?"unmounted":"exited",_this.state={status:initialStatus},_this.nextCallback=null,_this}_inheritsLoose(Transition,_React$Component),Transition.getDerivedStateFromProps=function getDerivedStateFromProps(_ref,prevState){return _ref.in&&"unmounted"===prevState.status?{status:"exited"}:null};var _proto=Transition.prototype;return _proto.componentDidMount=function componentDidMount(){this.updateStatus(!0,this.appearStatus)},_proto.componentDidUpdate=function componentDidUpdate(prevProps){var nextStatus=null;if(prevProps!==this.props){var status=this.state.status;this.props.in?"entering"!==status&&"entered"!==status&&(nextStatus="entering"):"entering"!==status&&"entered"!==status||(nextStatus="exiting")}this.updateStatus(!1,nextStatus)},_proto.componentWillUnmount=function componentWillUnmount(){this.cancelNextCallback()},_proto.getTimeouts=function getTimeouts(){var timeout=this.props.timeout,enter=timeout,exit=timeout;return null!=timeout&&"number"!=typeof timeout&&"string"!=typeof timeout&&(exit=timeout.exit,enter=timeout.enter),{exit,enter}},_proto.updateStatus=function updateStatus(mounting,nextStatus){void 0===mounting&&(mounting=!1),null!==nextStatus?(this.cancelNextCallback(),"entering"===nextStatus?this.performEnter(mounting):this.performExit()):this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},_proto.performEnter=function performEnter(mounting){var _this2=this,enter=this.props.enter,isAppearing=mounting,timeouts=this.getTimeouts();mounting||enter?(this.props.onEnter&&this.props.onEnter(this.node,isAppearing),this.safeSetState({status:"entering"},(function(){_this2.props.onEntering&&_this2.props.onEntering(_this2.node,isAppearing),_this2.onTransitionEnd(timeouts.enter,(function(){_this2.safeSetState({status:"entered"},(function(){_this2.props.onEntered&&_this2.props.onEntered(_this2.node,isAppearing)}))}))}))):this.safeSetState({status:"entered"},(function(){_this2.props.onEntered&&_this2.props.onEntered(_this2.node,isAppearing)}))},_proto.performExit=function performExit(){var _this3=this,exit=this.props.exit,timeouts=this.getTimeouts();exit?(this.props.onExit&&this.props.onExit(this.node),this.safeSetState({status:"exiting"},(function(){_this3.props.onExiting&&_this3.props.onExiting(_this3.node),_this3.onTransitionEnd(timeouts.exit,(function(){_this3.safeSetState({status:"exited"},(function(){_this3.props.onExited&&_this3.props.onExited(_this3.node)}))}))}))):this.safeSetState({status:"exited"},(function(){_this3.props.onExited&&_this3.props.onExited(_this3.node)}))},_proto.cancelNextCallback=function cancelNextCallback(){null!==this.nextCallback&&this.nextCallback.cancel&&(this.nextCallback.cancel(),this.nextCallback=null)},_proto.safeSetState=function safeSetState(nextState,callback){callback=this.setNextCallback(callback),this.setState(nextState,callback)},_proto.setNextCallback=function setNextCallback(callback){var _this4=this,active=!0;return this.nextCallback=function(){active&&(active=!1,_this4.nextCallback=null,callback())},this.nextCallback.cancel=function(){active=!1},this.nextCallback},_proto.onTransitionEnd=function onTransitionEnd(timeout,handler){this.setNextCallback(handler);var doesNotHaveTimeoutOrListener=null==timeout&&!this.props.addEndListener;this.node&&!doesNotHaveTimeoutOrListener?(this.props.addEndListener&&this.props.addEndListener(this.node,this.nextCallback),null!=timeout&&setTimeout(this.nextCallback,timeout)):setTimeout(this.nextCallback,0)},_proto.render=function render(){var status=this.state.status;if("unmounted"===status)return null;var _this$props=this.props;return(0,_this$props.children)(status,_objectWithoutPropertiesLoose(_this$props,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]))},_createClass(Transition,[{key:"node",get:function get(){var _this$props$nodeRef,node=null===(_this$props$nodeRef=this.props.nodeRef)||void 0===_this$props$nodeRef?void 0:_this$props$nodeRef.current;if(!node)throw new Error("notistack - Custom snackbar is not refForwarding");return node}}]),Transition}(react.Component);function noop(){}function setRef(ref,value){"function"==typeof ref?ref(value):ref&&(ref.current=value)}function useForkRef(refA,refB){return(0,react.useMemo)((function(){return null==refA&&null==refB?null:function(refValue){setRef(refA,refValue),setRef(refB,refValue)}}),[refA,refB])}function getTransitionProps(props){var timeout=props.timeout,_props$style=props.style,style=void 0===_props$style?{}:_props$style,mode=props.mode;return{duration:"object"==typeof timeout?timeout[mode]||0:timeout,easing:style.transitionTimingFunction,delay:style.transitionDelay}}Transition.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:noop,onEntering:noop,onEntered:noop,onExit:noop,onExiting:noop,onExited:noop};var defaultEasing_easeInOut="cubic-bezier(0.4, 0, 0.2, 1)",defaultEasing_easeOut="cubic-bezier(0.0, 0, 0.2, 1)",defaultEasing_sharp="cubic-bezier(0.4, 0, 0.6, 1)",reflow=function reflow(node){node.scrollTop=node.scrollTop},formatMs=function formatMs(milliseconds){return Math.round(milliseconds)+"ms"};function createTransition(props,options){void 0===props&&(props=["all"]);var _ref=options||{},_ref$duration=_ref.duration,duration=void 0===_ref$duration?300:_ref$duration,_ref$easing=_ref.easing,easing=void 0===_ref$easing?defaultEasing_easeInOut:_ref$easing,_ref$delay=_ref.delay,delay=void 0===_ref$delay?0:_ref$delay;return(Array.isArray(props)?props:[props]).map((function(animatedProp){var formattedDuration="string"==typeof duration?duration:formatMs(duration),formattedDelay="string"==typeof delay?delay:formatMs(delay);return animatedProp+" "+formattedDuration+" "+easing+" "+formattedDelay})).join(",")}function ownerWindow(node){var doc=function ownerDocument(node){return node&&node.ownerDocument||document}(node);return doc.defaultView||window}function setTranslateValue(direction,node){if(node){var transform=function getTranslateValue(direction,node){var transform,rect=node.getBoundingClientRect(),containerWindow=ownerWindow(node);if(node.fakeTransform)transform=node.fakeTransform;else{var computedStyle=containerWindow.getComputedStyle(node);transform=computedStyle.getPropertyValue("-webkit-transform")||computedStyle.getPropertyValue("transform")}var offsetX=0,offsetY=0;if(transform&&"none"!==transform&&"string"==typeof transform){var transformValues=transform.split("(")[1].split(")")[0].split(",");offsetX=parseInt(transformValues[4],10),offsetY=parseInt(transformValues[5],10)}switch(direction){case"left":return"translateX("+(containerWindow.innerWidth+offsetX-rect.left)+"px)";case"right":return"translateX(-"+(rect.left+rect.width-offsetX)+"px)";case"up":return"translateY("+(containerWindow.innerHeight+offsetY-rect.top)+"px)";default:return"translateY(-"+(rect.top+rect.height-offsetY)+"px)"}}(direction,node);transform&&(node.style.webkitTransform=transform,node.style.transform=transform)}}var Slide=(0,react.forwardRef)((function(props,ref){var children=props.children,_props$direction=props.direction,direction=void 0===_props$direction?"down":_props$direction,inProp=props.in,style=props.style,_props$timeout=props.timeout,timeout=void 0===_props$timeout?0:_props$timeout,onEnter=props.onEnter,onEntered=props.onEntered,onExit=props.onExit,onExited=props.onExited,other=_objectWithoutPropertiesLoose(props,["children","direction","in","style","timeout","onEnter","onEntered","onExit","onExited"]),nodeRef=(0,react.useRef)(null),handleRefIntermediary=useForkRef(children.ref,nodeRef),handleRef=useForkRef(handleRefIntermediary,ref),updatePosition=(0,react.useCallback)((function(){nodeRef.current&&setTranslateValue(direction,nodeRef.current)}),[direction]);return(0,react.useEffect)((function(){if(!inProp&&"down"!==direction&&"right"!==direction){var handleResize=function debounce(func,wait){var timeout;function debounced(){for(var _this=this,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];clearTimeout(timeout),timeout=setTimeout((function later(){func.apply(_this,args)}),wait)}return void 0===wait&&(wait=166),debounced.clear=function(){clearTimeout(timeout)},debounced}((function(){nodeRef.current&&setTranslateValue(direction,nodeRef.current)})),containerWindow=ownerWindow(nodeRef.current);return containerWindow.addEventListener("resize",handleResize),function(){handleResize.clear(),containerWindow.removeEventListener("resize",handleResize)}}}),[direction,inProp]),(0,react.useEffect)((function(){inProp||updatePosition()}),[inProp,updatePosition]),(0,react.createElement)(Transition,Object.assign({appear:!0,nodeRef,onEnter:function handleEnter(node,isAppearing){setTranslateValue(direction,node),reflow(node),onEnter&&onEnter(node,isAppearing)},onEntered,onEntering:function handleEntering(node){var easing=(null==style?void 0:style.transitionTimingFunction)||defaultEasing_easeOut,transitionProps=getTransitionProps({timeout,mode:"enter",style:_extends({},style,{transitionTimingFunction:easing})});node.style.webkitTransition=createTransition("-webkit-transform",transitionProps),node.style.transition=createTransition("transform",transitionProps),node.style.webkitTransform="none",node.style.transform="none"},onExit:function handleExit(node){var easing=(null==style?void 0:style.transitionTimingFunction)||defaultEasing_sharp,transitionProps=getTransitionProps({timeout,mode:"exit",style:_extends({},style,{transitionTimingFunction:easing})});node.style.webkitTransition=createTransition("-webkit-transform",transitionProps),node.style.transition=createTransition("transform",transitionProps),setTranslateValue(direction,node),onExit&&onExit(node)},onExited:function handleExited(node){node.style.webkitTransition="",node.style.transition="",onExited&&onExited(node)},in:inProp,timeout},other),(function(state,childProps){return(0,react.cloneElement)(children,_extends({ref:handleRef,style:_extends({visibility:"exited"!==state||inProp?void 0:"hidden"},style,{},children.props.style)},childProps))}))}));Slide.displayName="Slide";function makeStyles(styles){return Object.entries(styles).reduce((function(acc,_ref){var _extends2,key=_ref[0],value=_ref[1];return _extends({},acc,((_extends2={})[key]=u(value),_extends2))}),{})}var ComponentClasses_Snackbar="notistack-Snackbar",ComponentClasses_CollapseWrapper="notistack-CollapseWrapper",ComponentClasses_MuiContent="notistack-MuiContent",ComponentClasses_MuiContentVariant=function MuiContentVariant(variant){return"notistack-MuiContent-"+variant},classes=makeStyles({root:{height:0},entered:{height:"auto"}}),Collapse=(0,react.forwardRef)((function(props,ref){var children=props.children,inProp=props.in,onExited=props.onExited,wrapperRef=(0,react.useRef)(null),nodeRef=(0,react.useRef)(null),handleRef=useForkRef(ref,nodeRef),getWrapperSize=function getWrapperSize(){return wrapperRef.current?wrapperRef.current.clientHeight:0};return(0,react.createElement)(Transition,{in:inProp,unmountOnExit:!0,onEnter:function handleEnter(node){node.style.height="0px"},onEntered:function handleEntered(node){node.style.height="auto"},onEntering:function handleEntering(node){var wrapperSize=getWrapperSize(),_getTransitionProps=getTransitionProps({timeout:175,mode:"enter"}),transitionDuration=_getTransitionProps.duration,easing=_getTransitionProps.easing;node.style.transitionDuration="string"==typeof transitionDuration?transitionDuration:transitionDuration+"ms",node.style.height=wrapperSize+"px",node.style.transitionTimingFunction=easing||""},onExit:function handleExit(node){node.style.height=getWrapperSize()+"px"},onExited,onExiting:function handleExiting(node){reflow(node);var _getTransitionProps2=getTransitionProps({timeout:175,mode:"exit"}),transitionDuration=_getTransitionProps2.duration,easing=_getTransitionProps2.easing;node.style.transitionDuration="string"==typeof transitionDuration?transitionDuration:transitionDuration+"ms",node.style.height="0px",node.style.transitionTimingFunction=easing||""},nodeRef,timeout:175},(function(state,childProps){return(0,react.createElement)("div",Object.assign({ref:handleRef,className:(0,clsx_m.Z)(classes.root,"entered"===state&&classes.entered),style:_extends({pointerEvents:"all",overflow:"hidden",minHeight:"0px",transition:createTransition("height")},"entered"===state&&{overflow:"visible"},{},"exited"===state&&!inProp&&{visibility:"hidden"})},childProps),(0,react.createElement)("div",{ref:wrapperRef,className:ComponentClasses_CollapseWrapper,style:{display:"flex",width:"100%"}},children))}))}));Collapse.displayName="Collapse";var useEnhancedEffect="undefined"!=typeof window?react.useLayoutEffect:react.useEffect;function useEventCallback(fn){var ref=(0,react.useRef)(fn);return useEnhancedEffect((function(){ref.current=fn})),(0,react.useCallback)((function(){return ref.current.apply(void 0,arguments)}),[])}var _root,Snackbar=(0,react.forwardRef)((function(props,ref){var children=props.children,className=props.className,autoHideDuration=props.autoHideDuration,_props$disableWindowB=props.disableWindowBlurListener,disableWindowBlurListener=void 0!==_props$disableWindowB&&_props$disableWindowB,onClose=props.onClose,id=props.id,open=props.open,_props$SnackbarProps=props.SnackbarProps,SnackbarProps=void 0===_props$SnackbarProps?{}:_props$SnackbarProps,timerAutoHide=(0,react.useRef)(),handleClose=useEventCallback((function(){onClose&&onClose.apply(void 0,arguments)})),setAutoHideTimer=useEventCallback((function(autoHideDurationParam){onClose&&null!=autoHideDurationParam&&(timerAutoHide.current&&clearTimeout(timerAutoHide.current),timerAutoHide.current=setTimeout((function(){handleClose(null,"timeout",id)}),autoHideDurationParam))}));(0,react.useEffect)((function(){return open&&setAutoHideTimer(autoHideDuration),function(){timerAutoHide.current&&clearTimeout(timerAutoHide.current)}}),[open,autoHideDuration,setAutoHideTimer]);var handlePause=function handlePause(){timerAutoHide.current&&clearTimeout(timerAutoHide.current)},handleResume=(0,react.useCallback)((function(){null!=autoHideDuration&&setAutoHideTimer(.5*autoHideDuration)}),[autoHideDuration,setAutoHideTimer]);return(0,react.useEffect)((function(){if(!disableWindowBlurListener&&open)return window.addEventListener("focus",handleResume),window.addEventListener("blur",handlePause),function(){window.removeEventListener("focus",handleResume),window.removeEventListener("blur",handlePause)}}),[disableWindowBlurListener,handleResume,open]),(0,react.createElement)("div",Object.assign({ref},SnackbarProps,{className:(0,clsx_m.Z)(ComponentClasses_Snackbar,className),onMouseEnter:function handleMouseEnter(event){SnackbarProps.onMouseEnter&&SnackbarProps.onMouseEnter(event),handlePause()},onMouseLeave:function handleMouseLeave(event){SnackbarProps.onMouseLeave&&SnackbarProps.onMouseLeave(event),handleResume()}}),children)}));Snackbar.displayName="Snackbar";var classes$1=makeStyles({root:(_root={display:"flex",flexWrap:"wrap",flexGrow:1},_root[breakpoints_upSm]={flexGrow:"initial",minWidth:"288px"},_root)}),SnackbarContent=(0,react.forwardRef)((function(_ref,ref){var className=_ref.className,props=_objectWithoutPropertiesLoose(_ref,["className"]);return react.createElement("div",Object.assign({ref,className:(0,clsx_m.Z)(classes$1.root,className)},props))}));SnackbarContent.displayName="SnackbarContent";var classes$2=makeStyles({root:{backgroundColor:"#313131",fontSize:"0.875rem",lineHeight:1.43,letterSpacing:"0.01071em",color:"#fff",alignItems:"center",padding:"6px 16px",borderRadius:"4px",boxShadow:"0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)"},lessPadding:{paddingLeft:"20px"},default:{backgroundColor:"#313131"},success:{backgroundColor:"#43a047"},error:{backgroundColor:"#d32f2f"},warning:{backgroundColor:"#ff9800"},info:{backgroundColor:"#2196f3"},message:{display:"flex",alignItems:"center",padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:"16px",marginRight:"-8px"}}),MaterialDesignContent=(0,react.forwardRef)((function(props,forwardedRef){var id=props.id,message=props.message,componentOrFunctionAction=props.action,iconVariant=props.iconVariant,variant=props.variant,hideIconVariant=props.hideIconVariant,style=props.style,className=props.className,icon=iconVariant[variant],action=componentOrFunctionAction;return"function"==typeof action&&(action=action(id)),react.createElement(SnackbarContent,{ref:forwardedRef,role:"alert","aria-describedby":"notistack-snackbar",style,className:(0,clsx_m.Z)(ComponentClasses_MuiContent,ComponentClasses_MuiContentVariant(variant),classes$2.root,classes$2[variant],className,!hideIconVariant&&icon&&classes$2.lessPadding)},react.createElement("div",{id:"notistack-snackbar",className:classes$2.message},hideIconVariant?null:icon,message),action&&react.createElement("div",{className:classes$2.action},action))}));MaterialDesignContent.displayName="MaterialDesignContent";var _root$1,_rootDense,_left,_right,_center,indents_view={default:20,dense:4},indents_snackbar={default:6,dense:2},collapseWrapper="."+ComponentClasses_CollapseWrapper,useSnackbar=(_root$1={boxSizing:"border-box",display:"flex",maxHeight:"100%",position:"fixed",zIndex:1400,height:"auto",width:"auto",transition:createTransition(["top","right","bottom","left","max-width"],{duration:300,easing:"ease"}),pointerEvents:"none"},_root$1[collapseWrapper]={padding:indents_snackbar.default+"px 0px",transition:"padding 300ms ease 0ms"},_root$1.maxWidth="calc(100% - "+2*indents_view.default+"px)",_root$1[breakpoints_downXs]={width:"100%",maxWidth:"calc(100% - 32px)"},_rootDense={},_rootDense[collapseWrapper]={padding:indents_snackbar.dense+"px 0px"},indents_view.default,indents_snackbar.default,indents_view.default,indents_snackbar.default,_left={left:indents_view.default+"px"},_left[breakpoints_upSm]={alignItems:"flex-start"},_left[breakpoints_downXs]={left:"16px"},_right={right:indents_view.default+"px"},_right[breakpoints_upSm]={alignItems:"flex-end"},_right[breakpoints_downXs]={right:"16px"},_center={left:"50%",transform:"translateX(-50%)"},_center[breakpoints_upSm]={alignItems:"center"},function(){return(0,react.useContext)(SnackbarContext)})}}]);