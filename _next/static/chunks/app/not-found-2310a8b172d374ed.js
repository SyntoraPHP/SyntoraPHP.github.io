(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[160],{2015:function(e,r,t){Promise.resolve().then(t.t.bind(t,231,23)),Promise.resolve().then(t.bind(t,4238))},4238:function(e,r,t){"use strict";t.d(r,{StarField:function(){return d}});var n=t(7437),i=t(2265),s=t(4839),a=t(9988),l=t(6030);let o=[[4,4,!0,!0],[4,44,!0],[36,22],[50,146,!0,!0],[64,43,!0,!0],[76,30,!0],[101,116],[140,36,!0],[149,134],[162,74,!0],[171,96,!0,!0],[210,56,!0,!0],[235,90],[275,82,!0,!0],[306,6],[307,64,!0,!0],[380,68,!0],[380,108,!0,!0],[391,148,!0,!0],[405,18,!0],[412,86,!0,!0],[426,210,!0,!0],[427,56,!0,!0],[538,138],[563,88,!0,!0],[611,154,!0,!0],[637,150],[651,146,!0],[682,70,!0,!0],[683,128],[781,82,!0,!0],[785,158,!0],[832,146,!0,!0],[852,89]],u=[[[247,103],[261,86],[307,104],[357,36]],[[586,120],[516,100],[491,62],[440,107],[477,180],[516,100]],[[733,100],[803,120],[879,113],[823,164],[803,120]]];function c(e){let{blurId:r,point:[t,s,l,o]}=e,u=(0,i.useRef)(null),c=(0,i.useRef)(null);return(0,i.useEffect)(()=>{if(!u.current||!c.current)return;let e=2*Math.random(),r=[(0,a.j)(u.current,{opacity:1},{duration:4,delay:e}),(0,a.j)(c.current,{opacity:l?[.2,.5]:[1,.6],scale:l?[1,1.2]:[1.2,1]},{delay:e,duration:2*Math.random()+2,direction:"alternate",repeat:1/0})];return()=>{for(let e of r)e.cancel()}},[l]),(0,n.jsx)("g",{ref:u,className:"opacity-0",children:(0,n.jsx)("circle",{ref:c,cx:t,cy:s,r:1,style:{transformOrigin:`${t/16}rem ${s/16}rem`,opacity:l?.2:1,transform:`scale(${l?1:1.2})`},filter:o?`url(#${r})`:void 0})})}function f(e){let{points:r,blurId:t}=e,s=(0,i.useRef)(null),a=r.filter((e,t)=>r.findIndex(r=>String(r)===String(e))===t),o=a.length!==r.length;return(0,i.useEffect)(()=>{if(!s.current)return;let e=[[s.current,{strokeDashoffset:0,visibility:"visible"},{duration:5,delay:3*Math.random()+2}]];o&&e.push([s.current,{fill:"rgb(255 255 255 / 0.02)"},{duration:1}]);let r=(0,l.Z)(e);return()=>{r.cancel()}},[o]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("path",{ref:s,stroke:"white",strokeOpacity:"0.2",strokeDasharray:1,strokeDashoffset:1,pathLength:1,fill:"transparent",d:`M ${r.join("L")}`,className:"invisible"}),a.map((e,r)=>(0,n.jsx)(c,{point:e,blurId:t},r))]})}function d(e){let{className:r}=e,t=(0,i.useId)();return(0,n.jsxs)("svg",{viewBox:"0 0 881 211",fill:"white","aria-hidden":"true",className:(0,s.Z)("pointer-events-none absolute w-[55.0625rem] origin-top-right rotate-[30deg] overflow-visible opacity-70",r),children:[(0,n.jsx)("defs",{children:(0,n.jsx)("filter",{id:t,children:(0,n.jsx)("feGaussianBlur",{in:"SourceGraphic",stdDeviation:".5"})})}),u.map((e,r)=>(0,n.jsx)(f,{points:e,blurId:t},r)),o.map((e,r)=>(0,n.jsx)(c,{point:e,blurId:t},r))]})}}},function(e){e.O(0,[167,971,23,744],function(){return e(e.s=2015)}),_N_E=e.O()}]);