!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("uuid")):"function"==typeof define&&define.amd?define(["exports","react","uuid"],t):t((e||self).productHomeSdk={},e.react,e.uuid)}(this,function(e,t,n){function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=/*#__PURE__*/r(t);function i(e,t){try{var n=e()}catch(e){return t(e)}return n&&n.then?n.then(void 0,t):n}var u="https://product-server-chc1.onrender.com",c=function(e){try{var t=u+"/v1/api/e",n=i(function(){return Promise.resolve(fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).then(function(){})},function(e){console.error("here",e),console.warn("Failed to send event",e)});return Promise.resolve(n&&n.then?n.then(function(){}):void 0)}catch(e){return Promise.reject(e)}},a=t.createContext({}),d="";localStorage.getItem("p_a_id")?d=localStorage.getItem("p_a_id"):(d=n.v4(),localStorage.setItem("p_a_id",d));var s=function(e,t,n,r){return t+":"+n+":"+r};e.ProductHomeProvider=function(e){var n=e.children,r=e.publicKey,c=t.useState(),s=c[1];return o.default.createElement(a.Provider,{value:{publicKey:r,userId:c[0],identity:function(e,t){s(e),function(e){try{var t=u+"/v1/api/i",n=i(function(){return Promise.resolve(fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).then(function(){})},function(e){console.error("here",e),console.warn("Failed to send event",e)});return Promise.resolve(n&&n.then?n.then(function(){}):void 0)}catch(e){return Promise.reject(e)}}({user_id:e,properties:t,anonymous_id:d,key:r}).then().catch()},anonymousId:d}},n)},e.useEvents=function(){var e=t.useContext(a),n=e.publicKey,r=e.userId,o=e.anonymousId;return{identity:e.identity,triggerEvent:function(e,t,i){c({event_id:e,feature_id:i,properties:t,user_id:r,anonymous_id:o,key:n}).then().catch()},buildEventName:s}},e.useFeature=function(e){var n=t.useContext(a),r=n.publicKey,o=n.userId,i=n.anonymousId;return{featureFlag:!0,triggerEvent:function(t,n){console.log("triggering event"),c({event_id:t,feature_id:e,properties:n,user_id:o,anonymous_id:i,key:r}).then().catch()},buildEventName:s,identity:n.identity}}});
//# sourceMappingURL=index.umd.js.map