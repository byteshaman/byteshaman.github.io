(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=globalThis,t=e.ShadowRoot&&(e.ShadyCSS===void 0||e.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap,i=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,n=this.t;if(t&&e===void 0){let t=n!==void 0&&n.length===1;t&&(e=r.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&r.set(n,e))}return e}toString(){return this.cssText}},a=e=>new i(typeof e==`string`?e:e+``,void 0,n),o=(e,...t)=>new i(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,n),s=(n,r)=>{if(t)n.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let t of r){let r=document.createElement(`style`),i=e.litNonce;i!==void 0&&r.setAttribute(`nonce`,i),r.textContent=t.cssText,n.appendChild(r)}},c=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return a(t)})(e):e,{is:l,defineProperty:u,getOwnPropertyDescriptor:d,getOwnPropertyNames:ee,getOwnPropertySymbols:te,getPrototypeOf:ne}=Object,f=globalThis,re=f.trustedTypes,ie=re?re.emptyScript:``,ae=f.reactiveElementPolyfillSupport,p=(e,t)=>e,m={toAttribute(e,t){switch(t){case Boolean:e=e?ie:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},h=(e,t)=>!l(e,t),g={attribute:!0,type:String,converter:m,reflect:!1,useDefault:!1,hasChanged:h};Symbol.metadata??=Symbol(`metadata`),f.litPropertyMetadata??=new WeakMap;var _=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=g){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&u(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??g}static _$Ei(){if(this.hasOwnProperty(p(`elementProperties`)))return;let e=ne(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(p(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(p(`properties`))){let e=this.properties,t=[...ee(e),...te(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(c(e))}else e!==void 0&&t.push(c(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return s(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?m:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?m:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??h)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};_.elementStyles=[],_.shadowRootOptions={mode:`open`},_[p(`elementProperties`)]=new Map,_[p(`finalized`)]=new Map,ae?.({ReactiveElement:_}),(f.reactiveElementVersions??=[]).push(`2.1.2`);var v=globalThis,y=e=>e,b=v.trustedTypes,x=b?b.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,S=`$lit$`,C=`lit$${Math.random().toFixed(9).slice(2)}$`,oe=`?`+C,se=`<${oe}>`,w=document,T=()=>w.createComment(``),E=e=>e===null||typeof e!=`object`&&typeof e!=`function`,D=Array.isArray,ce=e=>D(e)||typeof e?.[Symbol.iterator]==`function`,O=`[ 	
\f\r]`,k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,A=/-->/g,j=/>/g,M=RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),le=/'/g,ue=/"/g,de=/^(?:script|style|textarea|title)$/i,N=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),P=Symbol.for(`lit-noChange`),F=Symbol.for(`lit-nothing`),I=new WeakMap,L=w.createTreeWalker(w,129);function R(e,t){if(!D(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return x===void 0?t:x.createHTML(t)}var fe=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=k;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===k?c[1]===`!--`?o=A:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=M):(de.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=M):o=j:o===M?c[0]===`>`?(o=i??k,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?M:c[3]===`"`?ue:le):o===ue||o===le?o=M:o===A||o===j?o=k:(o=M,i=void 0);let d=o===M&&e[t+1].startsWith(`/>`)?` `:``;a+=o===k?n+se:l>=0?(r.push(s),n.slice(0,l)+S+n.slice(l)+C+d):n+C+(l===-2?t:d)}return[R(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},z=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=fe(t,n);if(this.el=e.createElement(l,r),L.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=L.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(S)){let t=u[o++],n=i.getAttribute(e).split(C),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?me:r[1]===`?`?he:r[1]===`@`?ge:H}),i.removeAttribute(e)}else e.startsWith(C)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(de.test(i.tagName)){let e=i.textContent.split(C),t=e.length-1;if(t>0){i.textContent=b?b.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],T()),L.nextNode(),c.push({type:2,index:++a});i.append(e[t],T())}}}else if(i.nodeType===8)if(i.data===oe)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(C,e+1))!==-1;)c.push({type:7,index:a}),e+=C.length-1}a++}}static createElement(e,t){let n=w.createElement(`template`);return n.innerHTML=e,n}};function B(e,t,n=e,r){if(t===P)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=E(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=B(e,i._$AS(e,t.values),i,r)),t}var pe=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??w).importNode(t,!0);L.currentNode=r;let i=L.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new V(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new _e(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=L.nextNode(),a++)}return L.currentNode=w,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},V=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=B(this,e,t),E(e)?e===F||e==null||e===``?(this._$AH!==F&&this._$AR(),this._$AH=F):e!==this._$AH&&e!==P&&this._(e):e._$litType$===void 0?e.nodeType===void 0?ce(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==F&&E(this._$AH)?this._$AA.nextSibling.data=e:this.T(w.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=z.createElement(R(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new pe(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=I.get(e.strings);return t===void 0&&I.set(e.strings,t=new z(e)),t}k(t){D(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(T()),this.O(T()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=y(e).nextSibling;y(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},H=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=F,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=F}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=B(this,e,t,0),a=!E(e)||e!==this._$AH&&e!==P,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=B(this,r[n+o],t,o),s===P&&(s=this._$AH[o]),a||=!E(s)||s!==this._$AH[o],s===F?e=F:e!==F&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},me=class extends H{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===F?void 0:e}},he=class extends H{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==F)}},ge=class extends H{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=B(this,e,t,0)??F)===P)return;let n=this._$AH,r=e===F&&n!==F||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==F&&(n===F||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},_e=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){B(this,e)}},ve=v.litHtmlPolyfillSupport;ve?.(z,V),(v.litHtmlVersions??=[]).push(`3.3.2`);var ye=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new V(t.insertBefore(T(),e),e,void 0,n??{})}return i._$AI(e),i},U=globalThis,W=class extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ye(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return P}};W._$litElement$=!0,W.finalized=!0,U.litElementHydrateSupport?.({LitElement:W});var be=U.litElementPolyfillSupport;be?.({LitElement:W}),(U.litElementVersions??=[]).push(`4.2.2`);var G=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},xe={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:h},Se=(e=xe,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function K(e){return(t,n)=>typeof n==`object`?Se(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function q(e){return K({...e,state:!0,attribute:!1})}var Ce=`/assets/placeholder-Pcytf_e-.svg`,we=`/assets/profile-pic-DE9l5MnF.webp`,Te={...Object.assign({"../assets/placeholder.svg":Ce}),...Object.assign({"../assets/profile-pic.webp":we})};function J(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}var Ee=class extends W{static{this.styles=o`
    /** refers to the shadow root of the component */
    :host { 
      width: clamp(250px, 35vw, 400px);
      display: grid;
      grid-template-areas: "stack";

      img {
        display: block;
        width: 100%;
        height: auto; /* needed because of the specified height in the html tag */
        aspect-ratio: 1 / 1;
        object-fit: cover;
        grid-area: stack; /* occupy same cell */
        transition: opacity 1.5s ease;

        &.pfp {opacity: 0;}
      }
    }

    :host(:hover) {
      .pfp {opacity: 1;}
      .placeholder {opacity: 0;}
    }
  `}render(){return N`
      <img src="${Te[`../assets/placeholder.svg`]}" alt="pfp placeholder" class="placeholder" width="100" height="100" fetchpriority="high"/>
      <img src="${Te[`../assets/profile-pic.webp`]}" alt="pfp" loading="lazy" class="pfp"  width="100" height="100"/>
    `}};Ee=J([G(`profile-picture`)],Ee);var De=[{id:`music-map`,desc:"`1 country - 1 music album` interactive map",title:`Music Map`},{id:`useful-stuff`,desc:`A collection of useful sites and software`,title:`Useful Stuff`},{id:`my-tv-list`,desc:`Personal TV show tracker`,title:`MyTVList`},{id:`favorite-albums`,desc:`Favorite music albums showcase`,title:`Favorite Albums`}],Oe=`/assets/favorite-albums-DYZfIXyZ.webp`,ke=`/assets/music-map-DcwfFvlQ.webp`,Ae=`/assets/my-tv-list-DcgO8jAA.webp`,je=`/assets/useful-stuff-C72BLTHR.webp`,Y=class extends W{static{this.styles=o`
    /** refers to the shadow root of the component */
    :host {
      display: grid;
      grid-template-areas: "stack"; /* YT: watch?v=8327_1PINWI */

      overflow: hidden; /* avoid overflow on image zoom */
      border-radius: 1rem;
    }

    :host(:hover) {
      & img { transform: scale(1.1); }
      & .grid-content { visibility: visible; }
      & .card-title, .card-content { transform: translateY(0); }
    }
    
    img {
      grid-area: stack;
      width: 100%;
      height: 100%;
      aspect-ratio: 1;
      object-fit: cover;
      object-position: center;
      
      transition: transform 0.6s ease; /* zoom effect */
    }


    .overlay-container {
      grid-area: stack;

      color: var(--lightest);
      background-color: rgba(0, 0, 0, .8);
      
      z-index: 2; /* stay on top of image, prevents flickering during mouse movement */
      opacity: 0; 
      transition: opacity .6s ease;
      
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      
      &:hover { /* trigger overlay */
        opacity: 1;
        visibility: visible;
      }

      .card-title, .card-content {
        transition: transform 0.3s linear;
      }

      .card-title {transform: translateY(-80px);}

      .card-content {
        transform: translateY(80px);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;

        a { /* button-like link */
          text-decoration: none;
          padding: .25rem;
          color: var(--text);
          background-color: var(--surface);
          border-radius: 5px;
        }
      }
    }
  `}render(){let e=new URL(Object.assign({"../../assets/projects/favorite-albums.webp":Oe,"../../assets/projects/music-map.webp":ke,"../../assets/projects/my-tv-list.webp":Ae,"../../assets/projects/useful-stuff.webp":je})[`../../assets/projects/${this.project.id}.webp`],import.meta.url).href;return N`
      <img src="${e}" alt="project pic" width="150" height="150"/>

      <div class="overlay-container">
        <p class="card-title">${this.project.title}</p>
        <div class="card-content">
          <small>${this.project.desc}</small>
          <a href="${e}" target="_blank">Check it out &rsaquo;</a>
        </div>
      </div>
    `}};J([K({type:Object})],Y.prototype,`project`,void 0),Y=J([G(`project-card`)],Y);var Me=class extends W{static{this.styles=o`
    :host {
      /* @link https://utopia.fyi/clamp/calculator?a=320,1200,150—400 */
      --fluid-width: clamp(150px, 59.0909px + 28.4091vw, 400px);

      display: grid;
      margin-inline: auto !important;

      grid-template-columns: repeat(2, var(--fluid-width));

      justify-content: center;
      gap: var(--fluid-gap-0);
    }
  `}render(){return N`
      ${De.map(e=>N`
        <project-card .project=${e}></project-card>
      `)}
    `}};Me=J([G(`project-list`)],Me);var Ne=[`angular`,`css`,`git`,`html`,`javascript`,`lit`,`sass`,`typescript`],Pe=`data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20128%20128'%20version='1.1'%3e%3cg%20id='surface1'%3e%3cpath%20style='%20stroke:none;fill-rule:nonzero;fill:rgb(86.666667%25,0%25,19.215686%25);fill-opacity:1;'%20d='M%2064%2015.359375%20L%2016.332031%2032.359375%20L%2023.601562%2095.386719%20L%2064%20117.761719%20L%20104.398438%2095.386719%20L%20111.667969%2032.359375%20Z%20M%2064%2015.359375%20'/%3e%3cpath%20style='%20stroke:none;fill-rule:nonzero;fill:rgb(76.470588%25,0%25,18.431373%25);fill-opacity:1;'%20d='M%2064%2015.359375%20L%2064%2026.726562%20L%2064%2026.675781%20L%2064%20117.761719%20L%20104.398438%2095.386719%20L%20111.667969%2032.359375%20Z%20M%2064%2015.359375%20'/%3e%3cpath%20style='%20stroke:none;fill-rule:nonzero;fill:rgb(100%25,100%25,100%25);fill-opacity:1;'%20d='M%2064%2026.675781%20L%2034.203125%2093.492188%20L%2045.3125%2093.492188%20L%2051.300781%2078.539062%20L%2076.59375%2078.539062%20L%2082.585938%2093.492188%20L%2093.695312%2093.492188%20Z%20M%2072.703125%2069.324219%20L%2055.296875%2069.324219%20L%2064%2048.382812%20Z%20M%2072.703125%2069.324219%20'/%3e%3c/g%3e%3c/svg%3e`,Fe=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1000'%20height='1000'%20viewBox='0%200%201000%201000'%20role='img'%20aria-labelledby='css-logo-title%20css-logo-description'%3e%3ctitle%20id='css-logo-title'%3eCSS%20Logo%3c/title%3e%3cdesc%20id='css-logo-description'%3eA%20purple%20square%20with%20rounded%20corners%20and%20the%20letters%20CSS%20inside%20in%20white%3c/desc%3e%3cpath%20fill='%23639'%20d='M0%200H840A160%20160%200%200%201%201000%20160V840A160%20160%200%200%201%20840%201000H160A160%20160%200%200%201%200%20840V0Z'/%3e%3cpath%20fill='%23fff'%20d='M253%20817V649c0-67%2043-103%20108-103%2064-1%20104%2041%20102%20112h-74c2-27-10-47-30-46-25%200-32%2017-32%2049v146c0%2031%2010%2046%2032%2047%2023%200%2032-23%2030-49h74c4%2073-42%20116-107%20115-63%200-103-35-103-103Zm237-12h69c1%2032%2011%2052%2033%2052s30-13%2030-43c0-25-11-39-38-52l-26-12c-46-22-65-49-65-103%200-60%2038-102%20100-102s95%2043%2096%20113h-67c0-29-6-49-28-49-20%200-30%2010-30%2035s9%2035%2033%2045l24%2011c51%2024%2073%2055%2073%20113%200%2069-39%20107-103%20107s-100-44-101-115Zm226%200h70c0%2032%2011%2052%2032%2052s30-13%2030-43c0-25-10-39-38-52l-26-12c-46-22-64-49-64-103%200-60%2037-102%20100-102s94%2043%2096%20113h-67c-1-29-7-49-29-49-20%200-29%2010-29%2035s8%2035%2032%2045l25%2011c50%2024%2072%2055%2072%20113%200%2069-39%20107-103%20107s-100-44-101-115Z'/%3e%3c/svg%3e`,Ie=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20128%20128'%3e%3cpath%20fill='%23F34F29'%20d='M124.737%2058.378L69.621%203.264c-3.172-3.174-8.32-3.174-11.497%200L46.68%2014.71l14.518%2014.518c3.375-1.139%207.243-.375%209.932%202.314%202.703%202.706%203.461%206.607%202.294%209.993l13.992%2013.993c3.385-1.167%207.292-.413%209.994%202.295%203.78%203.777%203.78%209.9%200%2013.679a9.673%209.673%200%2001-13.683%200%209.677%209.677%200%2001-2.105-10.521L68.574%2047.933l-.002%2034.341a9.708%209.708%200%20012.559%201.828c3.778%203.777%203.778%209.898%200%2013.683-3.779%203.777-9.904%203.777-13.679%200-3.778-3.784-3.778-9.905%200-13.683a9.65%209.65%200%20013.167-2.11V47.333a9.581%209.581%200%2001-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056%2020.333%203.264%2058.123a8.133%208.133%200%20000%2011.5l55.117%2055.114c3.174%203.174%208.32%203.174%2011.499%200l54.858-54.858a8.135%208.135%200%2000-.001-11.501z'/%3e%3c/svg%3e`,Le=`data:image/svg+xml,%3csvg%20width='2500'%20height='2432'%20viewBox='0%200%20256%20249'%20xmlns='http://www.w3.org/2000/svg'%20preserveAspectRatio='xMinYMin%20meet'%3e%3cg%20fill='%23161614'%3e%3cpath%20d='M127.505%200C57.095%200%200%2057.085%200%20127.505c0%2056.336%2036.534%20104.13%2087.196%20120.99%206.372%201.18%208.712-2.766%208.712-6.134%200-3.04-.119-13.085-.173-23.739-35.473%207.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752%2012.804.9%2019.546%2013.14%2019.546%2013.14%2011.372%2019.493%2029.828%2013.857%2037.104%2010.6%201.144-8.242%204.449-13.866%208.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014%200-13.92%204.981-25.295%2013.138-34.224-1.324-3.212-5.688-16.18%201.235-33.743%200%200%2010.707-3.427%2035.073%2013.07%2010.17-2.826%2021.078-4.242%2031.914-4.29%2010.836.048%2021.752%201.464%2031.942%204.29%2024.337-16.497%2035.029-13.07%2035.029-13.07%206.94%2017.563%202.574%2030.531%201.25%2033.743%208.175%208.929%2013.122%2020.303%2013.122%2034.224%200%2048.972-29.828%2059.756-58.22%2062.912%204.573%203.957%208.648%2011.717%208.648%2023.612%200%2017.06-.148%2030.791-.148%2034.991%200%203.393%202.295%207.369%208.759%206.117%2050.634-16.879%2087.122-64.656%2087.122-120.973C255.009%2057.085%20197.922%200%20127.505%200'/%3e%3cpath%20d='M47.755%20181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652%201.273-.834%202.196-.396.927.415%201.455%201.287%201.134%201.923M54.027%20187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563%201.78-.3%202.616.59.834.899.996%202.08.36%202.65M58.33%20194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545%202.05-.055%202.85%201.07.78%201.153.78%202.513-.019%203.069M65.606%20202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772%202.204-.555%203.302.488%201.107%201.026%201.445%202.496.7%203.258M75.01%20205.483c-.307.998-1.741%201.452-3.185%201.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005%201.74-1.478%203.195-1.024%201.44.435%202.386%201.596%202.086%202.612M85.714%20206.67c.036%201.052-1.189%201.924-2.705%201.943-1.525.033-2.758-.818-2.774-1.852%200-1.062%201.197-1.926%202.721-1.951%201.516-.03%202.758.815%202.758%201.86M96.228%20206.267c.182%201.026-.872%202.08-2.377%202.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105%202.367-2.378%201.508-.262%202.857.355%203.049%201.398'/%3e%3c/g%3e%3c/svg%3e`,Re=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20128%20128'%3e%3cpath%20fill='%23E44D26'%20d='M19.037%20113.876L9.032%201.661h109.936l-10.016%20112.198-45.019%2012.48z'/%3e%3cpath%20fill='%23F16529'%20d='M64%20116.8l36.378-10.086%208.559-95.878H64z'/%3e%3cpath%20fill='%23EBEBEB'%20d='M64%2052.455H45.788L44.53%2038.361H64V24.599H29.489l.33%203.692%203.382%2037.927H64zm0%2035.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928%2021.609%2028.193%207.826.063-.017z'/%3e%3cpath%20fill='%23fff'%20d='M63.952%2052.455v13.763h16.947l-1.597%2017.849-15.35%204.143v14.319l28.215-7.82.207-2.325%203.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z'/%3e%3c/svg%3e`,ze=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20128%20128'%3e%3cpath%20fill='%23F0DB4F'%20d='M1.408%201.408h125.184v125.185H1.408z'/%3e%3cpath%20fill='%23323330'%20d='M116.347%2096.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32%204.784-4.355%207.925-3.403%202.023.678%203.938%202.237%205.093%204.724%205.402-3.498%205.391-3.475%209.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902%202.748-8.877%205.235-5.926%206.724-4.236%2018.492%202.975%2023.335%207.104%205.332%2017.54%206.545%2018.873%2011.531%201.297%206.104-4.486%208.08-10.234%207.378-4.236-.881-6.592-3.034-9.139-6.949-4.688%202.713-4.688%202.713-9.508%205.485%201.143%202.499%202.344%203.63%204.26%205.795%209.068%209.198%2031.76%208.746%2035.83-5.176.165-.478%201.261-3.666.38-8.581zM69.462%2058.943H57.753l-.048%2030.272c0%206.438.333%2012.34-.714%2014.149-1.713%203.558-6.152%203.117-8.175%202.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52%205.83c1.583%203.249%203.915%206.069%206.902%207.901%204.462%202.678%2010.459%203.499%2016.731%202.059%204.082-1.189%207.604-3.652%209.448-7.401%202.666-4.915%202.094-10.864%202.07-17.444.06-10.735.001-21.468.001-32.237z'/%3e%3c/svg%3e`,Be=`data:image/svg+xml,%3csvg%20height='2500'%20width='2500'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='-96%200%20960%20960'%3e%3cpath%20d='M192%20576l96-288%20432%20432-144%20240-192-192h-96'%20fill='%2300e8ff'/%3e%3cpath%20d='M384%20768V384l192-192v384m-480%200h96l96%20192-96%20192L0%20768z'%20fill='%23283198'%20fill-rule='evenodd'/%3e%3cpath%20d='M192%20576V192L384%200v384m192%20576V576l192-192v384M0%20768V384l192%20192'%20fill='%23324fff'/%3e%3cpath%20d='M192%20960V576l192%20192'%20fill='%230ff'/%3e%3c/svg%3e`,Ve=`/assets/sass-logo-DKvQXNSD.svg`,He=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20128%20128'%3e%3cpath%20fill='%23fff'%20d='M22.67%2047h99.67v73.67H22.67z'/%3e%3cpath%20data-name='original'%20fill='%23007acc'%20d='M1.5%2063.91v62.5h125v-125H1.5zm100.73-5a15.56%2015.56%200%20017.82%204.5%2020.58%2020.58%200%20013%204c0%20.16-5.4%203.81-8.69%205.85-.12.08-.6-.44-1.13-1.23a7.09%207.09%200%2000-5.87-3.53c-3.79-.26-6.23%201.73-6.21%205a4.58%204.58%200%2000.54%202.34c.83%201.73%202.38%202.76%207.24%204.86%208.95%203.85%2012.78%206.39%2015.16%2010%202.66%204%203.25%2010.46%201.45%2015.24-2%205.2-6.9%208.73-13.83%209.9a38.32%2038.32%200%2001-9.52-.1%2023%2023%200%2001-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34%209.34%200%20011.15-.73L82%20101l3.59-2.08.75%201.11a16.78%2016.78%200%20004.74%204.54c4%202.1%209.46%201.81%2012.16-.62a5.43%205.43%200%2000.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48%2016.48%200%2001-3.43-6.25%2025%2025%200%2001-.22-8c1.33-6.23%206-10.58%2012.82-11.87a31.66%2031.66%200%20019.49.26zm-29.34%205.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19%2049.19%200%2001.12-5.17C29.08%2059%2039%2059%2051%2059h21.83z'/%3e%3c/svg%3e`,X=class extends W{constructor(...e){super(...e),this.skill=``}static{this.styles=o`
    /** refers to the shadow root of the component */
    :host { 
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px; 
      
      aspect-ratio: 1;
      padding: 10px;
      border: 1px solid var(--border);
      border-radius: 1rem;
      box-shadow: 0 0 1rem 0 color-mix(in srgb, var(--text) 5%, transparent);

      background-color: var(--surface);
    } 

    .skill-icon {
      /* 50px → 70px @link https://utopia.fyi/clamp/calculator?a=320,1200,50—70 */
      width: clamp(50px, 42.7273px + 2.2727vw, 70px);
      height: auto;
    }

    span {
      text-align: center;
    }
  `}render(){let e=`${this.skill}-logo`;return N`
      <img src="${new URL(Object.assign({"../../assets/logos/angular-logo.svg":Pe,"../../assets/logos/css-logo.svg":Fe,"../../assets/logos/git-logo.svg":Ie,"../../assets/logos/github-logo.svg":Le,"../../assets/logos/html-logo.svg":Re,"../../assets/logos/javascript-logo.svg":ze,"../../assets/logos/lit-logo.svg":Be,"../../assets/logos/sass-logo.svg":Ve,"../../assets/logos/typescript-logo.svg":He})[`../../assets/logos/${e}.svg`],import.meta.url).href}" alt=${e} width="50" height="50" class="skill-icon" />
      <span>${this.skill.toUpperCase()}</span>
    `}};J([K()],X.prototype,`skill`,void 0),X=J([G(`skill-card`)],X);var Ue=class extends W{static{this.styles=o`
    /** refers to the shadow root of the component */
    :host {
      /* Variables for easy tweaking */
      --max-columns: 4;
      /* @link https://utopia.fyi/clamp/calculator?a=320,1200,120—150 */
      --max-item-width: clamp(120px, 109.0909px + 3.4091vw, 150px);

      display: grid;
      margin-inline: auto !important;
      
      /* Force fixed width */
      grid-template-columns: repeat(auto-fit, minmax(var(--max-item-width), var(--max-item-width)));
      gap: var(--fluid-gap-1);
      
      /* The math that caps the maximum amount of columns */
      --gap-count: calc(var(--max-columns) - 1); /* N of elems - 1 */
      --total-gap-width: calc(var(--gap-count) * var(--fluid-gap-1));
      max-width: calc((var(--max-item-width) * var(--max-columns)) + var(--total-gap-width));

      /* Alignment */
      margin-inline: auto; /* Needed because */
      justify-content: center; /* Centers items inside the grid when they wrap */
    }

    /*# region simple effects for each skill */
  
    .angular:hover { /* zoom */
      transform: scale(1.05);
    }

    .css:hover {     
      transform: skew(-7deg);
      transition: transform 0.3s;
    }
    
    .git:hover { /* blur */
      filter: blur(2px);
    }

    .html:hover { /* rotate */
      transform: rotate(3deg) scale(1.03);
    }

    .javascript:hover {
      animation: buzz 0.15s linear 3;
    }

    .lit:hover { /* glow */
      box-shadow: 0 0 20px var(--border);
    } 

    .sass:hover { /* 3d */  
      transform: perspective(400px) rotateX(8deg) rotateY(-8deg);
      box-shadow: -5px 15px 15px color-mix(in srgb, var(--text) 15%, transparent);
    }

   .typescript:hover { /* pressed */
      transform: scale(0.96);
      box-shadow: inset 0 4px 8px color-mix(in srgb, var(--text) 15%, transparent);
    }

    /* buzz effect */  
    @keyframes buzz {
      50% {
        transform: translateX(3px) rotate(2deg);
      }
      100% {
        transform: translateX(-3px) rotate(-2deg);
      }
    }
    /*# endregion effects */
  `}render(){return N`
      ${Ne.map(e=>N`
        <skill-card skill=${e} class="${e}"></skill-card>
      `)}
    `}};Ue=J([G(`skill-list`)],Ue);function Z(e,t){let n=document.documentElement;n.setAttribute(`data-theme`,e),n.style.colorScheme=t,console.log(`inside applyTheme, season`,e,`mode`,t),localStorage.setItem(`theme-season`,e),localStorage.setItem(`theme-mode`,t)}function We(){return window.matchMedia(`(prefers-color-scheme: dark)`).matches?`dark`:`light`}function Ge(){let e=localStorage.getItem(`theme-season`),t=localStorage.getItem(`theme-mode`),n=e??`spring`,r=t??We();return Z(n,r),{season:n,mode:r}}var Q=class extends W{static{this.styles=o`
    /** refers to the shadow root of the component */
    :host { 
      display: flex; 
      align-items: center; 
      gap: 8px; 
    } 

    button {
      padding: 6px 12px;
      border-radius: 20px;
      border: 1.5px solid var(--border);
      font-size: 13px;
      cursor: pointer;
      background-color: transparent;
      color: var(--text);
      transition: background-color 0.5s, 
                  color 0.5s, 
                  border-color 0.5s;
    }
    button.active {
      background-color: var(--primary);
      color: var(--bg);
    }
    button:hover:not(.active) {
      background-color: var(--surface);
    }
  `}constructor(){super(),this.icons={spring:`🌱`,summer:`☀️`,autumn:`🍂`,winter:`❄️`};let{season:e,mode:t}=Ge();this.season=e,this.mode=t}render(){return N`
      ${[`spring`,`summer`,`autumn`,`winter`].map(e=>N`
        <button
          class="${this.season===e?`active`:``}"
          @click=${()=>this.handleClick(e)}
          title="${e}"
        >
          ${this.icons[e]}
        </button>
      `)}
    `}handleClick(e){this.season===e?this.toggleMode():this.setSeason(e)}setSeason(e){this.season=e,Z(e,this.mode)}toggleMode(){let e=this.mode===`light`?`dark`:`light`;this.mode=e,Z(this.season,e)}};J([q()],Q.prototype,`season`,void 0),J([q()],Q.prototype,`mode`,void 0),Q=J([G(`theme-switcher`)],Q);var $=class extends W{static{this.styles=o`
    h1 {  
      font-size: var(--fs-1);
      overflow: hidden;
      white-space: nowrap;
      letter-spacing: 0.05rem;

      /* blinking cursor implemented as a right border */
      border-right: 2px solid var(--text-color, currentColor);

      /* Needed to make the typing animation end exactly at the last character */
      max-width: max-content;

      animation:
        typing 3s steps(45, end),
        blink-caret 1s step-end infinite;

      @media (width < 480px) {
        letter-spacing: 0.15em;
      }
    }

    /* Expand width from 0 to 100% to reveal characters one step at a time */
    @keyframes typing {
      from { width: 0; }
      to   { width: 100%; }
    }

    /* Alternates the border colour to create the blinking-cursor illusion */
    @keyframes blink-caret {
      from, to { border-color: transparent; }
      50%      { border-color: var(--text-color, currentColor); }
    }
  `}render(){return N`<h1>${this.text}</h1>`}};J([K()],$.prototype,`text`,void 0),$=J([G(`typed-text`)],$),Ge();