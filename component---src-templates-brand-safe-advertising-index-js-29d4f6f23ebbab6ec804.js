(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"/m4c":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("Wbzz"),i=a("m8Fq"),l=a.n(i),c=a("pviY"),s=a("f23f"),m=function(e){var t=e.children,a=e.url,n=e.className,i=e.target,m=e.title,u=e.withArrow,d=void 0!==u&&u,f=e.color,p=void 0===f?"#000":f,g=e.external,v=e.tagParent,h=e.tagName;if("_blank"===i||g)return d?r.a.createElement(c.a,{className:n,text:m,link:a,color:p,external:!0}):r.a.createElement("a",{className:n,target:"_blank",rel:"noopener noreferrer",href:a},t||m||"");var b=l.a.isWebUri(a)?Object(s.f)(a):Object(s.k)(a);return d?r.a.createElement(c.a,{className:n,text:m,link:b,color:p}):r.a.createElement(o.Link,{onClick:function(){h&&v&&Object(s.o)(h,v)},className:n,to:b},t||m||"")};m.defaultProps={tagParent:"",tagName:""},t.a=m},"5Cyz":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("5OW0"),i=a("f23f"),l=(a("Xo82"),function(e){var t=e.meta,a=e.tagParent,n=e.tagName,l=t.headline,c=t.formPortalid,s=t.formId,m=t.formContent;return s?r.a.createElement("section",{className:"advertiser-sections conversation-form",id:"contact-us"},r.a.createElement("div",{className:"row align-right"},r.a.createElement("div",{className:"large-8 medium-12 small-12 columns conversation-form__heading-wrap"},r.a.createElement("h2",{className:"conversation-form__heading",dangerouslySetInnerHTML:{__html:Object(i.n)(l)}}),m&&r.a.createElement("div",{className:"conversation-form__text-content",dangerouslySetInnerHTML:{__html:Object(i.n)(m)}})),r.a.createElement("div",{className:"large-4 medium-6 small-12 columns"},r.a.createElement("div",{className:"conversation-form__form"},r.a.createElement(o.a,{portalId:c,formId:s,tagName:n,tagParent:a}))))):null});l.defaultProps={meta:{headline:"",formPortalid:"",formId:""},tagParent:"",tagName:""},t.a=l},"5OW0":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("9pBV"),i=a.n(o),l=function(e){var t=e.formId,a=e.portalId,n=e.setSubmitted,o=e.tagName,l=e.tagParent;if(!t)return null;return r.a.createElement(i.a,{portalId:a,formId:t,onSubmit:function(){"function"==typeof n&&n(!0),void 0!==window.dataLayer&&l&&window.dataLayer.push({event:"formAction",cfEventTag:o,cfEventTagParent:l})}})};l.defaultProps={tagName:"",tagParent:""},t.a=l},"9pBV":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),o=i(a("q1tI"));i(a("i8i4"));function i(e){return e&&e.__esModule?e:{default:e}}var l=0,c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={loaded:!1},a.id=l++,a.createForm=a.createForm.bind(a),a.findFormElement=a.findFormElement.bind(a),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"createForm",value:function(){var e=this;if(window.hbspt){if(null===this.el)return;var t=n({},this.props);delete t.loading,delete t.onSubmit,delete t.onReady;var a=n({},t,{target:"#"+this.el.getAttribute("id"),onFormSubmit:function(t){var a=t.serializeArray();e.props.onSubmit(a)}});return window.hbspt.forms.create(a),!0}setTimeout(this.createForm,1)}},{key:"loadScript",value:function(){var e=this,t=document.createElement("script");t.defer=!0,t.onload=function(){e.createForm(),e.findFormElement()},t.src="//js.hsforms.net/forms/v2.js",document.head.appendChild(t)}},{key:"findFormElement",value:function(){if(null!==this.el){var e=this.el.querySelector("iframe");e?(this.setState({loaded:!0}),this.props.onReady&&this.props.onReady(e)):setTimeout(this.findFormElement,1)}}},{key:"componentDidMount",value:function(){window.hbspt||this.props.noScript?(this.createForm(),this.findFormElement()):this.loadScript()}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this;return o.default.createElement("div",null,o.default.createElement("div",{ref:function(t){return e.el=t},id:"reactHubspotForm"+this.id,style:{display:this.state.loaded?"block":"none"}}),!this.state.loaded&&this.props.loading)}}]),t}(o.default.Component);t.default=c,e.exports=t.default},EeXD:function(e,t,a){},"G1+3":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),o=a("I/Ru"),i=a("/m4c"),l=a("f23f"),c=(a("Ty9x"),function(e){var t=e.page,a=e.ctaLink,n=e.tagParent,o=e.tagName,c=t.title;return r.a.createElement("section",{className:"advertiser-sections brand-safe-banner"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"large-11 medium-12 small-12 columns"},r.a.createElement("h1",{className:"brand-safe-banner__title",dangerouslySetInnerHTML:{__html:Object(l.n)(c)}}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"large-4 medium-4 small-12 columns advertising__contact-us-btn-wrap"},r.a.createElement(i.a,Object.assign({},a,{tagParent:n,tagName:o,className:"conversation-content__cta"})))))});c.defaultProps={page:{title:""},ctaLink:{title:"",url:"",target:""},tagParent:"",tagName:""};var s=c,m=a("mwIZ"),u=a.n(m),d=a("TSYQ"),f=a.n(d),p=a("OZFc"),g=a("gGy4"),v=(a("egoH"),function(e){var t=e.meta,a=t.ctaOption.ctaLink,n=t.featureList,o=Object(g.a)(),c="desktop"===o?o:"mobile";return r.a.createElement("section",{className:"advertiser-sections brand-safe-feature"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"small-12 columns"},r.a.createElement("div",{className:"brand-safe-feature__lists"},n.map((function(e,t){var a=e.imageOrAnimation,n=a[c].staticImage,i=f()("brand-safe-feature__image",{"show-for-large":["desktop","tablet"].includes(o),"show-for-small-only":"mobile"===o});return r.a.createElement("div",{className:"row brand-safe-feature__item",key:"feature-row-"+t},r.a.createElement("div",{className:"medium-4 small-12 columns"},r.a.createElement("h2",{className:"brand-safe-feature__headline",dangerouslySetInnerHTML:{__html:Object(l.n)(e.headline)}}),r.a.createElement("div",{className:"brand-safe-feature__description",dangerouslySetInnerHTML:{__html:Object(l.n)(e.description)}})),r.a.createElement("div",{className:"medium-8 small-12 columns"},r.a.createElement("figure",{className:"brand-safe-feature__figure"},r.a.createElement(p.a,{mobileJsonUrl:u()(a,"mobile[lottie][mediaItemUrl]"),desktopJsonUrl:u()(a,"desktop[lottie][mediaItemUrl]"),device:c,loop:!0,staticImage:n,className:i}))))})))),r.a.createElement("div",{className:"small-12 columns brand-safe-feature__cta"},r.a.createElement(i.a,Object.assign({},a,{withArrow:!0})))))});v.defaultProps={meta:{featureList:[{headline:"",description:"",imageDesktop:{altText:"",sourceUrl:""},imageMobile:{altText:"",sourceUrl:""},imageTablet:{altText:"",sourceUrl:""}}],ctaOption:{ctaLink:""}}};var h=v,b=a("vrFN"),E=a("aDEV"),w=a("5Cyz");a("GfGm"),t.default=function(e){var t=e.pageContext,a=t.page,n=t.page,i=n.brandSafeAdvertisingPageMeta,c=n.seo,m=n.uri,u=n.contactUsFormMeta,d=u.contactForm,f=u.ctaLink,p=n.footerCtaLinks.footerCtaWrapper,g=Object(l.g)(c);return r.a.createElement(o.a,{title:"Brand Safe Advertising",uri:m,theme:"dark",className:"advertiser-pages brand-safe-advertising"},r.a.createElement(b.a,{title:a.title,seoData:c,uri:m,header:{siteTitle:"OpenWeb"},openGraphImage:g}),r.a.createElement(s,{page:a,ctaLink:f,tagParent:"ADVERTISERS",tagName:"BrandSafe_Contact"}),r.a.createElement(h,{meta:i}),p&&r.a.createElement("section",{className:"brand-safe-cta"},r.a.createElement(E.a,{links:p,theme:"dark"})),r.a.createElement(w.a,{meta:d,tagParent:"ADVERTISERS",tagName:"BrandSafe_Submit"}))}},GfGm:function(e,t,a){},OZFc:function(e,t,a){"use strict";var n=a("vN+2"),r=a.n(n),o=a("q1tI"),i=a.n(o),l=a("lPHp"),c=a.n(l),s=a("LpSC"),m=a.n(s),u=a("PiD+");a("twhE");t.a=function(e){var t=e.mobileJsonUrl,a=e.desktopJsonUrl,n=e.className,l=void 0===n?"":n,s=e.onComplete,d=void 0===s?r.a:s,f=e.onStart,p=void 0===f?r.a:f,g=e.loop,v=void 0!==g&&g,h=e.canStart,b=void 0===h||h,E=e.load,w=void 0===E||E,_=e.device,N=void 0===_?"desktop":_,y=e.staticImage,k=void 0===y?null:y,O=Object(o.createRef)(),I=Object(o.useState)(!1),S=I[0],j=I[1],x=Object(o.useRef)({mobile:null,desktop:null}),P=function(e){if(e&&O.current&&b){O.current.innerHTML="";var t=c.a.loadAnimation({container:O.current,renderer:"svg",loop:v,autoplay:!0,animationData:e});t.addEventListener("complete",(function e(){d(t),t.removeEventListener("complete",e)})),p(t),j(!0)}};if(Object(o.useEffect)((function(){var e;(e="mobile"===N?t:a,new Promise((function(t){w&&e?x.current[N]?t(x.current[N]):m()(e).then((function(e){return e.json()})).then((function(e){x.current[N]=e,t(e)})):t(null)}))).then(P)}),[N,w,b]),!a&&k)return i.a.createElement(u.a,k);var T=k?i.a.createElement(u.a,k):null;return i.a.createElement("div",{className:l},!S&&T,i.a.createElement("div",{ref:O,className:"lottie-player"}))}},S4Or:function(e,t,a){},Ty9x:function(e,t,a){},Xo82:function(e,t,a){},aDEV:function(e,t,a){"use strict";var n=a("E+oP"),r=a.n(n),o=a("q1tI"),i=a.n(o),l=a("/m4c"),c=a("sYrg"),s=a("TSYQ"),m=a.n(s),u=(a("S4Or"),function(e){var t=e.link,a=e.theme,n=void 0===a?"light":a;if(r()(t)||r()(t.title)||r()(t.url))return i.a.createElement(i.a.Fragment,null);var o=m()("cta__box",{"cta__box-white":"dark"===n}),s="#000";return"dark"===n&&(s="#fff"),i.a.createElement(l.a,Object.assign({className:o,external:!1},t),i.a.createElement("h6",{className:"cta__title"},t.title),i.a.createElement("div",{className:"cta__link"},i.a.createElement("span",{className:"cta__link-text"},Object(c.a)(s))))});a("b0ux"),t.a=function(e){var t=e.links,a=e.theme,n=void 0===a?"light":a;return r()(t)?i.a.createElement(i.a.Fragment,null):i.a.createElement("div",{className:"row footer-cta-list"},t.map((function(e,t){return i.a.createElement("div",{className:"small-12 medium-6 columns footer-cta-list__box",key:"footer-cta-link-"+t},i.a.createElement(u,{link:e.footerCtaLink,theme:n}))})))}},b0ux:function(e,t,a){},egoH:function(e,t,a){},pviY:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("Wbzz"),i=a("sYrg");a("EeXD");t.a=function(e){var t=e.text,a=void 0===t?"Read more":t,n=e.link,l=e.color,c=void 0===l?"#000":l,s=e.external,m=e.className,u=void 0===m?"":m;return n?s?r.a.createElement("a",{className:"link__big-arrow "+u,target:"_blank",rel:"noopener noreferrer",href:n},r.a.createElement("span",{className:"link__big-arrow-text"},a)," ",Object(i.a)(c)):r.a.createElement(o.Link,{className:"link__big-arrow "+u,to:n},r.a.createElement("span",{className:"link__big-arrow-text"},a)," ",Object(i.a)(c)):null}},sYrg:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n);t.a=function(e){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"65",height:"13",viewBox:"0 0 65 13"},r.a.createElement("g",{fill:"none",fillRule:"evenodd",stroke:e,strokeLinecap:"square"},r.a.createElement("path",{d:"M7 13L0.5 6.5",transform:"matrix(-1 0 0 1 65 0)"}),r.a.createElement("path",{d:"M7 7L0.5 0.5",transform:"matrix(-1 0 0 1 65 0) matrix(1 0 0 -1 0 7)"}),r.a.createElement("path",{d:"M64.673 6.5L1.327 6.5",transform:"matrix(-1 0 0 1 65 0)"})))}},twhE:function(e,t,a){},"vN+2":function(e,t){e.exports=function(){}},vrFN:function(e,t,a){"use strict";var n=a("Y3Pm"),r=a.n(n),o=a("E+oP"),i=a.n(o),l=a("q1tI"),c=a.n(l),s=a("qhky"),m=a("Wbzz"),u=a("42pF");function d(e){var t=e.description,a=e.lang,n=e.meta,o=e.title,l=(e.header.siteTitle,e.seoData),d=e.uri,f=(e.openGraphImage,Object(m.useStaticQuery)("2615726974")),p=f.site,g=f.OWGraphQL.seo;i()(l)&&(l={title:"",metaDesc:"",opengraphDescription:"",twitterDescription:"",opengraphTitle:"",twitterTitle:"",opengraphImage:{sourceUrl:""},twitterImage:{sourceUrl:""}}),!i()(l)&&i()(l.title)&&(l.title=""),!i()(l)&&i()(l.metaDesc)&&(l.metaDesc=""),!i()(l)&&i()(l.opengraphDescription)&&(l.opengraphDescription=""),!i()(l)&&i()(l.twitterDescription)&&(l.twitterDescription=""),!i()(l)&&i()(l.opengraphTitle)&&(l.opengraphTitle=""),!i()(l)&&i()(l.twitterTitle)&&(l.twitterTitle=""),i()(l)||!i()(l.opengraphImage)&&!i()(l.opengraphImage.sourceUrl)||(l.opengraphImage={sourceUrl:""}),i()(l)||!i()(l.twitterImage)&&!i()(l.twitterImage.sourceUrl)||(l.twitterImage={sourceUrl:""}),i()(l)||!i()(l.schema)&&!i()(l.schema.raw)||(l.schema={raw:""}),i()(l.schema.raw)||i()(u.a)||i()("https://www.openweb.com")||(l.schema.raw=r()(l.schema.raw,new RegExp(u.a,"g"),"https://www.openweb.com"));var v=l.title||o,h=l.metaDesc||t||p.siteMetadata.description,b=l.opengraphDescription||h,E=l.twitterDescription||h,w=l.opengraphTitle||v,_=l.twitterTitle||v,N=g.webmaster.googleVerify||"",y=""+p.siteMetadata.siteUrl+d,k=p.siteMetadata.fbAppId,O=""+p.siteMetadata.siteUrl+d,I=l.metaRobotsNofollow,S="follow"===I?"index":"noindex",j=l.schema.raw,x=l.opengraphImage.sourceUrl;return c.a.createElement(s.a,{htmlAttributes:{lang:a},title:v,titleTemplate:"%s",link:O?[{rel:"canonical",href:O}]:[],meta:[{name:"title",content:v},{name:"description",content:h},{property:"og:locale",content:"en_US"},{property:"og:url",content:y},{property:"og:image",content:x},{property:"og:site_name",content:"OpenWeb"},{property:"og:title",content:w},{property:"og:description",content:b},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:creator",content:p.siteMetadata.author},{name:"twitter:title",content:_},{name:"twitter:description",content:E},{name:"twitter:image",content:x},{name:"robots",content:S+", "+I},{name:"google-site-verification",content:N},{property:"fb:app_id",content:k}].concat(n)},j&&c.a.createElement("script",{type:"application/ld+json"},j))}d.defaultProps={description:"",lang:"en",meta:[]},t.a=d}}]);
//# sourceMappingURL=component---src-templates-brand-safe-advertising-index-js-29d4f6f23ebbab6ec804.js.map