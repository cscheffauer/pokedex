(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{133:function(e,a,n){},134:function(e,a,n){"use strict";var t=function(){var e={kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},a={kind:"ScalarField",alias:null,name:"name",args:null,storageKey:null},n={kind:"ScalarField",alias:null,name:"image",args:null,storageKey:null},t=[{kind:"ScalarField",alias:null,name:"minimum",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"maximum",args:null,storageKey:null}],r=[a,{kind:"ScalarField",alias:null,name:"damage",args:null,storageKey:null}],l=[{kind:"LinkedField",alias:null,name:"pokemons",storageKey:"pokemons(first:151)",args:[{kind:"Literal",name:"first",value:151}],concreteType:"Pokemon",plural:!0,selections:[e,a,n,{kind:"ScalarField",alias:null,name:"types",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"height",storageKey:null,args:null,concreteType:"PokemonDimension",plural:!1,selections:t},{kind:"LinkedField",alias:null,name:"weight",storageKey:null,args:null,concreteType:"PokemonDimension",plural:!1,selections:t},{kind:"LinkedField",alias:null,name:"attacks",storageKey:null,args:null,concreteType:"PokemonAttack",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"fast",storageKey:null,args:null,concreteType:"Attack",plural:!0,selections:r},{kind:"LinkedField",alias:null,name:"special",storageKey:null,args:null,concreteType:"Attack",plural:!0,selections:r}]},{kind:"LinkedField",alias:null,name:"evolutions",storageKey:null,args:null,concreteType:"Pokemon",plural:!0,selections:[e,a,n]}]}];return{kind:"Request",fragment:{kind:"Fragment",name:"CardListQuery",type:"Query",metadata:null,argumentDefinitions:[],selections:l},operation:{kind:"Operation",name:"CardListQuery",argumentDefinitions:[],selections:l},params:{operationKind:"query",name:"CardListQuery",id:null,text:"query CardListQuery {\n  pokemons(first: 151) {\n    id\n    name\n    image\n    types\n    height {\n      minimum\n      maximum\n    }\n    weight {\n      minimum\n      maximum\n    }\n    attacks {\n      fast {\n        name\n        damage\n      }\n      special {\n        name\n        damage\n      }\n    }\n    evolutions {\n      id\n      name\n      image\n    }\n  }\n}\n",metadata:{}}}}();t.hash="0352a9310eb8db409c5f0e6598793405",e.exports=t},135:function(e,a,n){},136:function(e,a,n){},137:function(e,a,n){},138:function(e,a,n){},139:function(e,a,n){},140:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),l=n(33),c=n.n(l),o=n(21),i=n(12),s=n(70),u=n(71),m=n(72),d=(n(84),n(19)),p=n(20),g=n(23),h=n(22),E=(n(85),function(e){var a=e.id,n=e.name,t=e.image,l=e.types,c=e.height,o=e.weight,i=e.attacks,s=e.evolutions,u=e.expanded,m=e.onExpandedChange,d=e.searchBoxInput,p=e.searchForEvolution,g=function(e){m(e===u?void 0:e)},h=u===a?"pokemonOpenTriangle":"pokemonClosedTriangle";return r.a.createElement("div",{className:"cardWrapper noselect"},r.a.createElement("div",{onClick:function(){return g(a)},className:"card"},u===a&&r.a.createElement("div",{onClick:function(){return g(a)},className:"cardBorder"}),!(u===a)&&r.a.createElement("img",{draggable:"false",alt:"image "+n,src:t}),r.a.createElement("div",{className:"pokemonNameSection"},r.a.createElement("p",{className:u===a?"pokemonNameExpanded":void 0},n)),r.a.createElement("div",{className:"pokemonTypeSection"},r.a.createElement("div",{className:"pokemonTypeOverlay"},r.a.createElement("div",{className:"pokemonTypeOverlayBackground",style:{backgroundImage:"url('/images/textures/".concat(l[0],".png')")}})),2===l.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"pokemonTypePositionOne pokemonType"},r.a.createElement("p",null,l[0])),r.a.createElement("div",{className:"pokemonTypePositionTwo pokemonType"},r.a.createElement("p",null,l[1]))):r.a.createElement("div",{className:"pokemonTypePosition pokemonType"},r.a.createElement("p",null,l)),r.a.createElement("div",{className:"trianglePosition "+h}))),u===a&&r.a.createElement("div",{className:"cardDetails"},r.a.createElement("div",null,r.a.createElement("h3",null,"Facts"),r.a.createElement("div",{className:"factsImageWrapper"},r.a.createElement("img",{draggable:"false",alt:"image "+n,src:t})),r.a.createElement("div",{className:"factsHeightWrapper"},r.a.createElement("div",null,r.a.createElement("img",{draggable:"false",alt:"height_icon",src:"/images/facts/height.png"})),r.a.createElement("div",null,r.a.createElement("p",null,"Min: ",c.minimum),r.a.createElement("p",null,"Max: ",c.maximum))),r.a.createElement("div",{className:"factsWeightWrapper"},r.a.createElement("div",null,r.a.createElement("img",{draggable:"false",alt:"weight_icon",src:"/images/facts/weight.png"})),r.a.createElement("div",null,r.a.createElement("p",null,"Min: ",o.minimum),r.a.createElement("p",null,"Max: ",o.maximum)))),r.a.createElement("div",null,r.a.createElement("h3",null,"Attacks"),r.a.createElement("div",{className:"attacksWrapper"},r.a.createElement("div",null,r.a.createElement("p",null,"FAST"),null===i.fast?r.a.createElement("p",{className:"noAttacksFoundText"},"No FAST Attacks found!"):i.fast.map((function(e,a){return null!==e.name&&r.a.createElement("div",{key:a,className:"fastAttack attackCard"},r.a.createElement("p",{className:"attackName"},e.name),r.a.createElement("p",{className:"attackDamage"},e.damage))}))),r.a.createElement("div",null,r.a.createElement("p",null,"SPECIAL"),null===i.special?r.a.createElement("p",{className:"noAttacksFoundText"},"No FAST Attacks found!"):i.special.map((function(e,a){return r.a.createElement("div",{key:a,className:"specialAttack attackCard"},r.a.createElement("p",{className:"attackName"},e.name),r.a.createElement("p",{className:"attackDamage"},e.damage))}))))),r.a.createElement("div",null,r.a.createElement("h3",null,"Evolutions"),null===s?r.a.createElement("p",{className:"noEvolutionFoundText"},"Final evolution"):s.map((function(e,a){return r.a.createElement("div",{key:a,className:"evolutionsImageWrapper"},r.a.createElement("img",{onClick:function(){return function(e,a){""!==d?(p(a),g(e)):g(e)}(e.id,e.name)},style:s.length>2?{marginTop:15,height:55}:{},draggable:"false",alt:"image "+n,src:e.image}),r.a.createElement("p",null,e.name))})))))}),f=(n(86),function(e){var a=e.swapiLabel;return r.a.createElement("div",{className:"loadingContainer"},r.a.createElement("div",{className:"circleLoading"}),a&&r.a.createElement("p",{className:"morePeopleLoading"},"catching 'em all"))}),v=n(73),k=n(4),y=new k.QueryResponseCache({size:150,ttl:3e5});var C,N=new k.Environment({network:k.Network.create((function(e,a,n){var t=e.text,r="mutation"===e.operationKind,l="query"===e.operationKind,c=n&&n.force,o=y.get(t,a);return l&&null!==o&&!c?o:fetch("https://graphql-pokemon.now.sh/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:e.text,variables:a})}).then((function(e){return e.json()})).then((function(e){return l&&e&&y.set(t,a,e),r&&y.clear(),e}))})),store:new k.Store(new k.RecordSource)}),b=(n(133),Object(o.b)((function(e){return{expanded:e.changeExpanded.id}}),(function(e){return{onExpandedChange:function(a){return e(function(e){return{type:"CHANGE_EXPANDED",payload:e}}(a))}}}))((function(e){var a=e.searchBoxRef,t=e.searchBoxInput,l=e.setSearchChange,c=e.expanded,o=e.onExpandedChange,i=function(e){l(e),a.current.focus()};return r.a.createElement(v.QueryRenderer,{environment:N,query:void 0!==C?C:C=n(134),variables:{},render:function(e){var a=e.error,n=e.props;return a?r.a.createElement("div",null,"Error!"):n?n.pokemons.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e,a){return r.a.createElement(E,{key:a,index:a,id:e.id,name:e.name,image:e.image,types:e.types,height:e.height,weight:e.weight,attacks:e.attacks,evolutions:e.evolutions,expanded:c,onExpandedChange:o,searchBoxInput:t,searchForEvolution:i})})):r.a.createElement(f,{swapiLabel:!0})}})}))),x=(n(135),function(e){var a=e.searchBoxRef,n=e.searchBoxInput,t=e.setSearchChange;return r.a.createElement("div",{className:"searchboxWrapper"},r.a.createElement("input",{ref:a,"aria-label":"Search Characters",className:"searchBox",type:"search",placeholder:"SEARCH",onChange:function(e){return t(e.target.value)},value:n}))}),w=n(49),F=function(e){Object(g.a)(n,e);var a=Object(h.a)(n);function n(e){var t;return Object(d.a)(this,n),(t=a.call(this,e)).state={hasError:!1},t}return Object(p.a)(n,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h3",{style:{width:"100%",textAlign:"center"}},"An error appeared - pls contact the owner of the page!"):this.props.children}}]),n}(t.Component),S=(n(137),function(e){var a=e.onRouteChange;return r.a.createElement("div",{className:"TechnologyInfoButtonContainer"}," ",r.a.createElement("img",{alt:"Technology Info Button",className:"TechnologyInfoButton",onClick:function(){return a("technology")},src:"images/code.png"}))}),T=(n(138),n(139),function(e){var a=e.onRouteChange;return r.a.createElement("div",{className:"ImprintButtonContainer"}," ",r.a.createElement("img",{alt:"Imprint Button",className:"ImprintButton",onClick:function(){return a("imprint")},src:"images/imprint.png"})," ")}),O=Object(t.lazy)((function(){return n.e(4).then(n.bind(null,143))})),R=Object(t.lazy)((function(){return n.e(3).then(n.bind(null,144))})),B=function(e){Object(g.a)(n,e);var a=Object(h.a)(n);function n(){var e;return Object(d.a)(this,n),(e=a.call(this)).setSearchChange=function(a){e.setState({searchBoxInput:a})},e.getRouteComponent=function(a){return"main"===a?r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{searchBoxRef:e.state.searchBoxRef,searchBoxInput:e.state.searchBoxInput,setSearchChange:e.setSearchChange}),r.a.createElement(w.a,{scrollContainer:e.state.scrollContainer},r.a.createElement(F,null,r.a.createElement(b,{searchBoxRef:e.state.searchBoxRef,searchBoxInput:e.state.searchBoxInput,setSearchChange:e.setSearchChange})))):"imprint"===a?r.a.createElement(t.Suspense,{fallback:r.a.createElement(f,{swapiLabel:!1})},r.a.createElement(R,null)):"technology"===a?r.a.createElement(t.Suspense,{fallback:r.a.createElement(f,{swapiLabel:!1})},r.a.createElement(O,null)):void 0},e.state={searchBoxInput:"",scrollContainer:r.a.createRef(),searchBoxRef:r.a.createRef()},e}return Object(p.a)(n,[{key:"render",value:function(){var e=this.props,a=e.route,n=e.onRouteChange,t=this.getRouteComponent(a);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"main"},t,r.a.createElement("img",{onClick:function(){"main"!==a&&n("main")},alt:"pokeball",className:"pokeball "+("main"!==a?"pokeballHover":""),src:"images/pokeball_grey.png"}))),r.a.createElement(S,{onRouteChange:n}),r.a.createElement(T,{onRouteChange:n}))}}]),n}(t.Component),A=function(e){Object(g.a)(n,e);var a=Object(h.a)(n);function n(){return Object(d.a)(this,n),a.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return r.a.createElement(B,this.props)}}]),n}(t.Component),j=Object(o.b)((function(e){return{route:e.changeRoute.route,searchField:e.searchPokemon.searchField}}),(function(e){return{onRouteChange:function(a){return e(function(e){return{type:"CHANGE_ROUTE",payload:e}}(a))},onSearchChange:function(a){return e({type:"CHANGE_SEARCH_FIELD",payload:a.target.value})}}}))(A);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L={route:"main"},I={searchField:""},K={id:void 0},P=Object(s.createLogger)(),D=Object(i.combineReducers)({changeRoute:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(a.type){case"CHANGE_ROUTE":return Object.assign({},e,{route:a.payload});default:return e}},searchPokemon:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(a.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:a.payload});default:return e}},changeExpanded:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(a.type){case"CHANGE_EXPANDED":return Object.assign({},e,{id:a.payload});default:return e}}}),H=Object(i.createStore)(D,Object(m.composeWithDevTools)(Object(i.applyMiddleware)(u.a,P)));c.a.render(r.a.createElement(o.a,{store:H},r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},49:function(e,a,n){"use strict";var t=n(0),r=n.n(t);n(136);a.a=function(e){var a=e.scrollContainer;return r.a.createElement("div",{ref:a,className:"scrollContainer"},e.children,"        ")}},74:function(e,a,n){e.exports=n(140)},84:function(e,a,n){},85:function(e,a,n){},86:function(e,a,n){}},[[74,1,2]]]);
//# sourceMappingURL=main.0bc08db8.chunk.js.map