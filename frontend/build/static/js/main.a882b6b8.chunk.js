(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{142:function(e,t,n){},168:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(13),c=n.n(s),o=n(14),i=(n(142),n(120)),u=n(252),l=n(119),d=n.n(l),p=n(6),j=n.n(p),b=n(12),f=n(16),O=n(34),h=n.n(O),m=(n(144),n(239)),x=n(254),g=n(246),v=n(255),w=n(247),y=n(248),k=n(169),C=n(245),S=n(219),A=n(109),E=n.n(A),L=n(2),I=function(e){var t=e.toggleSidebar;return Object(L.jsx)("div",{className:"leaflet-top leaflet-left",children:Object(L.jsx)("div",{className:"leaflet-control leaflet-bar",children:Object(L.jsx)(S.a,{onClick:t,children:Object(L.jsx)(E.a,{fontSize:"large",color:"primary"})})})})},W=n(257),N=n(238),P=n(111),F=n.n(P),B=n(114),_=n.n(B),z=n(256),R=n(232),D=n(91),T=n.n(D),M=n(115),Z=n.n(M),H=n(82),J=n.n(H),V=n(112),q=n.n(V),G=n(237),K=n(236),Q=n(230),U=n(259),X=n(258),Y=n(15),$=n(59),ee=n(20),te=n.n(ee),ne=function(){var e=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,te.a.get("/api/users/myProfile");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),ae=function(){var e=Object(b.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,te.a.post("/api/users/login",t);case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 8:throw e.prev=8,e.t0=e.catch(0),Error(e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),re=function(){var e=Object(b.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,te.a.post("/api/users",t);case 3:if(n=e.sent,(a=n.data).success){e.next=7;break}throw Error("\u041e\u0448\u0438\u0431\u043a\u0430 \u0432 \u0434\u0430\u043d\u043d\u044b\u0445");case 7:return e.abrupt("return",a);case 10:throw e.prev=10,e.t0=e.catch(0),Error(e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),se=function(){var e=Object(b.a)(j.a.mark((function e(t){var n,a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("file",t),e.prev=2,e.next=5,te.a.put("/api/users/photo",n);case 5:return a=e.sent,r=a.data,e.abrupt("return",r);case 10:throw e.prev=10,e.t0=e.catch(2),Error(e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),ce=function(){var e=Object(b.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,te.a.put("/api/users/myProfile",t);case 3:if(n=e.sent,(a=n.data).success){e.next=7;break}throw Error("\u041e\u0448\u0438\u0431\u043a\u0430 \u0432 \u0434\u0430\u043d\u043d\u044b\u0445");case 7:return e.abrupt("return",a);case 10:throw e.prev=10,e.t0=e.catch(0),Error(e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),oe=function(){var e=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,te.a.delete("/api/users/myProfile");case 3:if(t=e.sent,t.data.success){e.next=7;break}throw Error("\u041e\u0448\u0438\u0431\u043a\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0444\u0438\u043b\u044f");case 7:return e.abrupt("return",{});case 10:throw e.prev=10,e.t0=e.catch(0),Error(e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),ie=function(e){e?te.a.defaults.headers.common.Authorization="Bearer ".concat(e):delete te.a.defaults.headers.common.Authorization},ue=Object($.b)({name:"users",initialState:{isAuthenticated:!1,loading:!1,user:{},error:null},reducers:{loggedIn:function(e,t){e.isAuthenticated=!0,e.loading=!1,e.user=t.payload},loggedOut:function(e){e.isAuthenticated=!1,e.loading=!1,e.user={}},loading:function(e,t){e.loading=!0},loaded:function(e,t){e.loading=!1},setError:function(e,t){e.error=t.payload}}}),le=ue.actions,de=le.loggedIn,pe=le.loggedOut,je=le.loading,be=le.loaded,fe=le.setError,Oe=function(e){return function(){var t=Object(b.a)(j.a.mark((function t(n){var a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(je()),t.next=4,ae(e);case 4:a=t.sent,localStorage.setItem("token",a.data.token),ie(a.data.token),n(de(Object(Y.a)({},a.data))),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),n(pe()),n(fe(t.t0.message));case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},he=function(e){return function(){var t=Object(b.a)(j.a.mark((function t(n){var a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(je()),t.next=4,re(e);case 4:a=t.sent,localStorage.setItem("token",a.data.token),ie(a.data.token),n(de(Object(Y.a)({},a.data))),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),n(pe()),n(fe(t.t0.message));case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},me=function(e){return function(){var t=Object(b.a)(j.a.mark((function t(n){var a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(je()),t.next=4,ce(e);case 4:a=t.sent,n(de(Object(Y.a)({},a.data))),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),n(be()),n(fe(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},xe=ue.reducer,ge=function(){var e=Object(b.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,te.a.get("/api/stations/address/".concat(t));case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 8:throw e.prev=8,e.t0=e.catch(0),Error(e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),ve=function(){var e=Object(b.a)(j.a.mark((function e(t){var n,a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t.lat+","+t.lng,e.next=4,te.a.get("/api/stations/latlng/".concat(n));case 4:return a=e.sent,r={name:"",location:{type:"Point",coordinates:[t.lat,t.lng],formattedAddress:a.data.data[0].formattedAddress},sensors:[]},e.abrupt("return",r);case 9:throw e.prev=9,e.t0=e.catch(0),Error(e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),we=function(){var e=Object(b.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,te.a.post("/api/stations",t);case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 8:throw e.prev=8,e.t0=e.catch(0),Error(e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),ye=function(){var e=Object(b.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={name:t.name,location:t.location,sensors:t.sensors},e.prev=1,e.next=4,te.a.put("/api/stations/".concat(t._id),n);case 4:return a=e.sent,e.abrupt("return",a.data);case 8:throw e.prev=8,e.t0=e.catch(1),Error(e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),ke=function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,te.a.delete("/api/stations/".concat(t));case 3:return e.abrupt("return",{});case 6:throw e.prev=6,e.t0=e.catch(0),Error(e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),Ce=function(){var e=Object(b.a)(j.a.mark((function e(t,n){var a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.lat+","+t.lng,e.prev=1,e.next=4,te.a.get("/api/stations/radius/".concat(a,"/").concat(n));case 4:return r=e.sent,e.abrupt("return",r.data);case 8:throw e.prev=8,e.t0=e.catch(1),Error(e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}(),Se=function(){var e=Object(b.a)(j.a.mark((function e(t,n){var a,r,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.lat+","+t.lng,r=n.lat+","+n.lng,e.prev=2,e.next=5,te.a.get("/api/stations/box/".concat(a,"/").concat(r));case 5:return s=e.sent,e.abrupt("return",s.data);case 9:throw e.prev=9,e.t0=e.catch(2),Error(e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t,n){return e.apply(this,arguments)}}(),Ae=Object($.b)({name:"stations",initialState:{location:[59.889651,29.87631],loading:!1,stations:[],station:null,error:""},reducers:{loading:function(e,t){e.loading=!0},loaded:function(e,t){e.loading=!1},setLocation:function(e,t){e.location=t.payload,e.loading=!1},setError:function(e,t){e.error=t.payload,e.loading=!1},created:function(e,t){e.loading=!1,e.stations.push(t.payload)},stationsLoaded:function(e,t){e.loading=!1,e.stations=t.payload},updated:function(e,t){e.loading=!1;var n=e.stations.findIndex((function(e){return e._id===t.payload._id}));e.stations.splice(n,1,t.payload)},removed:function(e,t){e.loading=!1,e.stations=e.stations.filter((function(e){return e._id!==t.payload}))},setStation:function(e,t){e.station=t.payload}}}),Ee=Ae.actions,Le=Ee.loading,Ie=Ee.loaded,We=Ee.setLocation,Ne=Ee.setError,Pe=Ee.created,Fe=Ee.stationsLoaded,Be=Ee.updated,_e=Ee.removed,ze=Ee.setStation,Re=Ae.reducer,De=n(37),Te=n(249),Me=n(223),Ze=n(231),He=n(226),Je=n(227),Ve=n(225),qe=n(56),Ge=n.n(qe),Ke=n(47),Qe=n.n(Ke),Ue=function(e){var t=e.open,n=e.handleClose,r=e.switchLoginRegister,s=Object(o.b)(),c=Object(a.useState)({email:"",password:""}),i=Object(f.a)(c,2),u=i[0],l=i[1],d=u.email,p=u.password,O=function(e){return l(Object(Y.a)(Object(Y.a)({},u),{},Object(De.a)({},e.target.id,e.target.value)))},h=function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s(Oe(u)),n();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(L.jsxs)(Me.a,{open:t,onClose:n,children:[Object(L.jsx)(Ve.a,{children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"}),Object(L.jsxs)(He.a,{children:[Object(L.jsx)(Je.a,{children:"\u0414\u043b\u044f \u0432\u0445\u043e\u0434\u0430 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 email \u0438 \u043f\u0430\u0440\u043e\u043b\u044c"}),Object(L.jsx)(Te.a,{autoFocus:!0,margin:"dense",id:"email",label:"Email",type:"email",value:d,error:!/.+@.+\..+/.test(d),onChange:O,fullWidth:!0,InputProps:{startAdornment:Object(L.jsx)(Q.a,{position:"start",children:Object(L.jsx)(Ge.a,{})})}}),Object(L.jsx)(Te.a,{margin:"dense",id:"password",label:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",fullWidth:!0,value:p,onChange:O,InputProps:{startAdornment:Object(L.jsx)(Q.a,{position:"start",children:Object(L.jsx)(Qe.a,{})})}})]}),Object(L.jsxs)(Ze.a,{children:[Object(L.jsx)(R.a,{onClick:n,color:"primary",children:"\u041d\u0430\u0437\u0430\u0434"}),Object(L.jsx)(R.a,{onClick:h,color:"primary",children:"\u0412\u0445\u043e\u0434"})]}),Object(L.jsx)(R.a,{variant:"outlined",onClick:r,style:{margin:"12px"},children:"\u041d\u0435\u0442 \u0443\u0447\u0435\u0442\u043d\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u0438? \u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044c"})]})},Xe=n(81),Ye=n.n(Xe),$e=n(57),et=n.n($e),tt=function(e){var t=e.open,n=e.handleClose,r=e.switchLoginRegister,s=Object(o.b)(),c=Object(a.useState)({name:"",address:"",email:"",password:"",password2:""}),i=Object(f.a)(c,2),u=i[0],l=i[1],d=u.name,p=u.address,O=u.email,h=u.password,m=u.password2,x=function(e){return l(Object(Y.a)(Object(Y.a)({},u),{},Object(De.a)({},e.target.id,e.target.value)))},g=function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:0===d.length?s(fe("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f")):0===p.length?s(fe("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441")):(s(he(u)),n());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(L.jsxs)(Me.a,{open:t,onClose:n,children:[Object(L.jsx)(Ve.a,{children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u043d\u043e\u0432\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}),Object(L.jsxs)(He.a,{children:[Object(L.jsx)(Je.a,{children:"\u0414\u043b\u044f \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u0432\u0441\u0435 \u043f\u043e\u043b\u044f"}),Object(L.jsx)(Te.a,{autoFocus:!0,margin:"dense",id:"name",label:"\u0418\u043c\u044f",type:"text",value:d,onChange:x,fullWidth:!0,InputProps:{startAdornment:Object(L.jsx)(Q.a,{position:"start",children:Object(L.jsx)(Ye.a,{})})}}),Object(L.jsx)(Te.a,{margin:"dense",id:"email",label:"Email",type:"email",value:O,error:!/.+@.+\..+/.test(O),onChange:x,fullWidth:!0,InputProps:{startAdornment:Object(L.jsx)(Q.a,{position:"start",children:Object(L.jsx)(Ge.a,{})})}}),Object(L.jsx)(Te.a,{margin:"dense",id:"address",label:"\u0410\u0434\u0440\u0435\u0441",type:"text",value:p,onChange:x,fullWidth:!0,InputProps:{startAdornment:Object(L.jsx)(Q.a,{position:"start",children:Object(L.jsx)(et.a,{})})}}),Object(L.jsx)(Te.a,{margin:"dense",id:"password",label:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",fullWidth:!0,value:h,error:h.length<6,onChange:x,InputProps:{startAdornment:Object(L.jsx)(Q.a,{position:"start",children:Object(L.jsx)(Qe.a,{})})}}),Object(L.jsx)(Te.a,{margin:"dense",id:"password2",label:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",type:"password",fullWidth:!0,value:m,error:m!==h,onChange:x,InputProps:{startAdornment:Object(L.jsx)(Q.a,{position:"start",children:Object(L.jsx)(Qe.a,{})})}})]}),Object(L.jsxs)(Ze.a,{children:[Object(L.jsx)(R.a,{onClick:n,color:"primary",children:"\u041e\u0442\u043a\u0430\u0437"}),Object(L.jsx)(R.a,{onClick:g,color:"primary",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})]}),Object(L.jsx)(R.a,{variant:"outlined",onClick:r,style:{margin:"12px"},children:"\u041d\u0435\u0442 \u0443\u0447\u0435\u0442\u043d\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u0438? \u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"})]})},nt=function(e){var t=e.open,n=e.handleClose,r=Object(o.b)(),s=Object(o.c)((function(e){return e.users.user})),c=Object(a.useState)({name:"",address:"",email:"",password:"",password2:""}),i=Object(f.a)(c,2),u=i[0],l=i[1];Object(a.useEffect)((function(){l({name:s.name,address:s.location?s.location.formattedAddress:"",email:s.email,password:"",password2:""})}),[s]);var d=u.name||"",p=u.address||"",O=u.email||"",h=u.password||"",m=u.password2||"",x=function(e){return l(Object(Y.a)(Object(Y.a)({},u),{},Object(De.a)({},e.target.id,e.target.value)))},g=function(){var e=Object(b.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:0===d.length?r(fe("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f")):0===p.length?r(fe("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441")):h.length>1&&(h.length<6||h!==m)?r(fe("\u041e\u0448\u0438\u0431\u043a\u0430 \u0432 \u043f\u0430\u0440\u043e\u043b\u0435")):(a={name:d,address:p},h.length>1&&Object.assign(a,{password:h}),r(me(a)),n());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(L.jsxs)(Me.a,{open:t,onClose:n,children:[Object(L.jsx)(Ve.a,{children:"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0444\u0438\u043b\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}),Object(L.jsxs)(He.a,{children:[Object(L.jsx)(Te.a,{autoFocus:!0,margin:"dense",id:"name",label:"\u0418\u043c\u044f",type:"text",value:d,onChange:x,fullWidth:!0,InputProps:{startAdornment:Object(L.jsx)(Q.a,{position:"start",children:Object(L.jsx)(Ye.a,{})})}}),Object(L.jsx)(Te.a,{margin:"dense",id:"email",label:"Email",type:"email",disabled:!0,value:O,error:!/.+@.+\..+/.test(O),onChange:x,fullWidth:!0,InputProps:{startAdornment:Object(L.jsx)(Q.a,{position:"start",children:Object(L.jsx)(Ge.a,{})})}}),Object(L.jsx)(Te.a,{margin:"dense",id:"address",label:"\u0410\u0434\u0440\u0435\u0441",type:"text",value:p,onChange:x,fullWidth:!0,InputProps:{startAdornment:Object(L.jsx)(Q.a,{position:"start",children:Object(L.jsx)(et.a,{})})}}),Object(L.jsx)(Te.a,{margin:"dense",id:"password",label:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",fullWidth:!0,value:h,error:h.length<6,onChange:x,InputProps:{startAdornment:Object(L.jsx)(Q.a,{position:"start",children:Object(L.jsx)(Qe.a,{})})}}),Object(L.jsx)(Te.a,{margin:"dense",id:"password2",label:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",type:"password",fullWidth:!0,value:m,error:m!==h,onChange:x,InputProps:{startAdornment:Object(L.jsx)(Q.a,{position:"start",children:Object(L.jsx)(Qe.a,{})})}})]}),Object(L.jsxs)(Ze.a,{children:[Object(L.jsx)(R.a,{onClick:n,color:"primary",children:"\u041d\u0430\u0437\u0430\u0434"}),Object(L.jsx)(R.a,{onClick:g,color:"primary",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]}),Object(L.jsx)(R.a,{variant:"outlined",onClick:function(){r(function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(je()),e.next=4,oe();case 4:delete localStorage.token,ie(),t(pe()),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),t(be()),t(fe(e.t0.message));case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()),n()},style:{margin:"12px"},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c"})]})},at=n(253),rt=n(250),st=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.users.error})),n=function(){e(fe(null))};return Object(L.jsx)(at.a,{open:null!==t,autoHideDuration:3e3,onClose:n,children:Object(L.jsx)(rt.a,{onClose:n,variant:"filled",severity:"error",children:t})})},ct=n(229),ot=n(233),it=n(235),ut=n(234),lt=n(110),dt=n.n(lt),pt=function(e){var t=e.setStation,n=Object(o.b)(),a=Object(o.c)((function(e){return e.stations.stations})),r=Object(o.c)((function(e){return e.users.user}));return Object(L.jsx)(ct.a,{dense:!0,style:{overflow:"auto",marginTop:"8px"},children:a.map((function(e){return Object(L.jsxs)(ot.a,{onClick:function(){return n(ze(e))},children:[Object(L.jsx)(ut.a,{secondaryTypographyProps:{noWrap:!0},primary:e.name,secondary:e.location.formattedAddress}),Object(L.jsx)(it.a,{children:r&&r._id===e.user?Object(L.jsx)(S.a,{onClick:function(){return t(e)},edge:"end",children:Object(L.jsx)(dt.a,{})}):null})]},e._id)}))})},jt=Object(K.a)({root:{padding:"8px",width:"100%",maxWidth:400},centerLine:{display:"flex",justifyContent:"space-between",alignItems:"center"},toolButton:{fontSize:"0.75rem"},inputLine:{padding:"8px"},divLine:{marginBottom:"8px"}}),bt=function(e){var t=e.open,n=e.toggleSidebar,a=e.adding,s=e.setAddMode,c=e.setStation,i=e.radar,u=e.setRadar,l=jt(),d=Object(o.c)((function(e){return e.users.isAuthenticated})),p=Object(o.c)((function(e){return e.users.loading})),O=Object(o.c)((function(e){return e.users.user.name})),h=Object(o.c)((function(e){return e.users.user.image})),m=Object(o.b)(),x=r.a.useState(!1),g=Object(f.a)(x,2),v=g[0],w=g[1],y=r.a.useState(!1),k=Object(f.a)(y,2),C=k[0],A=k[1],E=function(){w(!v),A(!C)},I=r.a.useState(!1),P=Object(f.a)(I,2),B=P[0],D=P[1],M=r.a.useState(""),H=Object(f.a)(M,2),V=H[0],K=H[1];return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsxs)(W.a,{anchor:"left",open:t,variant:"persistent",PaperProps:{classes:{root:l.root}},children:[Object(L.jsxs)("div",{className:l.centerLine,children:[Object(L.jsx)(S.a,{onClick:n,children:Object(L.jsx)(F.a,{fontSize:"large"})}),d&&Object(L.jsxs)(R.a,{variant:"outlined",children:[Object(L.jsx)("input",{accept:"image/*",id:"icon-button-file",type:"file",style:{display:"none"},onChange:function(e){var t;e.target.files[0].size<1e6?m((t=e.target.files[0],function(){var e=Object(b.a)(j.a.mark((function e(n){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(je()),e.next=4,se(t);case 4:a=e.sent,n(de(Object(Y.a)({},a.data))),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),n(be()),n(fe(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())):m(fe("\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0444\u0430\u0439\u043b \u043c\u0435\u043d\u044c\u0448\u0435 1\u041c\u0431"))}}),Object(L.jsx)("label",{htmlFor:"icon-button-file",children:Object(L.jsx)(S.a,{color:"primary",component:"span",style:{marginRight:"8px",padding:0},children:h?Object(L.jsx)(X.a,{alt:O,src:"/uploads/".concat(h,"?").concat((new Date).getTime())}):Object(L.jsx)(q.a,{})})}),Object(L.jsx)("div",{onClick:function(){return D(!0)},children:O}),Object(L.jsx)(U.a,{title:"\u0412\u044b\u0439\u0442\u0438",children:Object(L.jsx)(T.a,{style:{marginLeft:"8px"},onClick:function(){m(function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{delete localStorage.token,ie(),t(pe())}catch(n){console.log(n.message)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}})})]}),!d&&Object(L.jsx)(R.a,{variant:"contained",color:"default",startIcon:Object(L.jsx)(T.a,{}),onClick:function(){w(!0)},children:"\u0412\u043e\u0439\u0442\u0438"}),p&&Object(L.jsx)(G.a,{})]}),Object(L.jsx)(N.a,{}),Object(L.jsx)(z.a,{placeholder:"\u0413\u043e\u0440\u043e\u0434, \u041e\u0431\u043b\u0430\u0441\u0442\u044c",autoFocus:!0,fullWidth:!0,value:V,onChange:function(e){return K(e.target.value)},endAdornment:Object(L.jsx)(Q.a,{position:"end",children:Object(L.jsx)(S.a,{type:"submit",onClick:function(){return m(function(e){return function(){var t=Object(b.a)(j.a.mark((function t(n){var a,r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(Le()),t.next=4,ge(e);case 4:a=t.sent,r=a.data,n(We([r[0].latitude,r[0].longitude])),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),n(Ie()),n(Ne(t.t0.message));case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}(V))},children:Object(L.jsx)(_.a,{})})}),className:l.inputLine}),Object(L.jsx)(N.a,{className:l.divLine}),Object(L.jsxs)("div",{className:l.centerLine,children:[Object(L.jsx)(R.a,{variant:"contained",color:"default",onClick:function(){return u(i?null:10)},startIcon:Object(L.jsx)(Z.a,{}),className:l.toolButton,children:i?"\u0412\u044b\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0440\u0430\u0434\u0430\u0440":"\u0420\u0430\u0434\u0430\u0440"}),Object(L.jsx)(R.a,{disabled:!d||a,variant:"contained",color:"default",startIcon:Object(L.jsx)(J.a,{}),className:l.toolButton,onClick:function(){return s(!0)},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u0442\u0430\u043d\u0446\u0438\u044e"})]}),Object(L.jsx)(pt,{setStation:c})]}),Object(L.jsx)(Ue,{open:v,handleClose:function(){w(!1)},switchLoginRegister:E}),Object(L.jsx)(tt,{open:C,handleClose:function(){A(!1)},switchLoginRegister:E}),Object(L.jsx)(nt,{open:B,handleClose:function(){D(!1)}}),Object(L.jsx)(st,{})]})},ft=n(240),Ot=n(48),ht=function(e){var t=e.setAddMode,n=e.addNewStation,r=Object(a.useState)(null),s=Object(f.a)(r,2),c=s[0],o=s[1];Object(m.b)({click:function(e){n(e.latlng),t(!1)},mousemove:function(e){o(e.latlng)},mouseout:function(e){t(!1)}});return null===c?null:Object(L.jsx)("div",{className:"leaflet-top leaflet-right",children:Object(L.jsx)("div",{className:"leaflet-control",children:Object(L.jsxs)(ft.a,{variant:"extended",size:"medium",color:"primary",children:[Object(L.jsx)(J.a,{}),Object(L.jsxs)(Ot.a,{variant:"body2",noWrap:!0,children:[c.lng.toFixed(4),","," ",c.lat.toFixed(4)]})]})})})},mt=n(241),xt=n(242),gt=n(251),vt={AirTemperature:"\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430",Humidity:"\u0412\u043b\u0430\u0436\u043d\u043e\u0441\u0442\u044c",AirPressure:"\u0410\u0442\u043c.\u0434\u0430\u0432\u043b\u0435\u043d\u0438\u0435",WindSpeed:"\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0432\u0435\u0442\u0440\u0430",WindDirection:"\u041d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0432\u0435\u0442\u0440\u0430"},wt=function(e){var t=e.station,n=e.setStation,r=Object(o.b)(),s=Object(a.useState)({name:t.name,formattedAddress:t.location.formattedAddress}),c=Object(f.a)(s,2),i=c[0],u=c[1],l=i.name||"",d=i.formattedAddress,p=function(e){return u(Object(Y.a)(Object(Y.a)({},i),{},Object(De.a)({},e.target.id,e.target.value)))},O=Object(Y.a)({},vt);Object.keys(O).forEach((function(e){return O[e]=t.sensors.includes(e)}));var h=Object(a.useState)(O),m=Object(f.a)(h,2),x=m[0],g=m[1],v=function(e){g(Object(Y.a)(Object(Y.a)({},x),{},Object(De.a)({},e.target.name,e.target.checked)))};return Object(L.jsxs)(Me.a,{open:null!==t,onClose:function(){return n(null)},fullWidth:!0,children:[Object(L.jsx)(Ve.a,{children:t&&t._id?"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u0441\u0442\u0430\u043d\u0446\u0438\u0438":"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0439 \u0441\u0442\u0430\u043d\u0446\u0438\u0438"}),Object(L.jsxs)(He.a,{children:[Object(L.jsx)(Te.a,{margin:"dense",autoFocus:!0,id:"name",label:"\u0418\u043c\u044f",type:"text",value:l,fullWidth:!0,onChange:p}),Object(L.jsx)(Te.a,{margin:"dense",id:"address",label:"\u0410\u0434\u0440\u0435\u0441",type:"text",value:d,fullWidth:!0,onChange:p}),Object(L.jsx)(mt.a,{row:!0,children:Object.keys(x).map((function(e){return Object(L.jsx)(xt.a,{control:Object(L.jsx)(gt.a,{checked:x[e],onChange:v,name:e,color:"primary"}),label:vt[e]},e)}))})]}),Object(L.jsxs)(Ze.a,{children:[Object(L.jsx)(R.a,{onClick:function(){return n(null)},color:"primary",children:"\u041d\u0430\u0437\u0430\u0434"}),Object(L.jsx)(R.a,{onClick:function(){var e,a=[];Object.keys(x).filter((function(e){return x[e]})).forEach((function(e){a.push(e)})),t._id?r(function(e){return function(){var t=Object(b.a)(j.a.mark((function t(n){var a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(Le()),t.next=4,ye(e);case 4:a=t.sent,n(Be(Object(Y.a)({},a.data))),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),n(Ne(t.t0.message)),n(Ie());case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}({_id:t._id,name:l,location:Object(Y.a)(Object(Y.a)({},t.location),{},{formattedAddress:d}),sensors:a})):(t.name=l,t.location.formattedAddress=d,t.sensors=a,r((e=t,function(){var t=Object(b.a)(j.a.mark((function t(n){var a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(Le()),t.next=4,we(e);case 4:a=t.sent,n(Pe(Object(Y.a)({},a.data))),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),n(Ne(t.t0.message)),n(Ie());case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()))),n(null)},color:"primary",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]}),Object(L.jsx)(R.a,{variant:"outlined",onClick:function(){var e;r((e=t._id,function(){var t=Object(b.a)(j.a.mark((function t(n){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(Le()),t.next=4,ke(e);case 4:n(_e(e)),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),n(Ne(t.t0.message)),n(Ie());case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}())),n(null)},style:{margin:"12px"},children:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0441\u0442\u0430\u043d\u0446\u0438\u0438"})]})},yt=n(243),kt=n(244),Ct=n(260),St=function(e){var t=e.radar,n=e.setRadar,r=Object(a.useState)(0),s=Object(f.a)(r,2),c=s[0],o=s[1];return Object(a.useEffect)((function(){o(t)}),[]),Object(L.jsx)("div",{className:"leaflet-bottom leaflet-right",children:Object(L.jsx)("div",{className:"leaflet-control",children:Object(L.jsx)(yt.a,{children:Object(L.jsxs)(kt.a,{style:{width:200,margin:8,paddingTop:12,paddingBottom:0},children:["\u0420\u0430\u0434\u0438\u0443\u0441: ",c," \u043a\u043c.",Object(L.jsx)(Ct.a,{value:c,marks:!0,min:0,max:150,step:5,valueLabelDisplay:"auto",onChange:function(e,t){return o(t)},onChangeCommitted:function(e,t){n(t)}})]})})})})},At=n(261),Et=n(117),Lt=n.n(Et),It=n(116),Wt=n.n(It),Nt=n(118),Pt=n.n(Nt),Ft=Object(K.a)({centerLine:{display:"flex",alignItems:"center",padding:"8px"},iconSpace:{marginRight:"8px",flexWrap:"wrap"},iconLine:{flexWrap:"wrap"}}),Bt=function(){var e=Ft(),t=Object(o.c)((function(e){return e.stations.station})),n=Object(o.b)(),a=function(){n(ze(null))};return t?Object(L.jsxs)(Me.a,{onClose:a,open:null!==t,children:[Object(L.jsxs)(Ve.a,{children:["\u0421\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0441\u0442\u0430\u043d\u0446\u0438\u0438 ",t.name]}),Object(L.jsxs)(He.a,{children:[Object(L.jsxs)("div",{className:e.centerLine,children:[Object(L.jsx)(et.a,{className:e.iconSpace}),t.location.formattedAddress]}),Object(L.jsxs)("div",{className:e.centerLine,children:[Object(L.jsx)(Wt.a,{className:e.iconSpace}),t.location.coordinates.join()]}),Object(L.jsxs)("div",{className:e.centerLine,children:[Object(L.jsx)(Lt.a,{className:e.iconSpace}),Object(L.jsx)("span",{className:e.iconLine,children:t.sensors.length>0?t.sensors.map((function(t){return Object(L.jsx)(At.a,{label:vt[t],variant:"outlined",className:e.iconSpace},vt[t])})):"\u041e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442"})]}),Object(L.jsxs)("div",{className:e.centerLine,children:[Object(L.jsx)(Pt.a,{className:e.iconSpace})," ","\u0421\u043e\u0437\u0434\u0430\u043d\u0430:"," ",new Date(t.createdAt).toLocaleDateString()]})]}),Object(L.jsx)(Ze.a,{children:Object(L.jsx)(R.a,{autoFocus:!0,onClick:a,color:"primary",children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"})})]}):null},_t=function(e){var t=e.radar,n=Object(o.b)(),r=Object(m.a)({moveend:function(e){t||s(r.getBounds())}}),s=function(e){var t,a;n((t=e._southWest,a=e._northEast,function(){var e=Object(b.a)(j.a.mark((function e(n){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(Le()),e.next=4,Se(t,a);case 4:r=e.sent,n(Fe(r.data)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),n(Ne(e.t0.message)),n(Ie());case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()))};return Object(a.useEffect)((function(){t||s(r.getBounds())}),[t]),Object(a.useEffect)((function(){s(r.getBounds())}),[]),null},zt=function(e){var t=e.radar,n=Object(o.b)(),r=Object(a.useRef)(),s=Object(a.useState)(null),c=Object(f.a)(s,2),i=c[0],u=c[1],l=Object(m.a)({moveend:function(e){u(l.getCenter())}});return Object(a.useEffect)((function(){l&&u(l.getCenter())}),[l]),Object(a.useEffect)((function(){r.current&&l.fitBounds(r.current.getBounds())}),[t,l]),Object(a.useEffect)((function(){var e,a;i&&n((e=i,a=t,function(){var t=Object(b.a)(j.a.mark((function t(n){var r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(Le()),t.next=4,Ce(e,a);case 4:r=t.sent,n(Fe(r.data)),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),n(Ne(t.t0.message)),n(Ie());case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()))}),[i]),null===i?null:Object(L.jsx)(x.a,{center:i,radius:1e3*t,fill:!0,fillOpacity:.1,opacity:.9,ref:r})},Rt=function(e){var t=e.center,n=e.zoom;h.a.Icon.Default.imagePath="/images/";var r=Object(o.b)(),s=Object(o.c)((function(e){return e.stations.loading})),c=Object(o.c)((function(e){return e.stations.location})),i=Object(o.c)((function(e){return e.stations.stations})),u=Object(a.useState)(null),l=Object(f.a)(u,2),d=l[0],p=l[1],O=function(){var e=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(Le()),e.prev=1,e.next=4,ve(t);case 4:n=e.sent,p(n),console.log(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("\u041d\u0435 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442\u0441\u044f \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u0441\u0442\u0430\u043d\u0446\u0438\u044e!");case 12:r(Ie());case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),m=Object(a.useState)(!1),x=Object(f.a)(m,2),S=x[0],A=x[1],E=function(e){A(e)},W=Object(a.useState)(!1),N=Object(f.a)(W,2),P=N[0],F=N[1],B=function(){F(!P)},_=Object(a.useState)(null),z=Object(f.a)(_,2),R=z[0],D=z[1],T=Object(a.useState)(null),M=Object(f.a)(T,2),Z=M[0],H=M[1];return Object(a.useEffect)((function(){Z&&(Z.setView(c,Z.getZoom()),setTimeout((function(){Z.setZoom(Z.getZoom())}),500))}),[c,Z]),Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(k.a,{open:s,style:{zIndex:1201,color:"#fff"},children:Object(L.jsx)(C.a,{color:"inherit"})}),Object(L.jsx)(Bt,{}),Object(L.jsxs)(g.a,{center:t,zoom:n,scrollWheelZoom:!0,zoomControl:!1,whenCreated:H,style:{cursor:S?"crosshair":""},children:[Object(L.jsx)(v.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),R&&Object(L.jsx)(zt,{radar:R}),Object(L.jsx)(_t,{radar:R}),i.map((function(e){return Object(L.jsx)(w.a,{position:e.location.coordinates,eventHandlers:{click:function(){r(ze(e))}},children:Object(L.jsxs)(y.a,{children:[e.name," ",Object(L.jsx)("br",{})," ",e.address]})},e._id)})),S?Object(L.jsx)(ht,{setAddMode:E,addNewStation:O}):null]}),R&&Object(L.jsx)(St,{radar:R,setRadar:D}),Object(L.jsx)(I,{toggleSidebar:B}),Object(L.jsx)(bt,{open:P,toggleSidebar:B,adding:S,setAddMode:E,setStation:p,radar:R,setRadar:D}),d&&Object(L.jsx)(wt,{station:d,setStation:p})]})};Rt.defaultProps={center:[59.889651,29.87631],zoom:10,stations:[]};var Dt=Rt,Tt=Object($.a)({reducer:{users:xe,stations:Re}});localStorage.token&&ie(localStorage.token);var Mt=function(){var e=Object(i.a)({palette:{primary:d.a},props:{MuiButtonBase:{disableRipple:!0}}});return Object(a.useEffect)((function(){Tt.dispatch(function(){var e=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ne();case 3:(n=e.sent)&&t(de(n)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(L.jsx)(u.a,{theme:e,children:Object(L.jsx)(Dt,{})})},Zt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,262)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))};c.a.render(Object(L.jsx)(o.a,{store:Tt,children:Object(L.jsx)(Mt,{})}),document.getElementById("root")),Zt()}},[[168,1,2]]]);
//# sourceMappingURL=main.a882b6b8.chunk.js.map