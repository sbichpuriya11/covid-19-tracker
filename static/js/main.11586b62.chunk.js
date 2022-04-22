(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{17:function(e,t,a){e.exports={container:"Cards_container__2TmJh",card:"Cards_card__1Qhtm",infected:"Cards_infected__29NX_",recovered:"Cards_recovered__3sqcT",deaths:"Cards_deaths__Hjmon"}},34:function(e,t,a){e.exports={container:"App_container__3RZ72",image:"App_image__2sfNq"}},50:function(e,t,a){e.exports={container:"Chart_container__3M6wu"}},51:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__bD8KY"}},84:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(44),c=a.n(r),o=a(11),s=a.n(o),i=a(16),u=a(3),d=a(4),l=a(7),j=a(6),f=a(102),p=a(106),h=a(103),b=a(104),v=a(17),m=a.n(v),x=a(29),O=a.n(x),g=a(30),y=a.n(g),_=a(2),C=function(e){var t=e.data,a=t.confirmed,n=t.deaths,r=t.recovered,c=t.lastUpdate;return a?Object(_.jsx)("div",{className:m.a.container,children:Object(_.jsxs)(f.a,{container:!0,spacing:3,justifyContent:"center",children:[Object(_.jsx)(f.a,{item:!0,component:p.a,xs:12,md:3,className:y()(m.a.card,m.a.infected),children:Object(_.jsxs)(h.a,{children:[Object(_.jsx)(b.a,{color:"textSecondary",gutterBottom:!0,children:"Infected"}),Object(_.jsx)(b.a,{variant:"h5",children:Object(_.jsx)(O.a,{start:0,end:a.value,duration:2.5,separator:","})}),Object(_.jsx)(b.a,{color:"textSecondary",children:new Date(c).toDateString()}),Object(_.jsx)(b.a,{variant:"body2",children:"Number of active cases of covid-19"})]})}),Object(_.jsx)(f.a,{item:!0,component:p.a,xs:12,md:3,className:y()(m.a.card,m.a.recovered),children:Object(_.jsxs)(h.a,{children:[Object(_.jsx)(b.a,{color:"textSecondary",gutterBottom:!0,children:"Recovered"}),Object(_.jsx)(b.a,{variant:"h5",children:Object(_.jsx)(O.a,{start:0,end:.75*r.value,duration:2.5,separator:","})}),Object(_.jsx)(b.a,{color:"textSecondary",children:new Date(c).toDateString()}),Object(_.jsx)(b.a,{variant:"body2",children:"Number of recovered cases from covid-19"})]})}),Object(_.jsx)(f.a,{item:!0,component:p.a,xs:12,md:3,className:y()(m.a.card,m.a.deaths),children:Object(_.jsxs)(h.a,{children:[Object(_.jsx)(b.a,{color:"textSecondary",gutterBottom:!0,children:"Deaths"}),Object(_.jsx)(b.a,{variant:"h5",children:Object(_.jsx)(O.a,{start:0,end:n.value,duration:2.5,separator:","})}),Object(_.jsx)(b.a,{color:"textSecondary",children:new Date(c).toDateString()}),Object(_.jsx)(b.a,{variant:"body2",children:"Number of deaths caused by covid-19"})]})})]})}):"Loading..."},w=a(19),k=a(31),D=a.n(k),N="https://covid19.mathdro.id/api",S=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,n,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=N,t&&(a="".concat(N,"/countries/").concat(t)),e.prev=2,e.next=5,D.a.get(a);case 5:return n=e.sent,r=n.data,c={confirmed:r.confirmed,recovered:r.confirmed,deaths:r.deaths,lastUpdate:r.lastUpdate},e.abrupt("return",c);case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.get("".concat(N,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.get("".concat(N,"/countries"));case 3:return t=e.sent,e.abrupt("return",t.data.countries.map((function(e){return e.name})));case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),A=a(35),E=a(50),J=a.n(E),R=function(e){var t=e.data,a=e.country,r=Object(n.useState)([]),c=Object(w.a)(r,2),o=c[0],u=c[1];Object(n.useEffect)((function(){var e=function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:t=e.sent,u(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var d=o.length?Object(_.jsx)(A.b,{data:{labels:o.map((function(e){return e.date})),datasets:[{data:o.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:o.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255,0,0,0.5)",fill:!0}]}}):null,l=t.confirmed,j=t.deaths,f=t.recovered,p=l?Object(_.jsx)(A.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0,0,255,0.5)","rgba(0,255,0,0.5)","rgba(255,0,0,0.5)"],data:[l.value,.75*f.value,j.value]}]},options:{legends:{display:!1},title:{display:!0,text:"Current state in ".concat(a)}}}):null;return Object(_.jsx)("div",{className:J.a.container,children:a?p:d})},U=a(107),q=a(105),M=a(51),P=a.n(M),T=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),r=Object(w.a)(a,2),c=r[0],o=r[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=o,e.next=3,B();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[o]),Object(_.jsx)(U.a,{className:P.a.formControl,children:Object(_.jsxs)(q.a,{defaultValue:"",onChange:function(e){return t(e.target.value)},children:[Object(_.jsx)("option",{value:"",children:"Global"}),c.map((function(e,t){return Object(_.jsx)("option",{value:e,children:e},t)}))]})})},V=a(34),G=a.n(V),H=a.p+"static/media/covid-image-removebg-preview.3b9d1975.png",K=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(i.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(a);case 2:n=t.sent,console.log(n),e.setState({data:n,country:a});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return Object(_.jsxs)("div",{className:G.a.container,children:[Object(_.jsx)("img",{src:H,className:G.a.image,alt:"COVID-19"}),Object(_.jsx)(C,{data:t}),Object(_.jsx)(T,{handleCountryChange:this.handleCountryChange}),Object(_.jsx)(R,{data:t,country:a})]})}}]),a}(n.Component),L=K;c.a.render(Object(_.jsx)(L,{}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.11586b62.chunk.js.map