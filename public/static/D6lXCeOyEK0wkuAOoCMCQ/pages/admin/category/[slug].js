(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"9Xlr":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/category/[slug]",function(){return r("vkXu")}])},vkXu:function(e,t,r){"use strict";r.r(t);var n=r("o0o1"),a=r.n(n),o=r("HaE+"),c=r("rePB"),s=r("q1tI"),u=r.n(s),i=r("a6RD"),l=r.n(i),m=r("vDqi"),p=r.n(m),b=r("fKpH"),g=r.n(b),f=r("obyI"),d=r("10oZ"),O=r("5Yp1"),v=r("tOng"),y=(r("yOgr"),u.a.createElement);function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){Object(c.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var j=l()((function(){return Promise.all([r.e(0),r.e(13),r.e(5),r.e(14)]).then(r.t.bind(null,"rmP6",7))}),{ssr:!1,loadableGenerated:{webpack:function(){return["rmP6"]},modules:["react-quill"]}}),P=function(e){var t=e.oldCategory,r=e.token,n=Object(s.useState)({name:t.name,error:"",success:"",buttonText:"Update",imagePreview:t.image.url,image:""}),u=n[0],i=n[1],l=Object(s.useState)(t.content),m=l[0],b=l[1],v=Object(s.useState)("Update image"),w=v[0],P=v[1],N=u.name,E=u.success,x=u.error,k=u.image,C=u.buttonText,T=u.imagePreview,R=function(e){return function(t){var r;i(h(h({},u),{},(r={},Object(c.a)(r,e,t.target.value),Object(c.a)(r,"error",""),Object(c.a)(r,"success",""),r)))}},D=function(e){console.log(e),b(e),i(h(h({},u),{},{success:"",error:""}))},S=function(e){var t=!1;e.target.files[0]&&(t=!0),P(e.target.files[0].name),t&&g.a.imageFileResizer(e.target.files[0],300,300,"JPEG",100,0,(function(e){i(h(h({},u),{},{image:e,success:"",error:""}))}),"base64")},q=function(){var e=Object(o.a)(a.a.mark((function e(n){var o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),i(h(h({},u),{},{buttonText:"Updating"})),console.table({name:N,content:m,image:k}),e.prev=3,e.next=6,p.a.put("".concat(f.a,"/category/").concat(t.slug),{name:N,content:m,image:k},{headers:{Authorization:"Bearer ".concat(r)}});case 6:o=e.sent,console.log("CATEGORY UPDATE RESPONSE",o),i(h(h({},u),{},{imagePreview:o.data.image.url,success:"".concat(o.data.name," is updated")})),b(o.data.content),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(3),console.log("CATEGORY CREATE ERROR",e.t0),i(h(h({},u),{},{buttonText:"Create",error:e.t0.response.data.error}));case 16:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}();return y(O.a,null,y("div",{className:"row"},y("div",{className:"col-md-6 offset-md-3"},y("h1",null,"Update category"),y("br",null),E&&Object(d.b)(E),x&&Object(d.a)(x),y("form",{onSubmit:q},y("div",{className:"form-group"},y("label",{className:"text-muted"},"Name"),y("input",{onChange:R("name"),value:N,type:"text",className:"form-control",required:!0})),y("div",{className:"form-group"},y("label",{className:"text-muted"},"Content"),y(j,{value:m,onChange:D,placeholder:"Write something...",theme:"bubble",className:"pb-5 mb-3",style:{border:"1px solid #666"}})),y("div",{className:"form-group"},y("label",{className:"btn btn-outline-secondary"},w," ",y("span",null,y("img",{src:T,alt:"image",height:"20"})),y("input",{onChange:S,type:"file",accept:"image/*",className:"form-control",hidden:!0}))),y("div",null,y("button",{className:"btn btn-outline-warning"},C))))))};P.getInitialProps=function(){var e=Object(o.a)(a.a.mark((function e(t){var r,n,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.req,r=t.query,n=t.token,e.next=3,p.a.post("".concat(f.a,"/category/").concat(r.slug));case 3:return o=e.sent,e.abrupt("return",{oldCategory:o.data.category,token:n});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.default=Object(v.default)(P)}},[["9Xlr",1,0,2,3,4,11,10]]]);