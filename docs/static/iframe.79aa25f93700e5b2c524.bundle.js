(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1054:function(e,t,n){"use strict";n.r(t),function(e){var t=n(0),r=n.n(t),a=n(106),o=n(141),i=n(744),l=n.n(i);Object(a.storiesOf)("Docs",e).addDecorator(function(e){return r.a.createElement("div",{style:{maxWidth:"50rem"}},e())}).add("Introduction",function(){return r.a.createElement(o.Markdown,null,l.a)}).add("Installation",function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Installation"),r.a.createElement("p",null,"With ",r.a.createElement(o.Code,null,"yarn"),":"),r.a.createElement(o.CodeBlock,null,"yarn add @exivity/proton"),r.a.createElement("p",null,"With ",r.a.createElement(o.Code,null,"npm"),":"),r.a.createElement(o.CodeBlock,null,"npm i @exivity/proton"))}).add("Usage",function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Usage"))}).add("Development",function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Development"))})}.call(this,n(225)(e))},273:function(e,t,n){"use strict";var r=n(745),a=n(646),o=new r.a({schema:a.a}),i={type:"sun",id:"sun",attributes:{name:"Sun",classification:"Fusion giant"}},l={type:"planet",id:"jupiter",attributes:{name:"Jupiter",classification:"gas giant",atmosphere:!0}},u={type:"planet",id:"earth",attributes:{name:"Earth",classification:"terrestrial",atmosphere:!0},relationships:{sun:{data:{type:"sun",id:"sun"}}}},d={type:"planet",id:"venus",attributes:{name:"Venus",classification:"terrestrial",atmosphere:!0}},c={type:"moon",id:"io",attributes:{name:"Io"},relationships:{planet:{data:{type:"planet",id:"jupiter"}}}},s={type:"moon",id:"europa",attributes:{name:"Europa"},relationships:{planet:{data:{type:"planet",id:"jupiter"}}}},p={type:"moon",id:"theMoon",attributes:{name:"The Moon"},relationships:{planet:{data:{type:"planet",id:"earth"}}}};o.update(function(e){return[e.addRecord(i),e.addRecord(l),e.addRecord(u),e.addRecord(d),e.addRecord(c),e.addRecord(s),e.addRecord(p)]}),t.a=o},308:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)({});t.a=a},309:function(e,t,n){"use strict";var r=n(33),a=n.n(r),o=n(107),i=n.n(o),l=n(206),u=n.n(l),d=n(7),c=n.n(d),s=n(8),p=n.n(s),f=n(9),m=n.n(f),y=n(14),v=n.n(y),h=n(15),b=n.n(h),R=n(16),g=n.n(R),S=n(6),E=n.n(S),C=n(5),k=n.n(C),A=n(0),O=n.n(A),T=n(1),_=n.n(T),q=n(205),j=n(186),P=n.n(j),I=n(81),w=n.n(I),x=function(e){function t(){var e,n;p()(this,t);for(var r=arguments.length,a=Array(r),o=0;o<r;o++)a[o]=arguments[o];return n=v()(this,(e=b()(t)).call.apply(e,[this].concat(a))),k()(E()(E()(n)),"build",function(){return n.props.buildRecord.apply(void 0,arguments)}),k()(E()(E()(n)),"add",u()(i.a.mark(function e(){var t,r,a,o,l,u,d,c,s,p,f=arguments;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(t=n.props,r=t.beforeAdd,a=t.addRecord,o=t.onAdd,l=t.onError,u=f.length,d=Array(u),c=0;c<u;c++)d[c]=f[c];if(!r){e.next=10;break}return e.next=5,r.apply(void 0,d);case 5:s=e.sent,p=!0===s?d:s,s&&a.apply(void 0,w()(p)).then(o).catch(l),e.next=11;break;case 10:a.apply(void 0,d).then(o).catch(l);case 11:case"end":return e.stop()}},e,this)}))),k()(E()(E()(n)),"update",u()(i.a.mark(function e(){var t,r,a,o,l,u,d,c,s,p,f=arguments;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(t=n.props,r=t.beforeUpdate,a=t.updateRecord,o=t.onUpdate,l=t.onError,u=f.length,d=Array(u),c=0;c<u;c++)d[c]=f[c];if(!r){e.next=10;break}return e.next=5,r.apply(void 0,d);case 5:s=e.sent,p=!0===s?d:s,s&&a.apply(void 0,w()(p)).then(o).catch(l),e.next=11;break;case 10:a.apply(void 0,d).then(o).catch(l);case 11:case"end":return e.stop()}},e,this)}))),k()(E()(E()(n)),"remove",u()(i.a.mark(function e(){var t,r,a,o,l,u,d,c,s,p,f=arguments;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(t=n.props,r=t.beforeRemove,a=t.removeRecord,o=t.onRemove,l=t.onError,u=f.length,d=Array(u),c=0;c<u;c++)d[c]=f[c];if(!r){e.next=10;break}return e.next=5,r.apply(void 0,d);case 5:s=e.sent,p=!0===s?d:s,s&&a.apply(void 0,w()(p)).then(o).catch(l),e.next=11;break;case 10:a.apply(void 0,d).then(o).catch(l);case 11:case"end":return e.stop()}},e,this)}))),n}return g()(t,e),m()(t,[{key:"render",value:function(){var e={build:this.build,add:this.add,update:this.update,remove:this.remove};return this.props.children(e)}}]),t}(A.PureComponent);x.propTypes={children:_.a.func.isRequired,buildRecord:_.a.func,addRecord:_.a.func,updateRecord:_.a.func,removeRecord:_.a.func,onAdd:_.a.func,onUpdate:_.a.func,onRemove:_.a.func,beforeAdd:_.a.func,beforeUpdate:_.a.func,beforeRemove:_.a.func,onError:_.a.func},x.defaultProps={buildRecord:function(){},addRecord:function(){},updateRecord:function(){},removeRecord:function(){},onAdd:function(){},onUpdate:function(){},onRemove:function(){},onError:function(){}};var B=x;x.__docgenInfo={description:"",methods:[{name:"build",docblock:null,modifiers:[],params:[{name:"...args",type:null}],returns:null},{name:"add",docblock:null,modifiers:["async"],params:[{name:"...args",type:null}],returns:null},{name:"update",docblock:null,modifiers:["async"],params:[{name:"...args",type:null}],returns:null},{name:"remove",docblock:null,modifiers:["async"],params:[{name:"...args",type:null}],returns:null}],displayName:"Crud",props:{buildRecord:{defaultValue:{value:"() => {}",computed:!1},type:{name:"func"},required:!1,description:"Function to build objectType."},addRecord:{defaultValue:{value:"() => {}",computed:!1},type:{name:"func"},required:!1,description:"Function to add record."},updateRecord:{defaultValue:{value:"() => {}",computed:!1},type:{name:"func"},required:!1,description:"Function to update record."},removeRecord:{defaultValue:{value:"() => {}",computed:!1},type:{name:"func"},required:!1,description:"Function to remove record."},onAdd:{defaultValue:{value:"() => {}",computed:!1},type:{name:"func"},required:!1,description:"Callback called when add() resolves. Provides added record."},onUpdate:{defaultValue:{value:"() => {}",computed:!1},type:{name:"func"},required:!1,description:"Callback called when update() resolves. Provides updated record."},onRemove:{defaultValue:{value:"() => {}",computed:!1},type:{name:"func"},required:!1,description:"Callback called when remove() resolves. Provides removed record."},onError:{defaultValue:{value:"() => {}",computed:!1},type:{name:"func"},required:!1,description:"Callback called when one of crud function catches"},children:{type:{name:"func"},required:!0,description:"Callback with build, add, update, remove promises."},beforeAdd:{type:{name:"func"},required:!1,description:"Callback called before add(). Takes a promise or function.\r\n   Return truthy value to proceed with add()"},beforeUpdate:{type:{name:"func"},required:!1,description:"Callback called before update(). Takes a promise or function.\r\n   Return truthy value to proceed with update()"},beforeRemove:{type:{name:"func"},required:!1,description:"Callback called before remove(). Takes a promise or function.\r\n   Return truthy value to proceed with remove()"}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\Crud.js"]={name:"Crud",docgenInfo:x.__docgenInfo,path:"src\\Crud.js"});var D=n(133),U=n.n(D),L=n(308);n(856);var N=function(e){var t=function(t){function n(){return p()(this,n),v()(this,b()(n).apply(this,arguments))}return g()(n,t),m()(n,[{key:"render",value:function(){var t=this;return O.a.createElement(L.a.Consumer,null,function(n){n.performTransforms;var r=U()(n,["performTransforms"]);return O.a.createElement(e,a()({},r,t.props))})}}]),n}(A.PureComponent);return t.displayName=function(e){return e.displayName||e.name||"OrbitModel"}(e),t},M=["id","type","related","relatedTo","children","queryStore","updateStore","buildRecord","addRecord","updateRecord","removeRecord","cache"],K=function(e){function t(e){var n;return p()(this,t),n=v()(this,b()(t).call(this,e)),k()(E()(E()(n)),"queryStoreById",function(e){n.props.queryStore(function(t){return t.findRecord({type:n.props.type,id:e})}).then(function(){return n.setState({loading:!1})}).catch(function(e){n.setState({loading:!1,error:e})})}),k()(E()(E()(n)),"queryStoreByRelation",function(e){var t=e.type,r=e.id;n.props.queryStore(function(e){return e.findRelatedRecord({type:t,id:r},n.props.type)}).then(function(){return n.setState({searchedAllSources:!0,loading:!1})}).catch(function(e){n.setState({loading:!1,error:e})})}),k()(E()(E()(n)),"findAndSetProperty",function(e,t,r){1===e.length?t[e]=r:n.findAndSetProperty(e.slice(1),t[e[0]],r)}),k()(E()(E()(n)),"setPropertyByPath",function(e,t){var r=c()({},n.state[n.props.type]);n.findAndSetProperty(e,r,t),n.setState(k()({},n.props.type,r))}),k()(E()(E()(n)),"setProperty",function(e){for(var t=arguments.length,r=Array(1<t?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];if(2===r.length){var o=r[0],i=r[1],l="relationships"===e?{data:i}:i;return function(){return n.setPropertyByPath([e,o],l)}}return function(t){var a="relationships"===e?{data:t}:t;n.setPropertyByPath([e].concat(r),a)}}),k()(E()(E()(n)),"setAttribute",function(){for(var e,t=arguments.length,r=Array(t),a=0;a<t;a++)r[a]=arguments[a];return(e=n).setProperty.apply(e,["attributes"].concat(r))}),k()(E()(E()(n)),"setRelationship",function(){for(var e,t=arguments.length,r=Array(t),a=0;a<t;a++)r[a]=arguments[a];return(e=n).setProperty.apply(e,["relationships"].concat(r))}),k()(E()(E()(n)),"resetAttributes",function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:void 0;e.map(function(e){return n.setPropertyByPath(["attributes",e],t)})}),k()(E()(E()(n)),"beforeRemove",function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];var a=n.props.beforeRemove;return new Promise(function(){var e=u()(i.a.mark(function e(r){var o;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=8;break}return e.next=3,a.apply(void 0,t);case 3:(o=e.sent)&&n.setState({loading:!0}),r(o),e.next=10;break;case 8:n.setState({loading:!0}),r(!0);case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}())}),k()(E()(E()(n)),"onRemove",function(){var e,t=n.props,r=t.type,a=t.onRemove;n.setState((e={},k()(e,r,null),k()(e,"loading",!1),e)),a&&a.apply(void 0,arguments)}),k()(E()(E()(n)),"onError",function(e){var t=n.props.onError;n.setState({loading:!1}),t&&t(e)}),n.state={idReference:null,recordReference:null},n}return g()(t,e),m()(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.id,n=e.related,r=e.relatedTo;this.state.loading&&(n&&r?this.queryStoreByRelation(r):t&&this.queryStoreById(t))}},{key:"componentDidUpdate",value:function(){var e=this.props,t=e.id,n=e.related,r=e.relatedTo;this.state.loading&&(n&&r?this.queryStoreByRelation(r):t&&this.queryStoreById(t))}},{key:"render",value:function(){var e=this,t=this.props,n=t.type,r=t.children,o=t.relatedTo,i=this.state[n],l=P()(this.props,M.concat([n])),u=!o&&i&&i.id?i:o,d={loading:!!this.props.loading||this.state.loading,error:this.props.error||this.state.error};return O.a.createElement(B,a()({},this.props,{beforeRemove:this.beforeRemove,onRemove:this.onRemove,onError:this.onError}),function(t){var a=t.add,s=t.update,p=t.remove,f=i?c()({},i,{setAttribute:e.setAttribute,setRelationship:e.setRelationship,resetAttributes:e.resetAttributes,setProperty:e.setPropertyByPath,save:i&&!i.id?function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return a.apply(void 0,[c()({},i)].concat(t))}:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return s.apply(void 0,[c()({},i)].concat(t))},remove:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return p.apply(void 0,[c()({},i)].concat(t))}}):null;if(d.loading||d.error){var m=c()(k()({},n,null),d);return"function"==typeof r?r(m):"Collection"===r.type.displayName?O.a.cloneElement(e.props.children,c()({key:"".concat(n,"-relatedTo-").concat(o&&o.id)},m,{relatedTo:u})):O.a.cloneElement(e.props.children,c()({},m,{relatedTo:u}))}return"function"==typeof r?r(c()(k()({},n,f),l,d)):"Collection"===r.type.displayName?O.a.cloneElement(e.props.children,c()(k()({key:"".concat(n,"-relatedTo-").concat(o&&o.id)},n,f),l,{relatedTo:u},d)):O.a.cloneElement(e.props.children,c()(k()({},n,f),l,{relatedTo:u},d))})}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.related?function(e,t){var n,r,a,o=!e.relatedTo,i=!!e.relatedTo&&!e[e.type]&&!t.searchedAllSources,l=!!e[e.type]&&e[e.type]!==t.recordReference,u=!e[e.type]&&t.searchedAllSources,d="only"===e.cache;return o?(n={recordReference:null},k()(n,e.type,null),k()(n,"searchedAllSources",!1),k()(n,"loading",!1),k()(n,"error",!1),n):i?(r={recordReference:null},k()(r,e.type,null),k()(r,"loading",!d),k()(r,"error",!1),r):l?(a={recordReference:e[e.type]},k()(a,e.type,e[e.type]),k()(a,"searchedAllSources",!1),k()(a,"loading",!1),k()(a,"error",!1),a):u&&e.required?{loading:!1,error:{message:"Related ".concat(e.type," has not been found while being required")}}:null}(e,t):function(e,t){var n,r,a,o=!e.id&&e.id!==t.idReference,i=!!e.id&&e.id!==t.idReference,l=!!e[e.type]&&e[e.type]!==t.recordReference,u=!!e.id&&!e[e.type],d="only"===e.cache;if(o){var c,s=e.buildRecord(e.type);return c={idReference:e.id,recordReference:s},k()(c,e.type,s),k()(c,"loading",!1),k()(c,"error",!1),c}return i?u?(r={idReference:e.id,recordReference:null},k()(r,e.type,null),k()(r,"loading",!d),k()(r,"error",!1),r):(n={idReference:e.id,recordReference:e[e.type]},k()(n,e.type,e[e.type]),k()(n,"loading",!1),k()(n,"error",!1),n):l?(a={idReference:e.id,recordReference:e[e.type]},k()(a,e.type,e[e.type]),k()(a,"loading",!1),k()(a,"error",!1),a):null}(e,t)}}]),t}(A.PureComponent),Y=N(K);t.a=Object(q.withData)(function(e){var t=e.id,n=e.type,r=e.related,a=e.relatedTo;return"skip"===e.cache?{}:t?k()({},n,function(e){return e.findRecord({type:n,id:t})}):r&&a?k()({},n,function(e){return e.findRelatedRecord({type:a.type,id:a.id},n)}):{}},function(e,t){return(!t.related||!t.relatedTo||t.relatedTo.relationships&&t.relatedTo.relationships[t.type])&&(t.id||t.related)?c()({},t,e):c()({},e,t,k()({},t.type,null))})(Y);K.defaultProps={relatedTo:null,cache:"auto"},K.propTypes={type:_.a.string,id:_.a.string,cache:_.a.oneOf(["only","skip","auto"]),buildRecord:_.a.func.isRequired,addRecord:_.a.func.isRequired,updateRecord:_.a.func.isRequired,removeRecord:_.a.func.isRequired,beforeAdd:_.a.func,onAdd:_.a.func,beforeUpdate:_.a.func,onUpdate:_.a.func,beforeRemove:_.a.func,onRemove:_.a.func,related:_.a.bool,relatedTo:_.a.object,required:_.a.bool},K.__docgenInfo={description:"",methods:[{name:"getDerivedStateFromProps",docblock:null,modifiers:["static"],params:[{name:"props",type:null},{name:"state",type:null}],returns:null},{name:"queryStoreById",docblock:null,modifiers:[],params:[{name:"id",type:null}],returns:null},{name:"queryStoreByRelation",docblock:null,modifiers:[],params:[{name:"{ type, id }",type:null}],returns:null},{name:"findAndSetProperty",docblock:null,modifiers:[],params:[{name:"path",type:null},{name:"record",type:null},{name:"value",type:null}],returns:null},{name:"setPropertyByPath",docblock:null,modifiers:[],params:[{name:"path",type:null},{name:"value",type:null}],returns:null},{name:"setProperty",docblock:null,modifiers:[],params:[{name:"property",type:null},{name:"...args",type:null}],returns:null},{name:"setAttribute",docblock:null,modifiers:[],params:[{name:"...args",type:null}],returns:null},{name:"setRelationship",docblock:null,modifiers:[],params:[{name:"...args",type:null}],returns:null},{name:"resetAttributes",docblock:null,modifiers:[],params:[{name:"attributes",type:null},{name:"value",type:null}],returns:null},{name:"beforeRemove",docblock:null,modifiers:[],params:[{name:"...args",type:null}],returns:null},{name:"onRemove",docblock:null,modifiers:[],params:[{name:"...args",type:null}],returns:null},{name:"onError",docblock:null,modifiers:[],params:[{name:"error",type:null}],returns:null}],displayName:"Record",props:{relatedTo:{defaultValue:{value:"null",computed:!1},type:{name:"object"},required:!1,description:""},cache:{defaultValue:{value:"'auto'",computed:!1},type:{name:"enum",value:[{value:"'only'",computed:!1},{value:"'skip'",computed:!1},{value:"'auto'",computed:!1}]},required:!1,description:""},type:{type:{name:"string"},required:!1,description:""},id:{type:{name:"string"},required:!1,description:""},buildRecord:{type:{name:"func"},required:!0,description:""},addRecord:{type:{name:"func"},required:!0,description:""},updateRecord:{type:{name:"func"},required:!0,description:""},removeRecord:{type:{name:"func"},required:!0,description:""},beforeAdd:{type:{name:"func"},required:!1,description:""},onAdd:{type:{name:"func"},required:!1,description:""},beforeUpdate:{type:{name:"func"},required:!1,description:""},onUpdate:{type:{name:"func"},required:!1,description:""},beforeRemove:{type:{name:"func"},required:!1,description:""},onRemove:{type:{name:"func"},required:!1,description:""},related:{type:{name:"bool"},required:!1,description:""},required:{type:{name:"bool"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\Record.js"]={name:"Record",docgenInfo:K.__docgenInfo,path:"src\\Record.js"})},310:function(e,t,n){"use strict";var r=n(7),a=n.n(r),o=n(8),i=n.n(o),l=n(9),u=n.n(l),d=n(14),c=n.n(d),s=n(15),p=n.n(s),f=n(16),m=n.n(f),y=n(6),v=n.n(y),h=n(5),b=n.n(h),R=n(0),g=n.n(R),S=n(1),E=n.n(S),C=n(205),k=n(311),A=n.n(k),O=n(186),T=n.n(O),_=n(131),q=n.n(_),j=function(e,t){var n=Object.keys(t).reduce(function(e,n){return t[n]&&(e[n]=t[n]),e},{});return Object.entries(n).reduce(function(e,t){var n=q()(t,2),r=n[0],a=n[1];return function(){return e.apply(void 0,arguments)[r](a)}},e)},P=["id","type","related","relatedTo","children","queryStore","updateStore","plural","cache"],I=function(e){function t(e){var n;return i()(this,t),n=c()(this,p()(t).call(this,e)),b()(v()(v()(n)),"startQuery",function(e){n.setState({loading:!0,error:!1},e)}),b()(v()(v()(n)),"query",function(){var e=n.props,t=e.queryStore,r=e.type;t(function(e){return e.findRecords(r)}).then(function(){return n.setState({loading:!1})}).catch(function(e){n.setState({loading:!1,error:e})})}),b()(v()(v()(n)),"queryRelated",function(){var e=n.props,t=e.queryStore,r=e.relatedTo;t(function(e){return e.findRelatedRecords({type:r.type,id:r.id},n.pluralizedType)}).then(function(){return n.setState({loading:!1})}).catch(function(e){n.setState({loading:!1,error:e})})}),b()(v()(v()(n)),"findOne",function(e){return n.props[n.props.type].find(function(t){return t.id===e})}),b()(v()(v()(n)),"find",function(e){var t=n.props[n.props.type];return e.map(function(e){return t.find(function(t){return t.id===e})})}),b()(v()(v()(n)),"findByAttribute",function(e){var t=e.attribute,r=e.value;return n.props[n.props.type].filter(function(e){return e.attributes[t]===r})}),b()(v()(v()(n)),"buildSaveTransforms",function(e){return function(t){return e.map(function(e){return e.id?t.replaceRecord(e):t.addRecord(e)})}}),b()(v()(v()(n)),"buildRemoveTransforms",function(e){return function(t){return e.map(function(e){return t.removeRecord(e)})}}),n.pluralizedType=e.plural||A()(e.type),n.state={loading:!1,error:!1},n}return m()(t,e),u()(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.related,n=e.relatedTo;return"only"===e.cache?null:(t&&n&&this.startQuery(this.queryRelated),void(!t&&this.startQuery(this.query)))}},{key:"render",value:function(){var e,t=this,n=this.props,r=n[this.pluralizedType],o=n.type,i=n.relatedTo,l=n.updateStore,u=n.children,d=T()(this.props,P.concat([o])),c={loading:!!this.props.loading||this.state.loading,error:this.props.error||this.state.error},s={findOne:this.findOne,find:this.find,findByAttribute:this.findByAttribute,all:function(){return r}};if(c.loading||c.error){var p=a()(b()({},this.pluralizedType,null),c);return"function"==typeof u?u(p):g.a.cloneElement(u,p)}var f=a()({},d,(e={},b()(e,this.pluralizedType,s),b()(e,"save",function(e){return l(t.buildSaveTransforms(e))}),b()(e,"remove",function(e){return l(t.buildRemoveTransforms(e))}),e),c);return"function"==typeof this.props.children?u(f):g.a.cloneElement(u,a()({},f,{relatedTo:i}))}}]),t}(R.PureComponent);t.a=Object(C.withData)(function(e){var t=e.type,n=e.plural,r=e.cache,a=e.related,o=e.relatedTo,i=e.sort,l=e.filter,u=e.page,d=n||A()(t);return"skip"===r?{}:a&&o?b()({},d,function(e){return e.findRelatedRecords({type:o.type,id:o.id},d)}):a?{}:b()({},d,j(function(e){return e.findRecords(t)},{sort:i,filter:l,page:u}))},function(e,t){var n=t.plural||A()(t.type);return t.related&&!t.relatedTo?a()({},e,t,b()({},n,[])):a()({},e,t)})(I);I.displayName="Collection",I.defaultProps={cache:"skip"},I.propTypes={type:E.a.string,plural:E.a.string,related:E.a.bool,cache:E.a.oneOf(["only","skip"]),queryStore:E.a.func,updateStore:E.a.func,sort:E.a.oneOfType([E.a.string,E.a.object]),filter:E.a.oneOfType([E.a.string,E.a.object]),page:E.a.oneOfType([E.a.number,E.a.object])},I.__docgenInfo={description:"",methods:[{name:"startQuery",docblock:null,modifiers:[],params:[{name:"query",type:null}],returns:null},{name:"query",docblock:null,modifiers:[],params:[],returns:null},{name:"queryRelated",docblock:null,modifiers:[],params:[],returns:null},{name:"findOne",docblock:null,modifiers:[],params:[{name:"id",type:null}],returns:null},{name:"find",docblock:null,modifiers:[],params:[{name:"ids",type:null}],returns:null},{name:"findByAttribute",docblock:null,modifiers:[],params:[{name:"{ attribute, value }",type:null}],returns:null},{name:"buildSaveTransforms",docblock:null,modifiers:[],params:[{name:"records",type:null}],returns:null},{name:"buildRemoveTransforms",docblock:null,modifiers:[],params:[{name:"records",type:null}],returns:null}],displayName:"Collection",props:{cache:{defaultValue:{value:"'skip'",computed:!1},type:{name:"enum",value:[{value:"'only'",computed:!1},{value:"'skip'",computed:!1}]},required:!1,description:""},type:{type:{name:"string"},required:!1,description:""},plural:{type:{name:"string"},required:!1,description:""},related:{type:{name:"bool"},required:!1,description:""},queryStore:{type:{name:"func"},required:!1,description:""},updateStore:{type:{name:"func"},required:!1,description:""},sort:{type:{name:"union",value:[{name:"string"},{name:"object"}]},required:!1,description:""},filter:{type:{name:"union",value:[{name:"string"},{name:"object"}]},required:!1,description:""},page:{type:{name:"union",value:[{name:"number"},{name:"object"}]},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\Collection.js"]={name:"Collection",docgenInfo:I.__docgenInfo,path:"src\\Collection.js"})},646:function(e,t,n){"use strict";var r=new(n(17).d)({models:{planet:{attributes:{name:{type:"string"},classification:{type:"string"}},relationships:{sun:{type:"hasOne",model:"sun",inverse:"planets"},moons:{type:"hasMany",model:"moon",inverse:"planet"}}},moon:{attributes:{name:{type:"string"}},relationships:{planet:{type:"hasOne",model:"planet",inverse:"moons"}}},sun:{attributes:{name:{type:"string"},classification:{type:"string"}},relationships:{planets:{type:"hasMany",model:"planets",inverse:"sun"}}}}});t.a=r},651:function(e,t,n){"use strict";var r=n(33),a=n.n(r),o=n(0),i=n.n(o),l=n(309),u=function(e){return i.a.createElement(l.a,a()({},e,{type:"planet"}))};t.a=u,u.__docgenInfo={description:"",methods:[],displayName:"Planet"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["orbitStories\\Planet.js"]={name:"Planet",docgenInfo:u.__docgenInfo,path:"orbitStories\\Planet.js"})},652:function(e,t,n){"use strict";var r=n(33),a=n.n(r),o=n(0),i=n.n(o),l=n(310),u=function(e){return i.a.createElement(l.a,a()({type:"planet"},e))};t.a=u,u.__docgenInfo={description:"",methods:[],displayName:"Planets"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["orbitStories\\Planets.js"]={name:"Planets",docgenInfo:u.__docgenInfo,path:"orbitStories\\Planets.js"})},742:function(e,t,n){"use strict";var r=n(33),a=n.n(r),o=n(0),i=n.n(o),l=n(310),u=function(e){return i.a.createElement(l.a,a()({type:"moon"},e))};t.a=u,u.__docgenInfo={description:"",methods:[],displayName:"Moons"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["orbitStories\\Moons.js"]={name:"Moons",docgenInfo:u.__docgenInfo,path:"orbitStories\\Moons.js"})},743:function(e,t,n){"use strict";var r=n(33),a=n.n(r),o=n(0),i=n.n(o),l=n(309),u=function(e){return i.a.createElement(l.a,a()({type:"sun"},e))};t.a=u,u.__docgenInfo={description:"",methods:[],displayName:"Sun"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["orbitStories\\Sun.js"]={name:"Sun",docgenInfo:u.__docgenInfo,path:"orbitStories\\Sun.js"})},744:function(e,t){e.exports='\r\n[![Join the chat at https://gitter.im/exivity/orbit-client](https://badges.gitter.im/exivity/orbit-client.svg)](https://gitter.im/exivity/orbit-client?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)\r\n\r\n"# OrbitClient" \r\n'},746:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(8),i=n.n(o),l=n(9),u=n.n(l),d=n(14),c=n.n(d),s=n(15),p=n.n(s),f=n(16),m=n.n(f),y=n(6),v=n.n(y),h=n(5),b=n.n(h),R=n(1),g=n.n(R),S=function(e){function t(e){var n;return i()(this,t),n=c()(this,p()(t).call(this,e)),b()(v()(v()(n)),"storeState",function(e){n.setState(e)}),n.state=e.store,n}return m()(t,e),u()(t,[{key:"render",value:function(){return this.props.children(this.state,this.storeState)}}]),t}(r.PureComponent),E=S;S.propTypes={children:g.a.func},S.__docgenInfo={description:"",methods:[{name:"storeState",docblock:null,modifiers:[],params:[{name:"value",type:null}],returns:null}],displayName:"StateContainer",props:{children:{type:{name:"func"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook\\StateContainer.js"]={name:"StateContainer",docgenInfo:S.__docgenInfo,path:".storybook\\StateContainer.js"}),n.d(t,"a",function(){return C});var C=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return function(t,n){return a.a.createElement(E,{store:e},function(e,r){return n.state=e,n.storeState=r,t()})}}},747:function(e,t,n){n(312),n(748),e.exports=n(749)},749:function(e,t,n){"use strict";n.r(t),function(e){var t=n(8),r=n.n(t),a=n(9),o=n.n(a),i=n(14),l=n.n(i),u=n(15),d=n.n(u),c=n(16),s=n.n(c),p=n(0),f=n.n(p),m=n(106),y=n(739),v=n(740),h=n(141),b=n(205),R=n(273),g=n(308),S=(n(646),{buildRecord:function(e){return function(e){return{type:e,id:void 0,attributes:{name:"",classification:"",atmosphere:!0}}}(e)},addRecord:function(e){return R.a.update(function(t){return t.addRecord(e)})},updateRecord:function(e){return R.a.update(function(t){return t.replaceRecord(e)})},removeRecord:function(e){return R.a.update(function(t){return t.removeRecord(e)})}}),E=function(e){function t(e){var n;return r()(this,t),(n=l()(this,d()(t).call(this,e))).state={render:!1},n}return s()(t,e),o()(t,[{key:"componentDidMount",value:function(){var e=this;this.timeout=setTimeout(function(){return e.setState({render:!0})},300)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout)}},{key:"render",value:function(){return this.state.render?f.a.createElement(g.a.Provider,{value:S},f.a.createElement(b.DataProvider,{dataStore:R.a},this.props.story())):null}}]),t}(p.Component);Object(m.addDecorator)(y.withInfo),Object(m.addDecorator)(Object(v.withOptions)({name:"@exivity/orbit-client",url:"https://github.com/exivity/orbit-client",showAddonPanel:!0,addonPanelInRight:!0,hierarchySeparator:/\/|\./,hierarchyRootSeparator:/\|/})),Object(m.addDecorator)(function(e){return f.a.createElement("div",{style:{padding:"20px"}},f.a.createElement("style",null,"h1:first-child { margin-top: 0; }"),f.a.createElement(h.WithStyle,null,e()))}),Object(m.addDecorator)(function(e){return f.a.createElement(E,{story:e})});var C=n(852);Object(m.configure)(function(){C.keys().forEach(function(e){return C(e)})},e)}.call(this,n(225)(e))},764:function(e,t,n){var r={"./nestedObjectAssign":657,"./nestedObjectAssign.js":657};function a(e){var t=o(e);return n(t)}function o(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=764},852:function(e,t,n){var r={"./OrbitClient.stories.js":853,"./docs.stories.js":1054};function a(e){var t=o(e);return n(t)}function o(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=852},853:function(e,t,n){"use strict";n.r(t),function(e){var t=n(8),r=n.n(t),a=n(9),o=n.n(a),i=n(14),l=n.n(i),u=n(15),d=n.n(u),c=n(16),s=n.n(c),p=n(0),f=n.n(p),m=n(106),y=n(746),v=n(651),h=n(652),b=n(742),R=n(743),g=function(e,t){return"function"==typeof t?"function":t},S=function(e){var t=e.children;return f.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",width:1e3}},t)},E=function(e){var t=e.state,n=e.storeState;return f.a.createElement("div",null,f.a.createElement("label",null,"Id prop:"),f.a.createElement("input",{style:{marginLeft:10},value:t.planetId||"",onChange:function(e){return n({planetId:e.target.value,beforeAddCalled:!1,onAddCalled:!1,beforeUpdateCalled:!1,onUpdateCalled:!1,beforeRemoveCalled:!1,onRemoveCalled:!1})}}))},C=function(e){var t=e.planet,n=e.state;return f.a.createElement("div",null,f.a.createElement("h3",null,"Planet"),f.a.createElement("form",{style:{display:"flex",flexDirection:"column",justifyContent:"space-around",height:500}},f.a.createElement("label",null,"Name:"),f.a.createElement("input",{value:t.attributes.name,onChange:function(e){return t.setAttribute("name",e.target.value)()}}),f.a.createElement("label",null,"Classification:"),f.a.createElement("input",{value:t.attributes.classification,onChange:function(e){return t.setAttribute("classification",e.target.value)()}}),f.a.createElement("label",null,"Atmosphere:"),f.a.createElement("input",{type:"checkbox",value:t.attributes.atmosphere,onChange:function(e){return t.setAttribute("atmosphere",e.target.value)()}}),f.a.createElement("button",{onClick:function(e){e.preventDefault(),t.save()}},"Save"),f.a.createElement("button",{onClick:function(e){e.preventDefault(),t.remove()}},"Delete"),f.a.createElement("h3",null,"Callbacks"),f.a.createElement("div",null,"beforeAdd called: ".concat(n.beforeAddCalled)),f.a.createElement("div",null,"onAdd called: ".concat(n.onAddCalled)),f.a.createElement("div",null,"beforeUpdate called: ".concat(n.beforeUpdateCalled)),f.a.createElement("div",null,"onUpdate called: ".concat(n.onUpdateCalled)),f.a.createElement("div",null,"beforeRemove called: ".concat(n.beforeRemoveCalled)),f.a.createElement("div",null,"onRemove called: ".concat(n.onRemoveCalled))))},k=function(e){var t=e.planet;return f.a.createElement("div",null,f.a.createElement("h3",null,"Active Record"),f.a.createElement("pre",null,JSON.stringify(t,g,2)))},A=function(e){function t(){return r()(this,t),l()(this,d()(t).apply(this,arguments))}return s()(t,e),o()(t,[{key:"render",value:function(){return f.a.createElement("div",null,f.a.createElement("h3",null,"All planet id's"),f.a.createElement(h.a,null,function(e){var t=e.planets;return f.a.createElement("ul",null,t.all().map(function(e){return f.a.createElement("li",{key:e.id},e.id)}))}))}}]),t}(p.PureComponent),O=function(e){function t(){return r()(this,t),l()(this,d()(t).apply(this,arguments))}return s()(t,e),o()(t,[{key:"render",value:function(){var e=this.props,t=e.moons,n=e.sun;return f.a.createElement("div",null,f.a.createElement("h3",null,"Related moons"),f.a.createElement("ul",null,t.all().map(function(e){return f.a.createElement("li",{key:e.id},e.id)})),f.a.createElement("h3",null,"Related sun"),f.a.createElement("ul",null,f.a.createElement("li",{key:n&&n.id},n&&n.id)))}}]),t}(p.PureComponent),T=function(){return new Promise(function(e){setTimeout(function(){return e(!0)},3e3)})};Object(m.storiesOf)("components|orbit-client",e).addDecorator(function(e){return f.a.createElement("div",{style:{width:400,border:1}},e())}).addDecorator(Object(y.a)({planetId:"earth",beforeAddCalled:!1,onAddCalled:!1,beforeUpdateCalled:!1,onUpdateCalled:!1,beforeRemoveCalled:!1,onRemoveCalled:!1,sortOrder:"ascending"})).add("Single entity",function(e){var t=e.state,n=e.storeState;return f.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},f.a.createElement(E,{state:t,storeState:n}),f.a.createElement(v.a,{id:t.planetId,beforeAdd:function(){return n({beforeAddCalled:!0}),T()},onAdd:function(e){return n({planetId:e.id,onAddCalled:!0})},beforeUpdate:function(){return n({beforeUpdateCalled:!0}),T()},onUpdate:function(e){return n({planetId:e.id,onUpdateCalled:!0})},beforeRemove:function(){return n({beforeRemoveCalled:!0}),T()},onRemove:function(e){n({planetId:e.id,onRemoveCalled:!0}),setTimeout(function(){return n({planetId:void 0})},2e3)}},function(e){var n=e.planet,r=e.loading,a=e.error;return a?a.message:r?"Loading":f.a.createElement(S,null,f.a.createElement(C,{planet:n,state:t}),f.a.createElement(k,{planet:n}),f.a.createElement(A,null))}))}).add("Single entity with relations",function(e){var t=e.state,n=e.storeState;return f.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},f.a.createElement(E,{state:t,storeState:n}),f.a.createElement(v.a,{id:t.planetId},f.a.createElement(b.a,{related:!0},f.a.createElement(R.a,{related:!0},function(e){var n=e.planet,r=e.moons,a=e.sun,o=e.loading,i=e.error;return i?i.message:o?"Loading":f.a.createElement(S,null,f.a.createElement(C,{planet:n,state:t}),f.a.createElement(k,{planet:n}),f.a.createElement(A,null),f.a.createElement(O,{moons:r,sun:a}))}))))}).add("Multiple entities",function(e){var t=e.state,n=e.storeState;return f.a.createElement("div",null,f.a.createElement("h3",null,"All planet id's"),f.a.createElement(h.a,{sort:{attribute:"name",order:t.sortOrder}},function(e){var r=e.planets,a=e.save,o=e.remove;return f.a.createElement("div",null,f.a.createElement("ul",null,r.all().map(function(e){return f.a.createElement("li",{key:e.id},e.id)})),f.a.createElement("button",{onClick:function(){return a([{type:"planet",id:"mars",attributes:{name:"Mars"}},{type:"planet",id:"exivity to the moon",attributes:{name:"Rocket"}},{type:"planet",id:"neptunus",attributes:{name:"Neptunusr"}}])}},"Create records"),f.a.createElement("button",{onClick:function(){return o(r.all())}},"Delete all records"),f.a.createElement("button",{onClick:function(){n({sortOrder:"ascending"===t.sortOrder?"descending":"ascending"})}},t.sortOrder))}))})}.call(this,n(225)(e))}},[[747,3,2]]]);
//# sourceMappingURL=iframe.79aa25f93700e5b2c524.bundle.js.map