(this["webpackJsonpinveert-frontend-prueba"]=this["webpackJsonpinveert-frontend-prueba"]||[]).push([[0],{177:function(e,a,t){e.exports=t.p+"static/media/Logotipo-Inveert-Fondo-Blanco-copy.d453ac87.png"},211:function(e,a,t){e.exports=t(378)},216:function(e,a,t){},377:function(e,a,t){},378:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(28),c=t.n(l),o=(t(216),t(67)),i=t(91),u=t.n(i),s=t(110),m=t(111),d=t.n(m);function p(){return(p=Object(s.a)(u.a.mark((function e(a,t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://jsonplaceholder.typicode.com/users",{headers:{"Content-Type":"application/json"}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var f=t(177),E=t.n(f),b=t(388),h=t(61),y=t.n(h),g=t(34),v=t(379),j=t(384),k=t(70),w=v.a.Header,O=j.a.Title;var x=function(){var e=Object(g.f)(),a=Object(n.useState)(!1),t=Object(o.a)(a,2),l=t[0],c=t[1];return Object(n.useEffect)((function(){"/inveert-frontend-prueba"===y()(e,(function(e){return e.location.pathname}))||"pablogarcor.github.io/inveert-frontend-prueba"===y()(e,(function(e){return e.location.pathname}))?c(!1):c(!0)}),[e]),r.a.createElement(w,{style:{background:"white",padding:"0 10px"}},r.a.createElement(k.b,{to:"/inveert-frontend-prueba"},r.a.createElement("img",{className:"logo",src:E.a,alt:"Prueba de inveert"})),l&&r.a.createElement(O,{style:{color:"black",lineHeight:"64px",float:"right",cursor:"pointer"},level:4,strong:!0,onClick:function(){e.goBack()}},r.a.createElement(b.a,null),"Atr\xe1s"))},I=t(206),B=t(94),T=t(55),C=t(381),N=j.a.Title,S=v.a.Content,V=[{title:"Nombre y apellidos",dataIndex:"name",key:"name"},{title:"Email",dataIndex:"email",key:"email"},{title:"Telefono",dataIndex:"phone",key:"phone"}];var D=function(){var e=Object(g.f)(),a=Object(n.useState)(!0),t=Object(o.a)(a,2),l=t[0],c=t[1],i=Object(n.useState)([]),u=Object(o.a)(i,2),s=u[0],m=u[1];return Object(n.useEffect)((function(){(function(e,a){return p.apply(this,arguments)})(m,c).then((function(e){var a=e.data.map((function(e){return{key:e.id,name:e.name,email:e.email,phone:e.phone}}));m(a)})).catch((function(){I.a.error({message:"Datos innaccesibles",description:"No se ha podido acceder a los datos de los usuarios",duration:10,onClick:function(){}})})).finally((function(){c(!1)}))}),[]),r.a.createElement(v.a,null,r.a.createElement(x,null),r.a.createElement(S,null,r.a.createElement(B.a,{justify:"center"},r.a.createElement(T.a,{className:"padding-10"},r.a.createElement(N,{level:2,strong:!0,style:{marginTop:"50px"}},"Tabla de la ",r.a.createElement("b",{style:{color:"rgb(0, 139, 154)"}},"primera")," vista"))),r.a.createElement(B.a,{justify:"center",align:"middle"},r.a.createElement(C.a,{className:"user-table",pagination:{defaultPageSize:5},onRow:function(a,t){return{onClick:function(t){e.push({pathname:"/userDetail/"+a.key,state:{userId:a.key}})}}},loading:l,dataSource:s,columns:V}))))};function P(){return(P=Object(s.a)(u.a.mark((function e(a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://jsonplaceholder.typicode.com/users/"+a,{headers:{"Content-Type":"application/json"}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var z=t(382),H=t(385),J=t(386),L=t(380),W=t(383),A=t(387),F=t(389),M=t(390),R=t(391),$=t(392),q=t(393),G=t(394),K=t(395),Q=t(396),U=j.a.Title,X=v.a.Content,Y=z.a.Meta,Z=H.a.Panel;var _=function(){var e=Object(g.f)(),a=Object(n.useState)(!0),t=Object(o.a)(a,2),l=t[0],c=t[1],i=Object(n.useState)([]),u=Object(o.a)(i,2),s=u[0],m=u[1],d=Object(n.useState)(1),p=Object(o.a)(d,2),f=p[0],E=p[1];return Object(n.useEffect)((function(){y()(e,(function(e){return e.location.state.userId}))?function(e){return P.apply(this,arguments)}(e.location.state.userId).then((function(e){m(e.data),E(e.data.id)})).catch((function(){return I.a.error({message:"Datos innaccesibles",description:"No se ha podido acceder a los datos de los usuarios",duration:10,onClick:function(){}})})).finally((function(){c(!1)})):e.push({pathname:"/"})}),[e]),r.a.createElement(v.a,null,r.a.createElement(x,null),r.a.createElement(X,null,r.a.createElement(B.a,{justify:"center"},r.a.createElement(T.a,{className:"padding-10"},r.a.createElement(U,{level:2,strong:!0,style:{marginTop:"50px"}},"Tabla de la ",r.a.createElement("b",{style:{color:"rgb(0, 139, 154)"}},"segunda")," vista"))),r.a.createElement(B.a,{justify:"center",style:{background:"white"}},r.a.createElement(T.a,{className:"padding-10"},r.a.createElement(J.a,{loading:l,active:!0},r.a.createElement(U,{level:2,strong:!0,underline:!0},"Vista detalle del usuario ",r.a.createElement("b",{style:{color:"rgb(0, 139, 154)"}},"n\xba ",f))))),r.a.createElement(B.a,{justify:"center",align:"middle",style:{background:"white"}},r.a.createElement(T.a,{xs:24,sm:18,md:14,lg:10,xl:8},r.a.createElement(J.a,{loading:l,active:!0},r.a.createElement(z.a,{style:{width:"100%",margin:"20px 0"}},r.a.createElement(Y,{avatar:r.a.createElement(L.a,{size:64,icon:r.a.createElement(F.a,null)}),title:s.name,description:s.username})),r.a.createElement(W.a,{layout:"vertical",style:{width:"100%"}},r.a.createElement(W.a.Item,{label:"Telefono:"},r.a.createElement(A.a,{disabled:!0,defaultValue:s.phone,addonBefore:r.a.createElement(M.a,null)})),r.a.createElement(W.a.Item,{label:"Email:"},r.a.createElement(A.a,{disabled:!0,defaultValue:s.email,addonBefore:r.a.createElement(R.a,null)}))),r.a.createElement(H.a,null,r.a.createElement(Z,{header:"Empresa",key:"1",extra:r.a.createElement($.a,null)},r.a.createElement(W.a,{layout:"vertical",style:{width:"100%"}},r.a.createElement(W.a.Item,{label:"Nombre:"},r.a.createElement(A.a,{disabled:!0,defaultValue:y()(s,(function(e){return e.company.name})),addonBefore:r.a.createElement($.a,null)})),r.a.createElement(W.a.Item,{label:"Lema:"},r.a.createElement(A.a,{disabled:!0,defaultValue:y()(s,(function(e){return e.company.catchPhrase})),addonBefore:r.a.createElement(q.a,null)})),r.a.createElement(W.a.Item,{label:"B.S.:"},r.a.createElement(A.a,{disabled:!0,defaultValue:y()(s,(function(e){return e.company.bs})),addonBefore:r.a.createElement(G.a,null)})))),r.a.createElement(Z,{header:"Direcci\xf3n",key:"2",extra:r.a.createElement(K.a,null)},r.a.createElement(W.a,{layout:"vertical",style:{width:"100%"}},r.a.createElement(W.a.Item,{label:"Calle:"},r.a.createElement(A.a,{disabled:!0,defaultValue:y()(s,(function(e){return e.address.street})),addonBefore:r.a.createElement(K.a,null)})),r.a.createElement(W.a.Item,{label:"Ciudad:"},r.a.createElement(A.a,{disabled:!0,defaultValue:y()(s,(function(e){return e.address.city})),addonBefore:r.a.createElement(Q.a,null)}))))),",")))))};t(377);var ee=function(){return r.a.createElement(v.a,null,r.a.createElement(g.c,null,r.a.createElement(g.a,{path:"/userDetail/:userNumber",component:_}),r.a.createElement(g.a,{path:"/",component:D})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(k.a,null,r.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[211,1,2]]]);
//# sourceMappingURL=main.f4ef64f0.chunk.js.map