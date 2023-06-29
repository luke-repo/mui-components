"use strict";(self.webpackChunkfront_lib_mui_turborepo=self.webpackChunkfront_lib_mui_turborepo||[]).push([[6273],{"./packages/mui-domain/stories/about/about-team.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Primary$parameters,_Primary$parameters2,_Primary$parameters2$,_Users_yoonsung0711_Repository_mui_components_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_Users_yoonsung0711_Repository_mui_components_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");__webpack_require__("./node_modules/slick-carousel/slick/slick.css"),__webpack_require__("./node_modules/slick-carousel/slick/slick-theme.css");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_Users_yoonsung0711_Repository_mui_components_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"DOMAIN/about/AboutTeam",component:__webpack_require__("./packages/mui-domain/lib/about/index.ts").AB,tags:["autodocs"],argTypes:{},args:{carouselsMembers:(0,_Users_yoonsung0711_Repository_mui_components_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4__.Z)(Array(6)).map((function(_,index){return{id:String(index),name:"name_".concat(index),role:"role_".concat(index),avatar:"/assets/images/portraits/portrait_".concat(index+1,".jpg")}}))}};var Primary={args:{}};Primary.parameters=_objectSpread(_objectSpread({},Primary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {}\n}"},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2$=_Primary$parameters2.docs)||void 0===_Primary$parameters2$?void 0:_Primary$parameters2$.source)})})},"./packages/mui-domain/lib/about/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{dK:()=>AboutHero,AB:()=>AboutTeam,mc:()=>AboutTestimonials,Oi:()=>AboutVision,sZ:()=>AboutWhat});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),Container=__webpack_require__("./node_modules/@mui/material/Container/Container.js"),Stack=__webpack_require__("./node_modules/@mui/material/Stack/Stack.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),dist=__webpack_require__("./node_modules/mui-common/dist/index.js"),__jsx=react.createElement,StyledRoot=(0,styled.ZP)("div")((function(_ref){var theme=_ref.theme;return(0,defineProperty.Z)({position:"relative",backgroundSize:"cover",backgroundPosition:"center",backgroundImage:"url(/assets/background/overlay_1.svg), url(/assets/images/about/hero.jpg)",padding:theme.spacing(10,0)},theme.breakpoints.up("md"),{height:560,padding:0})})),StyledContent=(0,styled.ZP)("div")((function(_ref3){var theme=_ref3.theme;return(0,defineProperty.Z)({textAlign:"center"},theme.breakpoints.up("md"),{bottom:80,textAlign:"left",position:"absolute"})}));function AboutHero(){return __jsx(StyledRoot,null,__jsx(Container.Z,null,__jsx(StyledContent,null,__jsx(dist.gH,{text:"Who",sx:{color:"primary.main"}}),__jsx("br",null),__jsx(Stack.Z,{spacing:2,display:"inline-flex",direction:"row",sx:{color:"common.white"}},__jsx(dist.gH,{text:"we"}),__jsx(dist.gH,{text:"are?"})),__jsx(Typography.Z,{variant:"h4",sx:{mt:5,color:"common.white",fontWeight:"fontWeightMedium"}},"Let's work together and",__jsx("br",null)," make awesome site easily"))))}AboutHero.displayName="AboutHero",AboutHero.__docgenInfo={description:"",methods:[],displayName:"AboutHero"};var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),lib=__webpack_require__("./node_modules/react-slick/lib/index.js"),useTheme=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),Button=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),Card=__webpack_require__("./node_modules/@mui/material/Card/Card.js"),AboutTeam_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function AboutTeam(_ref){var carouselsMembers=_ref.carouselsMembers,carouselRef=(0,react.useRef)(null),theme=(0,useTheme.Z)(),carouselSettings={infinite:!1,arrows:!1,slidesToShow:4,rtl:Boolean("rtl"===theme.direction),responsive:[{breakpoint:1279,settings:{slidesToShow:3}},{breakpoint:959,settings:{slidesToShow:2}},{breakpoint:600,settings:{slidesToShow:1}}]};return AboutTeam_jsx(Container.Z,{sx:{pb:10,textAlign:"center"}},AboutTeam_jsx(Typography.Z,{component:"p",variant:"overline",sx:{color:"text.disabled"}},"Dream team"),AboutTeam_jsx(Typography.Z,{variant:"h2",sx:{my:3}},"Great team is the key"),AboutTeam_jsx(Typography.Z,{sx:{mx:"auto",maxWidth:640,color:"text.secondary"}},"Minimal will provide you support if you have any problems, our support team will reply within a day and we also have detailed documentation."),AboutTeam_jsx(Box.Z,{sx:{position:"relative"}},AboutTeam_jsx(dist.i5,{filled:!0,shape:"rounded",onNext:function handleNext(){var _carouselRef$current2;null===(_carouselRef$current2=carouselRef.current)||void 0===_carouselRef$current2||_carouselRef$current2.slickNext()},onPrevious:function handlePrev(){var _carouselRef$current;null===(_carouselRef$current=carouselRef.current)||void 0===_carouselRef$current||_carouselRef$current.slickPrev()},leftButtonProps:{sx:_objectSpread({left:24},carouselsMembers.length<5&&{display:"none"})},rightButtonProps:{sx:_objectSpread({right:24},carouselsMembers.length<5&&{display:"none"})}},AboutTeam_jsx(lib.Z,(0,esm_extends.Z)({ref:carouselRef},carouselSettings),carouselsMembers.map((function(member){return AboutTeam_jsx(Box.Z,{key:member.id,sx:{px:1.5,py:10}},AboutTeam_jsx(MemberCard,{member}))}))))),AboutTeam_jsx(Button.Z,{variant:"outlined",color:"inherit",size:"large",endIcon:AboutTeam_jsx(dist.Ir,{icon:"ic:round-arrow-right-alt",width:24}),sx:{mx:"auto"}},"View all team members"))}function MemberCard(_ref2){var member=_ref2.member,name=member.name,role=member.role,avatar=member.avatar;return AboutTeam_jsx(Card.Z,{key:name},AboutTeam_jsx(Typography.Z,{variant:"subtitle1",sx:{mt:2,mb:.5}},name),AboutTeam_jsx(Typography.Z,{variant:"body2",sx:{mb:2,color:"text.secondary"}},role),AboutTeam_jsx(Box.Z,{sx:{px:1}},AboutTeam_jsx(dist.Ee,{alt:name,src:avatar,ratio:"1/1",sx:{borderRadius:2}})),AboutTeam_jsx(Stack.Z,{direction:"row",alignItems:"center",justifyContent:"center",sx:{p:2}}))}AboutTeam.displayName="AboutTeam",MemberCard.displayName="MemberCard",AboutTeam.__docgenInfo={description:"",methods:[],displayName:"AboutTeam",props:{carouselsMembers:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n  id: string;\n  name: string;\n  role: string;\n  avatar: string;\n}",signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"role",value:{name:"string",required:!0}},{key:"avatar",value:{name:"string",required:!0}}]}}],raw:"{\n  id: string;\n  name: string;\n  role: string;\n  avatar: string;\n}[]"},description:""}}};try{AboutTeam.displayName="AboutTeam",AboutTeam.__docgenInfo={description:"",displayName:"AboutTeam",props:{carouselsMembers:{defaultValue:null,description:"",name:"carouselsMembers",required:!0,type:{name:"{ id: string; name: string; role: string; avatar: string; }[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/mui-domain/lib/about/AboutTeam.tsx#AboutTeam"]={docgenInfo:AboutTeam.__docgenInfo,name:"AboutTeam",path:"packages/mui-domain/lib/about/AboutTeam.tsx#AboutTeam"})}catch(__react_docgen_typescript_loader_error){}var colorManipulator=__webpack_require__("./node_modules/@mui/system/esm/colorManipulator.js"),Grid=__webpack_require__("./node_modules/@mui/material/Grid/Grid.js"),Paper=__webpack_require__("./node_modules/@mui/material/Paper/Paper.js"),Rating=__webpack_require__("./node_modules/@mui/material/Rating/Rating.js"),Link=__webpack_require__("./node_modules/@mui/material/Link/Link.js"),AboutTestimonials_jsx=react.createElement;function AboutTestimonials_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function AboutTestimonials_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?AboutTestimonials_ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):AboutTestimonials_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var TESTIMONIALS=[{name:"Jenny Wilson",rating:5,dateCreate:new Date,content:"Excellent Work! Thanks a lot!"},{name:"Cody Fisher",rating:5,dateCreate:new Date,content:"It's a very good dashboard and we are really liking the product . We've done some things, like migrate to TS and implementing a react useContext api, to fit our job methodology but the product is one of the best in terms of design and application architecture. The team did a really good job."},{name:"Marvin McKinney",rating:5,dateCreate:new Date,content:"Customer support is realy fast and helpful the desgin of this theme is looks amazing also the code is very clean and readble realy good job !"},{name:"Darrell Steward",rating:5,dateCreate:new Date,content:"Amazing, really good code quality and gives you a lot of examples for implementations."},{name:"Jacob Jones",rating:5,dateCreate:new Date,content:"Got a few questions after purchasing the product. The owner responded very fast and very helpfull. Overall the code is excellent and works very good. 5/5 stars!"},{name:"Bessie Cooper",rating:5,dateCreate:new Date,content:"CEO of Codealy.io here. We’ve built a developer assessment platform that makes sense - tasks are based on git repositories and run in virtual machines. We automate the pain points - storing candidates code, running it and sharing test results with the whole team, remotely. Bought this template as we need to provide an awesome dashboard for our early customers. I am super happy with purchase. The code is just as good as the design. Thanks!"}],AboutTestimonials_StyledRoot=(0,styled.ZP)("div")((function(_ref){var theme=_ref.theme;return AboutTestimonials_objectSpread(AboutTestimonials_objectSpread({},(0,dist.v3)({color:(0,colorManipulator.Fq)(theme.palette.grey[900],.8),imgUrl:"/assets/images/about/testimonials.jpg"})),{},(0,defineProperty.Z)({textAlign:"center",padding:theme.spacing(10,0)},theme.breakpoints.up("md"),{padding:0,height:840,textAlign:"left",overflow:"hidden"}))}));function AboutTestimonials(){var isDesktop=(0,dist.Fs)("up","md");return AboutTestimonials_jsx(AboutTestimonials_StyledRoot,null,AboutTestimonials_jsx(Container.Z,{sx:{position:"relative",height:1}},AboutTestimonials_jsx(Grid.ZP,{container:!0,spacing:3,alignItems:"center",justifyContent:{xs:"center",md:"space-between"},sx:{height:1}},AboutTestimonials_jsx(Grid.ZP,{item:!0,xs:10,md:4},AboutTestimonials_jsx(Box.Z,{sx:{maxWidth:{md:360}}},AboutTestimonials_jsx(Typography.Z,{component:"p",variant:"overline",sx:{mb:2,color:"text.secondary"}},"Testimonials"),AboutTestimonials_jsx(Typography.Z,{variant:"h2",sx:{mb:3,color:"common.white"}},"Who love ",AboutTestimonials_jsx("br",null),"my work"),AboutTestimonials_jsx(Typography.Z,{sx:{color:"common.white"}},"Our goal is to create a product and service that you’re satisfied with and use it every day. This is why we’re constantly working on our services to make it better every day and really listen to what our users has to say."),!isDesktop&&AboutTestimonials_jsx(Box.Z,{sx:{mt:3,display:"flex",justifyContent:"center"}},AboutTestimonials_jsx(TestimonialLink,null)))),AboutTestimonials_jsx(Grid.ZP,{item:!0,xs:12,md:7,lg:6,sx:{right:{md:24},position:{md:"absolute"}}},AboutTestimonials_jsx(Grid.ZP,{container:!0,spacing:isDesktop?3:0,alignItems:"center"},AboutTestimonials_jsx(Grid.ZP,{item:!0,xs:12,md:6},TESTIMONIALS.slice(0,3).map((function(testimonial){return AboutTestimonials_jsx(TestimonialCard,{testimonial})}))),AboutTestimonials_jsx(Grid.ZP,{item:!0,xs:12,md:6},TESTIMONIALS.slice(3,6).map((function(testimonial){return AboutTestimonials_jsx(TestimonialCard,{testimonial})})))))),isDesktop&&AboutTestimonials_jsx(Box.Z,{sx:{bottom:60,position:"absolute"}},AboutTestimonials_jsx(TestimonialLink,null))))}function TestimonialCard(_ref2){var testimonial=_ref2.testimonial,theme=(0,useTheme.Z)(),name=testimonial.name,rating=testimonial.rating,dateCreate=testimonial.dateCreate,content=testimonial.content;return AboutTestimonials_jsx(Paper.Z,{sx:AboutTestimonials_objectSpread({mt:3,p:3,color:"common.white"},(0,dist.Ls)({color:theme.palette.common.white,opacity:.04}))},AboutTestimonials_jsx(Typography.Z,{variant:"subtitle1",gutterBottom:!0},name),AboutTestimonials_jsx(Typography.Z,{gutterBottom:!0,component:"div",variant:"caption",sx:{color:"grey.500"}},(0,dist.Mu)(Date.parse(String(dateCreate)))),AboutTestimonials_jsx(Rating.Z,{value:rating,readOnly:!0,size:"small"}),AboutTestimonials_jsx(Typography.Z,{variant:"body2",sx:{mt:1.5}},content))}function TestimonialLink(){return AboutTestimonials_jsx(Link.Z,{href:"#",variant:"subtitle2",sx:{display:"flex",alignItems:"center"}},"Read more testimonials",AboutTestimonials_jsx(dist.Ir,{icon:"ic:round-arrow-right-alt",sx:{ml:1}}))}AboutTestimonials.displayName="AboutTestimonials",TestimonialCard.displayName="TestimonialCard",TestimonialLink.displayName="TestimonialLink",AboutTestimonials.__docgenInfo={description:"",methods:[],displayName:"AboutTestimonials"};var AboutVision_jsx=react.createElement;function AboutVision(){return AboutVision_jsx(Container.Z,{sx:{mt:10}},AboutVision_jsx(Box.Z,{sx:{mb:10,borderRadius:2,overflow:"hidden",position:"relative"}},AboutVision_jsx(dist.Ee,{src:"/assets/images/about/vision.jpg",alt:"about-vision"}),AboutVision_jsx(Stack.Z,{direction:"row",flexWrap:"wrap",alignItems:"center",justifyContent:"center",sx:{bottom:{xs:24,md:40},width:1,opacity:.48,position:"absolute"}},["ibm","lya","spotify","netflix","hbo","amazon"].map((function(logo){return AboutVision_jsx(dist.Ee,{alt:logo,src:"/assets/icons/brands/ic_brand_".concat(logo,".svg"),sx:{m:{xs:1.5,md:2.5},height:{xs:24,md:40}}})})))),AboutVision_jsx(Typography.Z,{variant:"h3",sx:{textAlign:"center",maxWidth:800,mx:"auto"}},"Our vision offering the best product nulla vehicula tortor scelerisque ultrices malesuada."))}AboutVision.displayName="AboutVision",AboutVision.__docgenInfo={description:"",methods:[],displayName:"AboutVision"};var toConsumableArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),LinearProgress=__webpack_require__("./node_modules/@mui/material/LinearProgress/LinearProgress.js"),AboutWhat_jsx=react.createElement,SKILLS=(0,toConsumableArray.Z)(Array(3)).map((function(_,index){return{label:["Development","Design","Marketing"][index],value:10}})),AboutWhat_StyledRoot=(0,styled.ZP)("div")((function(_ref){var theme=_ref.theme;return(0,defineProperty.Z)({textAlign:"center",paddingTop:theme.spacing(20),paddingBottom:theme.spacing(10)},theme.breakpoints.up("md"),{textAlign:"left"})}));function AboutWhat(){var theme=(0,useTheme.Z)(),isDesktop=(0,dist.Fs)("up","md"),isLight="light"===theme.palette.mode,shadow="-40px 40px 80px ".concat((0,colorManipulator.Fq)(isLight?theme.palette.grey[500]:theme.palette.common.black,.48));return AboutWhat_jsx(AboutWhat_StyledRoot,null,AboutWhat_jsx(Container.Z,null,AboutWhat_jsx(Grid.ZP,{container:!0,spacing:3},isDesktop&&AboutWhat_jsx(Grid.ZP,{item:!0,xs:12,md:6,lg:7,sx:{pr:{md:7}}},AboutWhat_jsx(Grid.ZP,{container:!0,spacing:3,alignItems:"flex-end"},AboutWhat_jsx(Grid.ZP,{item:!0,xs:6},AboutWhat_jsx(dist.Ee,{alt:"our office 1",src:"/assets/images/about/what_1.jpg",ratio:"3/4",sx:{borderRadius:2,boxShadow:shadow}})),AboutWhat_jsx(Grid.ZP,{item:!0,xs:6},AboutWhat_jsx(dist.Ee,{alt:"our office 2",src:"/assets/images/about/what_2.jpg",ratio:"1/1",sx:{borderRadius:2}})))),AboutWhat_jsx(Grid.ZP,{item:!0,xs:12,md:6,lg:5},AboutWhat_jsx(Typography.Z,{variant:"h2",sx:{mb:3}},"What is minimal?"),AboutWhat_jsx(Typography.Z,{sx:{color:"light"===theme.palette.mode?"text.secondary":"common.white"}},"Our theme is the most advanced and user-friendly theme you will find on the market, we have documentation and video to help set your site really easily, pre-installed demos you can import in one click and everything from the theme options to page content can be edited from the front-end. This is the theme you are looking for."),AboutWhat_jsx(Box.Z,{sx:{my:5}},SKILLS.map((function(progress){return AboutWhat_jsx(ProgressItem,{progress})}))),AboutWhat_jsx(Button.Z,{variant:"outlined",color:"inherit",size:"large",endIcon:AboutWhat_jsx(dist.Ir,{icon:"ic:round-arrow-right-alt",width:24})},"Check out our work")))))}function ProgressItem(_ref3){var progress=_ref3.progress,label=progress.label,value=progress.value;return AboutWhat_jsx(Box.Z,{sx:{mt:3}},AboutWhat_jsx(Box.Z,{sx:{mb:1.5,display:"flex",alignItems:"center"}},AboutWhat_jsx(Typography.Z,{variant:"subtitle2"},label," - "),AboutWhat_jsx(Typography.Z,{variant:"body2",sx:{color:"text.secondary"}},(0,dist.f2)(value))),AboutWhat_jsx(LinearProgress.Z,{variant:"determinate",value,sx:{"& .MuiLinearProgress-bar":{bgcolor:"grey.700"},"&.MuiLinearProgress-determinate":{bgcolor:"divider"}}}))}AboutWhat.displayName="AboutWhat",ProgressItem.displayName="ProgressItem",AboutWhat.__docgenInfo={description:"",methods:[],displayName:"AboutWhat"}}}]);