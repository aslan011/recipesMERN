(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{64:function(e,t,a){e.exports=a(76)},75:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(27),c=a.n(r),o=a(21),i=a(22),u=a(26),s=a(25),m=a(24),d=a(7),h=a(17),E=a(84),g=a(50),f=a(85),p=a(63),v=a(79),b=a(78),C=a(80),y=a(62),k=a(31),j=a(10),S=a(59),O=a(83),I=a(86);var w=function(e){var t=Object(n.useState)(!1),a=Object(h.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(e.meal),i=Object(h.a)(o,2),u=i[0],s=i[1],m=Object(n.useState)(),d=Object(h.a)(m,2),E=(d[0],d[1]),f=function(){c(!1)},p=function(e){var t=e.target.id,a=e.target.value,n=Object(k.a)({},u);n[t]=a,s(n)},v=function(e){var t=e.target.id,a=e.target.value,n=Object(k.a)({},u);n[t][u[t].findIndex((function(t){return t.item==e.target.name}))].item=a,s(n)},C=function(e){var t=Object(k.a)({},u),a=e.target.name,n=u[a].findIndex((function(t){return t.item==e.target.id}));t[a].splice(n,1),s(t)},w=function(e){var t=Object(k.a)({},u),a=e.target.name;t[a]=[].concat(Object(y.a)(u[a]),[{item:"",key:Object(I.a)()}]),s(t)};return u.ingredients&&u.instructions?l.a.createElement(l.a.Fragment,null,l.a.createElement(g.a,{onClick:function(){c(!0)}},"Edit"),l.a.createElement(O.a,{show:r,onHide:f,backdrop:"static",keyboard:!1},l.a.createElement(O.a.Header,{closeButton:!0},l.a.createElement(O.a.Title,null,"Modal title")),l.a.createElement(O.a.Body,null,l.a.createElement(j.a,null,l.a.createElement(j.a.Group,{controlId:"name",onChange:function(e){p(e)}},l.a.createElement(j.a.Label,null,"Meal name"),l.a.createElement(j.a.Control,{type:"text",defaultValue:"".concat(u.name||"")})),l.a.createElement(j.a.Group,{controlId:"cuisine",onChange:function(e){p(e)}},l.a.createElement(j.a.Label,null,"Cuisine"),l.a.createElement(j.a.Control,{type:"text",defaultValue:"".concat(u.cuisine||"")})),l.a.createElement(j.a.Group,{controlId:"ingredients",onChange:v},l.a.createElement(j.a.Label,null,"Ingredients"),u.ingredients.map((function(e,t){return l.a.createElement(b.a,{key:e.key,nogutters:"true"},l.a.createElement(S.a,{nogutters:"true",lg:"auto"},l.a.createElement(j.a.Control,{type:"text",name:e.item,defaultValue:e.item})),l.a.createElement(S.a,{nogutters:"true",lg:"auto"},l.a.createElement(g.a,{variant:"link",className:"removeFormField",id:e.item,name:"ingredients",onClick:C},"x")))})),l.a.createElement(g.a,{name:"ingredients",onClick:w},"Add")),l.a.createElement(j.a.Group,{controlId:"instructions",onChange:v},l.a.createElement(j.a.Label,null,"Instructions"),u.instructions.map((function(e,t){return l.a.createElement(b.a,{key:e.key,nogutters:"true"},l.a.createElement(S.a,{nogutters:"true",lg:"auto"},l.a.createElement(j.a.Control,{type:"text",name:e.item,defaultValue:e.item})),l.a.createElement(S.a,{nogutters:"true",lg:"auto"},l.a.createElement(g.a,{variant:"link",className:"removeFormField",id:e.item,name:"instructions",onClick:C},"x")))})),l.a.createElement(g.a,{name:"instructions",onClick:w},"Add")))),l.a.createElement(O.a.Footer,null,l.a.createElement(g.a,{variant:"primary",onClick:function(t){c(!1),t.preventDefault();var a="http://localhost:9000/recipe/".concat(u._id),n=new Request(a,{method:"POST",body:JSON.stringify(u),headers:new Headers({"Content-Type":"application/json"})});fetch(n).then((function(e){return e.json()})).then((function(t){return e.setMeal(t.meal)})).then((function(e){return E(e.statusMessage)})).catch((function(e){return console.log(e)}))}},"Save"),l.a.createElement(g.a,{variant:"secondary",onClick:f},"Cancel")))):l.a.createElement(l.a.Fragment,null)};var N=function(e){var t=Object(n.useState)(),a=Object(h.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(),i=Object(h.a)(o,2),u=i[0],s=i[1],m=JSON.parse(localStorage.getItem("token"));l.a.useEffect((function(){fetch("http://localhost:9000/recipe/".concat(e.match.params.id,"/")).then((function(e){return e.json()})).then((function(e){return c(e)}))}),[e.match.params.id]);var d=function(){return l.a.createElement(E.a,null,l.a.createElement(E.a.Toggle,{as:g.a,variant:"link",eventKey:"0"},"Steps"),l.a.createElement(E.a.Toggle,{as:g.a,variant:"link",eventKey:"1"},"Ingredients"),l.a.createElement(E.a.Collapse,{eventKey:"0"},l.a.createElement(f.a,null,r.instructions&&r.instructions.map((function(e){return l.a.createElement(p.a,{key:Object(I.a)()},e.item)})))),l.a.createElement(E.a.Collapse,{eventKey:"1"},l.a.createElement(f.a,null,r.ingredients&&r.ingredients.map((function(e){return l.a.createElement(p.a,{key:Object(I.a)()},e.item)})))))};return r&&null!=m?l.a.createElement(v.a,null,l.a.createElement(b.a,null,l.a.createElement("h1",null,e.loggedIn),l.a.createElement("h1",{className:"primary"},r.name)),l.a.createElement(b.a,null,l.a.createElement("h5",{className:"secondary"},r.cuisine),l.a.createElement("h5",{className:"secondary"},r.difficulty)),l.a.createElement(b.a,null,l.a.createElement(w,{meal:r,setMeal:c}),l.a.createElement(g.a,{onClick:function(e){e.target.disabled=!0;var t="http://localhost:9000/recipe/".concat(r._id,"/delete"),a=new Request(t,{method:"DELETE"});fetch(a).then((function(e){return e.json()})).then((function(e){return s({statusMessage:u})})).then(window.setTimeout((function(){window.location.href="/recipes"}),100)).catch((function(e){return s({statusMessage:u})}))}},"Delete")),l.a.createElement(b.a,null,l.a.createElement(C.a,null,u)),l.a.createElement(b.a,null,d())):r?l.a.createElement(v.a,null,l.a.createElement(b.a,null,l.a.createElement("h1",null,e.loggedIn),l.a.createElement("h1",{className:"primary"},r.name)),l.a.createElement(b.a,null,l.a.createElement("h5",{className:"secondary"},r.cuisine),l.a.createElement("h5",{className:"secondary"},r.difficulty)),l.a.createElement(b.a,null,d())):l.a.createElement(l.a.Fragment,null)},M=a(28),x=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).handleMultiChange=function(t){for(var a=t.target.id,n=document.getElementById(a).getElementsByTagName("input"),l=[],r=0;r<n.length;r++){var c=n[r].value;l.push({item:[c],key:Object(I.a)()})}e.setState(Object(M.a)({},a,l)),console.log(e.state)},e.addInputField=function(t){var a=t.target.name+"Count";e.setState(Object(M.a)({},a,e.state[a]+1))},e.renderInputFields=function(t){for(var a=[],n=t+"Count",r=0;r<e.state[n];r++)a.push(l.a.createElement(j.a.Control,{type:"text"}));return a},e.onChange=function(t){var a=t.target.id,n=t.target.value;e.setState(Object(M.a)({},a,n))},e.onSubmit=function(t){var a=t.target.childNodes;a[a.length-1].disabled=!0,t.preventDefault();var n=new Request("http://localhost:9000/addMeal",{method:"POST",body:JSON.stringify(e.state),headers:new Headers({"Content-Type":"application/json"})});fetch(n).then((function(e){return e.json()})).then((function(t){return e.setState({res:t})})).then(window.setTimeout((function(){window.location.href="/"}),1500)).catch((function(t){return e.setState({res:t})}))},e.state={res:[],ingredientsCount:1,instructionsCount:1},e}return Object(i.a)(a,[{key:"render",value:function(){var e=null;return this.state.res.statusMessage&&(e=this.state.res.statusMessage),l.a.createElement(j.a,{onSubmit:this.onSubmit},l.a.createElement(j.a.Group,{controlId:"name",onChange:this.onChange},l.a.createElement(j.a.Label,null,"Meal name"),l.a.createElement(j.a.Control,{type:"text"})),l.a.createElement(j.a.Group,{controlId:"cuisine",onChange:this.onChange},l.a.createElement(j.a.Label,null,"Cuisine"),l.a.createElement(j.a.Control,{type:"text"})),l.a.createElement(j.a.Group,{controlId:"difficulty",onChange:this.onChange},l.a.createElement(j.a.Label,null,"Difficulty"),l.a.createElement(j.a.Control,{type:"text"})),l.a.createElement(j.a.Group,{controlId:"ingredients",id:"ingredients",onChange:this.handleMultiChange},l.a.createElement(j.a.Label,null,"Ingredients"),this.renderInputFields("ingredients"),l.a.createElement(g.a,{name:"ingredients",onClick:this.addInputField},"Add ingredient")),l.a.createElement(j.a.Group,{controlId:"instructions",id:"instructions",onChange:this.handleMultiChange},l.a.createElement(j.a.Label,null,"Instructions"),this.renderInputFields("instructions"),l.a.createElement(g.a,{name:"instructions",onClick:this.addInputField},"Add instruction")),l.a.createElement(g.a,{variant:"primary",id:"submit",type:"submit"},"Submit"),l.a.createElement(C.a,null,e))}}]),a}(n.Component),T=a(81),F=a(58),L=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).handleChange=function(t){t.preventDefault(),t.target.value.length<3?e.setState({items:[]}):fetch("http://localhost:9000/search?name=".concat(t.target.value)).then((function(e){return e.json()})).then((function(t){return e.setState({items:t})}))},e.state={items:[]},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(v.a,null,l.a.createElement(T.a,{className:"mb-3"},l.a.createElement(F.a,{onChange:this.handleChange,placeholder:"Begin typing the dish you want"})),l.a.createElement(f.a,null,this.state.items.map((function(e){return l.a.createElement(p.a,{key:Object(I.a)()},l.a.createElement(m.b,{to:"/recipe/".concat(e._id)},e.name))}))))}}]),a}(n.Component),G=a(87);var B=function(e){return l.a.createElement(v.a,null,l.a.createElement(b.a,null,e.items.map((function(e){return l.a.createElement(G.a,{style:{width:"15rem"},key:Object(I.a)()},l.a.createElement(G.a.Img,{variant:"top",src:"holder.js/100px180"}),l.a.createElement(G.a.Body,null,l.a.createElement(G.a.Title,null,e.name),l.a.createElement(G.a.Text,null,"Some quick example text to build on the card title and make up the bulk of the card's content."),l.a.createElement(m.b,{to:"/recipe/".concat(e._id),variant:"primary"},"More details")))}))))},D=a(82),K=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),fetch("http://localhost:9000/tags/tags?cuisine=".concat(n.state.cuisine,"&difficulty=").concat(n.state.difficulty)).then((function(e){return e.json()})).then((function(e){n.props.handleStateChange(e)}))},n.handleClick=function(e){n.setState(Object(M.a)({},e.target.parentNode.id,e.target.textContent))},n.state={requestSent:!1},n}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(E.a,null,l.a.createElement(E.a.Toggle,{as:g.a,variant:"link",eventKey:"0"},"Difficulty"),l.a.createElement(E.a.Toggle,{as:g.a,variant:"link",eventKey:"1"},"Cuisine"),l.a.createElement(E.a.Toggle,{as:g.a,variant:"link",eventKey:"2"},l.a.createElement(g.a,{onClick:this.handleSubmit,type:"submit",value:"Submit"},"Search")),l.a.createElement(E.a.Collapse,{eventKey:"0"},l.a.createElement(D.a,{id:"difficulty"},l.a.createElement(g.a,{onClick:this.handleClick,className:"tags",variant:"secondary"},"Easy"),l.a.createElement(g.a,{onClick:this.handleClick,className:"tags",variant:"secondary"},"Medium"),l.a.createElement(g.a,{onClick:this.handleClick,className:"tags",variant:"secondary"},"Hard"))),l.a.createElement(E.a.Collapse,{eventKey:"1"},l.a.createElement(D.a,{id:"cuisine"},l.a.createElement(g.a,{onClick:this.handleClick,className:"tags",variant:"secondary"},"Italian"),l.a.createElement(g.a,{onClick:this.handleClick,className:"tags",variant:"secondary"},"Mexican"),l.a.createElement(g.a,{onClick:this.handleClick,className:"tags",variant:"secondary"},"English"))),l.a.createElement(E.a.Collapse,{eventKey:"2"},l.a.createElement(D.a,null)))}}]),a}(n.Component);var R=function(e){var t=Object(n.useState)(!1),a=Object(h.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(),i=Object(h.a)(o,2),u=i[0],s=i[1],m=Object(n.useState)("testing"),d=Object(h.a)(m,2),E=d[0],f=d[1],p=function(){return c(!1)},v=function(e){f(e.response),b(e)},b=function(t){if("Login successful"==t.response)return window.setTimeout((function(){p()}),500),localStorage.setItem("token",JSON.stringify(t.token)),void e.setState({loggedIn:!0})};return l.a.createElement(l.a.Fragment,null,l.a.createElement(g.a,{onClick:function(){return c(!0)}},"Login"),l.a.createElement(O.a,{show:r,onHide:p,backdrop:"static",keyboard:!1},l.a.createElement(O.a.Header,{closeButton:!0},l.a.createElement(O.a.Title,null,"Modal title")),l.a.createElement(O.a.Body,null,l.a.createElement(j.a,{onChange:function(e){!function(e){var t=e.target.id,a=e.target.value,n=Object(k.a)({},u);n[t]=a,s(n)}(e)}},l.a.createElement(j.a.Group,{controlId:"username"},l.a.createElement(j.a.Label,null,"Username"),l.a.createElement(j.a.Control,{type:"text"})),l.a.createElement(j.a.Group,{controlId:"password"},l.a.createElement(j.a.Label,null,"Password"),l.a.createElement(j.a.Control,{type:"text"})))),l.a.createElement(O.a.Footer,null,l.a.createElement(g.a,{variant:"primary",onClick:function(e){e.preventDefault();var t=new Request("http://localhost:9000/login",{method:"POST",body:JSON.stringify(u),headers:new Headers({"Content-Type":"application/json"})});fetch(t).then((function(e){return e.json()})).then((function(e){return v(e)})).catch((function(e){return f(e)}))}},"Login"),l.a.createElement(g.a,{variant:"secondary",onClick:p},"Cancel")),l.a.createElement(C.a,null,E)))};var H=function(e){return e.state.loggedIn?l.a.createElement(v.a,null,l.a.createElement(b.a,null,l.a.createElement(m.b,{to:"/addMeal"},"Add meal"),l.a.createElement(g.a,{onClick:e.logout},"Logout")),l.a.createElement(b.a,null,l.a.createElement(L,null)),l.a.createElement(b.a,null,l.a.createElement(K,{handleStateChange:e.handleStateChange})),l.a.createElement(b.a,null,l.a.createElement(B,{items:e.state.items,loggedIn:e.state.loggedIn})),l.a.createElement(b.a,null,l.a.createElement(g.a,{onClick:function(){e.loadRecipes()}},"View more"))):l.a.createElement(v.a,null,l.a.createElement(b.a,null,l.a.createElement(R,{setState:function(t){return e.setState(t)}})),l.a.createElement(b.a,null,l.a.createElement(L,null)),l.a.createElement(b.a,null,l.a.createElement(K,{handleStateChange:e.handleStateChange})),l.a.createElement(b.a,null,l.a.createElement(B,{items:e.state.items,loggedIn:e.state.loggedIn})),l.a.createElement(b.a,null,l.a.createElement(g.a,{onClick:function(){e.loadRecipes()}},"View more")))},J=a(43),q=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).handleStateChange=function(t,a,n){e.setState({items:t})},e.logout=function(){localStorage.removeItem("token"),e.setState({loggedIn:!1,authUser:""})},e.state={items:[],loggedIn:!1,authUser:JSON.parse(localStorage.getItem("token"))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.state.authUser&&this.setState({loggedIn:!0}),this.loadRecipes()}},{key:"loadRecipes",value:function(){var e=this;fetch("/recipes").then((function(e){return e.json()})).then((function(t){return e.setState({items:t})}))}},{key:"render",value:function(){var e=this;return l.a.createElement(m.a,null,l.a.createElement(J.a,null,l.a.createElement(d.b,{path:"/addMeal",component:x}),l.a.createElement(d.b,{path:"/recipe/:id",component:N}),l.a.createElement(d.b,{path:"/recipes",component:function(){return l.a.createElement(H,{logout:e.logout,handleStateChange:e.handleStateChange,state:e.state,loadRecipes:e.loadRecipes,setState:function(t){return e.setState(t)}})}}),l.a.createElement(d.b,{path:"/",render:function(){return l.a.createElement(d.a,{to:"/recipes"})}})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(75);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[64,1,2]]]);
//# sourceMappingURL=main.491de6af.chunk.js.map