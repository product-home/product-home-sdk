import e,{createContext as t,useState as n,useContext as r}from"react";import{v4 as i}from"uuid";function o(e,t){try{var n=e()}catch(e){return t(e)}return n&&n.then?n.then(void 0,t):n}var u="https://product-server-chc1.onrender.com",c=function(e){try{var t=u+"/v1/api/e",n=o(function(){return Promise.resolve(fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).then(function(){})},function(e){console.warn("Failed to send event",e)});return Promise.resolve(n&&n.then?n.then(function(){}):void 0)}catch(e){return Promise.reject(e)}},a=t({}),d="";localStorage.getItem("p_a_id")?d=localStorage.getItem("p_a_id"):(d=i(),localStorage.setItem("p_a_id",d));var s=function(t){var r=t.children,i=t.publicKey,c=n(),s=c[1];return e.createElement(a.Provider,{value:{publicKey:i,userId:c[0],identity:function(e,t){s(e),function(e){try{var t=u+"/v1/api/i",n=o(function(){return Promise.resolve(fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).then(function(){})},function(e){console.warn("Failed to send event",e)});return Promise.resolve(n&&n.then?n.then(function(){}):void 0)}catch(e){return Promise.reject(e)}}({user_id:e,properties:t,anonymous_id:d,key:i}).then().catch()},anonymousId:d}},r)},v=function(e,t,n,r){return t+":"+n+":"+r},l=function(e){var t=r(a),n=t.publicKey,i=t.userId,o=t.anonymousId;return{featureFlag:!0,triggerEvent:function(t,r){console.log("triggering event"),c({event_id:t,feature_id:e,properties:r,user_id:i,anonymous_id:o,key:n}).then().catch()},buildEventName:v,identity:t.identity}},f=function(){var e=r(a),t=e.publicKey,n=e.userId,i=e.anonymousId;return{identity:e.identity,triggerEvent:function(e,r,o){c({event_id:e,feature_id:o,properties:r,user_id:n,anonymous_id:i,key:t}).then().catch()},buildEventName:v}};export{s as ProductHomeProvider,f as useEvents,l as useFeature};
//# sourceMappingURL=index.module.js.map
