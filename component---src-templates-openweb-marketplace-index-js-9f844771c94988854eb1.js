(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"/m4c":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("Wbzz"),i=a("m8Fq"),c=a.n(i),l=a("pviY"),s=a("f23f"),m=function(e){var t=e.children,a=e.url,n=e.className,i=e.target,m=e.title,u=e.withArrow,p=void 0!==u&&u,d=e.color,f=void 0===d?"#000":d,g=e.external,v=e.tagParent,h=e.tagName;if("_blank"===i||g)return p?r.a.createElement(l.a,{className:n,text:m,link:a,color:f,external:!0}):r.a.createElement("a",{className:n,target:"_blank",rel:"noopener noreferrer",href:a},t||m||"");var b=c.a.isWebUri(a)?Object(s.f)(a):Object(s.k)(a);return p?r.a.createElement(l.a,{className:n,text:m,link:b,color:f}):r.a.createElement(o.Link,{onClick:function(){h&&v&&Object(s.o)(h,v)},className:n,to:b},t||m||"")};m.defaultProps={tagParent:"",tagName:""},t.a=m},"5Cyz":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("5OW0"),i=a("f23f"),c=(a("Xo82"),function(e){var t=e.meta,a=e.tagParent,n=e.tagName,c=t.headline,l=t.formPortalid,s=t.formId,m=t.formContent;return s?r.a.createElement("section",{className:"advertiser-sections conversation-form",id:"contact-us"},r.a.createElement("div",{className:"row align-right"},r.a.createElement("div",{className:"large-8 medium-12 small-12 columns conversation-form__heading-wrap"},r.a.createElement("h2",{className:"conversation-form__heading",dangerouslySetInnerHTML:{__html:Object(i.n)(c)}}),m&&r.a.createElement("div",{className:"conversation-form__text-content",dangerouslySetInnerHTML:{__html:Object(i.n)(m)}})),r.a.createElement("div",{className:"large-4 medium-6 small-12 columns"},r.a.createElement("div",{className:"conversation-form__form"},r.a.createElement(o.a,{portalId:l,formId:s,tagName:n,tagParent:a}))))):null});c.defaultProps={meta:{headline:"",formPortalid:"",formId:""},tagParent:"",tagName:""},t.a=c},"5OW0":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("9pBV"),i=a.n(o),c=function(e){var t=e.formId,a=e.portalId,n=e.setSubmitted,o=e.tagName,c=e.tagParent;if(!t)return null;return r.a.createElement(i.a,{portalId:a,formId:t,onSubmit:function(){"function"==typeof n&&n(!0),void 0!==window.dataLayer&&c&&window.dataLayer.push({event:"formAction",cfEventTag:o,cfEventTagParent:c})}})};c.defaultProps={tagName:"",tagParent:""},t.a=c},"9pBV":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),o=i(a("q1tI"));i(a("i8i4"));function i(e){return e&&e.__esModule?e:{default:e}}var c=0,l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={loaded:!1},a.id=c++,a.createForm=a.createForm.bind(a),a.findFormElement=a.findFormElement.bind(a),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"createForm",value:function(){var e=this;if(window.hbspt){if(null===this.el)return;var t=n({},this.props);delete t.loading,delete t.onSubmit,delete t.onReady;var a=n({},t,{target:"#"+this.el.getAttribute("id"),onFormSubmit:function(t){var a=t.serializeArray();e.props.onSubmit(a)}});return window.hbspt.forms.create(a),!0}setTimeout(this.createForm,1)}},{key:"loadScript",value:function(){var e=this,t=document.createElement("script");t.defer=!0,t.onload=function(){e.createForm(),e.findFormElement()},t.src="//js.hsforms.net/forms/v2.js",document.head.appendChild(t)}},{key:"findFormElement",value:function(){if(null!==this.el){var e=this.el.querySelector("iframe");e?(this.setState({loaded:!0}),this.props.onReady&&this.props.onReady(e)):setTimeout(this.findFormElement,1)}}},{key:"componentDidMount",value:function(){window.hbspt||this.props.noScript?(this.createForm(),this.findFormElement()):this.loadScript()}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this;return o.default.createElement("div",null,o.default.createElement("div",{ref:function(t){return e.el=t},id:"reactHubspotForm"+this.id,style:{display:this.state.loaded?"block":"none"}}),!this.state.loaded&&this.props.loading)}}]),t}(o.default.Component);t.default=l,e.exports=t.default},EeXD:function(e,t,a){},IuSb:function(e,t,a){},OZFc:function(e,t,a){"use strict";var n=a("vN+2"),r=a.n(n),o=a("q1tI"),i=a.n(o),c=a("lPHp"),l=a.n(c),s=a("LpSC"),m=a.n(s),u=a("PiD+");a("twhE");t.a=function(e){var t=e.mobileJsonUrl,a=e.desktopJsonUrl,n=e.className,c=void 0===n?"":n,s=e.onComplete,p=void 0===s?r.a:s,d=e.onStart,f=void 0===d?r.a:d,g=e.loop,v=void 0!==g&&g,h=e.canStart,b=void 0===h||h,E=e.load,w=void 0===E||E,_=e.device,k=void 0===_?"desktop":_,N=e.staticImage,y=void 0===N?null:N,I=Object(o.createRef)(),O=Object(o.useState)(!1),P=O[0],j=O[1],S=Object(o.useRef)({mobile:null,desktop:null}),x=function(e){if(e&&I.current&&b){I.current.innerHTML="";var t=l.a.loadAnimation({container:I.current,renderer:"svg",loop:v,autoplay:!0,animationData:e});t.addEventListener("complete",(function e(){p(t),t.removeEventListener("complete",e)})),f(t),j(!0)}};if(Object(o.useEffect)((function(){var e;(e="mobile"===k?t:a,new Promise((function(t){w&&e?S.current[k]?t(S.current[k]):m()(e).then((function(e){return e.json()})).then((function(e){S.current[k]=e,t(e)})):t(null)}))).then(x)}),[k,w,b]),!a&&y)return i.a.createElement(u.a,y);var T=y?i.a.createElement(u.a,y):null;return i.a.createElement("div",{className:c},!P&&T,i.a.createElement("div",{ref:I,className:"lottie-player"}))}},S4Or:function(e,t,a){},Xo82:function(e,t,a){},aDEV:function(e,t,a){"use strict";var n=a("E+oP"),r=a.n(n),o=a("q1tI"),i=a.n(o),c=a("/m4c"),l=a("sYrg"),s=a("TSYQ"),m=a.n(s),u=(a("S4Or"),function(e){var t=e.link,a=e.theme,n=void 0===a?"light":a;if(r()(t)||r()(t.title)||r()(t.url))return i.a.createElement(i.a.Fragment,null);var o=m()("cta__box",{"cta__box-white":"dark"===n}),s="#000";return"dark"===n&&(s="#fff"),i.a.createElement(c.a,Object.assign({className:o,external:!1},t),i.a.createElement("h6",{className:"cta__title"},t.title),i.a.createElement("div",{className:"cta__link"},i.a.createElement("span",{className:"cta__link-text"},Object(l.a)(s))))});a("b0ux"),t.a=function(e){var t=e.links,a=e.theme,n=void 0===a?"light":a;return r()(t)?i.a.createElement(i.a.Fragment,null):i.a.createElement("div",{className:"row footer-cta-list"},t.map((function(e,t){return i.a.createElement("div",{className:"small-12 medium-6 columns footer-cta-list__box",key:"footer-cta-link-"+t},i.a.createElement(u,{link:e.footerCtaLink,theme:n}))})))}},b0ux:function(e,t,a){},hFqu:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),o=a("I/Ru"),i=a("/m4c"),c=a("f23f"),l=(a("pz8F"),function(e){var t=e.page,a=e.ctaLink,n=e.tagParent,o=e.tagName,l=t.title;return r.a.createElement("section",{className:"advertiser-sections marketplace-banner"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"large-11 medium-12 small-12 columns"},r.a.createElement("h1",{className:"marketplace-banner__title",dangerouslySetInnerHTML:{__html:Object(c.n)(l)}}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"large-4 medium-4 small-12 columns ow-marketplace__contact-us-btn-wrap"},r.a.createElement(i.a,Object.assign({},a,{tagParent:n,tagName:o,className:"conversation-content__cta"})))))});l.defaultProps={page:{title:""},ctaLink:{title:"",url:"",target:""},tagParent:"",tagName:""};var s=l,m=(a("u5ut"),function(e){var t=e.meta;return r.a.createElement("section",{className:"advertiser-sections marketplace-stats"},r.a.createElement("div",{className:"row align-center"},t.map((function(e,t){return r.a.createElement("div",{className:"medium-4 small-12 columns marketplace-stats__item",key:e.count+"-"+t},r.a.createElement("div",{className:"marketplace-stats__count",dangerouslySetInnerHTML:{__html:Object(c.n)(e.count)}}),r.a.createElement("div",{className:"marketplace-stats__description",dangerouslySetInnerHTML:{__html:Object(c.n)(e.description)}}))}))))});m.defaultProps={meta:[{count:"",description:""}]};var u=m,p=a("mwIZ"),d=a.n(p),f=a("TSYQ"),g=a.n(f),v=a("gGy4"),h=a("OZFc"),b=(a("tmpV"),function(e){var t=e.meta,a=Object(v.a)(),n=g()("marketplace-animation__media",{"hide-for-small-only":["desktop","tablet"].includes(a),"show-for-small-only":"mobile"===a}),o="desktop"===a?a:"mobile",i=t[o].staticImage;return r.a.createElement("section",{className:"advertiser-sections marketplace-animation"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"small-12 columns"},r.a.createElement(h.a,{className:n,mobileJsonUrl:d()(t,"mobile[lottie][mediaItemUrl]"),desktopJsonUrl:d()(t,"desktop[lottie][mediaItemUrl]"),device:o,loop:!0,staticImage:i}))))});b.defaultProps={meta:{mobile:{lottie:{},staticImage:{}},desktop:{lottie:{},staticImage:{}}}};var E=b,w=(a("IuSb"),function(e){var t=e.meta;return r.a.createElement("section",{className:"advertiser-sections marketplace-features"},r.a.createElement("div",{className:"row"},t.map((function(e,t){return r.a.createElement("div",{key:e.headline+"-"+t,className:"large-4 medium-6 small-12 columns marketplace-features__list"},r.a.createElement("h2",{className:"marketplace-features__headline",dangerouslySetInnerHTML:{__html:Object(c.n)(e.headline)}}),r.a.createElement("div",{className:"marketplace-features__description",dangerouslySetInnerHTML:{__html:Object(c.n)(e.description)}}))}))))});w.defaultProps={meta:[{headline:"",description:""}]};var _=w,k=a("vrFN"),N=a("aDEV"),y=a("5Cyz");a("xNQV"),t.default=function(e){var t=e.pageContext,a=t.page,n=t.page,i=n.openwebMarketplacePageMeta,l=i.stats,m=i.animatedImage,p=i.featureList,d=n.seo,f=n.uri,g=n.contactUsFormMeta,v=g.contactForm,h=g.ctaLink,b=n.footerCtaLinks.footerCtaWrapper,w=Object(c.g)(d);return r.a.createElement(o.a,{title:"OpenWeb Marketplace",uri:f,theme:"dark",className:"advertiser-pages openweb-marketplace"},r.a.createElement(k.a,{title:a.title,seoData:d,uri:f,header:{siteTitle:"OpenWeb"},openGraphImage:w}),r.a.createElement(s,{page:a,ctaLink:h,tagParent:"ADVERTISERS",tagName:"Marketplace_Contact"}),r.a.createElement(u,{meta:l}),r.a.createElement(E,{meta:m}),r.a.createElement(_,{meta:p}),b&&r.a.createElement("section",{className:"ow-marketplace-cta"},r.a.createElement(N.a,{links:b,theme:"dark"})),r.a.createElement(y.a,{meta:v,tagParent:"ADVERTISERS",tagName:"Marketplace_Submit"}))}},pviY:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("Wbzz"),i=a("sYrg");a("EeXD");t.a=function(e){var t=e.text,a=void 0===t?"Read more":t,n=e.link,c=e.color,l=void 0===c?"#000":c,s=e.external,m=e.className,u=void 0===m?"":m;return n?s?r.a.createElement("a",{className:"link__big-arrow "+u,target:"_blank",rel:"noopener noreferrer",href:n},r.a.createElement("span",{className:"link__big-arrow-text"},a)," ",Object(i.a)(l)):r.a.createElement(o.Link,{className:"link__big-arrow "+u,to:n},r.a.createElement("span",{className:"link__big-arrow-text"},a)," ",Object(i.a)(l)):null}},pz8F:function(e,t,a){},sYrg:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n);t.a=function(e){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"65",height:"13",viewBox:"0 0 65 13"},r.a.createElement("g",{fill:"none",fillRule:"evenodd",stroke:e,strokeLinecap:"square"},r.a.createElement("path",{d:"M7 13L0.5 6.5",transform:"matrix(-1 0 0 1 65 0)"}),r.a.createElement("path",{d:"M7 7L0.5 0.5",transform:"matrix(-1 0 0 1 65 0) matrix(1 0 0 -1 0 7)"}),r.a.createElement("path",{d:"M64.673 6.5L1.327 6.5",transform:"matrix(-1 0 0 1 65 0)"})))}},tmpV:function(e,t,a){},twhE:function(e,t,a){},u5ut:function(e,t,a){},"vN+2":function(e,t){e.exports=function(){}},vrFN:function(e,t,a){"use strict";var n=a("Y3Pm"),r=a.n(n),o=a("E+oP"),i=a.n(o),c=a("q1tI"),l=a.n(c),s=a("qhky"),m=a("Wbzz"),u=a("42pF");function p(e){var t=e.description,a=e.lang,n=e.meta,o=e.title,c=(e.header.siteTitle,e.seoData),p=e.uri,d=(e.openGraphImage,Object(m.useStaticQuery)("2615726974")),f=d.site,g=d.OWGraphQL.seo;i()(c)&&(c={title:"",metaDesc:"",opengraphDescription:"",twitterDescription:"",opengraphTitle:"",twitterTitle:"",opengraphImage:{sourceUrl:""},twitterImage:{sourceUrl:""}}),!i()(c)&&i()(c.title)&&(c.title=""),!i()(c)&&i()(c.metaDesc)&&(c.metaDesc=""),!i()(c)&&i()(c.opengraphDescription)&&(c.opengraphDescription=""),!i()(c)&&i()(c.twitterDescription)&&(c.twitterDescription=""),!i()(c)&&i()(c.opengraphTitle)&&(c.opengraphTitle=""),!i()(c)&&i()(c.twitterTitle)&&(c.twitterTitle=""),i()(c)||!i()(c.opengraphImage)&&!i()(c.opengraphImage.sourceUrl)||(c.opengraphImage={sourceUrl:""}),i()(c)||!i()(c.twitterImage)&&!i()(c.twitterImage.sourceUrl)||(c.twitterImage={sourceUrl:""}),i()(c)||!i()(c.schema)&&!i()(c.schema.raw)||(c.schema={raw:""}),i()(c.schema.raw)||i()(u.a)||i()("https://www.openweb.com")||(c.schema.raw=r()(c.schema.raw,new RegExp(u.a,"g"),"https://www.openweb.com"));var v=c.title||o,h=c.metaDesc||t||f.siteMetadata.description,b=c.opengraphDescription||h,E=c.twitterDescription||h,w=c.opengraphTitle||v,_=c.twitterTitle||v,k=g.webmaster.googleVerify||"",N=""+f.siteMetadata.siteUrl+p,y=f.siteMetadata.fbAppId,I=""+f.siteMetadata.siteUrl+p,O=c.metaRobotsNofollow,P="follow"===O?"index":"noindex",j=c.schema.raw,S=c.opengraphImage.sourceUrl;return l.a.createElement(s.a,{htmlAttributes:{lang:a},title:v,titleTemplate:"%s",link:I?[{rel:"canonical",href:I}]:[],meta:[{name:"title",content:v},{name:"description",content:h},{property:"og:locale",content:"en_US"},{property:"og:url",content:N},{property:"og:image",content:S},{property:"og:site_name",content:"OpenWeb"},{property:"og:title",content:w},{property:"og:description",content:b},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:creator",content:f.siteMetadata.author},{name:"twitter:title",content:_},{name:"twitter:description",content:E},{name:"twitter:image",content:S},{name:"robots",content:P+", "+O},{name:"google-site-verification",content:k},{property:"fb:app_id",content:y}].concat(n)},j&&l.a.createElement("script",{type:"application/ld+json"},j))}p.defaultProps={description:"",lang:"en",meta:[]},t.a=p},xNQV:function(e,t,a){}}]);
//# sourceMappingURL=component---src-templates-openweb-marketplace-index-js-9f844771c94988854eb1.js.map