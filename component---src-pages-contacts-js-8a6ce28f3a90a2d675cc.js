(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{222:function(e,t,a){"use strict";a.r(t),a.d(t,"fluidImage",function(){return d}),a.d(t,"query",function(){return c});var i=a(0),r=a.n(i),n=a(236),s=a.n(n),l=a(231),o=a(229);t.default=function(e){return r.a.createElement(l.a,null,r.a.createElement(o.a,{title:"Let's Get In Touch!"}),r.a.createElement("div",{class:"layout"},r.a.createElement("div",{id:"page-wrap"},r.a.createElement("h1",{style:{maxWidth:"100%"}},"Looking forward to hear from you!"),r.a.createElement("div",{class:"outer-container",style:{padding:"1.5em",marginBottom:"1.5rem"}},r.a.createElement("div",{class:"inner-container"},r.a.createElement("a",{href:"mailto:theaolivia.mail@gmail.com"},r.a.createElement(s.a,{className:"hub",fluid:e.data.mail_icon.childImageSharp.fluid}))),r.a.createElement("div",{class:"inner-container"},r.a.createElement("a",{href:"https://www.linkedin.com/in/theaolivia/"},r.a.createElement(s.a,{className:"hub",fluid:e.data.linkedin_icon.childImageSharp.fluid}))),r.a.createElement("div",{class:"inner-container"},r.a.createElement("a",{href:"https://github.com/teaolivia"},r.a.createElement(s.a,{className:"hub",fluid:e.data.github_icon.childImageSharp.fluid}))),r.a.createElement("div",{class:"inner-container"},r.a.createElement("a",{href:"https://stackoverflow.com/users/11484987/theaolivia"},r.a.createElement(s.a,{className:"hub",fluid:e.data.so_icon.childImageSharp.fluid}))),r.a.createElement("div",{class:"inner-container"},r.a.createElement("a",{href:"https://twitter.com/teapisan"},r.a.createElement(s.a,{className:"hub",fluid:e.data.twitter_icon.childImageSharp.fluid}))),r.a.createElement("div",{class:"inner-container"},r.a.createElement("a",{href:"https://t.me/theaolivia"},r.a.createElement(s.a,{className:"hub",fluid:e.data.telegram_icon.childImageSharp.fluid}))),r.a.createElement("div",{class:"inner-container"},r.a.createElement("a",{href:"https://medium.com/@theaolivia"},r.a.createElement(s.a,{className:"hub",fluid:e.data.medium_icon.childImageSharp.fluid})))))))};var d="2304471152",c="2572406886"},228:function(e){e.exports={data:{site:{siteMetadata:{title:"Thea Olivia",menuLinks:[{name:"home",link:"/"},{name:"portfolio",link:"/portfolio"},{name:"contact",link:"/contacts"}]}}}}},229:function(e,t,a){"use strict";var i=a(230),r=a(0),n=a.n(r),s=a(1),l=a.n(s),o=a(235),d=a.n(o);function c(e){var t=e.description,a=e.lang,r=e.meta,s=e.title,l=i.data.site,o=t||l.siteMetadata.description;return n.a.createElement(d.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:s},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:o}].concat(r)})}c.defaultProps={lang:"en",meta:[],description:""},c.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),title:l.a.string.isRequired},t.a=c},230:function(e){e.exports={data:{site:{siteMetadata:{title:"Thea Olivia",description:"My Portfolio Website",author:"@theaolivia"}}}}},231:function(e,t,a){"use strict";var i=a(228),r=a(0),n=a.n(r),s=a(1),l=a.n(s),o=a(95),d=(a(232),a(233),function(e){var t=e.menuLinks;return n.a.createElement("div",{id:"page-wrap",style:{justifyContent:"center",float:"right",paddingTop:"0 1.45rem "}},n.a.createElement("nav",null,n.a.createElement("ul",{style:{display:"flex",flex:2,listStyle:"none"}},t.map(function(e){return n.a.createElement("li",{div:"navbar",key:e.link},n.a.createElement(o.Link,{activeClassName:"nav-style",activeStyle:{color:"#ffc98b"},style:{color:"#1A090D",padding:"2rem",fontFamily:"Montserrat",fontWeight:"Medium",textDecoration:0},to:e.link},e.name))}))))});d.propTypes={siteTitle:l.a.string},d.defaultProps={siteTitle:""};var c=d,u=(a(219),a(234)),f=function(e){return n.a.createElement("li",{style:{listStyle:"none",alignContent:"center",fontFamily:"Source Sans Pro,sans-serif",padding:"1em",color:"#FB9985"}},n.a.createElement(o.Link,{style:{color:"#FB9985"},activeStyle:{fontFamily:"Montserrat,sans-serif",color:"#ffc98b"},to:e.to},e.children))},p=function(e){e.siteTitle;return n.a.createElement(u.slide,null,n.a.createElement(f,{activeStyle:{color:"#ffc98b",fontFamily:"Montserrat,sans-serif"},to:"/"},"about"),n.a.createElement(f,{activeStyle:{color:"#ffc98b",fontFamily:"Montserrat,sans-serif"},to:"/portfolio/"},"portfolio"),n.a.createElement(f,{activeStyle:{color:"#ffc98b",fontFamily:"Montserrat,sans-serif"},to:"/contacts/"},"contacts"),n.a.createElement("a",{style:{padding:"1em",color:"#ffc98b",fontFamily:"Source Sans Pro,sans-serif",fontWeight:"600"},href:"https://bit.ly/2K2slVg"},n.a.createElement("b",null,"résumé.")))};p.propTypes={siteTitle:l.a.string},p.defaultProps={siteTitle:""},p.propTypes={children:l.a.node.isRequired};var m=p,h=function(e){var t=e.children;return n.a.createElement(o.StaticQuery,{query:"3436215879",render:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{class:"footer-class"},n.a.createElement(c,{menuLinks:e.site.siteMetadata.menuLinks})),n.a.createElement("div",{className:"sidebar"},n.a.createElement(m,null)),n.a.createElement("div",{class:"main-container",style:{display:"table-cell",verticalAlign:"middle",margin:"3em auto",marginLeft:"auto",marginRight:"auto",maxWidth:"100%",maxHeight:"100%",padding:"2rem 1.0875rem 0px",paddingTop:0}},n.a.createElement("main",{style:{maxHeight:"100%",maxWidth:"100%"}},t)))},data:i})};h.propTypes={children:l.a.node.isRequired};t.a=h},236:function(e,t,a){"use strict";var i=a(4);t.__esModule=!0,t.default=void 0;var r,n=i(a(6)),s=i(a(21)),l=i(a(20)),o=i(a(10)),d=i(a(0)),c=i(a(1)),u=function(e){var t=(0,o.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f=Object.create({}),p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},m=new WeakMap;var h=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){if(m.has(e.target)){var t=m.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),m.delete(e.target),t())}})},{rootMargin:"200px"})),r);return a&&(a.observe(e),m.set(e,t)),function(){a.unobserve(e),m.delete(e)}},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"";return"<picture>"+i+"<img "+(e.loading?'loading="'+e.loading+'" ':"")+l+o+a+r+t+s+n+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=d.default.forwardRef(function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.nativeLazyLoadSupported,f=e.loading,p=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","nativeLazyLoadSupported","loading"]),m={};return u&&(m.loading=f),d.default.createElement("img",(0,o.default)({sizes:a,srcSet:i,src:r},p,{onLoad:s,onError:c,ref:t},m,{style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});y.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var v=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,r=!1,n=t.fadeIn,l=!1,o=p(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,r=!0),"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype&&(i=!0,l=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,r=!1);var c=!(t.critical&&!t.fadeIn);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,IOSupported:r,fadeIn:n,hasNoScript:c,seenBefore:o,nativeLazyLoadSupported:l},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.nativeLazyLoadSupported||this.state.IOSupported&&e&&(this.cleanUpListeners=h(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,l=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,m=e.fluid,h=e.fixed,v=e.backgroundColor,b=e.durationFadeIn,E=e.Tag,S=e.itemProp,w=(e.critical,u(this.props).loading);var L=this.state.nativeLazyLoadSupported,I=this.state.imgLoaded||!1===this.state.fadeIn,z=!0===this.state.fadeIn&&!this.state.imgCached,T=(0,o.default)({opacity:I?1:0,transition:z?"opacity "+b+"ms":"none"},l),R="boolean"==typeof v?"lightgray":v,k={transitionDelay:b+"ms"},O=(0,o.default)({opacity:this.state.imgLoaded?0:1},z&&k,l,f),M={title:t,alt:this.state.isVisible?"":a,style:O,className:p};if(m){var N=m;return d.default.createElement(E,{className:(i||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(N.srcSet)},d.default.createElement(E,{style:{width:"100%",paddingBottom:100/N.aspectRatio+"%"}}),R&&d.default.createElement(E,{title:t,style:(0,o.default)({backgroundColor:R,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},z&&k)}),N.base64&&d.default.createElement(y,(0,o.default)({src:N.base64},M)),N.tracedSVG&&d.default.createElement(y,(0,o.default)({src:N.tracedSVG},M)),this.state.isVisible&&d.default.createElement("picture",null,N.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:N.srcSetWebp,sizes:N.sizes}),d.default.createElement(y,{alt:a,title:t,sizes:N.sizes,src:N.src,crossOrigin:this.props.crossOrigin,srcSet:N.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,nativeLazyLoadSupported:L,loading:w})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,o.default)({alt:a,title:t,loading:w},N))}}))}if(h){var x=h,W=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:x.width,height:x.height},n);return"inherit"===n.display&&delete W.display,d.default.createElement(E,{className:(i||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(x.srcSet)},R&&d.default.createElement(E,{title:t,style:(0,o.default)({backgroundColor:R,width:x.width,opacity:this.state.imgLoaded?0:1,height:x.height},z&&k)}),x.base64&&d.default.createElement(y,(0,o.default)({src:x.base64},M)),x.tracedSVG&&d.default.createElement(y,(0,o.default)({src:x.tracedSVG},M)),this.state.isVisible&&d.default.createElement("picture",null,x.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:x.srcSetWebp,sizes:x.sizes}),d.default.createElement(y,{alt:a,title:t,width:x.width,height:x.height,sizes:x.sizes,src:x.src,crossOrigin:this.props.crossOrigin,srcSet:x.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,nativeLazyLoadSupported:L,loading:w})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,o.default)({alt:a,title:t,loading:w},x))}}))}return null},t}(d.default.Component);v.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var b=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),E=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});v.propTypes={resolutions:b,sizes:E,fixed:b,fluid:E,fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"])};var S=v;t.default=S}}]);
//# sourceMappingURL=component---src-pages-contacts-js-8a6ce28f3a90a2d675cc.js.map