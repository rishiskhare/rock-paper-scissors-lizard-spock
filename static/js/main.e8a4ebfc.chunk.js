(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,a,r){e.exports=r.p+"static/media/rock.5914af84.png"},function(e,a,r){e.exports=r.p+"static/media/paper.88761c90.png"},function(e,a,r){e.exports=r.p+"static/media/scissors.265f976c.png"},function(e,a,r){e.exports=r.p+"static/media/lizard.ccbef0d1.png"},function(e,a,r){e.exports=r.p+"static/media/spock.7f99ffc5.png"},function(e,a,r){e.exports=r(22)},,,,,function(e,a,r){},,function(e,a,r){},,function(e,a,r){"use strict";r.r(a);var c=r(1),t=r.n(c),o=r(7),s=r.n(o),n=(r(18),r(4)),l=(r(20),function(){return t.a.createElement("nav",null,t.a.createElement("h2",{className:"nav--title"},"Rock Paper Scissors Lizard Spock"),t.a.createElement("a",{className:"nav--video__link",href:"https://www.youtube.com/watch?v=x5Q6-wMx-K8",target:"_blank",rel:"noopener noreferrer"},t.a.createElement("h2",{className:"nav--video__text"},"See video")))}),p=function(e){var a=e.score;return t.a.createElement("div",{className:"scorecard--container"},t.a.createElement("div",{className:"scorecard--player__container"},t.a.createElement("span",{className:"scorecard--player__name"},"[you]"),t.a.createElement("h1",{className:"scorecard--player__score"},a.playerScore)),t.a.createElement("h1",{className:"scorecard--separator"},":"),t.a.createElement("div",{className:"scorecard--computer__container"},t.a.createElement("h1",{className:"scorecard--computer__score"},a.computerScore),t.a.createElement("span",{className:"scorecard--computer__name"},"[computer]")))},i=function(e){var a=e.handleChange,r=e.handleSubmit;return t.a.createElement("form",{onSubmit:r},t.a.createElement("div",{className:"form--radio__container"},t.a.createElement("div",{className:"form--radio__item"},t.a.createElement("input",{type:"radio",id:"rock",name:"character",value:"rock",onChange:a}),t.a.createElement("label",{htmlFor:"rock"},"Rock")),t.a.createElement("div",{className:"form--radio__item"},t.a.createElement("input",{type:"radio",id:"paper",name:"character",value:"paper",onChange:a}),t.a.createElement("label",{htmlFor:"paper"},"Paper")),t.a.createElement("div",{className:"form--radio__item"},t.a.createElement("input",{type:"radio",id:"scissors",name:"character",value:"scissors",onChange:a}),t.a.createElement("label",{htmlFor:"scissors"},"Scissors")),t.a.createElement("div",{className:"form--radio__item"},t.a.createElement("input",{type:"radio",id:"lizard",name:"character",value:"lizard",onChange:a}),t.a.createElement("label",{htmlFor:"lizard"},"Lizard")),t.a.createElement("div",{className:"form--radio__item"},t.a.createElement("input",{type:"radio",id:"spock",name:"character",value:"spock",onChange:a}),t.a.createElement("label",{htmlFor:"spock"},"Spock"))),t.a.createElement("button",{className:"form--submit"},"Play"))},m=r(2),u=r(8),d=r.n(u),S=r(9),h=r.n(S),b=r(10),E=r.n(b),k=r(11),f=r.n(k),v=r(12),y=r.n(v),j=["rock","paper","scissors","lizard","spock"],O=r(5),_=function(e){var a=e.playerCharacter,r=e.score,o=e.setScore,s=Object(c.useState)(""),l=Object(n.a)(s,2),p=l[0],i=l[1],u=Object(c.useState)(""),S=Object(n.a)(u,2),b=S[0],k=S[1];Object(c.useEffect)(function(){i(j[Math.floor(Math.random()*j.length)])},[]);Object(c.useEffect)(function(){a===p?(o(Object(m.a)({},r)),k("".concat(a," ties ").concat(p))):"lizard"===a?"paper"===p?(o(Object(m.a)({},r,{playerScore:r.playerScore+1})),k("Lizard eats Paper")):"spock"===p?(o(Object(m.a)({},r,{playerScore:r.playerScore+1})),k("Lizard poisons Spock")):"rock"===p?(o(Object(m.a)({},r,{computerScore:r.computerScore+1})),k("Rock crushes Lizard")):"scissors"===p&&(o(Object(m.a)({},r,{computerScore:r.computerScore+1})),k("Scissors decapitates Lizard")):"paper"===a?"rock"===p?(o(Object(m.a)({},r,{playerScore:r.playerScore+1})),k("Paper covers Rock")):"spock"===p?(o(Object(m.a)({},r,{playerScore:r.playerScore+1})),k("Paper disproves Spock")):"scissors"===p?(o(Object(m.a)({},r,{computerScore:r.computerScore+1})),k("Scissors cuts Paper")):"lizard"===p&&(o(Object(m.a)({},r,{computerScore:r.computerScore+1})),k("Lizard eats Paper")):"rock"===a?"scissors"===p?(o(Object(m.a)({},r,{playerScore:r.playerScore+1})),k("Rock crushes Scissors")):"lizard"===p?(o(Object(m.a)({},r,{playerScore:r.playerScore+1})),k("Rock crushes Lizard")):"paper"===p?(o(Object(m.a)({},r,{computerScore:r.computerScore+1})),k("Paper covers Rock")):"spock"===p&&(o(Object(m.a)({},r,{computerScore:r.computerScore+1})),k("Spock vaporizes Rock")):"scissors"===a?"paper"===p?(o(Object(m.a)({},r,{playerScore:r.playerScore+1})),k("Scissors cuts Paper")):"lizard"===p?(o(Object(m.a)({},r,{playerScore:r.playerScore+1})),k("Scissors decapitates Lizard")):"rock"===p?(o(Object(m.a)({},r,{computerScore:r.computerScore+1})),k("Rock crushes Scissors")):"spock"===p&&(o(Object(m.a)({},r,{computerScore:r.computerScore+1})),k("Spock smashes Scissors")):"spock"===a&&("rock"===p?(o(Object(m.a)({},r,{playerScore:r.playerScore+1})),k("Spock vaporizes Rock")):"scissors"===p?(o(Object(m.a)({},r,{playerScore:r.playerScore+1})),k("Spock smashes Scissors")):"paper"===p?(o(Object(m.a)({},r,{computerScore:r.computerScore+1})),k("Paper disproves Spock")):"lizard"===p&&(o(Object(m.a)({},r,{computerScore:r.computerScore+1})),k("Lizard poisons Spock")))},[p]);var v=function(e){return"rock"===e?d.a:"paper"===e?h.a:"scissors"===e?E.a:"lizard"===e?f.a:"spock"===e?y.a:void 0};return t.a.createElement("div",{className:"showdown--container--button"},t.a.createElement("div",{className:"showdown--container"},t.a.createElement("img",{className:"showdown--img",src:v(a),alt:a}),t.a.createElement("h1",{className:"showdown--text"},b),t.a.createElement("img",{className:"showdown--img",src:v(p),alt:p})),t.a.createElement(O.b,{class:"play-again-btn",to:"/",onClick:function(){return i("")}},"Play Again"))},g=r(0),w=function(){var e=Object(c.useState)(""),a=Object(n.a)(e,2),r=a[0],o=a[1],s=Object(g.f)(),m=Object(c.useState)({playerScore:0,computerScore:0}),u=Object(n.a)(m,2),d=u[0],S=u[1];return t.a.createElement("div",{className:"App"},t.a.createElement(l,null),t.a.createElement("div",{className:"content"},t.a.createElement(p,{score:d}),t.a.createElement(g.c,null,t.a.createElement(g.a,{path:"/rock-paper-scissors",element:t.a.createElement(i,{handleChange:function(e){o(e.target.value)},handleSubmit:function(e){e.preventDefault(),s("/rock-paper-scissors/showdown")}})}),t.a.createElement(g.a,{path:"/rock-paper-scissors/showdown",element:t.a.createElement(_,{playerCharacter:r,score:d,setScore:S})}))))},N=function(e){e&&e instanceof Function&&r.e(1).then(r.bind(null,23)).then(function(a){var r=a.getCLS,c=a.getFID,t=a.getFCP,o=a.getLCP,s=a.getTTFB;r(e),c(e),t(e),o(e),s(e)})};s.a.render(t.a.createElement(t.a.StrictMode,null,t.a.createElement(O.a,null,t.a.createElement(w,null))),document.getElementById("root")),N()}],[[13,3,2]]]);
//# sourceMappingURL=main.e8a4ebfc.chunk.js.map