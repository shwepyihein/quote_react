(this.webpackJsonpquote_react=this.webpackJsonpquote_react||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(2),r=a.n(c),i=(a(12),a(3)),s=a(4),l=a(6),u=a(5),m=(a(13),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).getRandomIndex=function(){var e=n.state.quotes;if(console.log(e),e.length>0){var t=Math.floor(Math.random()*e.length);console.log(t),n.setState({index:t})}},n.state={quotes:[{quote:"",author:""}],index:0},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json").then((function(e){return e.json()})).then((function(t){e.setState({quotes:t},e.getRandomIndex)}))}},{key:"render",value:function(){var e=this.state,t=e.quotes[e.index];console.log(t);var a="https://twitter.com/intent/tweet?".concat(t.quote,"-").concat(t.author);return o.a.createElement("div",{className:"wrapper"},o.a.createElement("div",{className:"box",id:"quote-box"},o.a.createElement("div",{className:"quote_container"},t&&o.a.createElement("div",{className:"quote_text"},o.a.createElement("p",{id:"text"}," ",t.quote," "),o.a.createElement("cite",{style:{float:"right"},id:"author"},"- ",t.author)),o.a.createElement("div",{className:"soical"},o.a.createElement("div",{className:"twitter"},o.a.createElement("a",{href:a,id:"tweet-quote",target:"_blank"},o.a.createElement("i",{class:"fab fa-twitter"})," tweet")),o.a.createElement("div",null,o.a.createElement("button",{onClick:this.getRandomIndex,id:"new-quote"}," ",o.a.createElement("i",{class:"fas fa-random"}),"    Next Quote"))))))}}]),a}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.5d2cace9.chunk.js.map