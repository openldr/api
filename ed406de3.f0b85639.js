(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(6),i=(n(0),n(88)),o={id:"dictionary",title:"Dicion\xe1rio de Dados"},c={unversionedId:"dictionary",id:"dictionary",isDocsHomePage:!1,title:"Dicion\xe1rio de Dados",description:"Provincias",source:"@site/docs\\dictionary.md",permalink:"/api/docs/dictionary",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/dictionary.md",sidebar:"someSidebar",previous:{title:"This is Document Number 3",permalink:"/api/docs/doc3"}},b=[{value:"Provincias",id:"provincias",children:[]},{value:"Distritos",id:"distritos",children:[]},{value:"Unidade Sanit\xe1ria",id:"unidade-sanit\xe1ria",children:[]}],l={rightToc:b};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"provincias"},"Provincias"),Object(i.b)("p",null,"A tabela a seguir lista as prov\xedncias e os respectivos c\xf3digos de designa\xe7\xe3o no OpenLDR. Cada Provincia \xe9 representada por uma sequencia de dois carateres num\xe9ricos."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Provincia"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"C\xf3digo OpenLDR"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"C\xf3digo do MISAU (SISMA)"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Niassa"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"01"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Cabo Delgado"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"02"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Nampula"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"03"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Zambezia"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"04"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Tete"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"05"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Manica"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"06"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sofala"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"07"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Inhambane"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"08"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Gaza"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"09"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Maputo Provincia"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"10"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Maputo Cidade"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"11"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))))),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"curl <dominio>/provinces")," atrav\xe9s desta rota pode-se obter a lista com cada prov\xedncia associada ao respectivo c\xf3digo."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "ProvinceCode": "01",\n    "CountryCode": "MZ",\n    "CountryName": "Mozambique",\n    "ProvinceName": "Niassa"\n  },\n  {\n    "ProvinceCode": "02",\n    "CountryCode": "MZ",\n    "CountryName": "Mozambique",\n    "ProvinceName": "Cabo Delgado"\n  },\n  {\n    "ProvinceCode": "03",\n    "CountryCode": "MZ",\n    "CountryName": "Mozambique",\n    "ProvinceName": "Nampula"\n  },\n  {\n    "ProvinceCode": "04",\n    "CountryCode": "MZ",\n    "CountryName": "Mozambique",\n    "ProvinceName": "Zambezia"\n  },\n  {\n    "ProvinceCode": "05",\n    "CountryCode": "MZ",\n    "CountryName": "Mozambique",\n    "ProvinceName": "Tete"\n  },\n  {\n    "ProvinceCode": "06",\n    "CountryCode": "MZ",\n    "CountryName": "Mozambique",\n    "ProvinceName": "Manica"\n  },\n  {\n    "ProvinceCode": "07",\n    "CountryCode": "MZ",\n    "CountryName": "Mozambique",\n    "ProvinceName": "Sofala"\n  },\n  {\n    "ProvinceCode": "08",\n    "CountryCode": "MZ",\n    "CountryName": "Mozambique",\n    "ProvinceName": "Inhambane"\n  },\n  {\n    "ProvinceCode": "09",\n    "CountryCode": "MZ",\n    "CountryName": "Mozambique",\n    "ProvinceName": "Gaza"\n  },\n  {\n    "ProvinceCode": "10",\n    "CountryCode": "MZ",\n    "CountryName": "Mozambique",\n    "ProvinceName": "Maputo Provincia"\n  },\n  {\n    "ProvinceCode": "11",\n    "CountryCode": "MZ",\n    "CountryName": "Mozambique",\n    "ProvinceName": "Maputo Cidade"\n  }\n]\n')),Object(i.b)("h2",{id:"distritos"},"Distritos"),Object(i.b)("p",null,"Dentro do Open LDR os distritos s\xe3o designados por dois caracteres alfanum\xe9ricos (Letra+N\xfamero)."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Distrito"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"C\xf3digo OpenLDR"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"C\xf3digo do MISAU (SISMA)"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Maxixe"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"F1"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Mandlakazi"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"C2"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Malema"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"K6"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"..."),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"..."),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"...")))),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"curl <dominio>/districts")),Object(i.b)("p",null,"Esta rota retorna a lista de todos os Distritos agrupados por Prov\xedncia."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "DistrictCode": "F1",\n    "CountryCode": "MZ",\n    "CountryName": "Mozambique",\n    "ProvinceCode": "08",\n    "ProvinceName": "Inhambane",\n    "DistrictName": "Maxixe"\n  },\n  {\n    "DistrictCode": "C9",\n    "CountryCode": "MZ",\n    "CountryName": "Mozambique",\n    "ProvinceCode": "09",\n    "ProvinceName": "Gaza",\n    "DistrictName": "Mandlakazi"\n  },\n  ...\n]\n')),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"DistrictCode")," \xe9 o c\xf3digo do Distrito"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"CountryCode")," \xe9 o c\xf3digo do pa\xeds"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"ContryName")," \xe9 o nome do Pa\xeds"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"ProvinceName")," nome da Provincia"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"DistrictName")," \xe9 o nome do Distrito"),Object(i.b)("h2",{id:"unidade-sanit\xe1ria"},"Unidade Sanit\xe1ria"),Object(i.b)("p",null,"AS Unidades Sanit\xe1rias pedem ser consultadas usando o nome, o c\xf3digo da Unidade Sanit\xe1ria ou atrav\xe9s do nome ou c\xf3digo distrito."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"curl <dominio>/clinic/<c\xf3digo ou nome da unidade sanit\xe1ria>")),Object(i.b)("p",null,"Exemplo: ",Object(i.b)("inlineCode",{parentName:"p"},"curl <dominio>/clinic/CS Sambula")," neste caso consultamos a a Unidade Sanitaria ",Object(i.b)("inlineCode",{parentName:"p"},"CS Samula"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "DateTimeStamp": "1899-12-30T00:00:00.000Z",\n  "VersionStamp": "",\n  "FacilityCode": "SAMBL",\n  "Description": "CS Sambula",\n  "FacilityType": "H",\n  "CountryCode": "MZ",\n  "ProvinceCode": "01",\n  "RegionCode": "",\n  "DistrictCode": "N1",\n  "SubDistrictCode": "",\n  "LattLong": null,\n  "HFStatus": 1,\n  "HealthCareID": "MZ0100N1SAMBL",\n  "FacilityNationalCode": "1010114",\n  "HealthcareCountryCode": "MZ",\n  "HealthcareProvinceCode": "MZ01",\n  "HealthcareDistrictCode": "MZ0100N1",\n  "CountryName": "Mozambique",\n  "CountryLattLong": null,\n  "ProvinceName": "Niassa",\n  "ProvinceLattLong": null,\n  "DistrictName": "Distrito de Lichinga",\n  "DistrictLattLong": null\n}\n')),Object(i.b)("p",null,"Tamb\xe9m pode ser feita a consulta de todas as US de um determinado distrito usando o nome ou c\xf3digo do distrito."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"curl <dominio>/clinics/district/<Nome ou c\xf3digo do distrito>")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"}," curl <dominio>/clinics/district/Matola")," - Neste exemplo listamos todas as Unidades Sanit\xe1rias do Distrito da ",Object(i.b)("inlineCode",{parentName:"p"},"Matola"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'    [\n  {\n    "DateTimeStamp": "1899-12-30T00:00:00.000Z",\n    "VersionStamp": "",\n    "FacilityCode": "MACH",\n    "Description": "CS Machava II (DLink)",\n    "FacilityType": "H",\n    "CountryCode": "MZ",\n    "ProvinceCode": "10",\n    "RegionCode": "",\n    "DistrictCode": "J1",\n    "SubDistrictCode": "",\n    "LattLong": {...},\n    "HFStatus": 1,\n    "HealthCareID": "MZ1000J1MACH",\n    "FacilityNationalCode": "1100107",\n    "HealthcareCountryCode": "MZ",\n    "HealthcareProvinceCode": "MZ10",\n    "HealthcareDistrictCode": "MZ1000J1",\n    "CountryName": "Mozambique",\n    "CountryLattLong": null,\n    "ProvinceName": "Maputo Provincia",\n    "ProvinceLattLong": null,\n    "DistrictName": "Matola",\n    "DistrictLattLong": null\n  },\n  {\n    "DateTimeStamp": "1899-12-30T00:00:00.000Z",\n    "VersionStamp": "",\n    "FacilityCode": "MACH1",\n    "Description": "CS Machava I",\n    "FacilityType": "H",\n    "CountryCode": "MZ",\n    "ProvinceCode": "10",\n    "RegionCode": "",\n    "DistrictCode": "J1",\n    "SubDistrictCode": "",\n    "LattLong": {...},\n    "HFStatus": 1,\n    "HealthCareID": "MZ1000J1MACH1",\n    "FacilityNationalCode": "1100121",\n    "HealthcareCountryCode": "MZ",\n    "HealthcareProvinceCode": "MZ10",\n    "HealthcareDistrictCode": "MZ1000J1",\n    "CountryName": "Mozambique",\n    "CountryLattLong": null,\n    "ProvinceName": "Maputo Provincia",\n    "ProvinceLattLong": null,\n    "DistrictName": "Matola",\n    "DistrictLattLong": null\n  },...]\n')),Object(i.b)("p",null,"Da mesma forma pode-se extrair as US por Prov\xedncia, usando o nome ou c\xf3digo da Prov\xedncia."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"curl <dominio>/clinics/province/< c\xf3digo ou nome da provincia> ")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"curl <dominio>/clinics/province/Zambezia")," Neste exemplo listamos as Unidades Sanit\xe1rias da prov\xedncia da Zamb\xe9zia."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "DateTimeStamp": "1899-12-30T00:00:00.000Z",\n    "VersionStamp": "",\n    "FacilityCode": "NAMAT",\n    "Description": "Namaita",\n    "FacilityType": "H",\n    "CountryCode": "MZ",\n    "ProvinceCode": "04",\n    "RegionCode": "",\n    "DistrictCode": "",\n    "SubDistrictCode": "",\n    "LattLong": null,\n    "HFStatus": 0,\n    "HealthCareID": "MZ040000NAMAT",\n    "FacilityNationalCode": "",\n    "HealthcareCountryCode": "MZ",\n    "HealthcareProvinceCode": "MZ04",\n    "HealthcareDistrictCode": "MZ040000",\n    "CountryName": "Mozambique",\n    "CountryLattLong": null,\n    "ProvinceName": "Zambezia",\n    "ProvinceLattLong": null,\n    "DistrictName": null,\n    "DistrictLattLong": null\n  },...]\n')))}d.isMDXComponent=!0},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return s}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),m=d(n),u=a,s=m["".concat(o,".").concat(u)]||m[u]||p[u]||i;return n?r.a.createElement(s,c(c({ref:t},l),{},{components:n})):r.a.createElement(s,c({ref:t},l))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);