(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{69:function(e,t,a){e.exports=a(81)},80:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(30),c=a.n(l),o=a(23),i=a(24),u=a(29),s=a(28),m=a(26),d=a(7),E=a(13),g=a(91),h=a(56),f=a(84),p=a(66),v=a(85),b=a(83),y=a(86),C=a(68),k=a(21),S=a(10),j=a(64),O=a(89),I=a(90);var w=function(e){var t=Object(n.useState)(!1),a=Object(E.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(e.meal),i=Object(E.a)(o,2),u=i[0],s=i[1],m=Object(n.useState)(),d=Object(E.a)(m,2),g=(d[0],d[1]),f=function(){c(!1)},p=function(e){var t=e.target.id,a=e.target.value,n=Object(k.a)({},u);n[t]=a,s(n)},v=function(e){var t=e.target.id,a=e.target.value,n=Object(k.a)({},u);n[t][u[t].findIndex((function(t){return t.item==e.target.name}))].item=a,s(n)},y=function(e){var t=Object(k.a)({},u),a=e.target.name,n=u[a].findIndex((function(t){return t.item==e.target.id}));t[a].splice(n,1),s(t)},w=function(e){var t=Object(k.a)({},u),a=e.target.name;t[a]=[].concat(Object(C.a)(u[a]),[{item:"",key:Object(I.a)()}]),s(t)};return u.ingredients&&u.instructions?r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{onClick:function(){c(!0)}},"Edit"),r.a.createElement(O.a,{show:l,onHide:f,backdrop:"static",keyboard:!1},r.a.createElement(O.a.Header,{closeButton:!0},r.a.createElement(O.a.Title,null,"Edit recipe")),r.a.createElement(O.a.Body,null,r.a.createElement(S.a,null,r.a.createElement(S.a.Group,{controlId:"name",onChange:function(e){p(e)}},r.a.createElement(S.a.Label,null,"Meal name"),r.a.createElement(S.a.Control,{type:"text",defaultValue:"".concat(u.name||"")})),r.a.createElement(S.a.Group,{controlId:"cuisine",onChange:function(e){p(e)}},r.a.createElement(S.a.Label,null,"Cuisine"),r.a.createElement(S.a.Control,{type:"text",defaultValue:"".concat(u.cuisine||"")})),r.a.createElement(S.a.Group,{controlId:"ingredients",onChange:v},r.a.createElement(S.a.Label,null,"Ingredients"),u.ingredients.map((function(e,t){return r.a.createElement(b.a,{key:e.key,nogutters:"true"},r.a.createElement(j.a,{nogutters:"true",lg:"auto"},r.a.createElement(S.a.Control,{type:"text",name:e.item,defaultValue:e.item})),r.a.createElement(j.a,{nogutters:"true",lg:"auto"},r.a.createElement(h.a,{variant:"link",className:"removeFormField",id:e.item,name:"ingredients",onClick:y},"x")))})),r.a.createElement(h.a,{variant:"light",name:"ingredients",onClick:w},"Add another ingredient")),r.a.createElement(S.a.Group,{controlId:"instructions",onChange:v},r.a.createElement(S.a.Label,null,"Instructions"),u.instructions.map((function(e,t){return r.a.createElement(b.a,{key:e.key,nogutters:"true"},r.a.createElement(j.a,{nogutters:"true",lg:"auto"},r.a.createElement(S.a.Control,{type:"text",name:e.item,defaultValue:e.item})),r.a.createElement(j.a,{nogutters:"true",lg:"auto"},r.a.createElement(h.a,{variant:"link",className:"removeFormField",id:e.item,name:"instructions",onClick:y},"x")))})),r.a.createElement(h.a,{variant:"light",name:"instructions",onClick:w},"Add another ingredient")))),r.a.createElement(O.a.Footer,null,r.a.createElement(h.a,{variant:"primary",onClick:function(t){c(!1),t.preventDefault();var a="/recipe/".concat(u._id),n=new Request(a,{method:"POST",body:JSON.stringify(u),headers:new Headers({"Content-Type":"application/json"})});fetch(n).then((function(e){return e.json()})).then((function(t){return e.setMeal(t.meal)})).then((function(e){return g(e.statusMessage)})).catch((function(e){return console.log(e)}))}},"Save"),r.a.createElement(h.a,{variant:"secondary",onClick:f},"Cancel")))):r.a.createElement(r.a.Fragment,null)};var N=function(e){var t=Object(n.useState)(),a=Object(E.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(),i=Object(E.a)(o,2),u=i[0],s=i[1],m=JSON.parse(localStorage.getItem("token"));r.a.useEffect((function(){fetch("/recipe/".concat(e.match.params.id,"/")).then((function(e){return e.json()})).then((function(e){return c(e)}))}),[e.match.params.id]);var d=function(){return r.a.createElement(g.a,{defaultActiveKey:"0"},r.a.createElement(g.a.Toggle,{as:h.a,variant:"link",eventKey:"0"},"Steps"),r.a.createElement(g.a.Toggle,{as:h.a,variant:"link",eventKey:"1"},"Ingredients"),r.a.createElement(g.a.Collapse,{eventKey:"0"},r.a.createElement(f.a,null,l.instructions&&l.instructions.map((function(e){return r.a.createElement(p.a,{key:Object(I.a)()},e.item)})))),r.a.createElement(g.a.Collapse,{eventKey:"1"},r.a.createElement(f.a,null,l.ingredients&&l.ingredients.map((function(e){return r.a.createElement(p.a,{key:Object(I.a)()},e.item)})))))};return l&&null!=m?r.a.createElement(v.a,null,r.a.createElement(b.a,null,r.a.createElement("h1",null,e.loggedIn),r.a.createElement("h1",{className:"primary"},l.name)),r.a.createElement(b.a,null,r.a.createElement("h5",{className:"secondary"},l.cuisine),r.a.createElement("h5",{className:"secondary"},l.difficulty)),r.a.createElement(b.a,null,r.a.createElement(w,{meal:l,setMeal:c}),r.a.createElement(h.a,{onClick:function(e){e.target.disabled=!0;var t="/recipe/".concat(l._id,"/delete"),a=new Request(t,{method:"DELETE"});fetch(a).then((function(e){return e.json()})).then((function(e){return s({statusMessage:u})})).then(window.setTimeout((function(){window.location.href="/recipes"}),100)).catch((function(e){return s({statusMessage:u})}))}},"Delete")),r.a.createElement(b.a,null,r.a.createElement(y.a,null,u)),r.a.createElement(b.a,null,d())):l?r.a.createElement(v.a,null,r.a.createElement(b.a,null,r.a.createElement("h1",null,e.loggedIn),r.a.createElement("h1",{className:"primary"},l.name)),r.a.createElement(b.a,null,r.a.createElement("h5",{className:"secondary"},l.cuisine),r.a.createElement("h5",{className:"secondary"},l.difficulty)),r.a.createElement(b.a,null,r.a.createElement("h5",{className:"secondary"},"Log in to edit or delete")),r.a.createElement(b.a,null,d())):r.a.createElement(r.a.Fragment,null)},L=a(31),T=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).handleMultiChange=function(t){for(var a=t.target.id,n=document.getElementById(a).getElementsByTagName("input"),r=[],l=0;l<n.length;l++){var c=n[l].value;r.push({item:[c],key:Object(I.a)()})}e.setState(Object(L.a)({},a,r)),console.log(e.state)},e.addInputField=function(t){var a=t.target.name+"Count";e.setState(Object(L.a)({},a,e.state[a]+1))},e.renderInputFields=function(t){for(var a=[],n=t+"Count",l=0;l<e.state[n];l++)a.push(r.a.createElement(S.a.Control,{type:"text"}));return a},e.onChange=function(t){var a=t.target.id,n=t.target.value;e.setState(Object(L.a)({},a,n))},e.onSubmit=function(t){var a=t.target.childNodes;a[a.length-1].disabled=!0,t.preventDefault();var n=new Request("/addMeal",{method:"POST",body:JSON.stringify(e.state),headers:new Headers({"Content-Type":"application/json"})});fetch(n).then((function(e){return e.json()})).then((function(t){return e.setState({res:t})})).then(window.setTimeout((function(){window.location.href="/"}),1500)).catch((function(t){return e.setState({res:t})}))},e.state={res:[],ingredientsCount:1,instructionsCount:1},e}return Object(i.a)(a,[{key:"render",value:function(){var e=null;return this.state.res.statusMessage&&(e=this.state.res.statusMessage),r.a.createElement(v.a,null,r.a.createElement(S.a,{onSubmit:this.onSubmit},r.a.createElement(S.a.Group,{controlId:"name",onChange:this.onChange},r.a.createElement(S.a.Label,null,"Meal name"),r.a.createElement(S.a.Control,{type:"text"})),r.a.createElement(S.a.Group,{controlId:"description",onChange:this.onChange},r.a.createElement(S.a.Label,null,"Description"),r.a.createElement(S.a.Control,{type:"text"})),r.a.createElement(S.a.Group,{controlId:"cuisine",onChange:this.onChange},r.a.createElement(S.a.Label,null,"Cuisine"),r.a.createElement(S.a.Control,{type:"text"})),r.a.createElement(S.a.Group,{controlId:"difficulty",onChange:this.onChange},r.a.createElement(S.a.Label,null,"Difficulty"),r.a.createElement(S.a.Control,{type:"text"})),r.a.createElement(S.a.Group,{controlId:"ingredients",id:"ingredients",onChange:this.handleMultiChange},r.a.createElement(S.a.Label,null,"Ingredients"),this.renderInputFields("ingredients"),r.a.createElement(h.a,{variant:"light",name:"ingredients",onClick:this.addInputField},"Add ingredient")),r.a.createElement(S.a.Group,{controlId:"instructions",id:"instructions",onChange:this.handleMultiChange},r.a.createElement(S.a.Label,null,"Instructions"),this.renderInputFields("instructions"),r.a.createElement(h.a,{variant:"light",name:"instructions",onClick:this.addInputField},"Add instruction")),r.a.createElement(h.a,{variant:"primary",id:"submit",type:"submit"},"Submit"),r.a.createElement(y.a,null,e)))}}]),a}(n.Component),x=a(87),F=a(63),M=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).handleChange=function(t){t.preventDefault(),t.target.value.length<3?e.setState({items:[]}):fetch("/search?name=".concat(t.target.value)).then((function(e){return e.json()})).then((function(t){return e.setState({items:t})}))},e.state={items:[]},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(v.a,null,r.a.createElement(x.a,{className:"mb-3"},r.a.createElement(F.a,{onChange:this.handleChange,placeholder:"Begin typing the dish you want"})),r.a.createElement(f.a,null,this.state.items.map((function(e){return r.a.createElement(p.a,{key:Object(I.a)()},r.a.createElement(m.b,{to:"/recipe/".concat(e._id)},e.name))}))))}}]),a}(n.Component),G=a(94);var R=function(e){return r.a.createElement(v.a,null,r.a.createElement(b.a,null,e.items.map((function(e){return r.a.createElement(G.a,{style:{width:"15rem"},key:Object(I.a)()},r.a.createElement(G.a.Body,null,r.a.createElement(G.a.Title,null,e.name),r.a.createElement(G.a.Text,null,e.description),r.a.createElement(m.b,{to:"/recipe/".concat(e._id),variant:"primary"},"More details")))}))))},B=a(88),D=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),fetch("/tags/tags?cuisine=".concat(n.state.cuisine,"&difficulty=").concat(n.state.difficulty)).then((function(e){return e.json()})).then((function(e){n.props.handleStateChange(e)}))},n.handleClick=function(e){n.setState(Object(L.a)({},e.target.parentNode.id,e.target.textContent))},n.state={requestSent:!1},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(g.a,{className:"tagFilter"},r.a.createElement(g.a.Toggle,{as:h.a,variant:"link",eventKey:"0"},"Difficulty"),r.a.createElement(g.a.Toggle,{as:h.a,variant:"link",eventKey:"1"},"Cuisine"),r.a.createElement(g.a.Toggle,{as:h.a,variant:"link",eventKey:"2"},r.a.createElement(h.a,{id:"tagSearch",onClick:this.handleSubmit,type:"submit",value:"Submit"},"Search")),r.a.createElement(g.a.Collapse,{eventKey:"2"},r.a.createElement(B.a,null)),r.a.createElement(g.a.Collapse,{eventKey:"0"},r.a.createElement(B.a,{id:"difficulty"},r.a.createElement(h.a,{onClick:this.handleClick,className:"tags",variant:"secondary"},"Easy"),r.a.createElement(h.a,{onClick:this.handleClick,className:"tags",variant:"secondary"},"Medium"),r.a.createElement(h.a,{onClick:this.handleClick,className:"tags",variant:"secondary"},"Hard"))),r.a.createElement(g.a.Collapse,{eventKey:"1"},r.a.createElement(B.a,{id:"cuisine"},r.a.createElement(h.a,{onClick:this.handleClick,className:"tags",variant:"secondary"},"Italian"),r.a.createElement(h.a,{onClick:this.handleClick,className:"tags",variant:"secondary"},"Mexican"),r.a.createElement(h.a,{onClick:this.handleClick,className:"tags",variant:"secondary"},"English"))))}}]),a}(n.Component);var H=function(e){return e.state.loggedIn?r.a.createElement(v.a,null,r.a.createElement(b.a,null,r.a.createElement(M,null)),r.a.createElement(b.a,null,r.a.createElement(m.b,{to:"/addMeal"},r.a.createElement(h.a,null,"Add meal"))),r.a.createElement(b.a,null,r.a.createElement(D,{handleStateChange:e.handleStateChange})),r.a.createElement(b.a,null,r.a.createElement(R,{items:e.state.items,loggedIn:e.state.loggedIn}))):r.a.createElement(v.a,null,r.a.createElement(b.a,null,r.a.createElement(M,null)),r.a.createElement(b.a,null,r.a.createElement("h5",{className:"secondary"},"Log in to add a meal")),r.a.createElement(b.a,null,r.a.createElement(D,{handleStateChange:e.handleStateChange})),r.a.createElement(b.a,null,r.a.createElement(R,{items:e.state.items,loggedIn:e.state.loggedIn})))},K=a(46),J=a(93),P=a(92);var q=function(e){var t=Object(n.useState)(!1),a=Object(E.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(),i=Object(E.a)(o,2),u=i[0],s=i[1],m=Object(n.useState)(),d=Object(E.a)(m,2),g=d[0],f=d[1],p=function(){return c(!1)},v=function(e){f(e.response),b(e)},b=function(t){if("Login successful"==t.response)return window.setTimeout((function(){p()}),500),localStorage.setItem("token",JSON.stringify(t.token)),void e.setState({loggedIn:!0})};return r.a.createElement(r.a.Fragment,null,r.a.createElement(J.a.Link,{onClick:function(){return c(!0)}},"Login"),r.a.createElement(O.a,{show:l,onHide:p,backdrop:"static",keyboard:!1},r.a.createElement(O.a.Header,{closeButton:!0},r.a.createElement(O.a.Title,null,"Login")),r.a.createElement(O.a.Body,null,r.a.createElement(S.a,{onChange:function(e){!function(e){var t=e.target.id,a=e.target.value,n=Object(k.a)({},u);n[t]=a,s(n)}(e)}},r.a.createElement(S.a.Group,{controlId:"username"},r.a.createElement(S.a.Label,null,"Username"),r.a.createElement(S.a.Control,{type:"text"})),r.a.createElement(S.a.Group,{controlId:"password"},r.a.createElement(S.a.Label,null,"Password"),r.a.createElement(S.a.Control,{type:"text"})))),r.a.createElement(O.a.Footer,null,r.a.createElement(h.a,{variant:"primary",onClick:function(e){e.preventDefault();var t=new Request("/login",{method:"POST",body:JSON.stringify(u),headers:new Headers({"Content-Type":"application/json"})});fetch(t).then((function(e){return e.json()})).then((function(e){return v(e)})).catch((function(e){return f(e)}))}},"Login"),r.a.createElement(h.a,{variant:"secondary",onClick:p},"Cancel")),r.a.createElement(y.a,null,g)))};var A=function(e){var t=Object(n.useState)(!1),a=Object(E.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(),i=Object(E.a)(o,2),u=i[0],s=i[1],m=Object(n.useState)("Warning - Demo website"),d=Object(E.a)(m,2),g=d[0],f=d[1],p=function(){return c(!1)},v=function(e){f(e.response),b(e)},b=function(e){if("Registration successful"==e.response)return f("Please log in with new credentials"),void window.setTimeout((function(){p()}),800)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(J.a.Link,{onClick:function(){return c(!0)}},"Register"),r.a.createElement(O.a,{show:l,onHide:p,backdrop:"static",keyboard:!1},r.a.createElement(O.a.Header,{closeButton:!0},r.a.createElement(O.a.Title,null,"Register")),r.a.createElement(O.a.Body,null,r.a.createElement(S.a,{onChange:function(e){!function(e){var t=e.target.id,a=e.target.value,n=Object(k.a)({},u);n[t]=a,s(n)}(e)}},r.a.createElement(S.a.Group,{controlId:"username"},r.a.createElement(S.a.Label,null,"Username"),r.a.createElement(S.a.Control,{type:"text"})),r.a.createElement(S.a.Group,{controlId:"password"},r.a.createElement(S.a.Label,null,"Password"),r.a.createElement(S.a.Control,{type:"text"})),r.a.createElement(S.a.Group,{controlId:"password2"},r.a.createElement(S.a.Label,null,"Confirm password"),r.a.createElement(S.a.Control,{type:"text"})))),r.a.createElement(O.a.Footer,null,r.a.createElement(h.a,{variant:"primary",onClick:function(e){e.preventDefault();var t=new Request("/register",{method:"POST",body:JSON.stringify(u),headers:new Headers({"Content-Type":"application/json"})});fetch(t).then((function(e){return e.json()})).then((function(e){return v(e)})).catch((function(e){return f(e)}))}},"Register"),r.a.createElement(h.a,{variant:"secondary",onClick:p},"Cancel")),r.a.createElement(y.a,null,g)))};var U=function(e){var t=function(){return e.loggedIn?r.a.createElement(J.a.Link,{onClick:e.logout},"Logout"):r.a.createElement(r.a.Fragment,null,r.a.createElement(q,{setState:function(t){return e.setState(t)}}),r.a.createElement(A,{setState:function(t){return e.setState(t)}}))};return r.a.createElement(P.a,{collapseOnSelect:!0,expand:"lg",bg:"primary",variant:"dark"},r.a.createElement(v.a,null,r.a.createElement(P.a.Brand,{href:"/"},"Home"),r.a.createElement(P.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(P.a.Collapse,null,r.a.createElement(J.a,{className:"me-auto"},r.a.createElement(t,null))),r.a.createElement(P.a.Collapse,{className:"justify-content-end"},r.a.createElement(J.a,null,r.a.createElement(J.a.Link,{href:"https://github.com/aslan011/recipesMERN",target:"_blank"},"See the code")))))},_=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).handleStateChange=function(t,a,n){e.setState({items:t})},e.logout=function(){localStorage.removeItem("token"),e.setState({loggedIn:!1,authUser:""})},e.state={items:[],loggedIn:!1,authUser:JSON.parse(localStorage.getItem("token"))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.state.authUser&&this.setState({loggedIn:!0}),this.loadRecipes()}},{key:"loadRecipes",value:function(){var e=this;fetch("/recipes").then((function(e){return e.json()})).then((function(t){return e.setState({items:t})}))}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(U,{loggedIn:this.state.loggedIn,setState:function(t){return e.setState(t)},logout:this.logout}),r.a.createElement(m.a,null,r.a.createElement(K.a,null,r.a.createElement(d.b,{path:"/addMeal",component:T}),r.a.createElement(d.b,{path:"/recipe/:id",component:N}),r.a.createElement(d.b,{path:"/recipes",component:function(){return r.a.createElement(H,{logout:e.logout,handleStateChange:e.handleStateChange,state:e.state,loadRecipes:e.loadRecipes,setState:function(t){return e.setState(t)}})}}),r.a.createElement(d.b,{path:"/",render:function(){return r.a.createElement(d.a,{to:"/recipes"})}}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(80);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[69,1,2]]]);
//# sourceMappingURL=main.959ad853.chunk.js.map