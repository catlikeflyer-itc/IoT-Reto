(this["webpackJsonpiot-app"]=this["webpackJsonpiot-app"]||[]).push([[0],{127:function(e,t,a){},155:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(42),i=a.n(c),o=(a(127),a(32)),s=a(206),l=a(227),j=a(228),d=a(221),u=a(210),b=a(6),O=a(219),h=a(225),x=a(215),p=a(205),f=a(226),m=a(109),g=a.n(m),v=a(68),S=a(1),w=Object(u.a)((function(){return{link:{textDecoration:"none",color:"blue",fontSize:"20px"},icon:{color:"white"}}}));var C=function(e){var t=e.linkList,a=w(),n=Object(r.useState)(!1),c=Object(b.a)(n,2),i=c[0],o=c[1];return Object(S.jsxs)(v.a,{children:[Object(S.jsx)(O.a,{open:i,onClose:function(){return o(!1)},className:a.link,children:Object(S.jsx)(h.a,{children:t.map((function(e){return Object(S.jsx)(x.a,{onClick:function(){return o(!1)},children:Object(S.jsx)(p.a,{children:Object(S.jsx)("a",{className:a.link,href:e.to.length>0?e.to:"/",children:e.title})})})}))})}),Object(S.jsx)(f.a,{onClick:function(){return o(!i)},className:a.icon,children:Object(S.jsx)(g.a,{})})]})},k=a.p+"static/media/tec.a62c7ff8.png",A=Object(u.a)((function(e){return{logo:{maxWidth:100,marginRight:"10px"},links:{marginLeft:"auto"},list:{width:250},fullList:{width:"auto"},appbarSpace:e.mixins.toolbar}}));function y(){var e=A(),t=Object(o.a)(),a=Object(s.a)(t.breakpoints.down("sm")),r=[{title:"Home",to:""},{title:"Administradores",to:"admin"},{title:"Salones",to:"salones"},{title:"Dispositivos",to:"dispositivos"},{title:"Registros",to:"registros"}];return Object(S.jsxs)("div",{children:[Object(S.jsx)(l.a,{position:"fixed",children:Object(S.jsxs)(j.a,{children:[Object(S.jsx)("img",{alt:"logo",src:k,className:e.logo}),a?Object(S.jsx)(C,{linkList:r}):Object(S.jsx)("div",{className:e.links,children:r.map((function(e){return Object(S.jsx)(d.a,{href:e.to.length>0?e.to:"/",color:"inherit",children:e.title})}))})]})}),Object(S.jsx)("div",{className:e.appbarSpace})]})}var D=a(91),N=a(237),E=a(14),B=a(30),I=a.n(B),q=a(40),W=a(223),M=a(207),F=a(72),V=a(216),R=a(232),z=a(214),L=a(18),P=a.n(L);function T(){var e=Object(r.useState)(""),t=Object(b.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(!1),i=Object(b.a)(c,2),o=i[0],s=i[1],l=Object(r.useState)(!1),j=Object(b.a)(l,2),u=j[0],O=j[1];return Object(S.jsxs)(M.a,{m:4,display:"flex",flexDirection:"column",className:"boxer",position:"fixed",children:[Object(S.jsx)(F.a,{gutterBottom:!0,variant:"h6",color:"black",align:"left",children:"Agregar Administrador"}),Object(S.jsx)(M.a,{mt:1,width:"100%",children:Object(S.jsx)(V.a,{id:"matricula",label:"Matricula",required:!0,onChange:function(e){e.preventDefault(),s(!1),n(e.target.value),(a.length<=0||a.length>10)&&s(!0)},error:o})}),Object(S.jsx)(M.a,{mt:1,width:"100%",children:Object(S.jsx)(R.a,{label:"\xbfEs estudiante?",control:Object(S.jsx)(z.a,{checked:u,onChange:function(e){e.preventDefault(),O(!u)}})})}),Object(S.jsx)(M.a,{mt:1,width:"100%",children:Object(S.jsx)(d.a,{variant:"contained",color:"primary",onClick:function(e){if(e.preventDefault(),s(!1),o)console.log("Error"),alert("matricula invalida");else{var t={matricula:a,isStudent:u};P.a.post("https://api-reto-iot.herokuapp.com/admin",t).then((function(e){console.log(e),console.log(e.data),alert("Administrador agregado"),window.location.reload()})).catch((function(e){console.log(e),alert("Erro ao adicionar usu\xe1rio!")}))}},children:"Agregar"})})]})}var H=a(233),J=a(235),G=a(234);function K(e){var t=e.data;return Object(S.jsx)(H.a,{sx:{maxWidth:345},children:Object(S.jsx)(G.a,{children:Object(S.jsxs)(J.a,{children:[Object(S.jsx)(F.a,{gutterBottom:!0,variant:"h5",component:"div",children:t.matricula}),Object(S.jsx)(F.a,{variant:"body2",color:"text.secondary",children:t.isStudent?"Alumno":"Profesor"})]})})})}var Y=a(209);function Q(){var e=Object(r.useState)([]),t=Object(b.a)(e,2),a=t[0],n=t[1];return Object(r.useEffect)((function(){(function(){var e=Object(q.a)(I.a.mark((function e(){var t;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P()("https://api-reto-iot.herokuapp.com/admins");case 2:t=e.sent,n(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(S.jsxs)(W.a,{container:!0,spacing:3,children:[Object(S.jsx)(W.a,{item:!0,xs:12,md:4,children:Object(S.jsx)(T,{})}),Object(S.jsx)(W.a,{item:!0,xs:12,md:8,children:Object(S.jsx)(Y.a,{m:4,display:"flex",flexDirection:"row",children:Object(S.jsx)(W.a,{container:!0,spacing:3,children:a.map((function(e){return"AA11"!==e.matricula&&Object(S.jsx)(W.a,{item:!0,xs:12,md:3,children:Object(S.jsx)(K,{data:e})},e.matricula)}))})})})]})}var U=a(231),X=a(217),Z=a(211),$=a(218);function _(){var e=Object(r.useState)(""),t=Object(b.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(1),i=Object(b.a)(c,2),o=i[0],s=i[1],l=Object(r.useState)(""),j=Object(b.a)(l,2),u=j[0],O=j[1],h=Object(r.useState)(""),x=Object(b.a)(h,2),p=x[0],f=x[1],m=Object(r.useState)(!1),g=Object(b.a)(m,2),v=g[0],w=g[1],C=Object(r.useState)(!1),k=Object(b.a)(C,2),A=k[0],y=k[1],D=Object(r.useState)(!1),N=Object(b.a)(D,2),E=N[0],B=N[1];return Object(S.jsxs)(M.a,{m:4,display:"flex",flexDirection:"column",className:"boxer",position:"fixed",children:[Object(S.jsx)(F.a,{gutterBottom:!0,variant:"h6",color:"black",align:"left",children:"Agregar Salon"}),Object(S.jsx)(M.a,{mt:1,width:"100%",children:Object(S.jsx)(V.a,{id:"num-salon",label:"Numero de salon",required:!0,onChange:function(e){e.preventDefault(),w(!1),n(parseInt(e.target.value)),(0===e.target.value.length||isNaN(parseInt(e.target.value)))&&w(!0)},error:v})}),Object(S.jsx)(M.a,{mt:1,width:"100%",children:Object(S.jsxs)(U.a,{children:[Object(S.jsx)(X.a,{id:"aulas-label",children:"Aulas"}),Object(S.jsxs)(Z.a,{labelId:"aulas-label",id:"aulas",value:o,label:"Aulas",onChange:function(e){e.preventDefault(),s(parseInt(e.target.value))},children:[Object(S.jsx)($.a,{value:1,children:"Aulas 1"}),Object(S.jsx)($.a,{value:2,children:"Aulas 2"}),Object(S.jsx)($.a,{value:3,children:"Aulas 3"}),Object(S.jsx)($.a,{value:4,children:"Prepa"}),Object(S.jsx)($.a,{value:5,children:"EGADE"})]})]})}),Object(S.jsx)(M.a,{mt:1,width:"100%",children:Object(S.jsx)(V.a,{id:"volumen",label:"Volumen",required:!1,onChange:function(e){e.preventDefault(),y(!1),O(parseFloat(e.target.value)),(0===e.target.value.length||isNaN(parseInt(e.target.value)))&&y(!0)},error:A})}),Object(S.jsx)(M.a,{mt:1,width:"100%",children:Object(S.jsx)(V.a,{id:"ventanas",label:"ventanas",required:!1,onChange:function(e){e.preventDefault(),B(!1),f(parseInt(e.target.value)),(0===e.target.value.length||isNaN(parseInt(e.target.value)))&&B(!0)},error:E})}),Object(S.jsx)(M.a,{mt:1,width:"100%",children:Object(S.jsx)(d.a,{variant:"contained",color:"primary",onClick:function(e){e.preventDefault();var t={idSalon:a,aula:o,volumen:u,ventanas:p};v?(console.log("Error"),alert("revisa los datos")):(console.log(t),P.a.post("https://api-reto-iot.herokuapp.com/salon",t).then((function(e){console.log(e),console.log(e.data),alert("Salon agregado"),window.location.reload()})).catch((function(e){console.log(e),alert("Error al agregar el salon")})))},children:"Agregar"})})]})}function ee(e){var t=e.data;return Object(S.jsx)(H.a,{sx:{maxWidth:345},children:Object(S.jsx)(G.a,{children:Object(S.jsxs)(J.a,{children:[Object(S.jsxs)(F.a,{gutterBottom:!0,variant:"h5",component:"div",children:["Aula ",t.idSalon]}),Object(S.jsxs)(F.a,{variant:"body2",color:"text.secondary",children:["Edificio: ",t.aula,Object(S.jsx)("br",{}),"Volumen: ",t.volumen,Object(S.jsx)("br",{}),"Ventanas: ",t.ventanas,Object(S.jsx)("br",{})]})]})})})}function te(){var e=Object(r.useState)([]),t=Object(b.a)(e,2),a=t[0],n=t[1];return Object(r.useEffect)((function(){(function(){var e=Object(q.a)(I.a.mark((function e(){var t;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P()("https://api-reto-iot.herokuapp.com/salones");case 2:t=e.sent,n(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(S.jsxs)(W.a,{container:!0,spacing:3,fullwidth:!0,children:[Object(S.jsx)(W.a,{item:!0,xs:12,md:4,children:Object(S.jsx)(_,{})}),Object(S.jsx)(W.a,{item:!0,xs:12,md:8,children:Object(S.jsx)(Y.a,{m:4,children:Object(S.jsx)(W.a,{container:!0,spacing:3,children:a.map((function(e){return 9999!==e.idSalon?Object(S.jsx)(W.a,{item:!0,xs:12,md:3,children:Object(S.jsx)(ee,{data:e})},e.idSalon):""}))})})})]})}function ae(){return Object(S.jsx)("div",{children:Object(S.jsx)("iframe",{title:"Presentacion",width:"100%",height:"1000px",src:"https://sway.office.com/s/YthP1KT5zCSApw9F/embed",frameborder:"0",marginheight:"0",marginwidth:"0","max-width":"100%",sandbox:"allow-forms allow-modals allow-orientation-lock allow-popups allow-same-origin allow-scripts",scrolling:"no",style:{border:"none",maxWidth:"100%",maxHeight:"100vh"},allowfullscreen:!0,mozallowfullscreen:!0,msallowfullscreen:!0,webkitallowfullscreen:!0})})}var re=a(236),ne=a(213),ce=a(220),ie=a(202),oe=Object(u.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},field:{marginTop:10,marginBottom:10}}}));function se(e){var t=e.idx,a=e.verified,c=oe(),i=n.a.useState(!1),o=Object(b.a)(i,2),s=o[0],l=o[1],j=Object(r.useState)(""),u=Object(b.a)(j,2),O=u[0],h=u[1],x=Object(r.useState)(!1),p=Object(b.a)(x,2),f=p[0],m=p[1],g=Object(r.useState)(""),v=Object(b.a)(g,2),w=v[0],C=v[1],k=Object(r.useState)(!1),A=Object(b.a)(k,2),y=A[0],D=A[1];return Object(S.jsxs)("div",{children:[Object(S.jsx)(d.a,{size:"small",color:"primary",onClick:function(){l(!0)},disabled:a,children:a?"Verificado":"Verificar"}),Object(S.jsx)(ne.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:c.modal,open:s,onClose:function(){l(!1)},closeAfterTransition:!0,BackdropComponent:ce.a,BackdropProps:{timeout:500},children:Object(S.jsx)(ie.a,{in:s,children:Object(S.jsxs)("div",{className:c.paper,children:[Object(S.jsx)(F.a,{variant:"h6",children:"Add a To-Do"}),Object(S.jsxs)("form",{className:c.root,noValidate:!0,autoComplete:"off",children:[Object(S.jsx)(V.a,{label:"Matricula",variant:"outlined",fullWidth:!0,required:!0,onChange:function(e){return h(e.target.value)},error:f,className:c.field}),Object(S.jsx)(V.a,{label:"Salon",variant:"outlined",fullWidth:!0,required:!0,onChange:function(e){return C(parseInt(e.target.value))},error:y,className:c.field})]}),Object(S.jsx)(d.a,{variant:"contained",color:"secondary",onClick:function(e){if(e.preventDefault(),m(!1),D(!1),""===O&&m(!0),(isNaN(parseInt(w))||""===w)&&D(!0),f||y)console.log("Error"),alert("Error, revisa los datos");else{var a={matricula:O,idSalon:w};console.log(a),P.a.put("https://api-reto-iot.herokuapp.com/registros/".concat(t),a).then((function(e){alert("Verificacion exitosa"),window.location.reload()})).catch((function(e){console.log(e),alert("Error al verificar")}))}l(!1)},children:"Verificar"})]})})})]})}function le(e){var t=e.data,a=Object(r.useState)(!1),n=Object(b.a)(a,2),c=n[0],i=n[1];Object(r.useEffect)((function(){"AA11"===t.matricula&&9999===t.idSalon||i(!0)}),[t]);return Object(S.jsxs)(H.a,{sx:{maxWidth:"345"},children:[Object(S.jsx)(G.a,{children:Object(S.jsxs)(J.a,{children:[Object(S.jsxs)(F.a,{gutterBottom:!0,variant:"h5",component:"div",children:["Registro ",t.id]}),Object(S.jsxs)(F.a,{variant:"body2",color:"text.secondary",children:["Tiempo: ",t.tiempo," ",Object(S.jsx)("br",{}),"CO2: ",t.CO2," ppm ",Object(S.jsx)("br",{}),"CO: ",t.CO," ppm",Object(S.jsx)("br",{}),"Alcohol: ",t.alcohol," ",Object(S.jsx)("br",{}),c&&Object(S.jsxs)("div",{children:["Salon: ",t.idSalon," ",Object(S.jsx)("br",{}),Object(S.jsxs)(F.a,{variant:"body1",color:"green",children:["Verificado por ",t.matricula]})]})]})]})}),Object(S.jsxs)(re.a,{children:[Object(S.jsx)(se,{idx:t.id,verified:c}),Object(S.jsx)(d.a,{size:"small",color:"secondary",onClick:function(){P.a.delete("https://api-reto-iot.herokuapp.com/registros/".concat(t.id)).then((function(e){alert("Registro eliminado"),window.location.reload()})).catch((function(e){alert("Error al eliminar el registro")}))},children:"Borrar"})]})]})}function je(){var e=Object(r.useState)(0),t=Object(b.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(0),i=Object(b.a)(c,2),o=i[0],s=i[1],l=Object(r.useState)(0),j=Object(b.a)(l,2),u=j[0],O=j[1],h=Object(r.useState)("AA11"),x=Object(b.a)(h,2),p=x[0],f=x[1],m=Object(r.useState)(9999),g=Object(b.a)(m,2),v=g[0],w=g[1],C=Object(r.useState)(0),k=Object(b.a)(C,2),A=k[0],y=k[1],D=Object(r.useState)(!1),N=Object(b.a)(D,2),E=N[0],B=N[1],I=Object(r.useState)(!1),q=Object(b.a)(I,2),W=q[0],R=q[1],z=Object(r.useState)(!1),L=Object(b.a)(z,2),T=L[0],H=L[1],J=Object(r.useState)(!1),G=Object(b.a)(J,2),K=G[0],Y=G[1],Q=Object(r.useState)(!1),U=Object(b.a)(Q,2),X=U[0],Z=U[1];return Object(S.jsxs)(M.a,{m:4,display:"flex",flexDirection:"column",className:"boxer",position:"fixed",children:[Object(S.jsx)(F.a,{gutterBottom:!0,variant:"h6",color:"black",align:"left",children:"Agregar Registro Manual"}),Object(S.jsx)(M.a,{mt:1,width:"100%",children:Object(S.jsx)(V.a,{id:"CO",label:"CO",required:!0,onChange:function(e){e.preventDefault(),B(!1),n(e.target.value),(""===e.target.value||isNaN(parseFloat(e.target.value)))&&B(!0),n(parseFloat(e.target.value))},error:E})}),Object(S.jsx)(M.a,{mt:1,width:"100%",children:Object(S.jsx)(V.a,{id:"CO2",label:"CO2",required:!0,onChange:function(e){e.preventDefault(),R(!1),s(parseFloat(e.target.value)),(""===e.target.value||isNaN(parseFloat(e.target.value)))&&R(!0)},error:W})}),Object(S.jsx)(M.a,{mt:1,width:"100%",children:Object(S.jsx)(V.a,{id:"alcochol",label:"Alcohol",required:!0,onChange:function(e){e.preventDefault(),H(!1),O(parseFloat(e.target.value)),(""===e.target.value||isNaN(parseFloat(e.target.value)))&&H(!0)},error:T})}),Object(S.jsx)(M.a,{mt:1,width:"100%",children:Object(S.jsx)(V.a,{id:"salone",label:"Salon",required:!0,onChange:function(e){e.preventDefault(),Y(!1),w(parseFloat(e.target.value)),(""===e.target.value||isNaN(parseInt(e.target.value)))&&Y(!0)},error:K})}),Object(S.jsx)(M.a,{mt:1,width:"100%",children:Object(S.jsx)(V.a,{id:"device",label:"Dispositivo",required:!0,onChange:function(e){e.preventDefault(),Z(!1),y(parseInt(e.target.value)),(""===e.target.value||isNaN(parseInt(e.target.value)))&&Z(!0)}})}),Object(S.jsx)(M.a,{mt:1,width:"100%",children:Object(S.jsx)(V.a,{id:"matri",label:"Matricula",required:!0,onChange:function(e){f(e.target.value)}})}),Object(S.jsx)(M.a,{mt:1,width:"100%",children:Object(S.jsx)(d.a,{variant:"contained",color:"primary",onClick:function(e){e.preventDefault();var t={CO:a,CO2:o,alcohol:u,idDevice:A,idSalon:v,matricula:p};K||E||W||T||X?(console.log("Error"),alert("revisa los datos")):(console.log(t),P.a.post("https://api-reto-iot.herokuapp.com/registros",t).then((function(e){console.log(e),console.log(e.data),alert("Agregado registro"),window.location.reload()})).catch((function(e){console.log(e),alert("Error al agregar el registro")})))},children:"Agregar"})})]})}function de(){var e=Object(r.useState)([]),t=Object(b.a)(e,2),a=t[0],n=t[1];return Object(r.useEffect)((function(){(function(){var e=Object(q.a)(I.a.mark((function e(){var t;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P()("https://api-reto-iot.herokuapp.com/registros");case 2:t=e.sent,n(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(S.jsxs)(W.a,{container:!0,spacing:3,children:[Object(S.jsx)(W.a,{item:!0,xs:12,md:4,children:Object(S.jsx)(je,{})}),Object(S.jsx)(W.a,{item:!0,xs:12,md:8,children:Object(S.jsx)(Y.a,{m:4,display:"flex",flexDirection:"row",children:Object(S.jsx)(W.a,{container:!0,spacing:3,children:a.map((function(e){return Object(S.jsx)(W.a,{item:!0,xs:12,md:4,children:Object(S.jsx)(le,{data:e},e.id)})}))})})})]})}function ue(){var e=Object(r.useState)(""),t=Object(b.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(!1),i=Object(b.a)(c,2),o=i[0],s=i[1],l=Object(r.useState)(!1),j=Object(b.a)(l,2),u=j[0],O=j[1],h=Object(r.useState)(!1),x=Object(b.a)(h,2),p=x[0],f=x[1],m=Object(r.useState)(!1),g=Object(b.a)(m,2),v=g[0],w=g[1];return Object(S.jsxs)(M.a,{m:4,display:"flex",flexDirection:"column",className:"boxer",position:"fixed",children:[Object(S.jsx)(F.a,{gutterBottom:!0,variant:"h6",color:"black",align:"left",children:"Agregar Dispositivo"}),Object(S.jsx)(M.a,{mt:1,width:"100%",children:Object(S.jsx)(V.a,{id:"mac",label:"MAC Address",required:!0,onChange:function(e){e.preventDefault(),s(!1),n(e.target.value),12!==a.length&&s(!0)},error:o})}),Object(S.jsxs)(M.a,{mt:1,width:"100%",children:[Object(S.jsx)(R.a,{label:"Sensor CO",control:Object(S.jsx)(z.a,{checked:u,onChange:function(e){e.preventDefault(),O(!u)}})}),Object(S.jsx)(R.a,{label:"Sensor CO",control:Object(S.jsx)(z.a,{checked:p,onChange:function(e){e.preventDefault(),f(!p)}})}),Object(S.jsx)(R.a,{label:"Sensor Alcohol",control:Object(S.jsx)(z.a,{checked:v,onChange:function(e){e.preventDefault(),w(!v)}})})]}),Object(S.jsx)(M.a,{mt:1,width:"100%",children:Object(S.jsx)(d.a,{variant:"contained",color:"primary",onClick:function(e){if(e.preventDefault(),o)console.log("Error"),alert("MAC invalida");else{var t={MAC:a,sensorCO:u,sensorCO2:p,sensorAlcohol:v};P.a.post("https://api-reto-iot.herokuapp.com/dispositivo",t).then((function(e){console.log(e),console.log(e.data),alert("Dipositivo agregado"),window.location.reload()})).catch((function(e){console.log(e),alert("Error agregando dispositivo!")}))}},children:"Agregar"})})]})}function be(e){var t=e.data;return Object(S.jsx)(H.a,{sx:{maxWidth:345},children:Object(S.jsx)(G.a,{children:Object(S.jsxs)(J.a,{children:[Object(S.jsxs)(F.a,{gutterBottom:!0,variant:"h5",component:"div",children:["Dispositivo ",t.idDevice]}),Object(S.jsxs)(F.a,{variant:"body2",color:"text.secondary",children:["MAC: ",t.MAC,Object(S.jsx)("br",{}),"Sensor CO: ",t.sensorCO?"\u2705":"\u274c",Object(S.jsx)("br",{}),"Sensor CO2 ",t.sensorCO2?"\u2705":"\u274c",Object(S.jsx)("br",{}),"Sensor Alcohol: ",t.sensorAlcohol?"\u2705":"\u274c",Object(S.jsx)("br",{})]})]})})})}function Oe(){var e=Object(r.useState)([]),t=Object(b.a)(e,2),a=t[0],n=t[1];return Object(r.useEffect)((function(){(function(){var e=Object(q.a)(I.a.mark((function e(){var t;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P()("https://api-reto-iot.herokuapp.com/dispositivos");case 2:t=e.sent,n(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(S.jsxs)(W.a,{container:!0,spacing:3,fullwidth:!0,children:[Object(S.jsx)(W.a,{item:!0,xs:12,md:4,children:Object(S.jsx)(ue,{})}),Object(S.jsx)(W.a,{item:!0,xs:12,md:8,children:Object(S.jsx)(Y.a,{m:4,children:Object(S.jsx)(W.a,{container:!0,spacing:3,children:a.map((function(e){return 9999!==e.idSalon?Object(S.jsx)(W.a,{item:!0,xs:12,md:3,children:Object(S.jsx)(be,{data:e})},e.idSalon):""}))})})})]})}var he=Object(D.a)({typography:{fontFamily:"Roboto",fontWeightLight:400,fontWeightRegular:500,fontWeightMedium:600,fontWeightBold:700},palette:{secondary:{main:"#ff0e0e"}}});var xe=function(){return Object(S.jsx)(N.a,{theme:he,children:Object(S.jsxs)("div",{children:[Object(S.jsx)(y,{}),Object(S.jsx)(v.a,{children:Object(S.jsxs)(E.c,{children:[Object(S.jsx)(E.a,{exact:!0,path:"/",element:Object(S.jsx)(ae,{})}),Object(S.jsx)(E.a,{path:"/admin",element:Object(S.jsx)(Q,{})}),Object(S.jsx)(E.a,{path:"/salones",element:Object(S.jsx)(te,{})}),Object(S.jsx)(E.a,{path:"/dispositivos",element:Object(S.jsx)(Oe,{})}),Object(S.jsx)(E.a,{path:"/registros",element:Object(S.jsx)(de,{})})]})})]})})};i.a.render(Object(S.jsx)(n.a.StrictMode,{children:Object(S.jsx)(xe,{})}),document.getElementById("root"))}},[[155,1,2]]]);
//# sourceMappingURL=main.208e3e76.chunk.js.map