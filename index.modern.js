import e,{createContext as t,useState as o,useContext as n}from"react";const r=t({});let i="";localStorage.getItem("p_a_id")?i=localStorage.getItem("p_a_id"):(i=Math.random().toString(36).substring(7),localStorage.setItem("p_a_id",i)),console.log("provider loaded");const a=({children:t,publicKey:n})=>{const[a,d]=o();return e.createElement(r.Provider,{value:{publicKey:n,userId:a,identity:e=>{d(e)},anonymousId:i}},t)},d=(e,t,o,n)=>`${t}:${o}:${n}`,s=async e=>{console.log("postEvent");try{await fetch("http://localhost:8005/v1/analytics/events",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),console.log("here")}catch(e){console.error("here",e),console.warn("Failed to send event",e)}},l=e=>{const{publicKey:t,userId:o,identity:i,anonymousId:a}=n(r);return{featureFlag:!0,triggerEvent:(n,r)=>{console.log("triggering event"),s({event_id:n,feature_id:e,properties:r,user_id:o,anonymous_id:a,key:t}).then().catch()},buildEventName:d,identity:i}},c=()=>{const{publicKey:e,userId:t,identity:o,anonymousId:i}=n(r);return{identity:o,triggerEvent:(o,n,r)=>{s({event_id:o,feature_id:r,properties:n,user_id:t,anonymous_id:i,key:e}).then().catch()},buildEventName:d}};export{a as ProductHomeProvider,c as useEvents,l as useFeature};
//# sourceMappingURL=index.modern.js.map