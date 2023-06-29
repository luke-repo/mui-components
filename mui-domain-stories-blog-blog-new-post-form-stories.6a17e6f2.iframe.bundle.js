/*! For license information please see mui-domain-stories-blog-blog-new-post-form-stories.6a17e6f2.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkfront_lib_mui_turborepo=self.webpackChunkfront_lib_mui_turborepo||[]).push([[7696],{"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}__webpack_require__.d(__webpack_exports__,{Z:()=>_asyncToGenerator})},"./node_modules/@babel/runtime/helpers/regeneratorRuntime.js":(module,__unused_webpack_exports,__webpack_require__)=>{var _typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/typeof.js").default;function _regeneratorRuntime(){"use strict";module.exports=_regeneratorRuntime=function _regeneratorRuntime(){return exports},module.exports.__esModule=!0,module.exports.default=module.exports;var exports={},Op=Object.prototype,hasOwn=Op.hasOwnProperty,defineProperty=Object.defineProperty||function(obj,key,desc){obj[key]=desc.value},$Symbol="function"==typeof Symbol?Symbol:{},iteratorSymbol=$Symbol.iterator||"@@iterator",asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator",toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag";function define(obj,key,value){return Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}),obj[key]}try{define({},"")}catch(err){define=function define(obj,key,value){return obj[key]=value}}function wrap(innerFn,outerFn,self,tryLocsList){var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator,generator=Object.create(protoGenerator.prototype),context=new Context(tryLocsList||[]);return defineProperty(generator,"_invoke",{value:makeInvokeMethod(innerFn,self,context)}),generator}function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)}}catch(err){return{type:"throw",arg:err}}}exports.wrap=wrap;var ContinueSentinel={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var IteratorPrototype={};define(IteratorPrototype,iteratorSymbol,(function(){return this}));var getProto=Object.getPrototypeOf,NativeIteratorPrototype=getProto&&getProto(getProto(values([])));NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)&&(IteratorPrototype=NativeIteratorPrototype);var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);function defineIteratorMethods(prototype){["next","throw","return"].forEach((function(method){define(prototype,method,(function(arg){return this._invoke(method,arg)}))}))}function AsyncIterator(generator,PromiseImpl){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if("throw"!==record.type){var result=record.arg,value=result.value;return value&&"object"==_typeof(value)&&hasOwn.call(value,"__await")?PromiseImpl.resolve(value.__await).then((function(value){invoke("next",value,resolve,reject)}),(function(err){invoke("throw",err,resolve,reject)})):PromiseImpl.resolve(value).then((function(unwrapped){result.value=unwrapped,resolve(result)}),(function(error){return invoke("throw",error,resolve,reject)}))}reject(record.arg)}var previousPromise;defineProperty(this,"_invoke",{value:function value(method,arg){function callInvokeWithMethodAndArg(){return new PromiseImpl((function(resolve,reject){invoke(method,arg,resolve,reject)}))}return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(innerFn,self,context){var state="suspendedStart";return function(method,arg){if("executing"===state)throw new Error("Generator is already running");if("completed"===state){if("throw"===method)throw arg;return doneResult()}for(context.method=method,context.arg=arg;;){var delegate=context.delegate;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult}}if("next"===context.method)context.sent=context._sent=context.arg;else if("throw"===context.method){if("suspendedStart"===state)throw state="completed",context.arg;context.dispatchException(context.arg)}else"return"===context.method&&context.abrupt("return",context.arg);state="executing";var record=tryCatch(innerFn,self,context);if("normal"===record.type){if(state=context.done?"completed":"suspendedYield",record.arg===ContinueSentinel)continue;return{value:record.arg,done:context.done}}"throw"===record.type&&(state="completed",context.method="throw",context.arg=record.arg)}}}function maybeInvokeDelegate(delegate,context){var methodName=context.method,method=delegate.iterator[methodName];if(void 0===method)return context.delegate=null,"throw"===methodName&&delegate.iterator.return&&(context.method="return",context.arg=void 0,maybeInvokeDelegate(delegate,context),"throw"===context.method)||"return"!==methodName&&(context.method="throw",context.arg=new TypeError("The iterator does not provide a '"+methodName+"' method")),ContinueSentinel;var record=tryCatch(method,delegate.iterator,context.arg);if("throw"===record.type)return context.method="throw",context.arg=record.arg,context.delegate=null,ContinueSentinel;var info=record.arg;return info?info.done?(context[delegate.resultName]=info.value,context.next=delegate.nextLoc,"return"!==context.method&&(context.method="next",context.arg=void 0),context.delegate=null,ContinueSentinel):info:(context.method="throw",context.arg=new TypeError("iterator result is not an object"),context.delegate=null,ContinueSentinel)}function pushTryEntry(locs){var entry={tryLoc:locs[0]};1 in locs&&(entry.catchLoc=locs[1]),2 in locs&&(entry.finallyLoc=locs[2],entry.afterLoc=locs[3]),this.tryEntries.push(entry)}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal",delete record.arg,entry.completion=record}function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"}],tryLocsList.forEach(pushTryEntry,this),this.reset(!0)}function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod)return iteratorMethod.call(iterable);if("function"==typeof iterable.next)return iterable;if(!isNaN(iterable.length)){var i=-1,next=function next(){for(;++i<iterable.length;)if(hasOwn.call(iterable,i))return next.value=iterable[i],next.done=!1,next;return next.value=void 0,next.done=!0,next};return next.next=next}}return{next:doneResult}}function doneResult(){return{value:void 0,done:!0}}return GeneratorFunction.prototype=GeneratorFunctionPrototype,defineProperty(Gp,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),defineProperty(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,toStringTagSymbol,"GeneratorFunction"),exports.isGeneratorFunction=function(genFun){var ctor="function"==typeof genFun&&genFun.constructor;return!!ctor&&(ctor===GeneratorFunction||"GeneratorFunction"===(ctor.displayName||ctor.name))},exports.mark=function(genFun){return Object.setPrototypeOf?Object.setPrototypeOf(genFun,GeneratorFunctionPrototype):(genFun.__proto__=GeneratorFunctionPrototype,define(genFun,toStringTagSymbol,"GeneratorFunction")),genFun.prototype=Object.create(Gp),genFun},exports.awrap=function(arg){return{__await:arg}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,asyncIteratorSymbol,(function(){return this})),exports.AsyncIterator=AsyncIterator,exports.async=function(innerFn,outerFn,self,tryLocsList,PromiseImpl){void 0===PromiseImpl&&(PromiseImpl=Promise);var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList),PromiseImpl);return exports.isGeneratorFunction(outerFn)?iter:iter.next().then((function(result){return result.done?result.value:iter.next()}))},defineIteratorMethods(Gp),define(Gp,toStringTagSymbol,"Generator"),define(Gp,iteratorSymbol,(function(){return this})),define(Gp,"toString",(function(){return"[object Generator]"})),exports.keys=function(val){var object=Object(val),keys=[];for(var key in object)keys.push(key);return keys.reverse(),function next(){for(;keys.length;){var key=keys.pop();if(key in object)return next.value=key,next.done=!1,next}return next.done=!0,next}},exports.values=values,Context.prototype={constructor:Context,reset:function reset(skipTempReset){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(resetTryEntry),!skipTempReset)for(var name in this)"t"===name.charAt(0)&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))&&(this[name]=void 0)},stop:function stop(){this.done=!0;var rootRecord=this.tryEntries[0].completion;if("throw"===rootRecord.type)throw rootRecord.arg;return this.rval},dispatchException:function dispatchException(exception){if(this.done)throw exception;var context=this;function handle(loc,caught){return record.type="throw",record.arg=exception,context.next=loc,caught&&(context.method="next",context.arg=void 0),!!caught}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i],record=entry.completion;if("root"===entry.tryLoc)return handle("end");if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc"),hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0);if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}else if(hasCatch){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0)}else{if(!hasFinally)throw new Error("try statement without catch or finally");if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}}}},abrupt:function abrupt(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break}}finallyEntry&&("break"===type||"continue"===type)&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc&&(finallyEntry=null);var record=finallyEntry?finallyEntry.completion:{};return record.type=type,record.arg=arg,finallyEntry?(this.method="next",this.next=finallyEntry.finallyLoc,ContinueSentinel):this.complete(record)},complete:function complete(record,afterLoc){if("throw"===record.type)throw record.arg;return"break"===record.type||"continue"===record.type?this.next=record.arg:"return"===record.type?(this.rval=this.arg=record.arg,this.method="return",this.next="end"):"normal"===record.type&&afterLoc&&(this.next=afterLoc),ContinueSentinel},finish:function finish(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc)return this.complete(entry.completion,entry.afterLoc),resetTryEntry(entry),ContinueSentinel}},catch:function _catch(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if("throw"===record.type){var thrown=record.arg;resetTryEntry(entry)}return thrown}}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(iterable,resultName,nextLoc){return this.delegate={iterator:values(iterable),resultName,nextLoc},"next"===this.method&&(this.arg=void 0),ContinueSentinel}},exports}module.exports=_regeneratorRuntime,module.exports.__esModule=!0,module.exports.default=module.exports},"./node_modules/@babel/runtime/helpers/typeof.js":module=>{function _typeof(obj){return module.exports=_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},module.exports.__esModule=!0,module.exports.default=module.exports,_typeof(obj)}module.exports=_typeof,module.exports.__esModule=!0,module.exports.default=module.exports},"./node_modules/@babel/runtime/regenerator/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{var runtime=__webpack_require__("./node_modules/@babel/runtime/helpers/regeneratorRuntime.js")();module.exports=runtime;try{regeneratorRuntime=runtime}catch(accidentalStrictMode){"object"==typeof globalThis?globalThis.regeneratorRuntime=runtime:Function("r","regeneratorRuntime = r")(runtime)}},"./packages/mui-domain/stories/blog/blog-new-post-form.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Primary$parameters,_Primary$parameters2,_Primary$parameters2$,_Users_yoonsung0711_Repository_mui_components_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_lib_blog_post_BlogNewPostForm__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/mui-domain/lib/blog/post/BlogNewPostForm.tsx");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_Users_yoonsung0711_Repository_mui_components_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}__webpack_require__.e(354).then(__webpack_require__.bind(__webpack_require__,"./node_modules/react-quill/dist/quill.snow.css"));const __WEBPACK_DEFAULT_EXPORT__={title:"DOMAIN/blog/post/BlogNewPostForm",component:_lib_blog_post_BlogNewPostForm__WEBPACK_IMPORTED_MODULE_1__.G,tags:["autodocs"],argTypes:{},args:{}};var Primary={args:{}};Primary.parameters=_objectSpread(_objectSpread({},Primary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {}\n}"},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2$=_Primary$parameters2.docs)||void 0===_Primary$parameters2$?void 0:_Primary$parameters2$.source)})})},"./packages/mui-domain/lib/blog/post/BlogNewPostForm.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{G:()=>BlogNewPostForm});var _Users_yoonsung0711_Repository_mui_components_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Users_yoonsung0711_Repository_mui_components_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),_Users_yoonsung0711_Repository_mui_components_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_Users_yoonsung0711_Repository_mui_components_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__),yup__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/yup/index.esm.js"),next_router__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/next/router.js"),_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@hookform/resolvers/yup/dist/yup.mjs"),react_hook_form__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs"),_mui_lab__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./node_modules/@mui/lab/LoadingButton/LoadingButton.js"),_mui_material__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@mui/material/Grid/Grid.js"),_mui_material__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@mui/material/Card/Card.js"),_mui_material__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@mui/material/Stack/Stack.js"),_mui_material__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),_mui_material__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),notistack__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/notistack/notistack.esm.js"),mui_common__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/mui-common/dist/index.js"),console=__webpack_require__("./node_modules/console-browserify/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,TAGS_OPTION=["Toy Story 3","Logan","Full Metal Jacket","Dangal","The Sting","2001: A Space Odyssey","Singin' in the Rain","Toy Story","Bicycle Thieves","The Kid","Inglourious Basterds","Snatch","3 Idiots"];function BlogNewPostForm(){(0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)().push;var enqueueSnackbar=(0,notistack__WEBPACK_IMPORTED_MODULE_4__.Ds)().enqueueSnackbar,_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),setOpenPreview=(_useState[0],_useState[1]),NewBlogSchema=yup__WEBPACK_IMPORTED_MODULE_2__.Ry().shape({title:yup__WEBPACK_IMPORTED_MODULE_2__.Z_().required("Title is required"),description:yup__WEBPACK_IMPORTED_MODULE_2__.Z_().required("Description is required"),tags:yup__WEBPACK_IMPORTED_MODULE_2__.IX().min(2,"Must have at least 2 tags"),metaKeywords:yup__WEBPACK_IMPORTED_MODULE_2__.IX().min(1,"Meta keywords is required"),cover:yup__WEBPACK_IMPORTED_MODULE_2__.nK().required("Cover is required").nullable(!0),content:yup__WEBPACK_IMPORTED_MODULE_2__.Z_().required("Content is required")}),methods=(0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.cI)({resolver:(0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_7__.X)(NewBlogSchema),defaultValues:{title:"",description:"",content:"",cover:null,tags:["The Kid"],publish:!0,comments:!0,metaTitle:"",metaDescription:"",metaKeywords:[]}}),reset=methods.reset,watch=methods.watch,setValue=methods.setValue,handleSubmit=methods.handleSubmit,_methods$formState=methods.formState,isSubmitting=_methods$formState.isSubmitting,handleClosePreview=(_methods$formState.isValid,watch(),function handleClosePreview(){setOpenPreview(!1)}),onSubmit=function(){var _ref=(0,_Users_yoonsung0711_Repository_mui_components_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__.Z)(_Users_yoonsung0711_Repository_mui_components_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark((function _callee(data){return _Users_yoonsung0711_Repository_mui_components_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.prev=0,_context.next=3,new Promise((function(resolve){return setTimeout(resolve,500)}));case 3:reset(),handleClosePreview(),enqueueSnackbar("Post success!"),console.log("DATA",data),_context.next=12;break;case 9:_context.prev=9,_context.t0=_context.catch(0),console.error(_context.t0);case 12:case"end":return _context.stop()}}),_callee,null,[[0,9]])})));return function onSubmit(_x){return _ref.apply(this,arguments)}}(),handleDrop=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(acceptedFiles){var file=acceptedFiles[0],newFile=Object.assign(file,{preview:URL.createObjectURL(file)});file&&setValue("cover",newFile,{shouldValidate:!0})}),[setValue]);return __jsx(mui_common__WEBPACK_IMPORTED_MODULE_5__.RV,{methods,onSubmit:handleSubmit(onSubmit)},__jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.ZP,{container:!0,spacing:3},__jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.ZP,{item:!0,xs:12,md:8},__jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Z,{sx:{p:3}},__jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Z,{spacing:3},__jsx(mui_common__WEBPACK_IMPORTED_MODULE_5__.p7,{name:"title",label:"Post Title"}),__jsx(mui_common__WEBPACK_IMPORTED_MODULE_5__.p7,{name:"description",label:"Description",multiline:!0,rows:3}),__jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Z,{spacing:1},__jsx(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Z,{variant:"subtitle2",sx:{color:"text.secondary"}},"Content"),__jsx(mui_common__WEBPACK_IMPORTED_MODULE_5__.u3,{simple:!0,name:"content"})),__jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Z,{spacing:1},__jsx(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Z,{variant:"subtitle2",sx:{color:"text.secondary"}},"Cover"),__jsx(mui_common__WEBPACK_IMPORTED_MODULE_5__.gq,{name:"cover",maxSize:3145728,onDrop:handleDrop,onDelete:function handleRemoveFile(){setValue("cover",null)}}))))),__jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.ZP,{item:!0,xs:12,md:4},__jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Z,{sx:{p:3}},__jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Z,{spacing:3},__jsx("div",null,__jsx(mui_common__WEBPACK_IMPORTED_MODULE_5__.vI,{name:"publish",label:"Publish",labelPlacement:"start",sx:{mb:1,mx:0,width:1,justifyContent:"space-between"}}),__jsx(mui_common__WEBPACK_IMPORTED_MODULE_5__.vI,{name:"comments",label:"Enable comments",labelPlacement:"start",sx:{mx:0,width:1,justifyContent:"space-between"}})),__jsx(mui_common__WEBPACK_IMPORTED_MODULE_5__.ns,{name:"tags",label:"Tags",multiple:!0,freeSolo:!0,options:TAGS_OPTION.map((function(option){return option})),ChipProps:{size:"small"}}),__jsx(mui_common__WEBPACK_IMPORTED_MODULE_5__.p7,{name:"metaTitle",label:"Meta title"}),__jsx(mui_common__WEBPACK_IMPORTED_MODULE_5__.p7,{name:"metaDescription",label:"Meta description",fullWidth:!0,multiline:!0,rows:3}),__jsx(mui_common__WEBPACK_IMPORTED_MODULE_5__.ns,{name:"metaKeywords",label:"Meta keywords",multiple:!0,freeSolo:!0,options:TAGS_OPTION.map((function(option){return option})),ChipProps:{size:"small"}}))),__jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Z,{direction:"row",spacing:1.5,sx:{mt:3}},__jsx(_mui_material__WEBPACK_IMPORTED_MODULE_13__.Z,{fullWidth:!0,color:"inherit",variant:"outlined",size:"large",onClick:function handleOpenPreview(){setOpenPreview(!0)}},"Preview"),__jsx(_mui_lab__WEBPACK_IMPORTED_MODULE_14__.Z,{fullWidth:!0,type:"submit",variant:"contained",size:"large",loading:isSubmitting},"Post")))))}BlogNewPostForm.displayName="BlogNewPostForm",BlogNewPostForm.__docgenInfo={description:"",methods:[],displayName:"BlogNewPostForm"}}}]);