webpackJsonp([0xa7e49a349e28],{24:function(e,t,n){var a,r;!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a))e.push(n.apply(null,a));else if("object"===r)for(var o in a)l.call(a,o)&&a[o]&&e.push(o)}}return e.join(" ")}var l={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?e.exports=n:(a=[],r=function(){return n}.apply(t,a),!(void 0!==r&&(e.exports=r)))}()},204:function(e,t){"use strict";e.exports=function(e,t,n){var a=e||0;return"number"!=typeof t&&(t=10),"number"!=typeof n&&(n=1),function(){var e;return"undefined"==typeof t||10===t?(e=a,a+=n):(e=a.toString(),a=(parseInt(a,t)+n).toString(t)),e}}},62:function(e,t){function n(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function r(e){if(s===setTimeout)return setTimeout(e,0);if((s===n||!s)&&setTimeout)return s=setTimeout,setTimeout(e,0);try{return s(e,0)}catch(t){try{return s.call(null,e,0)}catch(t){return s.call(this,e,0)}}}function l(e){if(d===clearTimeout)return clearTimeout(e);if((d===a||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(t){try{return d.call(null,e)}catch(t){return d.call(this,e)}}}function o(){A&&m&&(A=!1,m.length?p=m.concat(p):h=-1,p.length&&i())}function i(){if(!A){var e=r(o);A=!0;for(var t=p.length;t;){for(m=p,p=[];++h<t;)m&&m[h].run();h=-1,t=p.length}m=null,A=!1,l(e)}}function c(e,t){this.fun=e,this.array=t}function u(){}var s,d,f=e.exports={};!function(){try{s="function"==typeof setTimeout?setTimeout:n}catch(e){s=n}try{d="function"==typeof clearTimeout?clearTimeout:a}catch(e){d=a}}();var m,p=[],A=!1,h=-1;f.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];p.push(new c(e,t)),1!==p.length||A||r(i)},c.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=u,f.addListener=u,f.once=u,f.off=u,f.removeListener=u,f.removeAllListeners=u,f.emit=u,f.prependListener=u,f.prependOnceListener=u,f.listeners=function(e){return[]},f.binding=function(e){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(e){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},328:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(1),s=a(u),d=n(333),f=function(e){function t(){var e,n,a,r;l(this,t);for(var i=arguments.length,c=Array(i),u=0;u<i;u++)c[u]=arguments[u];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),a.state={activeItems:a.preExpandedItems(),accordion:!0},a.renderItems=a.renderItems.bind(a),r=n,o(a,r)}return i(t,e),c(t,[{key:"componentWillReceiveProps",value:function(e){if(!(0,d.isArraysEqualShallow)(e.activeItems,this.state.activeItems)){var t=void 0;t=e.accordion?e.activeItems.length?[e.activeItems[0]]:[]:e.activeItems.slice(),this.setState({activeItems:t}),e.onChange(e.accordion?t[0]:t)}}},{key:"preExpandedItems",value:function(){var e=this,t=[];return s.default.Children.map(this.props.children,function(n,a){n.props.expanded&&(e.props.accordion?0===t.length&&t.push(n.props.customKey||a):t.push(n.props.customKey||a))}),0===t.length&&0!==this.props.activeItems.length&&(t=this.props.accordion?[this.props.activeItems[0]]:this.props.activeItems.slice()),t}},{key:"handleClick",value:function(e){var t=this.state.activeItems;if(this.props.accordion)t=t[0]===e?[]:[e];else{t=[].concat(r(t));var n=t.indexOf(e),a=n>-1;a?t.splice(n,1):t.push(e)}this.setState({activeItems:t}),this.props.onChange(this.props.accordion?t[0]:t)}},{key:"renderItems",value:function(){var e=this,t=this.props,n=t.accordion,a=t.children;return s.default.Children.map(a,function(t,a){var r=t.props.customKey||a,l=e.state.activeItems.indexOf(r)!==-1&&!t.props.disabled;return s.default.cloneElement(t,{disabled:t.props.disabled,accordion:n,expanded:l,key:"accordion__item-"+r,onClick:e.handleClick.bind(e,r)})})}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.accordion;return s.default.createElement("div",{role:n?"tablist":null,className:t},this.renderItems())}}]),t}(u.Component);f.defaultProps={accordion:!0,onChange:function(){},className:"accordion",activeItems:[]},t.default=f},329:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(1),s=a(u),d=n(204),f=a(d),m=n(24),p=a(m),A=(0,f.default)(),h=function(e){function t(){var e,n,a,r;l(this,t);for(var i=arguments.length,c=Array(i),u=0;u<i;u++)c[u]=arguments[u];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),a.state={itemUuid:A()},a.renderChildren=a.renderChildren.bind(a),r=n,o(a,r)}return i(t,e),c(t,[{key:"renderChildren",value:function(){var e=this.props,t=e.accordion,n=e.expanded,a=e.onClick,r=e.children,l=this.state.itemUuid;return s.default.Children.map(r,function(e){var r={};return"AccordionItemTitle"===e.type.accordionElementName?(r.expanded=n,r.key="title",r.id="accordion__title-"+l,r.ariaControls="accordion__body-"+l,r.onClick=a,r.role=t?"tab":"button",s.default.cloneElement(e,r)):"AccordionItemBody"===e.type.accordionElementName?(r.expanded=n,r.key="body",r.id="accordion__body-"+l,r.role=t?"tabpanel":null,s.default.cloneElement(e,r)):e})}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.expanded,a=e.hideBodyClassName,l=(0,p.default)(t,r({},a,!n&&a));return s.default.createElement("div",{className:l},this.renderChildren())}}]),t}(u.Component);h.defaultProps={accordion:!0,expanded:!1,onClick:function(){},className:"accordion__item",hideBodyClassName:""},t.default=h},330:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),o=a(l),i=n(24),c=a(i),u={id:"",expanded:!1,className:"accordion__body",hideBodyClassName:"accordion__body--hidden",role:""},s=function(e){var t=e.id,n=e.expanded,a=e.children,l=e.className,i=e.hideBodyClassName,u=e.role,s=(0,c.default)(l,r({},i,!n)),d=!n;return o.default.createElement("div",{id:t,className:s,"aria-hidden":d,"aria-labelledby":t.replace("accordion__body-","accordion__title-"),role:u},a)};s.defaultProps=u,s.accordionElementName="AccordionItemBody",t.default=s},331:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(1),s=a(u),d=n(24),f=a(d),m=function(e){function t(){var e,n,a,r;l(this,t);for(var i=arguments.length,c=Array(i),u=0;u<i;u++)c[u]=arguments[u];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),a.handleKeyPress=a.handleKeyPress.bind(a),r=n,o(a,r)}return i(t,e),c(t,[{key:"handleKeyPress",value:function(e){var t=this.props.onClick;13!==e.charCode&&32!==e.charCode||t()}},{key:"render",value:function(){var e=this.props,t=e.id,n=e.expanded,a=e.ariaControls,l=e.onClick,o=e.children,i=e.className,c=e.role,u=e.hideBodyClassName,d=(0,f.default)(i,r({},u,u&&!n));return"tab"===c?s.default.createElement("div",{id:t,"aria-selected":n,"aria-controls":a,className:d,onClick:l,role:c,tabIndex:"0",onKeyPress:this.handleKeyPress},o):s.default.createElement("div",{id:t,"aria-expanded":n,"aria-controls":a,className:d,onClick:l,role:c,tabIndex:"0",onKeyPress:this.handleKeyPress},o)}}]),t}(u.Component);m.accordionElementName="AccordionItemTitle",m.defaultProps={id:"",expanded:!1,onClick:function(){},ariaControls:"",className:"accordion__title",hideBodyClassName:"",role:""},t.default=m},332:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.AccordionItemBody=t.AccordionItemTitle=t.AccordionItem=t.Accordion=void 0;var r=n(328),l=a(r),o=n(329),i=a(o),c=n(331),u=a(c),s=n(330),d=a(s);t.Accordion=l.default,t.AccordionItem=i.default,t.AccordionItemTitle=u.default,t.AccordionItemBody=d.default},333:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.isArraysEqualShallow=function(e,t){if(e===t)return!0;if(!Array.isArray(e)||!Array.isArray(t)||e.length!==t.length)return!1;for(var n=!0,a=e.length,r=0;r<a;r+=1)if(e[r]!==t[r]){n=!1;break}return n}},186:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(1),l=a(r),o=n(63),i=(a(o),n(332)),c=function(){return l.default.createElement(i.Accordion,null,l.default.createElement(i.AccordionItem,null,l.default.createElement(i.AccordionItemTitle,null,l.default.createElement("p",null,"Quelles sont les garanties ?")),l.default.createElement(i.AccordionItemBody,null,l.default.createElement("ul",null,l.default.createElement("li",null,"La responsabilité civile du locataire encourue vis-à- vis du propriétaire;"),l.default.createElement("li",null,"Les dommages aux biens : incendie, inondation , dégâts des eaux, vol/vandalisme, bris de glace (fenêtres, mobiliers en verre).")),l.default.createElement("p",null,"Attention, cette assurance ne se substitue pas à l’assurance habitation. Les espaces mis en location sur Cookoon doivent être couverts par un contrat Multirisque Habitation ou un contratd’assurance spécifique en fonction du local loué."))),l.default.createElement(i.AccordionItem,null,l.default.createElement(i.AccordionItemTitle,null,l.default.createElement("p",null,"Qui est couvert par l'offre Cookoon en partenariat en AXA ?")),l.default.createElement(i.AccordionItemBody,null,l.default.createElement("ul",null,l.default.createElement("li",null,"Particulier ou professionnel ayant réservé un logement meublé via l’application ou le site Cookoon ;"),l.default.createElement("li",null,"Son conjoint et ses enfants ;"),l.default.createElement("li",null,"Toute autre personne participant à l’occupation du lieu.")))),l.default.createElement(i.AccordionItem,null,l.default.createElement(i.AccordionItemTitle,null,l.default.createElement("p",null,"Quels sont les biens couverts par l'assurance ?")),l.default.createElement(i.AccordionItemBody,null,l.default.createElement("ul",null,l.default.createElement("li",null,"Les maisons ou villas"),l.default.createElement("li",null,"Les appartements"),l.default.createElement("li",null,"Les châteaux, chalets ou lodges"),l.default.createElement("li",null,"Les dépendances de moins de 200 m2"),l.default.createElement("li",null,"Les meubles contenus de dans la location meublée")))),l.default.createElement(i.AccordionItem,null,l.default.createElement(i.AccordionItemTitle,null,l.default.createElement("p",null,"Quels sont les biens qui ne sont pas couverts par l'assurance ?")),l.default.createElement(i.AccordionItemBody,null,l.default.createElement("ul",null,l.default.createElement("li",null,"Les hôtels"),l.default.createElement("li",null,"Les bâtiments classés monuments historiques"),l.default.createElement("li",null,"Les chalets de haute montagne (inaccessibles aux véhicules de secours pendant au moins une partie de l’année)"),l.default.createElement("li",null,"Les installations extérieures au bien loué (piscine, tennis, statues à demeure, bancs de pierre,…)"),l.default.createElement("li",null,"Les objets de valeurs personnels (bijoux, objets d’arts ...) et les fonds et valeurs de l’occupant (chèques, espèces, tickets cadeaux etc.)")))),l.default.createElement(i.AccordionItem,null,l.default.createElement(i.AccordionItemTitle,null,l.default.createElement("p",null,"Quelles sont les garanties ?")),l.default.createElement(i.AccordionItemBody,null,l.default.createElement("p",null,"La franchise est le montant qui reste à la charge du locataire en cas de sinistre."),l.default.createElement("p",null,"Le montant de la franchise applicable est égal à :"),l.default.createElement("ul",null,l.default.createElement("li",null,"Sur la garantie Dommages immobiliers : 350 euros"),l.default.createElement("li",null,"Sur la garantie Dommages mobiliers : 200 euros (ex : porte de placard endommagée)")))),l.default.createElement(i.AccordionItem,null,l.default.createElement(i.AccordionItemTitle,null,l.default.createElement("p",null,"Que faire en cas d'incident ?")),l.default.createElement(i.AccordionItemBody,null,l.default.createElement("p",null,"En cas d’incident, il appartient à l’occupant de le déclarer dans les délais indiqués ci-dessous. Si l’hôte constate, après l’occupation, un sinistre qui n’a pas été porté à sa connaissance par l’occupant, il lui appartient alors de le déclarer."),l.default.createElement("ul",null,l.default.createElement("li",null,"dans les 2 jours ouvrés pour le vol"),l.default.createElement("li",null,"dans les 10 jours de la publication de l’arrêté interministériel constatant l’état de catastrophe naturelle s’il s’agit de dommages mettant en œuvre l’assurance de ce risque"),l.default.createElement("li",null,"dans les 5 jours pour les autres cas.")))))};t.default=c,e.exports=t.default},445:function(e,t){e.exports="data:image/png;base64,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"},193:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(1),l=a(r),o=n(33),i=(a(o),n(48)),c=a(i),u=n(51),s=a(u),d=n(186),f=a(d),m=n(445),p=a(m),A=function(){return l.default.createElement("div",null,l.default.createElement(c.default,{title:"Garanties"}),l.default.createElement(s.default,null,l.default.createElement("div",{className:"row"},l.default.createElement("div",{className:"col-md-9 d-flex align-items-center"},l.default.createElement("h1",{className:"h4 font-weight-light mb-4 mb-md-0"},"Votre assurance incluse",l.default.createElement("br",null),"à chaque location grâce à notre partenaire")),l.default.createElement("div",{className:"col-md-3 d-flex justify-content-center justify-content-md-start align-items-center"},l.default.createElement("img",{src:p.default,alt:"Axa",className:"w-6r"})))),l.default.createElement("div",{className:"bg-primary text-white"},l.default.createElement("div",{className:"container"},l.default.createElement("h2",{className:"h3 text-center pt-5 mb-5"},"Vous êtes immédiatement assuré"),l.default.createElement("div",{className:"row pb-3"},l.default.createElement("div",{className:"offset-md-1 col-md-10 offset-lg-2 col-lg-8"},l.default.createElement("div",{className:"row text-center"},l.default.createElement("div",{className:"col-sm"},l.default.createElement("i",{className:"co co-stain fa-3x","aria-hidden":"true"}),l.default.createElement("p",{className:"mt-2"},"Un verre de vin renversé ?")),l.default.createElement("div",{className:"col-sm"},l.default.createElement("i",{className:"co co-broken-door fa-3x","aria-hidden":"true"}),l.default.createElement("p",{className:"mt-2"},"Une porte de placard endommagée ?")),l.default.createElement("div",{className:"col-sm"},l.default.createElement("i",{className:"co co-fire fa-3x","aria-hidden":"true"}),l.default.createElement("p",{className:"mt-2"},"Un incendit ou un dégât des eaux ?")),l.default.createElement("div",{className:"col-sm"},l.default.createElement("i",{className:"co co-lost fa-3x","aria-hidden":"true"}),l.default.createElement("p",{className:"mt-2"},"Un objet qui disparaît ?"))))),l.default.createElement("div",{className:"row"},l.default.createElement("div",{className:"col-md p-4"},"Même lorsque l'on est précautionneux, des accidents peuvent arriver. Afin de protéger et de rassurer les hôtes, Cookoon et AXA ont mis en place une solution d'assurance dédiée qui couvre les biens immobiliers et mobiliers durant les occupations."),l.default.createElement("div",{className:"col-md p-4"},"Cookoon et AXA proposent donc cette solution d'assurance automatiquement incluse, valable pour toutes les réservations réalisées via la plateforme, dans la limite des conditions prévues au contrat. Les membres de la communauté éviteront ainsi une situation embarrassante ou coûteuse.")))),l.default.createElement("div",{className:"container faq-container"},l.default.createElement("h2",{className:"h3 text-center pt-5 mb-5"},"Questions fréquentes"),l.default.createElement(f.default,null)),l.default.createElement("div",{className:"bg-white py-5"},l.default.createElement("div",{className:"container d-flex align-items-center"},l.default.createElement("i",{className:"co co-check fa-3x text-primary mx-3","aria-hidden":"true"}),l.default.createElement("p",{className:"mb-0"},"Les informations ci-dessus sont non contractuelles, pour toute information supplémentaire, merci de consulter les"," ",l.default.createElement("a",{href:"https://drive.google.com/open?id=1YSDLo0SK3z9Yf0lLvoSO7KCp6Jv7OGnO",target:"_blank"},"conditions générales")," ","et les"," ",l.default.createElement("a",{href:"https://drive.google.com/open?id=1HxostqQkQs0FxH9a4-aXeey9oHTiD4Sa",target:"_blank"},"conditions particulières")," ","des garanties offertes par Cookoon."))))};t.default=A,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-garanties-js-4bf6cbb321143f6700e7.js.map