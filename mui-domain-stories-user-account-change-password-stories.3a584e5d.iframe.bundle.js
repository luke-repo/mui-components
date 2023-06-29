"use strict";(self.webpackChunkfront_lib_mui_turborepo=self.webpackChunkfront_lib_mui_turborepo||[]).push([[1450],{"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}__webpack_require__.d(__webpack_exports__,{Z:()=>_asyncToGenerator})},"./packages/mui-domain/stories/user/account-change-password.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Primary$parameters,_Primary$parameters2,_Primary$parameters2$,_Users_yoonsung0711_Repository_front_lib_mui_turborepo_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_Users_yoonsung0711_Repository_front_lib_mui_turborepo_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"DOMAIN/account/AccountChangePassword",component:__webpack_require__("./packages/mui-domain/lib/user/index.ts").rv,tags:["autodocs"],argTypes:{},args:{}};var Primary={args:{}};Primary.parameters=_objectSpread(_objectSpread({},Primary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {}\n}"},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2$=_Primary$parameters2.docs)||void 0===_Primary$parameters2$?void 0:_Primary$parameters2$.source)})})},"./packages/mui-domain/lib/user/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{rv:()=>AccountChangePassword,uX:()=>AccountGeneral,qn:()=>AccountNotifications,BU:()=>AccountSocialLinks});var asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),react=__webpack_require__("./node_modules/react/index.js"),regenerator=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),regenerator_default=__webpack_require__.n(regenerator),index_esm=__webpack_require__("./node_modules/yup/index.esm.js"),yup=__webpack_require__("./node_modules/@hookform/resolvers/yup/dist/yup.mjs"),dist_index_esm=__webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs"),Card=__webpack_require__("./node_modules/@mui/material/Card/Card.js"),Stack=__webpack_require__("./node_modules/@mui/material/Stack/Stack.js"),LoadingButton=__webpack_require__("./node_modules/@mui/lab/LoadingButton/LoadingButton.js"),dist=__webpack_require__("./packages/mui-common/dist/index.js"),notistack_esm=__webpack_require__("./node_modules/notistack/notistack.esm.js"),console=__webpack_require__("./node_modules/console-browserify/index.js"),__jsx=react.createElement;function AccountChangePassword(){var enqueueSnackbar=(0,notistack_esm.Ds)().enqueueSnackbar,ChangePassWordSchema=index_esm.Ry().shape({oldPassword:index_esm.Z_().required("Old Password is required"),newPassword:index_esm.Z_().min(6,"Password must be at least 6 characters").required("New Password is required"),confirmNewPassword:index_esm.Z_().oneOf([index_esm.iH("newPassword"),null],"Passwords must match")}),methods=(0,dist_index_esm.cI)({resolver:(0,yup.X)(ChangePassWordSchema),defaultValues:{oldPassword:"",newPassword:"",confirmNewPassword:""}}),reset=methods.reset,handleSubmit=methods.handleSubmit,isSubmitting=methods.formState.isSubmitting,onSubmit=function(){var _ref=(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee(data){return regenerator_default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.prev=0,_context.next=3,new Promise((function(resolve){return setTimeout(resolve,500)}));case 3:reset(),enqueueSnackbar("Update success!"),console.log("DATA",data),_context.next=11;break;case 8:_context.prev=8,_context.t0=_context.catch(0),console.error(_context.t0);case 11:case"end":return _context.stop()}}),_callee,null,[[0,8]])})));return function onSubmit(_x){return _ref.apply(this,arguments)}}();return __jsx(dist.RV,{methods,onSubmit:handleSubmit(onSubmit)},__jsx(Card.Z,null,__jsx(Stack.Z,{spacing:3,alignItems:"flex-end",sx:{p:3}},__jsx(dist.p7,{name:"oldPassword",type:"password",label:"Old Password"}),__jsx(dist.p7,{name:"newPassword",type:"password",label:"New Password",helperText:__jsx(Stack.Z,{component:"span",direction:"row",alignItems:"center"},__jsx(dist.Ir,{icon:"eva:info-fill",width:16,sx:{mr:.5}})," ","Password must be minimum 6+")}),__jsx(dist.p7,{name:"confirmNewPassword",type:"password",label:"Confirm New Password"}),__jsx(LoadingButton.Z,{type:"submit",variant:"contained",loading:isSubmitting},"Save Changes"))))}AccountChangePassword.displayName="AccountChangePassword",AccountChangePassword.__docgenInfo={description:"",methods:[],displayName:"AccountChangePassword"};var Grid=__webpack_require__("./node_modules/@mui/material/Grid/Grid.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),AccountGeneral_console=__webpack_require__("./node_modules/console-browserify/index.js"),AccountGeneral_jsx=react.createElement;function AccountGeneral(user,countries){var enqueueSnackbar=(0,notistack_esm.Ds)().enqueueSnackbar,UpdateUserSchema=index_esm.Ry().shape({displayName:index_esm.Z_().required("Name is required"),email:index_esm.Z_().required("Email is required").email("Email must be a valid email address"),photoURL:index_esm.Z_().required("Avatar is required").nullable(!0),phoneNumber:index_esm.Z_().required("Phone number is required"),country:index_esm.Z_().required("Country is required"),address:index_esm.Z_().required("Address is required"),state:index_esm.Z_().required("State is required"),city:index_esm.Z_().required("City is required"),zipCode:index_esm.Z_().required("Zip code is required"),about:index_esm.Z_().required("About is required")}),defaultValues={displayName:(null==user?void 0:user.displayName)||"",email:(null==user?void 0:user.email)||"",photoURL:(null==user?void 0:user.photoURL)||null,phoneNumber:(null==user?void 0:user.phoneNumber)||"",country:(null==user?void 0:user.country)||"",address:(null==user?void 0:user.address)||"",state:(null==user?void 0:user.state)||"",city:(null==user?void 0:user.city)||"",zipCode:(null==user?void 0:user.zipCode)||"",about:(null==user?void 0:user.about)||"",isPublic:(null==user?void 0:user.isPublic)||!1},methods=(0,dist_index_esm.cI)({resolver:(0,yup.X)(UpdateUserSchema),defaultValues}),setValue=methods.setValue,handleSubmit=methods.handleSubmit,isSubmitting=methods.formState.isSubmitting,onSubmit=function(){var _ref=(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee(data){return regenerator_default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.prev=0,_context.next=3,new Promise((function(resolve){return setTimeout(resolve,500)}));case 3:enqueueSnackbar("Update success!"),AccountGeneral_console.log("DATA",data),_context.next=10;break;case 7:_context.prev=7,_context.t0=_context.catch(0),AccountGeneral_console.error(_context.t0);case 10:case"end":return _context.stop()}}),_callee,null,[[0,7]])})));return function onSubmit(_x){return _ref.apply(this,arguments)}}(),handleDrop=(0,react.useCallback)((function(acceptedFiles){var file=acceptedFiles[0],newFile=Object.assign(file,{preview:URL.createObjectURL(file)});file&&setValue("photoURL",newFile,{shouldValidate:!0})}),[setValue]);return AccountGeneral_jsx(dist.RV,{methods,onSubmit:handleSubmit(onSubmit)},AccountGeneral_jsx(Grid.ZP,{container:!0,spacing:3},AccountGeneral_jsx(Grid.ZP,{item:!0,xs:12,md:4},AccountGeneral_jsx(Card.Z,{sx:{py:10,px:3,textAlign:"center"}},AccountGeneral_jsx(dist.Ih,{name:"photoURL",maxSize:3145728,onDrop:handleDrop,helperText:AccountGeneral_jsx(Typography.Z,{variant:"caption",sx:{mt:2,mx:"auto",display:"block",textAlign:"center",color:"text.secondary"}},"Allowed *.jpeg, *.jpg, *.png, *.gif",AccountGeneral_jsx("br",null)," max size of ",(0,dist.oe)(3145728))}),AccountGeneral_jsx(dist.vI,{name:"isPublic",labelPlacement:"start",label:"Public Profile",sx:{mt:5}}))),AccountGeneral_jsx(Grid.ZP,{item:!0,xs:12,md:8},AccountGeneral_jsx(Card.Z,{sx:{p:3}},AccountGeneral_jsx(Box.Z,{rowGap:3,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"}},AccountGeneral_jsx(dist.p7,{name:"displayName",label:"Name"}),AccountGeneral_jsx(dist.p7,{name:"email",label:"Email Address"}),AccountGeneral_jsx(dist.p7,{name:"phoneNumber",label:"Phone Number"}),AccountGeneral_jsx(dist.p7,{name:"address",label:"Address"}),AccountGeneral_jsx(dist.Fh,{native:!0,name:"country",label:"Country",placeholder:"Country"},AccountGeneral_jsx("option",{value:""}),countries.map((function(country){return AccountGeneral_jsx("option",{key:country.code,value:country.label},country.label)}))),AccountGeneral_jsx(dist.p7,{name:"state",label:"State/Region"}),AccountGeneral_jsx(dist.p7,{name:"city",label:"City"}),AccountGeneral_jsx(dist.p7,{name:"zipCode",label:"Zip/Code"})),AccountGeneral_jsx(Stack.Z,{spacing:3,alignItems:"flex-end",sx:{mt:3}},AccountGeneral_jsx(dist.p7,{name:"about",multiline:!0,rows:4,label:"About"}),AccountGeneral_jsx(LoadingButton.Z,{type:"submit",variant:"contained",loading:isSubmitting},"Save Changes"))))))}AccountGeneral.displayName="AccountGeneral",AccountGeneral.__docgenInfo={description:"",methods:[],displayName:"AccountGeneral"};var AccountNotifications_console=__webpack_require__("./node_modules/console-browserify/index.js"),AccountNotifications_jsx=react.createElement,ACTIVITY_OPTIONS=[{value:"activityComments",label:"Email me when someone comments onmy article"},{value:"activityAnswers",label:"Email me when someone answers on my form"},{value:"activityFollows",label:"Email me hen someone follows me"}],APPLICATION_OPTIONS=[{value:"applicationNews",label:"News and announcements"},{value:"applicationProduct",label:"Weekly product updates"},{value:"applicationBlog",label:"Weekly blog digest"}],NOTIFICATION_SETTINGS={activityComments:!0,activityAnswers:!0,activityFollows:!1,applicationNews:!0,applicationProduct:!1,applicationBlog:!1};function AccountNotifications(){var enqueueSnackbar=(0,notistack_esm.Ds)().enqueueSnackbar,defaultValues={activityComments:NOTIFICATION_SETTINGS.activityComments,activityAnswers:NOTIFICATION_SETTINGS.activityAnswers,activityFollows:NOTIFICATION_SETTINGS.activityFollows,applicationNews:NOTIFICATION_SETTINGS.applicationNews,applicationProduct:NOTIFICATION_SETTINGS.applicationProduct,applicationBlog:NOTIFICATION_SETTINGS.applicationBlog},methods=(0,dist_index_esm.cI)({defaultValues}),handleSubmit=methods.handleSubmit,isSubmitting=methods.formState.isSubmitting,onSubmit=function(){var _ref=(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee(data){return regenerator_default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.prev=0,_context.next=3,new Promise((function(resolve){return setTimeout(resolve,500)}));case 3:enqueueSnackbar("Update success!"),AccountNotifications_console.log("DATA",data),_context.next=10;break;case 7:_context.prev=7,_context.t0=_context.catch(0),AccountNotifications_console.error(_context.t0);case 10:case"end":return _context.stop()}}),_callee,null,[[0,7]])})));return function onSubmit(_x){return _ref.apply(this,arguments)}}();return AccountNotifications_jsx(dist.RV,{methods,onSubmit:handleSubmit(onSubmit)},AccountNotifications_jsx(Card.Z,{sx:{p:3}},AccountNotifications_jsx(Typography.Z,{variant:"overline",component:"div",sx:{color:"text.secondary"}},"Activity"),AccountNotifications_jsx(Stack.Z,{alignItems:"flex-start",spacing:1,sx:{mt:2}},ACTIVITY_OPTIONS.map((function(activity){return AccountNotifications_jsx(dist.vI,{key:activity.value,name:activity.value,label:activity.label,sx:{m:0}})}))),AccountNotifications_jsx(Typography.Z,{variant:"overline",component:"div",sx:{color:"text.secondary",mt:5}},"Application"),AccountNotifications_jsx(Stack.Z,{alignItems:"flex-start",spacing:1,sx:{mt:2,mb:5}},APPLICATION_OPTIONS.map((function(application){return AccountNotifications_jsx(dist.vI,{key:application.value,name:application.value,label:application.label,sx:{m:0}})}))),AccountNotifications_jsx(Stack.Z,null,AccountNotifications_jsx(LoadingButton.Z,{type:"submit",variant:"contained",loading:isSubmitting,sx:{ml:"auto"}},"Save Changes"))))}AccountNotifications.displayName="AccountNotifications",AccountNotifications.__docgenInfo={description:"",methods:[],displayName:"AccountNotifications"};var InputAdornment=__webpack_require__("./node_modules/@mui/material/InputAdornment/InputAdornment.js"),AccountSocialLinks_console=__webpack_require__("./node_modules/console-browserify/index.js"),AccountSocialLinks_jsx=react.createElement,SOCIAL_LINKS=[{value:"facebookLink",icon:AccountSocialLinks_jsx(dist.Ir,{icon:"eva:facebook-fill",width:24})},{value:"instagramLink",icon:AccountSocialLinks_jsx(dist.Ir,{icon:"ant-design:instagram-filled",width:24})},{value:"linkedinLink",icon:AccountSocialLinks_jsx(dist.Ir,{icon:"eva:linkedin-fill",width:24})},{value:"twitterLink",icon:AccountSocialLinks_jsx(dist.Ir,{icon:"eva:twitter-fill",width:24})}];function AccountSocialLinks(_ref){var socialLinks=_ref.socialLinks,enqueueSnackbar=(0,notistack_esm.Ds)().enqueueSnackbar,defaultValues={facebookLink:socialLinks.facebookLink,instagramLink:socialLinks.instagramLink,linkedinLink:socialLinks.linkedinLink,twitterLink:socialLinks.twitterLink},methods=(0,dist_index_esm.cI)({defaultValues}),handleSubmit=methods.handleSubmit,isSubmitting=methods.formState.isSubmitting,onSubmit=function(){var _ref2=(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee(data){return regenerator_default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.prev=0,_context.next=3,new Promise((function(resolve){return setTimeout(resolve,500)}));case 3:enqueueSnackbar("Update success!"),AccountSocialLinks_console.log("DATA",data),_context.next=10;break;case 7:_context.prev=7,_context.t0=_context.catch(0),AccountSocialLinks_console.error(_context.t0);case 10:case"end":return _context.stop()}}),_callee,null,[[0,7]])})));return function onSubmit(_x){return _ref2.apply(this,arguments)}}();return AccountSocialLinks_jsx(dist.RV,{methods,onSubmit:handleSubmit(onSubmit)},AccountSocialLinks_jsx(Card.Z,{sx:{p:3}},AccountSocialLinks_jsx(Stack.Z,{spacing:3,alignItems:"flex-end"},SOCIAL_LINKS.map((function(link){return AccountSocialLinks_jsx(dist.p7,{key:link.value,name:link.value,InputProps:{startAdornment:AccountSocialLinks_jsx(InputAdornment.Z,{position:"start"},link.icon)}})})),AccountSocialLinks_jsx(LoadingButton.Z,{type:"submit",variant:"contained",loading:isSubmitting},"Save Changes"))))}AccountSocialLinks.displayName="AccountSocialLinks",AccountSocialLinks.__docgenInfo={description:"",methods:[],displayName:"AccountSocialLinks",props:{socialLinks:{required:!0,tsType:{name:"IUserSocialLink"},description:""}}};try{AccountSocialLinks.displayName="AccountSocialLinks",AccountSocialLinks.__docgenInfo={description:"",displayName:"AccountSocialLinks",props:{socialLinks:{defaultValue:null,description:"",name:"socialLinks",required:!0,type:{name:"IUserSocialLink"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/mui-domain/lib/user/account/AccountSocialLinks.tsx#AccountSocialLinks"]={docgenInfo:AccountSocialLinks.__docgenInfo,name:"AccountSocialLinks",path:"packages/mui-domain/lib/user/account/AccountSocialLinks.tsx#AccountSocialLinks"})}catch(__react_docgen_typescript_loader_error){}}}]);