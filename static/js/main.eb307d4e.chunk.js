(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{21:function(e,t,n){e.exports={table:"ContactList_table__BvK4H"}},34:function(e,t,n){},35:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),r=n.n(a),o=n(10),i=n.n(o),s=n(19),b=n(4),l=(n(34),n(35),n(16)),j=n(3),u=n(36),d=Object(j.b)("contacts/add",(function(e){return{payload:Object(l.a)(Object(l.a)({},e),{},{id:u.generate()})}})),O=Object(j.b)("contacts/delete"),m=Object(j.b)("contacts/changeFilter"),f=n(21),p=n.n(f),h=function(){var e=Object(b.b)(),t=Object(b.c)((function(e){var t=e.contacts,n=t.filter,c=t.items,a=n.toLowerCase();return c.filter((function(e){return e.name.toLowerCase().includes(a)}))}));return Object(c.jsx)("table",{className:p.a.table,children:Object(c.jsx)("tbody",{children:t.map((function(t){var n=t.name,a=t.number,r=t.id;return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:n}),Object(c.jsx)("td",{children:a}),Object(c.jsx)("td",{children:Object(c.jsx)("button",{type:"button",onClick:function(){return function(t){return e(O(t))}(r)},children:"del"})})]},r)}))})})},x=n(17),v=n(7),y=n.n(v);var C=function(){var e=Object(b.b)(),t=Object(a.useState)(""),n=Object(x.a)(t,2),r=n[0],o=n[1],i=Object(a.useState)(""),s=Object(x.a)(i,2),l=s[0],j=s[1],u=function(e){var t=e.currentTarget,n=t.name,c=t.value;switch(n){case"name":o(c);break;case"number":j(c);break;default:return}};return Object(c.jsxs)("form",{className:y.a.form,onSubmit:function(t){t.preventDefault(),""!==r.trim()&&""!==l.trim()?(e(d({name:r,number:l})),o(""),j("")):alert("Fill all fields!")},children:[Object(c.jsxs)("label",{className:y.a.label,children:["Name",Object(c.jsx)("input",{className:y.a.input,type:"text",name:"name",value:r,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",onChange:u})]}),Object(c.jsxs)("label",{className:y.a.label,children:["Number",Object(c.jsx)("input",{className:y.a.input,type:"text",name:"number",value:l,pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",onChange:u})]}),Object(c.jsx)("button",{type:"submit",children:"Add contact"})]})},g=function(){var e=Object(b.b)();return Object(c.jsx)("label",{children:Object(c.jsx)("input",{type:"text",name:"filter",onChange:function(t){return e(m(t.target.value))}})})};var _,k=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{children:"Phonebook"}),Object(c.jsx)(C,{}),Object(c.jsx)("h2",{children:"Contacts"}),Object(c.jsx)("p",{className:"App-find",children:"Find contacts by name"}),Object(c.jsx)(g,{}),Object(c.jsx)(h,{})]})},w=n(5),N=n(22),A=n.n(N),F=n(6),z=n(18),L=n(2),S=Object(j.c)([],(_={},Object(F.a)(_,d.type,(function(e,t){var n=e.find((function(e){return e.name.toLowerCase()===t.payload.name.toLowerCase()}));if(!n)return[].concat(Object(z.a)(e),[t.payload]);alert("".concat(n.name," is already in contacts."))})),Object(F.a)(_,O.type,(function(e,t){var n=e.filter((function(e){return e.id!==t.payload}));return Object(z.a)(n)})),_)),B=Object(j.c)("",Object(F.a)({},m.type,(function(e,t){return t.payload}))),J=Object(L.c)({items:S,filter:B}),M={key:"contacts",storage:A.a,blacklist:["filter"]},T=Object(j.a)({reducer:{contacts:Object(w.g)(M,J)},middleware:Object(j.d)({serializableCheck:{ignoredActions:[w.a,w.f,w.b,w.c,w.d,w.e]}}),devTools:!1}),Z={store:T,persistor:Object(w.h)(T)};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(b.a,{store:Z.store,children:Object(c.jsx)(s.a,{loading:null,persistor:Z.persistor,children:Object(c.jsx)(k,{})})})}),document.getElementById("root"))},7:function(e,t,n){e.exports={form:"ContactForm_form__3fIF9",label:"ContactForm_label__1mX-Y",input:"ContactForm_input__3WTKM"}}},[[47,1,2]]]);
//# sourceMappingURL=main.eb307d4e.chunk.js.map