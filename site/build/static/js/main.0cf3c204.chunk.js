(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(20);t.Button=o.default},,,,,,,,,,,function(e,t,n){e.exports=n(23)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(4),l=n(0);n(21);var r=n(5),a=n(2),i=n(22),u=function(e){var t,n=e.color,i=e.size,u=e.block,c=e.icon,s=e.link,d=e.loading,m=e.dash,p=e.disabled,f=e.outline,B=e.round,E=e.ripple,b=e.children,_=e.className,h=e.prefixCls,y=o.__rest(e,["color","size","block","icon","link","loading","dash","disabled","outline","round","ripple","children","className","prefixCls"]),k=r.default(_,h,s?[h+"_"+n+"_link"]:f?[h+"_"+n+"_outline"]:[h+"_"+n],i&&h+"_"+i,((t={})[h+"_block"]=u,t[h+"_round"]=B,t[h+"_ripple"]=E,t[h+"_dash"]=f&&m,t["ty-btn_"+n+"_disabled"]=p||d,t));return l.createElement("button",o.__assign({className:k,disabled:p||d,type:"button"},y),function(e,t){return void 0===t&&(t=!1),t?l.createElement(a.IoIosSync,{className:"ty-btn__loader"}):e}(c,d),b)};u.defaultProps={prefixCls:"ty-btn",size:"md",color:"default"},u.Group=i.default,t.default=u},function(e,t,n){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(4),l=n(0),r=n(5),a=function(e){var t,n=e.size,a=e.ripple,i=e.color,u=e.round,c=e.className,s=e.prefixCls,d=e.children,m=r.default(c,s,((t={})[s+"_round"]=u,t));return l.createElement("div",{className:m},l.Children.map(d,function(e){return l.cloneElement(e,o.__assign({},e.props,{size:n,ripple:a,color:i}))}))};a.defaultProps={prefixCls:"ty-btn-group",size:"md"},t.default=a},function(e,t,n){"use strict";n.r(t);var o=n(0),l=n.n(o),r=n(6),a=n.n(r),i=(n(18),n(7)),u=n(8),c=n(10),s=n(9),d=n(11),m=(n(19),n(2)),p=n(1),f=p.Button.Group,B=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p.Button,null,"Default"),l.a.createElement(p.Button,{outline:!0,color:"primary"},"Default"),l.a.createElement(p.Button,{link:!0,size:"xs",color:"pink",round:!0},"Primary Button"),l.a.createElement(p.Button,{color:"blue",round:!0},"Info Button"),l.a.createElement(p.Button,{color:"green"},"Success Button"),l.a.createElement(p.Button,{disabled:!0,ripple:!0,size:"sm",color:"pink"},"Primary Button"),l.a.createElement(p.Button,{ripple:!0,size:"sm",color:"yellow",round:!0,link:!0,dash:!0},"Primary Button"),l.a.createElement(p.Button,{ripple:!0,size:"sm",color:"yellow",round:!0,outline:!0,dash:!0},"Primary Button"),l.a.createElement(p.Button,{ripple:!0,color:"pink",dash:!0,onClick:function(){return console.log("dasdasd")}},"Primary Button"),l.a.createElement(p.Button,{size:"lg",color:"pink",block:!0,round:!0},"Primary Button"),l.a.createElement(p.Button,{color:"pink",round:!0,outline:!0,icon:l.a.createElement(m.IoIosAdd,null)},"Primary Button"),l.a.createElement(p.Button,{size:"lg",color:"pink",loading:!0,outline:!0,disabled:!0},"Primary Button"),l.a.createElement(f,{ripple:!0},l.a.createElement(p.Button,null,"Left"),l.a.createElement(p.Button,{dash:!0},"Middle"),l.a.createElement(p.Button,null,"Right")),l.a.createElement(f,{ripple:!0,color:"primary",round:!0},l.a.createElement(p.Button,null,"Left"),l.a.createElement(p.Button,null,"Middle"),l.a.createElement(p.Button,null,"Right")),l.a.createElement(f,{ripple:!0,color:"blue",round:!0},l.a.createElement(p.Button,null,"Left"),l.a.createElement(p.Button,null,"Middle"),l.a.createElement(p.Button,null,"Right")),l.a.createElement(f,{ripple:!0,color:"green"},l.a.createElement(p.Button,{disabled:!0},"Left"),l.a.createElement(p.Button,null,"Right")))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(l.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[12,1,2]]]);
//# sourceMappingURL=main.0cf3c204.chunk.js.map