(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{11:function(t){t.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},19:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(10),i=n.n(o),s=n(12),r=n(3),u=n(21),l=n(2),b=n(0),m=function(t){var e=t.onSubmit,n=Object(a.useState)(""),c=Object(r.a)(n,2),o=c[0],i=c[1],s=Object(a.useState)(""),m=Object(r.a)(s,2),j=m[0],p=m[1],_=function(t){var e=t.target,n=e.name,a=e.value;"name"===n?i(a):p(a)};return Object(b.jsxs)("form",{className:l.form,children:[Object(b.jsxs)("label",{className:l.label,children:["Name",Object(b.jsx)("input",{className:l.input,name:"name",value:o,onChange:_})]}),Object(b.jsxs)("label",{className:l.label,children:["Number",Object(b.jsx)("input",{className:l.input,name:"number",value:j,onChange:_})]}),Object(b.jsx)("button",{className:l.button,tupe:"submit",onClick:function(t){t.preventDefault();var n={id:Object(u.a)(),name:o,number:j};e(n),i(""),p("")},children:"Add contact"})]})},j=n(5),p=function(t){var e=t.contact,n=e.id,a=e.name,c=e.number,o=t.onDeleteContact;return Object(b.jsxs)("li",{className:j.contactItem,children:[Object(b.jsxs)("span",{children:[a,": ",c]}),Object(b.jsx)("button",{className:j.button,onClick:function(){return o(n)},children:"Delete"})]})},_=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(b.jsx)("ul",{className:j.contactList,children:e.map((function(t){return Object(b.jsx)(p,{contact:t,onDeleteContact:n},t.id)}))})},f=n(9),d=function(t){var e=t.value,n=t.onChange;return Object(b.jsxs)("label",{className:f.label,children:["Find contacts by name",Object(b.jsx)("input",{className:f.input,value:e,onChange:n})]})},O=n(7),h=function(t){var e=t.initialValue,n=Object(a.useState)(e),c=Object(r.a)(n,2),o=c[0],i=c[1],u=Object(a.useState)(""),l=Object(r.a)(u,2),j=l[0],p=l[1],f=function(t){return p(t.target.value)},h=j.toLowerCase(),x=o.filter((function(t){return t.name.toLowerCase().includes(h)}));return Object(a.useEffect)((function(){i(JSON.parse(localStorage.getItem("contacts")))}),[]),Object(a.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(o))}),[o]),Object(b.jsxs)("div",{className:O.wrapper,children:[Object(b.jsx)("h1",{className:O.title,children:"Phonebook"}),Object(b.jsx)(m,{onInputChange:f,onSubmit:function(t){return o.find((function(e){return e.name.toLowerCase()===t.name.toLowerCase()}))?alert("".concat(t.name," is already in contacts.")):i((function(e){return[t].concat(Object(s.a)(e))}))}}),Object(b.jsx)("h2",{className:O.subtitle,children:"Contacts"}),Object(b.jsx)(d,{value:j,onChange:f}),Object(b.jsx)(_,{contacts:x,filter:j,onInputChange:f,onDeleteContact:function(t){return i(o.filter((function(e){return e.id!==t})))}})]})};h.defaultProps={initialValue:[]};var x=h,C=n(11);n(18);i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(x,{initialValue:C})}),document.getElementById("root"))},2:function(t,e,n){t.exports={form:"Form_form__3-unr",label:"Form_label__2aPb1",input:"Form_input__2gucq",button:"Form_button__3ZW4q"}},5:function(t,e,n){t.exports={label:"Contacts_label__1FN1x",input:"Contacts_input__15bVW",contactList:"Contacts_contactList__1bH7v",contactItem:"Contacts_contactItem__3MiV1",button:"Contacts_button__ufCm9"}},7:function(t,e,n){t.exports={wrapper:"App_wrapper__RCHjb",title:"App_title__2oBiX",subtitle:"App_subtitle__3q6oi"}},9:function(t,e,n){t.exports={label:"Filter_label__2pNgv",input:"Filter_input__YmgBH"}}},[[19,1,2]]]);
//# sourceMappingURL=main.9d4dee01.chunk.js.map