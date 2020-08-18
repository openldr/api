(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{64:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a(2),o=a(6),r=(a(0),a(87)),i={id:"openldr-api",title:"Open LDR API"},c={unversionedId:"openldr-api",id:"openldr-api",isDocsHomePage:!1,title:"Open LDR API",description:"WEB API",source:"@site/docs\\openldr-api.md",permalink:"/api/docs/openldr-api",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/openldr-api.md",sidebar:"someSidebar",previous:{title:"Open LDR Data",permalink:"/api/docs/openldr"},next:{title:"Open LDR Data",permalink:"/api/docs/"}},s=[{value:"WEB API",id:"web-api",children:[]},{value:"Schema",id:"schema",children:[]},{value:"Autentica\xe7\xe3o",id:"autentica\xe7\xe3o",children:[]}],p={rightToc:s};function d(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"web-api"},"WEB API"),Object(r.b)("p",null,"O OpenLDR possui diversos de mecanismos de comunica\xe7\xe3o com outros Sistemas de Informa\xe7\xe3o, e para o consumo de dados e relat\xf3rios foi criada uma web API baseada na arquitetura REST. Esta \xe9 uma API est\xe1tica que concentra as principais responsabilidades dos dados no Backend."),Object(r.b)("p",null,"Toda solicita\xe7\xe3o \xe9 feita a partir de rotas ",Object(r.b)("inlineCode",{parentName:"p"},"http")," disponibilizadas pelo Backend, sendo que cada rota \xe9 criada para responder apenas a uma solicita\xe7\xe3o espec\xedfica."),Object(r.b)("h2",{id:"schema"},"Schema"),Object(r.b)("p",null,"Todo o acesso a API \xe9 feito atrav\xe9s do protocolo HTTP."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"O acesso pode ser feito atrav\xe9s de qualquer linguagem com suporte a comunica\xe7\xe3o REST."),Object(r.b)("li",{parentName:"ul"},"Toda a comunica\xe7\xe3o \xe9 feita no formato JSON."),Object(r.b)("li",{parentName:"ul"},"Todos os dados s\xe3o enviados e recebidos no formato JSON."),Object(r.b)("li",{parentName:"ul"},"O output de campos vazios \xe9 representado por ",Object(r.b)("inlineCode",{parentName:"li"},"null"),"."),Object(r.b)("li",{parentName:"ul"},"As datas s\xe3o apresentadas no formato ISO 8601 ",Object(r.b)("inlineCode",{parentName:"li"},"YYYY-MM-DDTHH:MM:SSZ"),".")),Object(r.b)("h2",{id:"autentica\xe7\xe3o"},"Autentica\xe7\xe3o"),Object(r.b)("p",null,"A autentica\xe7\xe3o \xe9 feita por meio de um token assinado utilizando o padr\xe3o ",Object(r.b)("strong",{parentName:"p"},"JWT")," (Json Web Tokens). Este token \xe9 um c\xf3digo em ",Object(r.b)("inlineCode",{parentName:"p"},"Base64")," que armazena objectos ",Object(r.b)("inlineCode",{parentName:"p"},"JSON")," com os dados que permitem a autentica\xe7\xe3o da requisi\xe7\xe3o."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"A descri\xe7\xe3o do processo de autentica\xe7\xe3o contendo os links de acesso e a cria\xe7\xe3o das cred\xeanciais pode ser obtida entrando em contacto com a equipa que mant\xe9m o projecto. Por quest\xf5es de seguran\xe7a esta sess\xe3o n\xe3o \xe9 descrita neste documento.")))}d.isMDXComponent=!0},87:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=o.a.createContext({}),d=function(e){var t=o.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=d(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(a),b=n,m=u["".concat(i,".").concat(b)]||u[b]||l[b]||r;return a?o.a.createElement(m,c(c({ref:t},p),{},{components:a})):o.a.createElement(m,c({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<r;p++)i[p]=a[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);