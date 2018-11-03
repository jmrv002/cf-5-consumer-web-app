(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"./node_modules/moment/locale sync recursive en":function(t,e,n){var o={"./en-au":"./node_modules/moment/locale/en-au.js","./en-au.js":"./node_modules/moment/locale/en-au.js","./en-ca":"./node_modules/moment/locale/en-ca.js","./en-ca.js":"./node_modules/moment/locale/en-ca.js","./en-gb":"./node_modules/moment/locale/en-gb.js","./en-gb.js":"./node_modules/moment/locale/en-gb.js"};function webpackContext(t){var e=webpackContextResolve(t);return n(e)}function webpackContextResolve(t){var e=o[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}webpackContext.keys=function webpackContextKeys(){return Object.keys(o)},webpackContext.resolve=webpackContextResolve,t.exports=webpackContext,webpackContext.id="./node_modules/moment/locale sync recursive en"},"./webpack/assets/javascripts/components/Modal/Portal.js":function(t,e,n){"use strict";var o=n("./node_modules/react/index.js"),r=n("./node_modules/react-dom/index.js"),i=n.n(r),a=n("./node_modules/prop-types/index.js"),s=n.n(a);function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(t){return typeof t}:function _typeof(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _possibleConstructorReturn(t,e){return!e||"object"!==_typeof(e)&&"function"!=typeof e?function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(t,e){return t.__proto__=e,t})(t,e)}var c=function(t){function Portal(){return function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,Portal),_possibleConstructorReturn(this,_getPrototypeOf(Portal).apply(this,arguments))}return function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}(Portal,o["Component"]),function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(Portal,[{key:"componentDidMount",value:function componentDidMount(){this.props.onMount()}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.props.onUnmount()}},{key:"render",value:function render(){return i.a.createPortal(this.props.children,document.body)}}]),Portal}();c.propTypes={children:s.a.node,onMount:s.a.func,onUnmount:s.a.func},c.defaultProps={onMount:function onMount(){},onUnmount:function onUnmount(){}},e.a=c},"./webpack/assets/javascripts/components/Modal/index.js":function(t,e,n){"use strict";var o=n("./node_modules/lodash/omit.js"),r=n.n(o),i=n("./node_modules/lodash/each.js"),a=n.n(i),s=n("./node_modules/lodash/clone.js"),c=n.n(s),u=n("./node_modules/lodash/get.js"),l=n.n(u),p=n("./node_modules/lodash/defer.js"),d=n.n(p),f=n("./node_modules/lodash/delay.js"),h=n.n(f),y=n("./node_modules/prop-types/index.js"),v=n.n(y),m=n("./node_modules/react/index.js"),g=n.n(m),_=n("./node_modules/velocity-react/index.js"),b=n("./node_modules/classnames/index.js"),w=n.n(b),P=n("./webpack/assets/javascripts/components/Modal/Portal.js"),k=n("./webpack/assets/javascripts/components/Modal/styles/index.scss"),j=n.n(k);function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(t){return typeof t}:function _typeof(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _extends(){return(_extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function _defineProperty(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _possibleConstructorReturn(t,e){return!e||"object"!==_typeof(e)&&"function"!=typeof e?function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(t,e){return t.__proto__=e,t})(t,e)}var C=["transparent","screen","screen--light"],O={fade:{enter:{animation:{opacity:[1,0]},duration:250},leave:{animation:{opacity:[0,1]},duration:250}}},E=function(t){function Modal(){var t,e;!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,Modal);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=_possibleConstructorReturn(this,(t=_getPrototypeOf(Modal)).call.apply(t,[this].concat(o)))).layerDidMount=function(){document.body.classList.add("modal-overlay-active"),e.props.viewportLocked&&(document.body.style.position="fixed")},e.layerWillUnmount=function(){document.body.classList.remove("modal-overlay-active"),e.props.viewportLocked&&(document.body.style.position="")},e._initialOpen=function(){return e.props.isOpen},e._close=function(){e.setState({open:!1})},e._open=function(){e.setState({open:!0})},e.onContentClick=function(t){t.stopPropagation()},e.onOverlayClick=function(){e.props.onOutsideClick()},e.getTransition=function(){var t=c()(e.props.transition);return a()(t,function(t){t.duration||(t.duration=e.props.transitionDuration)}),t},e.state={open:e._initialOpen()},e}return function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}(Modal,g.a.Component),function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(Modal,[{key:"componentWillReceiveProps",value:function componentWillReceiveProps(t){var e=this;t.isOpen!==this.props.isOpen&&(t.isOpen?d()(this._open):h()(function(){d()(e._close)},l()(this.props,"transition.leave.duration")||this.props.transitionDuration))}},{key:"render",value:function render(){var t,e;if(!this.state.open&&!this.props.isOpen)return null;var n=r()(this.props,"isOpen","onOutsideClick","fixed","transitionDuration","transition","overlayType","contentProps"),o=w()((_defineProperty(t={},j.a.overlay,!0),_defineProperty(t,j.a.fixed,this.props.fixed),_defineProperty(t,j.a["type-".concat(this.props.overlayType)],C.indexOf(this.props.overlayType)>=0),_defineProperty(t,this.props.className,!!this.props.className),t)),i=w()((_defineProperty(e={},j.a.content,!0),_defineProperty(e,this.props.contentProps.className,!!this.props.contentProps.className),e)),a=this.getTransition(),s=g.a.Children.map(this.props.children,function(t){return t});return this.props.isOpen||(s=null),g.a.createElement(P.a,{onMount:this.layerDidMount,onUnmount:this.layerWillUnmount},g.a.createElement("div",_extends({},n,{className:o,onClick:this.onOverlayClick}),g.a.createElement("div",_extends({},this.props.contentProps,{className:i,onClick:this.onContentClick}),g.a.createElement(_.VelocityTransitionGroup,_extends({},a,{runOnMount:!0}),s))))}}]),Modal}();E.propTypes={children:v.a.node,className:v.a.string,transition:v.a.shape({enter:v.a.any,leave:v.a.any}),transitionDuration:v.a.number,viewportLocked:v.a.bool,isOpen:v.a.bool,fixed:v.a.bool,onOutsideClick:v.a.func,overlayType:v.a.oneOf(C),contentProps:v.a.object},E.defaultProps={isOpen:!1,fixed:!0,onOutsideClick:function onOutsideClick(){},transitionDuration:250,transition:O.fade,overlayType:"screen",contentProps:{}},e.a=E},"./webpack/assets/javascripts/components/Modal/styles/index.scss":function(t,e,n){t.exports={overlay:"overlay__3LeDG7tuQrrJdjPm8agkmx",fixed:"fixed__1dVANA0vWS60mCGpsRBU8T",content:"content__fQv0JV6LGGkYLrzWHtg7t","type-transparent":"type-transparent__19iohvkXZv5eOsVMRAvvLQ","type-screen":"type-screen__3oDb8zX4D4UGw4Zr3v1ufw"}},"./webpack/assets/javascripts/libs/eventTracking.js":function(t,e,n){"use strict";var o=n("./webpack/assets/javascripts/libs/ccdata.js"),r=n("./node_modules/jsuri/Uri.js"),i=n.n(r),a=n("./webpack/assets/javascripts/libs/userAttributes.js"),s=n("./node_modules/superagent/lib/client.js"),c=n.n(s),u=n("./webpack/assets/javascripts/libs/superagent-auth.js"),l=function beacon(t,e){var n=!(arguments.length>2&&void 0!==arguments[2]&&arguments[2])&&function canUseBeacon(){return window.navigator&&"function"==typeof window.navigator.sendBeacon}(),o=new i.a(t).addQueryParam("authentication_token",a.a.get("authentication_token")).toString();n?function sendBeacon(t,e){navigator.sendBeacon(t,e)}(o,e):function sendXHR(t,e){var n=c.a.post(t).use(u.b).use(u.c);e instanceof FormData||n.setHeader("Content-Type","text/plain;charset=UTF-8"),n.send(e).end()}(o,e)};function _objectSpread(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){_defineProperty(t,e,n[e])})}return t}function _defineProperty(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _objectWithoutProperties(t,e){if(null==t)return{};var n,o,r=function _objectWithoutPropertiesLoose(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}n.d(e,"b",function(){return p}),n.d(e,"c",function(){return d}),n.d(e,"e",function(){return f}),n.d(e,"f",function(){return h}),n.d(e,"d",function(){return y}),n.d(e,"a",function(){return v});var p=function track(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};var r="";"undefined"!=typeof CCDATA&&"development"===CCDATA.env&&(r="http://".concat(window.location.hostname,":").concat(window.location.port)),r="".concat(r,"/events/").concat(t),n.fullpath=window.location.pathname+window.location.search;var i=new FormData;i.append("category",t),i.append("event",e),i.append("properties",JSON.stringify(n)),i.append("authenticity_token",o.a.get("authenticity_token")),l(r,i)},d=function trackContentItemEvent(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"user",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"click",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.contentItem,r=_objectWithoutProperties(n,["contentItem"]);if(o){var i=o.type,a=o.progress;if(void 0===i||void 0===a)return;var s="quiz"===i,c=a.progress_percentage;s&&(c=a.passed?100:0),r=_objectSpread({up_next:o.upNext,content_item_progress:c,content_item_score:s?a.highest_percentage:null,content_item_type:i,quiz_retake:s&&a.taken},r)}r=_objectSpread({version:"v2_dashboard"},r),p(t,e,r)},f=function trackUserClick(t){p("user","click",t)},h=function trackUserVisit(t){p("user","visit",t)},y=function trackTabChangeEvent(t,e){return function(n){var o=e[n],r="".concat(t,"_").concat(o);f({target:r})}},v=function pushDataLayerEvent(t){void 0===window.dataLayer&&(window.dataLayer=[]),window.dataLayer.push({event:t})}},"./webpack/assets/javascripts/libs/superagent-auth.js":function(t,e,n){"use strict";n.d(e,"b",function(){return csrf}),n.d(e,"c",function(){return userAuth}),n.d(e,"a",function(){return apiAuth});var o=n("./webpack/assets/javascripts/libs/userAttributes.js"),r=n("./webpack/assets/javascripts/libs/ccdata.js"),i=n("./node_modules/jsuri/Uri.js"),a=n.n(i);function csrf(t){var e=r.a.get("authenticity_token");return e&&t.set("X-CSRF-Token",e),t}function userAuth(t){var e=o.a.get("authentication_token");if(!o.a.isAnon()&&e){var n=new a.a(t.url).addQueryParam("authentication_token",e);t.url=n.toString()}return window.CCDATA.current_user&&t.set("X-Auth-Token",window.CCDATA.current_user.authentication_token),t}function apiAuth(t){var e=o.a.get("authentication_token");return!o.a.isAnon()&&e&&(t.set("X-Auth-Token",e),t.set("X-User-Id",o.a.id())),t}},"./webpack/assets/javascripts/libs/url.js":function(t,e,n){"use strict";n.d(e,"c",function(){return createQuery}),n.d(e,"a",function(){return i}),n.d(e,"b",function(){return addRedirectParam}),n.d(e,"d",function(){return safeRedirectUrl});n("./node_modules/lodash/indexOf.js"),n("./node_modules/lodash/filter.js"),n("./node_modules/lodash/union.js"),n("./webpack/assets/javascripts/libs/ccdata.js");var o=n("./node_modules/jsuri/Uri.js"),r=n.n(o);function createQuery(t){var e=Object.keys(t).filter(function(e){return t[e]}).map(function(e){return"".concat(e,"=").concat(t[e])}).join("&");return e?"?".concat(e):null}var i=function addParamsAsHash(t,e){var n=new r.a(t);return Object.keys(e).forEach(function(t){return e[t]&&n.addQueryParam(t,e[t])}),n.toString()};function addRedirectParam(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=new r.a(t);if(window.location&&window.location.href){var o,i=new r.a(window.location.href);i.hasQueryParam("redirect")&&e?o=i.getQueryParamValue("redirect"):(i.deleteQueryParam("redirect"),o=i.toString()),n.addQueryParam("redirect",o)}return n.toString()}function safeRedirectUrl(t){var e=new r.a(t);return new r.a(window.location.href).setPath(e.path()).setQuery(e.query()).toString()}},"./webpack/assets/javascripts/libs/urlHelpers.js":function(t,e,n){"use strict";n.d(e,"d",function(){return r}),n.d(e,"n",function(){return i}),n.d(e,"j",function(){return a}),n.d(e,"l",function(){return s}),n.d(e,"m",function(){return c}),n.d(e,"k",function(){return u}),n.d(e,"c",function(){return l}),n.d(e,"E",function(){return p}),n.d(e,"B",function(){return d}),n.d(e,"A",function(){return f}),n.d(e,"G",function(){return h}),n.d(e,"p",function(){return y}),n.d(e,"t",function(){return v}),n.d(e,"s",function(){return m}),n.d(e,"r",function(){return g}),n.d(e,"w",function(){return _}),n.d(e,"y",function(){return b}),n.d(e,"u",function(){return w}),n.d(e,"z",function(){return P}),n.d(e,"D",function(){return k}),n.d(e,"a",function(){return j}),n.d(e,"F",function(){return C}),n.d(e,"h",function(){return O}),n.d(e,"i",function(){return E}),n.d(e,"e",function(){return x}),n.d(e,"J",function(){return A}),n.d(e,"f",function(){return S}),n.d(e,"o",function(){return T}),n.d(e,"q",function(){return M}),n.d(e,"v",function(){return D}),n.d(e,"C",function(){return U}),n.d(e,"g",function(){return R}),n.d(e,"H",function(){return K}),n.d(e,"b",function(){return N}),n.d(e,"I",function(){return L}),n.d(e,"x",function(){return I});var o=function withLECourseRedirect(t,e){return e?"".concat(t,"?course_redirect=").concat(e):t},r=function contentItemResumePath(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3]?"":"/resume";switch(e.type){case"lesson":return o("/courses/".concat(t,"/lessons/").concat(e.slug).concat(r),n);case"quiz":return o("/courses/".concat(t,"/quizzes/").concat(e.slug),n);case"project":return o("/courses/".concat(t,"/projects/").concat(e.slug),n);case"article":return o("/courses/".concat(t,"/articles/").concat(e.slug),n);case"video":return o("/courses/".concat(t,"/videos/").concat(e.slug),n);case"informational":return o("/courses/".concat(t,"/informationals/").concat(e.slug),n)}return null},i=function learnSegmentPath(t){return"/learn/".concat(t)},a=i,s=function learnPath(){return"/learn"},c=function learnPracticePath(t){var e="/learn/practice";return t&&(e="".concat(e,"#").concat(t)),e},u=function learnMyCoursesPath(){return"/learn/my_courses"},l=function catalogPath(){return"/catalog"},p=function programResumePath(t){return"/programs/".concat(t)},d=function programContentPath(t,e){return"/programs/".concat(t,"/items/").concat(e)},f=function programContentItemResumePath(t,e){return"/programs/".concat(t,"/items/").concat(e,"/resume")},h=function resetProgressPath(t,e){return"/learn/reset_progress/".concat(t,"/").concat(e)},y=function newProjectReviewPath(t,e){return"/project-reviews/new?program_id=".concat(t,"&content_item_id=").concat(e)},v="/learn/paths",m="".concat(v,"/new"),g=function pathPagePath(t){return"".concat(v,"/").concat(t)},_="/pro/onboarding",b=function proPaymentCompletePath(t,e,n){return"/subscriptions/".concat(t,"/paid?couponCode=").concat(e,"&pro_trial=").concat(n)},w=function proCheckoutPath(){return"/subscriptions/proSixMonthV1/checkout"},P=function programCheckoutPath(t){return"/programs/".concat(t,"/checkout")},k=function programPaymentCompletePath(t){return"/programs/".concat(t,"/paid")},j=function billingPath(){return"/account/billing"},C=function projectReviewPath(t,e){return"/project-reviews/".concat(t).concat(e?"?resubmission=true":"")},O=function githubAuthenticationUrl(){return"/users/auth/github?scope=public_repo,user:email"},E=function googleAuthenticationUrl(){return"/users/auth/google_oauth2?signin=true"},x=function facebookAuthenticationUrl(){return"/users/auth/facebook?signin=true"},A=function twitterAuthenticationUrl(){return"/users/auth/twitter?signin=true"},S=function forgotPasswordUrl(){return"/secret/new"},T=function loginPostActionUrl(){return"/login"},M=function paidOfferingsUrl(){return"https://pro.codecademy.com/offerings/"},D="/pro/membership",U=function programMarketingPath(t){return"/pro/intensive/".concat(t)},R="https://discuss.codecademy.com",K=function reviewerPageUrl(){return"/project-reviews/reviewer/"},N=function cancellationSurveyPageUrl(t){return"/subscriptions/".concat(t,"/cancellation/survey")},L=function subscriptionPausePageUrl(t){return"/subscriptions/".concat(t,"/pause")},I="https://help.codecademy.com/hc/en-us/sections/360002034793-Pause"},"./webpack/assets/javascripts/libs/userAttributes.js":function(t,e,n){"use strict";var o=n("./webpack/assets/javascripts/libs/ccdata.js"),r=(n("./webpack/assets/javascripts/vendor/plugins/jquery.auth_prefilter.js"),{isAdmin:function isAdmin(){return this._hasRole("admin")},isAdvisor:function isAdvisor(){return this._hasRole("advisor")||this._hasRole("advisor_candidate")},isCustomerService:function isCustomerService(){return this._hasRole("customer_service")},isAuthor:function isAuthor(){return this._hasRole("author")},_hasRole:function _hasRole(t){return(this.get("roles")||[]).indexOf(t)>=0},isAnon:function isAnon(){return!o.a.has("current_user",void 0)},isPro:function isPro(){return this.get("pro",!1)},id:function id(){return this.get("_id","anon")},authenticationToken:function authenticationToken(){return this.get("authentication_token","")},getExperiments:function getExperiments(){return this.isAnon()?o.a.get("anonymous_user.experiments"):o.a.get("current_user.experiments")},getExperimentGroup:function getExperimentGroup(t){return(this.getExperiments()||{})[t]},getCurrentUser:function getCurrentUser(){return o.a.get("current_user")},get:function get(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;return o.a.get("current_user.".concat(t),e)},hasGodMode:function hasGodMode(){return r.isAdmin()||r.isAdvisor()||r.isAuthor()},isSafari:function isSafari(){var t=navigator.userAgent.toLowerCase();return-1!==t.indexOf("safari")&&!(t.indexOf("chrome")>-1)}});e.a=r},"./webpack/assets/javascripts/platform/mixins/keyboard_events.js":function(t,e,n){"use strict";e.a={componentDidMount:function componentDidMount(){window.addEventListener("keydown",this.onKeyDown)},componentWillUnmount:function componentWillUnmount(){window.removeEventListener("keydown",this.onKeyDown)},isEditInContentStudioEvent:function isEditInContentStudioEvent(t){return 32===t.keyCode&&(navigator.platform.match("Mac")?t.ctrlKey:t.altKey)},isToggleAuthoringModeEvent:function isToggleAuthoringModeEvent(t){return 77===t.keyCode&&(navigator.platform.match("Mac")?t.ctrlKey:t.altKey)},isSetProgressToThisExerciseEvent:function isSetProgressToThisExerciseEvent(t){return 83===t.keyCode&&(navigator.platform.match("Mac")?t.ctrlKey:t.altKey)},isAllowAllNavigationEvent:function isAllowAllNavigationEvent(t){return 187===t.keyCode&&(navigator.platform.match("Mac")?t.ctrlKey:t.altKey)},isDeleteWorkspaceEvent:function isDeleteWorkspaceEvent(t){return 87===t.keyCode&&(navigator.platform.match("Mac")?t.ctrlKey:t.altKey)},isGetInitialSavepointEvent:function isGetInitialSavepointEvent(t){return 71===t.keyCode&&(navigator.platform.match("Mac")?t.ctrlKey:t.altKey)},isGetFinalSavepointEvent:function isGetFinalSavepointEvent(t){return 71===t.keyCode&&(navigator.platform.match("Mac")?t.ctrlKey:t.altKey)&&t.shiftKey},isEvaluateExerciseEvent:function isEvaluateExerciseEvent(t){return 13===t.keyCode&&(navigator.platform.match("Mac")?t.metaKey:t.ctrlKey)},isPreviousEvent:function isPreviousEvent(t){return 188===t.keyCode&&(navigator.platform.match("Mac")?t.ctrlKey&&!t.altKey:t.altKey&&!t.crtlKey)},isNextEvent:function isNextEvent(t){return 190===t.keyCode&&(navigator.platform.match("Mac")?t.ctrlKey&&!t.altKey:t.altKey&&!t.crtlKey)},isEscapeEvent:function isEscapeEvent(t){return 27===t.keyCode},onKeyDown:function onKeyDown(t){return this.editInContentStudio&&this.isEditInContentStudioEvent(t)?this.editInContentStudio():this.toggleAuthoringMode&&this.isToggleAuthoringModeEvent(t)?this.toggleAuthoringMode():this.handleSetProgressClick&&this.isSetProgressToThisExerciseEvent(t)?this.handleSetProgressClick():this.toggleNoLock&&this.isAllowAllNavigationEvent(t)?this.toggleNoLock():this.deleteWorkspace&&this.isDeleteWorkspaceEvent(t)?this.deleteWorkspace():this.getFinalSavepoint&&this.isGetFinalSavepointEvent(t)?this.getFinalSavepoint():this.getInitialSavepoint&&this.isGetInitialSavepointEvent(t)?this.getInitialSavepoint():this.evaluateExercise&&this.isEvaluateExerciseEvent(t)?this.evaluateExercise():this.onNextEvent&&this.isNextEvent(t)?this.onNextEvent():this.onPreviousEvent&&this.isPreviousEvent(t)?this.onPreviousEvent():this.onEscapeKey&&this.isEscapeEvent(t)&&this.onEscapeKey(t),!1}}},"./webpack/assets/javascripts/vendor/plugins/jquery.auth_prefilter.js":function(t,e,n){"use strict";var o=n("./node_modules/jquery/dist/jquery.js");n.n(o).a.ajaxPrefilter(function(t,e,n){if("undefined"!=typeof CCDATA){if(CCDATA.current_user){var o=CCDATA.current_user.authentication_token,r=t.url.indexOf("?")>0?"&":"?";t.url+=r+"authentication_token="+o}CCDATA.authenticity_token&&!t.crossDomain&&n.setRequestHeader("X-CSRF-Token",CCDATA.authenticity_token)}})}}]);
//# sourceMappingURL=8a89b737f3063a725479-0cfbd4f10b44a3e80b3d.js.map