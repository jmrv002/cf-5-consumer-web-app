(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"./webpack/assets/javascripts/platform/components/lessons.js":function(e,t,r){"use strict";var n=r("./node_modules/lodash/get.js"),s=r.n(n),o=r("./webpack/assets/javascripts/platform/controllers/adapters/adapters.js"),c=r("./node_modules/prop-types/index.js"),i=r.n(c),a=r("./node_modules/react/index.js"),u=r.n(a),p=r("./node_modules/create-react-class/index.js"),l=r.n(p),d=r("./node_modules/react-redux/es/index.js"),f=r("./node_modules/@codecademy/fluxile/dist/index.js"),b=r("./node_modules/classnames/index.js"),h=r.n(b),m=r("./webpack/assets/javascripts/platform/libs/base_mixins.js"),x=r("./webpack/assets/javascripts/platform/libs/activityLogger.js"),g=r("./webpack/assets/javascripts/libs/statsd.js"),v=r.n(g),j=r("./webpack/assets/javascripts/libs/userAttributes.js"),_=r("./webpack/assets/javascripts/libs/logging/logger.js"),k={showErrors:function showErrors(e){e&&(e.component||(e.component=this._chooseComponentForHint()),e.visible=!0,e.timestamp=(new Date).valueOf(),this.setState({errors:e}))},_chooseComponentForHint:function _chooseComponentForHint(){for(var e=["PersistentCodeEditor","Terminal","WebBrowser"],t=0;t<e.length;t++){var r=e[t];if(this.props.currentExercise.components[r])return r}var n=Object.keys(this.props.currentExercise.components).filter(function(e){return"Narrative"!==e});return n.length>0?n[0]:null},hideErrors:function hideErrors(){this.state.errors.visible=!1,this.state.errors.timestamp=(new Date).valueOf(),this.setState({errors:this.state.errors})}},y=r("./webpack/assets/javascripts/platform/components/ComponentGrid/index.js"),w=r("./webpack/assets/javascripts/platform/components/LearningEnvironmentMain/index.js"),O=r("./webpack/assets/javascripts/platform/components/Header/index.js"),E=r("./webpack/assets/javascripts/platform/components/Footer/index.js"),S=r("./node_modules/lodash/isEmpty.js"),P=r.n(S),C=r("./node_modules/@codecademy/gamut/index.js"),I=r("./webpack/assets/javascripts/platform/components/Wall/index.js"),T=r("./node_modules/@codecademy/i18n/index.js"),L=r("./webpack/assets/javascripts/platform/state/entities/selectors.js");function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}var R=function(e){function LockedExerciseWall(){var e,t;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,LockedExerciseWall);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(t=_possibleConstructorReturn(this,(e=_getPrototypeOf(LockedExerciseWall)).call.apply(e,[this].concat(n)))).navigateToExercise=function(){t.props.navigate({exerciseIndex:t.props.exerciseProgressedToIndex})},t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(LockedExerciseWall,a["Component"]),function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(LockedExerciseWall,[{key:"render",value:function render(){var e=this.props.lessonStarted?Object(T.b)("views.learning_environment.components.locked_exercise_wall.continue"):this.props.title,t=this.props.lessonStarted?Object(T.b)("views.learning_environment.components.locked_exercise_wall.started_text"):Object(T.b)("views.learning_environment.components.locked_exercise_wall.unstarted_text"),r=this.props.lessonStarted?Object(T.b)("views.learning_environment.components.locked_exercise_wall.resume"):Object(T.b)("views.learning_environment.components.locked_exercise_wall.start"),n=u.a.createElement(C.a,{outline:!0,onClick:this.navigateToExercise},r),s=u.a.createElement(C.a,{outline:!0,href:this.props.exitPaths.back},r);return u.a.createElement(I.a,null,u.a.createElement("h2",null,e),u.a.createElement("p",null,t),P()(this.props.exerciseProgressedToIndex)?s:n)}}]),LockedExerciseWall}();R.propTypes={lessonStarted:i.a.bool,title:i.a.string,navigate:i.a.func,exerciseProgressedToIndex:i.a.number,exitPaths:i.a.object};var A=Object(d.b)(function mapStateToProps(e){return{exerciseProgressedToIndex:Object(L.g)(e)}})(R),W=r("./webpack/assets/javascripts/platform/components/IdleWall/index.js"),N=r("./webpack/assets/javascripts/components/MaintenancePane/index.js"),M=r("./node_modules/@codecademy/gamut/Button/index.js"),B=r("./webpack/assets/javascripts/platform/mixins/keyboard_events.js"),D=l()({displayName:"Navigation",propTypes:{navigate:i.a.func.isRequired,currentExerciseIndex:i.a.number.isRequired,currentLesson:i.a.object.isRequired,mayProceed:i.a.bool.isRequired,nextButtonText:i.a.string,contentItemProgresses:i.a.object},mixins:[B.a],onNextEvent:function onNextEvent(){this.next()},onPreviousEvent:function onPreviousEvent(){this.previous()},next:function next(){this.props.mayProceed&&this.props.navigate({exerciseIndex:this.props.currentExerciseIndex+1})},previous:function previous(){this.props.currentExerciseIndex<1||this.props.navigate({exerciseIndex:this.props.currentExerciseIndex-1})},isLastExerciseInLesson:function isLastExerciseInLesson(){return this.props.currentExerciseIndex+1===this.currentLessonExerciseCount()},nextButtonText:function nextButtonText(){var nextButtonText=this.props.nextButtonText;return nextButtonText||(this.isLastExerciseInLesson()?Object(T.b)("views.learning_environment.components.exercise_navigation.up_next"):Object(T.b)("views.learning_environment.components.exercise_navigation.next"))},currentLessonExerciseCount:function currentLessonExerciseCount(){return this.props.currentLesson.exercises.length},render:function render(){var e=this.props.currentExerciseIndex<1;return u.a.createElement("div",{className:"fcn-nav-wrapper"},u.a.createElement("div",{className:"fcn-nav-wrapper__center fcn-progress-container"},u.a.createElement(M.a,{theme:"grey",outline:!0,disabled:e,onClick:this.previous,style:{minWidth:"6rem"}},Object(T.b)("views.learning_environment.components.exercise_navigation.back")),u.a.createElement("div",{className:"fnc-nav__exercise-count"},"".concat(this.props.currentExerciseIndex+1,"/").concat(this.currentLessonExerciseCount())),u.a.createElement(M.a,{theme:"yellow",id:"discovery-next",go:this.props.mayProceed,disabled:!this.props.mayProceed,onClick:this.next,style:{minWidth:"6rem"}},this.nextButtonText())))}}),G=r("./webpack/assets/javascripts/platform/components/GetHelp/index.js"),U=r("./webpack/assets/javascripts/platform/components/LakituContainer/index.js"),q=r("./webpack/assets/javascripts/platform/actions/AdapterActions.js"),F=r("./webpack/assets/javascripts/platform/actions/WorkspaceActions.js"),H=r("./webpack/assets/javascripts/platform/actions/CheckpointActions.js"),$=(r("./webpack/assets/javascripts/platform/stores/AdapterStore.js"),r("./webpack/assets/javascripts/platform/stores/workspace/WorkspaceStore.js")),z=r("./webpack/assets/javascripts/platform/stores/checkpoints/CheckpointStore.js"),J=r("./webpack/assets/javascripts/platform/stores/LessonCursorStore.js"),Q=r("./webpack/assets/javascripts/platform/libs/workspace/setup.js"),K=r("./webpack/assets/javascripts/platform/state/entities/contentItemProgresses/actions/lesson.js");function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var V=l()({displayName:"Lessons",mixins:m.a.concat([k,f.StateMixin.connect($.a)]),propTypes:{isInMaintenanceMode:i.a.bool,contentStudioURL:i.a.string,currentLesson:i.a.object,currentExercise:i.a.object,currentExerciseIndex:i.a.number,exitPaths:i.a.object,formats:i.a.object,features:i.a.object,hasButterbar:i.a.bool,locationParams:i.a.object,prerender:i.a.object,profileImage:i.a.string,contentItemProgresses:i.a.object.isRequired,userId:i.a.string,inComponentGridRewrite:i.a.bool,isAccessible:i.a.bool.isRequired,isLessonStarted:i.a.bool,isExerciseStarted:i.a.bool,canAccessNextExercise:i.a.bool.isRequired,isOnFarthestUnlockedExercise:i.a.bool.isRequired,achievements:i.a.array,setProgressToCurrentExercise:i.a.func.isRequired,navigateExercise:i.a.func,locationQuery:i.a.object,courseTitle:i.a.string,isLintingDisabled:i.a.bool,programSlug:i.a.string,courseSlug:i.a.string,forumCategory:i.a.string,authors:i.a.array,completeLesson:i.a.func,getLessonCompletedModal:i.a.func,courseMeta:i.a.object,isCurrentExerciseComplete:i.a.bool,advanceProgressByCheckpoint:i.a.func,advanceProgressToNextExercise:i.a.func},getInitialState:function getInitialState(){return{errors:{},readonly:!1,drawerOpen:!1,godexStatus:{type:"",message:"",visible:!1},godexReady:!1,fileNavReady:!1,skipTests:!1}},getDefaultProps:function getDefaultProps(){return{isLintingDisabled:!1,forumCategory:"",authors:[],courseSlug:"",isLessonStarted:!0,getLessonCompletedModal:function getLessonCompletedModal(){return null},exitPaths:{},achievements:[]}},componentWillMount:function componentWillMount(){H.a.saveControllerReference(this),$.a.setController(this),this.adapter=this.getAdapter()},componentDidMount:function componentDidMount(){j.a.isAnon()||this.initialize()},componentDidUpdate:function componentDidUpdate(e){this.didUpdateCurrentContent(e)&&(this.initialize(),J.a.setCursor({lessonId:this.props.currentLesson.id,exerciseSlug:this.props.currentExercise.slug}))},initialize:function initialize(){this.adapter.trigger("interface:ready"),this.updateWorkspace(this.props.currentExercise),this.adapter.extendCache(),H.a.load(this.props.currentExercise.tests.checkpoints),this.setState({disabled:!1}),Object(x.a)("info","Mounted Lessons controller on exercise: ".concat(this.props.currentExercise.slug))},navigate:function navigate(e){var t=e.exerciseIndex;H.a.abort();var r=this.props,n=r.currentLesson,s=r.completeLesson;if(t>=n.exercises.length)return s();var o=n.exercises[t];return this.props.navigateExercise({exerciseSlug:o.slug}),Object(x.a)("info","Navigated to exercise '".concat(n.exercises[t].slug,"'"))},getAdapter:function getAdapter(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.currentExercise.components,t=o.a.forComponents(function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){_defineProperty(e,t,r[t])})}return e}({},e));return t.controller=this,this.adapter&&(this.adapter.unsubCheckpoints&&this.adapter.unsubCheckpoints(),t.inheritCache(this.adapter),this.adapter.destroy(),this.adapter=null),q.a.newAdapter(t),t},updateWorkspace:function updateWorkspace(e){var t=this;j.a.isAnon()||Object(Q.a)({content:e,userId:this.props.userId}).then(function(){t.adapter.trigger("godex:ready")}).then(this.exerciseSetup).catch(function(e){_.a.error({message:"Setup Workspace failed with: ".concat(e)})})},exerciseSetup:function exerciseSetup(){var e=this,t=this.props.currentExercise.setup,r=this.props.isOnFarthestUnlockedExercise&&!this.props.isExerciseStarted;t&&r&&$.a.execute(t.command).then(F.a.persist).then(function(){v.a.increment("francine.godexer.setup-exercise","success"),e.adapter.trigger("interface:ready")}).catch(function(e){_.a.error(e),v.a.increment("francine.godexer.setup-exercise","error")})},didUpdateCurrentContent:function didUpdateCurrentContent(e){return e.currentExerciseIndex!==this.props.currentExerciseIndex},pickAWall:function pickAWall(){if(j.a.isAnon())return null;var e=!this.state.nolock&&!this.props.isAccessible;return this.props.isInMaintenanceMode&&!j.a.isAdmin()?u.a.createElement(I.a,null,u.a.createElement(N.a,null)):this.state.workspaceIdle?u.a.createElement(W.a,null):e?u.a.createElement(A,{lessonStarted:this.props.isLessonStarted,title:this.getTitle(),navigate:this.navigate,exitPaths:this.props.exitPaths}):null},setProgressToCurrentExercise:function setProgressToCurrentExercise(){H.a.reset(),this.props.setProgressToCurrentExercise()},currentWorkspace:function currentWorkspace(){return this.props.currentExercise.workspace},initialSavepointSlug:function initialSavepointSlug(){return"".concat(this.props.currentExercise.slug,"-initial")},mayResetExercise:function mayResetExercise(){return void 0!==this.adapter&&function getCheckpointCount(){var e=z.a.state.checkpoints;return e?e.length:0}()>0},finalSavepointSlug:function finalSavepointSlug(){return"".concat(this.props.currentExercise.slug,"-final")},getWorkspaceSetupCommand:function getWorkspaceSetupCommand(){return s()(this.props.currentExercise,"setup.command")},getTitle:function getTitle(){var e=this.props,t=e.courseTitle,r=e.currentLesson;return t||r.title},render:function render(){var e=this.props,t=e.currentLesson,r=e.currentExercise,n=e.courseSlug,o=e.forumCategory,c=e.hasButterbar,i=e.programSlug,a={isAnon:j.a.isAnon()},p={readonly:this.state.readonly,fileNavReady:this.state.fileNavReady,isProject:!1,disableLinting:this.props.isLintingDisabled},l={errors:this.state.errors,wall:this.pickAWall(),contentItemTitle:r.title,contentParentTitle:t.title,bugReportData:{course:n||i,skill:t.slug,exercise:r.slug,backend:this.currentWorkspace().backend},generatedWorkspaceName:"".concat(t.slug,"-").concat(r.slug),forumCategory:o},d={componentShouldBeDisabled:this.componentShouldBeDisabled},f=h()({francine:!0,"francine--butterbar":c}),b=Object.keys(r.components),m=b.includes("PersistentCodeEditor"),x=b.length>2,g=!(m&&x);return u.a.createElement("div",{id:"workspace",className:f},g&&u.a.createElement(U.a,{type:"modal"}),u.a.createElement(O.a,{exitPaths:this.props.exitPaths,title:this.getTitle(),setProgressToCurrentExercise:this.setProgressToCurrentExercise,currentExercise:this.props.currentExercise,private:this.props.currentLesson.private,prerender:this.props.prerender,contentStudioURL:this.props.contentStudioURL,nolock:this.state.nolock,authoringMode:this.state.authoringMode,uploadSavepoints:this.state.uploadSavepoints,authors:this.props.authors,contentType:"lesson"}),this.discoveryCues(),this.props.inComponentGridRewrite?u.a.createElement(w.a,{key:this.props.currentExercise.slug,components:this.props.currentExercise.components,adapter:this.adapter,modifiers:p,helpers:d,presenter:l,user:a}):u.a.createElement(y.a,{ref:"componentGrid",key:this.props.currentExercise.slug,components:this.props.currentExercise.components,adapter:this.adapter,modifiers:p,helpers:d,presenter:l,user:a}),u.a.createElement(E.c,{currentType:"lesson",disabled:this.componentShouldBeDisabled("Footer"),currentLesson:this.props.currentLesson,currentExercise:this.props.currentExercise,params:this.props.locationParams,contentItemProgresses:this.props.contentItemProgresses,titleRoute:s()(this.props,"exitPaths.back"),title:"".concat(this.props.currentExerciseIndex+1,". ").concat(this.props.currentExercise.title),unlockAll:this.state.nolock,authors:this.props.authors,navigate:this.navigate,entityTitle:this.getTitle()},u.a.createElement(E.b,{position:"center"},u.a.createElement(D,{exitPaths:this.props.exitPaths,mayProceed:this.state.nolock||this.props.canAccessNextExercise,currentLesson:this.props.currentLesson,currentExerciseIndex:this.props.currentExerciseIndex,currentExercise:this.props.currentExercise,contentItemProgresses:this.props.contentItemProgresses,exerciseNames:this.props.currentLesson.exercises.map(function(e){return e.slug}),navigate:this.navigate,allowReset:this.mayResetExercise()})),u.a.createElement(E.b,{position:"right"},u.a.createElement(G.a,{noun:"exercise",allowReset:this.mayResetExercise(),contentSlug:this.props.currentLesson.slug,contentTitle:this.props.currentLesson.title,courseMeta:this.props.courseMeta||{}}))))}});t.a=Object(d.b)(null,function mapDispatchToProps(e){return{setProgressToCurrentExercise:function setProgressToCurrentExercise(){return e(Object(K.c)())}}})(V)},"./webpack/assets/javascripts/platform/state/entities/contentItemProgresses/actions/lesson.js":function(e,t,r){"use strict";var n=r("./node_modules/@babel/runtime/regenerator/index.js"),s=r.n(n),o=r("./node_modules/lodash/isNumber.js"),c=r.n(o),i=r("./node_modules/lodash/isUndefined.js"),a=r.n(i),u=r("./webpack/assets/javascripts/platform/state/entities/contentItemProgresses/selectors.js"),p=r("./webpack/assets/javascripts/platform/state/entities/contentItems/selectors.js"),l=r("./webpack/assets/javascripts/platform/state/selectors.js"),d=r("./webpack/assets/javascripts/libs/genericRequest/index.js"),f=r("./webpack/assets/javascripts/libs/logging/logger.js"),b=function asyncDelay(e){return new Promise(function(t){return setTimeout(function(){t()},e)})},h=r("./webpack/assets/javascripts/platform/libs/activityLogger.js"),m=r("./webpack/assets/javascripts/libs/hotjar.js"),x=r("./webpack/assets/javascripts/platform/state/ui/actions.js"),g=r("./webpack/assets/javascripts/platform/state/location/selectors.js"),v=r("./webpack/assets/javascripts/platform/state/entities/courses/selectors.js"),j=r("./webpack/assets/javascripts/platform/state/entities/selectors.js"),_=r("./webpack/assets/javascripts/platform/state/entities/contentItemProgresses/actions/index.js");function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){_defineProperty(e,t,r[t])})}return e}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function asyncGeneratorStep(e,t,r,n,s,o,c){try{var i=e[o](c),a=i.value}catch(e){return void r(e)}i.done?t(a):Promise.resolve(a).then(n,s)}function _asyncToGenerator(e){return function(){var t=this,r=arguments;return new Promise(function(n,s){var o=e.apply(t,r);function _next(e){asyncGeneratorStep(o,n,s,_next,_throw,"next",e)}function _throw(e){asyncGeneratorStep(o,n,s,_next,_throw,"throw",e)}_next(void 0)})}}var k=function updateCourseProgressHandlers(e){var t=e.course,r=e.lesson,n=e.oldProgress;return function(){var e=_asyncToGenerator(s.a.mark(function _callee(e,o){var c,i,a,p,l,b,h;return s.a.wrap(function _callee$(s){for(;;)switch(s.prev=s.next){case 0:return c=Object(j.h)(o(),t),i=Object(u.a)(o(),r),a=i.completed,p=a?c.lesson+1:c.lesson,l=a?0:c.exercise,s.prev=4,s.next=7,Object(d.a)({method:"POST",endpoint:"/learn/update_progress_handlers",data:{course_id:t.slug,new_progress:{current_state:_objectSpread({},c,{lesson:p,exercise:l})},old_progress:{current_state:_objectSpread({},n)}}});case 7:return b=s.sent,s.next=10,b.json();case 10:if(h=s.sent,b.ok){s.next=13;break}throw Error(b.statusText);case 13:h.achievements&&h.achievements.length&&e(Object(x.b)(h.achievements)),s.next=19;break;case 16:s.prev=16,s.t0=s.catch(4),f.a.error("Unable to process progress update: ".concat(s.t0));case 19:case"end":return s.stop()}},_callee,this,[[4,16]])}));return function(t,r){return e.apply(this,arguments)}}()},y=function createProgressRequest(e){return _asyncToGenerator(s.a.mark(function _callee2(){return s.a.wrap(function _callee2$(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(d.a)({method:"POST",endpoint:"/learn/update_progress",data:e}));case 1:case"end":return t.stop()}},_callee2,this)}))},w=function updateLessonProgressOnServer(e){var t=e.lesson,r=void 0===t?{}:t,n=e.newProgress,o=void 0===n?{}:n,c=e.isLessonComplete;return function(){var e=_asyncToGenerator(s.a.mark(function _callee3(e,t){var n,i,a,u,p,l,d,x,w,O;return s.a.wrap(function _callee3$(s){for(;;)switch(s.prev=s.next){case 0:return n=t(),i=n,o.exercise>=r.exercises.length&&(c=!0),a={lesson_id:r.id,new_progress:o,is_lesson_complete:c},s.prev=4,u=y(a),s.next=8,u();case 8:if(p=s.sent,l=1,p.ok){s.next=17;break}return s.next=13,b(500);case 13:return l+=1,s.next=16,u();case 16:p=s.sent;case 17:if(p.ok){s.next=24;break}return s.next=20,b(1e3);case 20:return l+=1,s.next=23,u();case 23:p=s.sent;case 24:if(p.ok){s.next=26;break}throw Error(p.statusText);case 26:return s.next=28,p.json();case 28:return d=s.sent,s.next=31,e(Object(_.c)(d));case 31:Object(h.a)("info","Successfully persisted progress for content_item after ".concat(l," tries: ").concat(JSON.stringify(a))),s.next=41;break;case 34:return s.prev=34,s.t0=s.catch(4),Object(m.a)("tagRecording",["Failed to Save Exercise Progress"]),s.next=39,e(Object(_.d)({content_item_id:a.lesson_id,exercises_completed:o.exercise,current_exercise_checkpoints_completed:o.checkpoint,completed:Boolean(c),progress_pct:Math.floor(o.exercise/r.exercises.length*100)}));case 39:Object(h.a)("warn","Failed to persist progress for content_item : ".concat(JSON.stringify(a))),f.a.error({message:"Unable to propagate new_progress to the server : ".concat(s.t0," : ").concat(JSON.stringify(a,null,2))});case 41:if(!(x=Object(g.a)(i).course)){s.next=47;break}return w=Object(v.a)(i,{slug:x}),O=Object(j.h)(i,w),s.next=47,e(k({course:w,lesson:r,oldProgress:O}));case 47:case"end":return s.stop()}},_callee3,this,[[4,34]])}));return function(t,r){return e.apply(this,arguments)}}()};function lesson_asyncGeneratorStep(e,t,r,n,s,o,c){try{var i=e[o](c),a=i.value}catch(e){return void r(e)}i.done?t(a):Promise.resolve(a).then(n,s)}function lesson_asyncToGenerator(e){return function(){var t=this,r=arguments;return new Promise(function(n,s){var o=e.apply(t,r);function _next(e){lesson_asyncGeneratorStep(o,n,s,_next,_throw,"next",e)}function _throw(e){lesson_asyncGeneratorStep(o,n,s,_next,_throw,"throw",e)}_next(void 0)})}}function getCurrentLessonAndExercise(e){var t=Object(l.c)(e),r=Object(l.e)(e),n=Object(p.g)(e,t,r);return{lesson:t,exercise:r,exerciseIndex:n,exerciseCheckpointCount:Object(p.e)(e,{lessonId:t.id,exerciseIndex:n}),farthestCheckpointIndex:Object(u.c)(e,t)}}r.d(t,"a",function(){return O}),r.d(t,"b",function(){return E}),r.d(t,"c",function(){return S});var O=function advanceProgressByCheckpoint(e){return function(){var t=lesson_asyncToGenerator(s.a.mark(function _callee(t,r){var n,o,i,u,p,d,f,b,h,m,x,g;return s.a.wrap(function _callee$(s){for(;;)switch(s.prev=s.next){case 0:if(!a()(e)){s.next=2;break}throw new TypeError('Expected number of checkpoints in "advanceProgressByCheckpoint" action');case 2:if(c()(e)){s.next=4;break}throw new TypeError('Expected number of checkpoints to be an Integer in "advanceProgressByCheckpoint" action');case 4:if(!(e<1)){s.next=6;break}return s.abrupt("return");case 6:if(n=r(),Object(l.b)(n)){s.next=9;break}return s.abrupt("return");case 9:return o=getCurrentLessonAndExercise(n),i=o.lesson,u=o.exerciseIndex,p=o.exerciseCheckpointCount,d=o.farthestCheckpointIndex,f=d+e,h=(b=u)>=i.exercises.length-1,m=f>=p,x=h&&m,m&&(b=u+1,f=0),g={exercise:b,checkpoint:f},s.next=19,t(w({lesson:i,newProgress:g,isLessonComplete:x}));case 19:case"end":return s.stop()}},_callee,this)}));return function(e,r){return t.apply(this,arguments)}}()},E=function advanceProgressToNextExercise(){return function(){var e=lesson_asyncToGenerator(s.a.mark(function _callee2(e,t){var r,n,o,c,i;return s.a.wrap(function _callee2$(s){for(;;)switch(s.prev=s.next){case 0:return r=t(),n=getCurrentLessonAndExercise(r),o=n.exerciseCheckpointCount,c=n.farthestCheckpointIndex,i=o-c,s.next=5,e(O(i));case 5:case"end":return s.stop()}},_callee2,this)}));return function(t,r){return e.apply(this,arguments)}}()},S=function setProgressToCurrentExercise(){return function(){var e=lesson_asyncToGenerator(s.a.mark(function _callee3(e,t){var r,n,o,c,i;return s.a.wrap(function _callee3$(s){for(;;)switch(s.prev=s.next){case 0:return r=t(),n=getCurrentLessonAndExercise(r),o=n.lesson,c=n.exerciseIndex,i={checkpoint:0,exercise:c},s.next=5,e(w({lesson:o,newProgress:i}));case 5:case"end":return s.stop()}},_callee3,this)}));return function(t,r){return e.apply(this,arguments)}}()}},"./webpack/assets/javascripts/platform/state/entities/modules/selectors.js":function(e,t,r){"use strict";r.d(t,"b",function(){return s}),r.d(t,"a",function(){return o});var n=r("./node_modules/reselect/lib/index.js"),s=function selectModules(e){return e.entities.modules.byId},o=(Object(n.createSelector)(s,function(e,t){return t.id},function(e,t){return e[t]}),Object(n.createSelector)(s,function(e,t){return t.slug},function(e,t){return Object.values(e).find(function(e){return e.slug===t})}))},"./webpack/assets/javascripts/platform/state/entities/paths/selectors.js":function(e,t,r){"use strict";r.d(t,"a",function(){return o}),r.d(t,"b",function(){return c});var n=r("./node_modules/reselect/lib/index.js"),s=function selectPaths(e){return e.entities.paths.byId},o=Object(n.createSelector)(s,function(e,t){return t},function(e,t){return e[t]}),c=Object(n.createSelector)(s,function(e,t){return t},function(e,t){return Object.values(e).find(function(e){return e.slug===t})})},"./webpack/assets/javascripts/platform/state/entities/selectors.js":function(e,t,r){"use strict";r.d(t,"e",function(){return h}),r.d(t,"f",function(){return m}),r.d(t,"a",function(){return w}),r.d(t,"h",function(){return E}),r.d(t,"d",function(){return S}),r.d(t,"c",function(){return P}),r.d(t,"g",function(){return C}),r.d(t,"b",function(){return I});var n=r("./node_modules/reselect/lib/index.js"),s=r("./webpack/assets/javascripts/libs/state/entityHelpers.js"),o=r("./webpack/assets/javascripts/platform/state/selectors.js"),c=r("./webpack/assets/javascripts/platform/state/location/selectors.js"),i=r("./webpack/assets/javascripts/platform/state/entities/contentItems/selectors.js"),a=r("./webpack/assets/javascripts/platform/state/entities/paths/selectors.js"),u=r("./webpack/assets/javascripts/platform/state/entities/tracks/selectors.js"),p=r("./webpack/assets/javascripts/platform/state/entities/modules/selectors.js"),l=r("./webpack/assets/javascripts/platform/state/entities/courses/selectors.js"),d=r("./webpack/assets/javascripts/platform/state/entities/contentItemProgresses/selectors.js");function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){_defineProperty(e,t,r[t])})}return e}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var f=Object(n.createSelector)(function(e,t){return Object(a.a)(e,t)},u.c,function(e,t){return e.track_ids.map(function(e){return t[e]})}),b=Object(n.createSelector)(function(e,t){return f(e,t)},p.b,function(e,t){return e.reduce(function(e,r){return e.concat(r.module_ids.map(function(e){return t[e]}))},[])}),h=Object(n.createSelector)(function(e,t){return Object(a.a)(e,t)},function(e,t){return f(e,t)},function(e,t){return b(e,t)},function(e,t,r){return _objectSpread({},e,{tracks:t,modules:r,contentItemIds:r.reduce(function(e,t){return e.concat(t.content_item_ids)},[])})}),m=Object(n.createSelector)(function(e,t){return Object(u.a)(e,t)},p.b,i.d,function(e,t,r){var n=e.module_ids.map(function(e){return t[e]});return _objectSpread({},e,{modules:n,contentItems:n.reduce(function(e,t){return e.concat(t.content_item_ids.map(function(e){return r[e]}))},[]).filter(Boolean),contentItemIds:n.reduce(function(e,t){return e.concat(t.content_item_ids)},[])})}),x=Object(n.createSelector)(l.b,i.d,function(e,t){return Object(s.b)(t,e.content_items)}),g=(Object(n.createSelector)(l.b,i.d,function(e,t){return Object(s.b)(t,e.content_items)}),Object(n.createSelector)(l.b,x,function(e,t){return e.content_items.map(function(e){return t[e]}).filter(function(e){return e&&"lesson"===e.type})})),v=(Object(n.createSelector)(g,function(e,t,r){return r.id},function(e,t){return e.findIndex(function(e){return e.id===t})}),Object(n.createSelector)(g,d.b,function(e,t){return e.find(function(e){var r=t[e.id];return r&&!r.completed})||e[e.length-1]})),j=Object(n.createSelector)(v,g,function(e,t){return t.findIndex(function(t){return t.id===e.id})}),_=Object(n.createSelector)(v,d.b,function(e,t){var r=t[e.id];return r.completed?e.exercises.length:r.exercises_completed}),k=(Object(n.createSelector)(v,_,function(e,t){return e.exercises[t]}),Object(n.createSelector)(v,d.b,function(e,t){return t[e.id].current_exercise_checkpoints_completed||0})),y=Object(n.createSelector)(function(e,t){var r=t.lessonId;return Object(d.a)(e,{id:r})},function(e,t){return t.exerciseIndex},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return!!(e.completed||0===t||t<=e.exercises_completed)}),w=Object(n.createSelector)(function(e){return e},function(e){return Object(o.c)(e)},function(e){return Object(c.a)(e)},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{exercises:[]},r=(arguments.length>2?arguments[2]:void 0).exerciseSlug,n=t.exercises.findIndex(function(e){return e.slug===r});return y(e,{lessonId:t.id,exerciseIndex:n})}),O=Object(n.createSelector)(d.b,function(e){return Object(o.c)(e)},function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})[(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).id]}),E=Object(n.createSelector)(j,_,k,function(e,t,r){return{lesson:e,exercise:t,checkpoint:r}}),S=Object(n.createSelector)(O,function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).started}),P=Object(n.createSelector)(O,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return!!e.current_exercise_checkpoints_completed&&e.current_exercise_checkpoints_completed>0}),C=Object(n.createSelector)(O,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.exercises_completed?e.exercises_completed:0}),I=Object(n.createSelector)(function(e){return e},function(e){return O(e)},function(e){return Object(o.c)(e)},function(e){return Object(c.a)(e)},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{exercises:[]},n=(arguments.length>3?arguments[3]:void 0).exerciseSlug;if(t.completed)return!0;var s=r.exercises.findIndex(function(e){return e.slug===n}),o=Object(i.a)(e,r.id),c=t.exercises_completed,a=o&&o[s]>0,u=o&&o[s]<=t.current_exercise_checkpoints_completed,p=s===t.exercises_completed;return s<c||!!(p&&a&&u)})},"./webpack/assets/javascripts/platform/state/entities/tracks/selectors.js":function(e,t,r){"use strict";r.d(t,"c",function(){return s}),r.d(t,"a",function(){return o}),r.d(t,"b",function(){return c});var n=r("./node_modules/reselect/lib/index.js"),s=function selectTracks(e){return e.entities.tracks.byId},o=Object(n.createSelector)(s,function(e,t){return t},function(e,t){return e[t]}),c=Object(n.createSelector)(s,function(e,t){return t},function(e,t){return Object.values(e).find(function(e){return e.slug===t})})}}]);
//# sourceMappingURL=e531396e485528c05786-b0651dd8d69da1e99508.js.map