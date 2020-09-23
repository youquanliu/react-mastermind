(this["webpackJsonpreact-mastermind"]=this["webpackJsonpreact-mastermind"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,n){e.exports={GuessRow:"GuessRow_GuessRow__caHtV",rowNum:"GuessRow_rowNum__2k3QY"}},function(e,t,n){e.exports={ColorPicker:"ColorPicker_ColorPicker__2jNsY",button:"ColorPicker_button__38u9e"}},,,,,,function(e,t,n){e.exports={peg:"GuessPeg_peg__3brT0"}},function(e,t,n){e.exports={button:"ScoreButton_button__2dee5"}},function(e,t,n){e.exports={GameBoard:"GameBoard_GameBoard__dmTB-"}},function(e,t,n){e.exports={GameTimer:"GameTimer_GameTimer__m2Stb"}},,function(e,t,n){e.exports=n(44)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(22),c=n.n(l),o=(n(33),n(6)),s=n(9),i=n(11),u=n(12),d=n(14),m=n(13),f=(n(34),n(7)),h=n(23),g=n.n(h),C=function(e){return r.a.createElement("div",{className:g.a.peg,style:{backgroundColor:e.color,border:e.color?"1px solid ".concat(e.color):"1px dashed grey",cursor:e.currentGuess&&"pointer"},onClick:e.currentGuess?e.handlePegClick:null})},k=(n(35),function(e){return r.a.createElement("div",{className:"GuessPegs"},r.a.createElement(C,{color:e.colors[e.code[0]],currentGuess:e.currentGuess,handlePegClick:function(){return e.handlePegClick(0)}}),r.a.createElement(C,{color:e.colors[e.code[1]],currentGuess:e.currentGuess,handlePegClick:function(){return e.handlePegClick(1)}}),r.a.createElement(C,{color:e.colors[e.code[2]],currentGuess:e.currentGuess,handlePegClick:function(){return e.handlePegClick(2)}}),r.a.createElement(C,{color:e.colors[e.code[3]],currentGuess:e.currentGuess,handlePegClick:function(){return e.handlePegClick(3)}}))}),b=(n(36),function(e){var t=e.score,n=("P".repeat(t.perfect)+"A".repeat(t.almost)+"I".repeat(4-t.perfect-t.almost)).split(""),a={width:10,height:10,margin:1,border:"2px solid",borderRadius:"50%"},l={P:{borderColor:"black",backgroundColor:"black"},A:{borderColor:"black",backgroundColor:"white"},I:{borderColor:"white",backgroundColor:"lightgrey"}};return r.a.createElement("div",{className:"GuessScore"},n.map((function(e,t){return r.a.createElement("div",{key:t,style:Object(o.a)(Object(o.a)({},a),l[e])})})))}),p=n(24),E=n.n(p),v=function(e){return r.a.createElement("button",{className:"".concat(E.a.button," btn btn-default"),disabled:e.disabled,onClick:e.handleScoreClick},"\u2714")},G=n(16),y=n.n(G),N=function(e){return r.a.createElement("div",{className:y.a.GuessRow},r.a.createElement("div",{className:y.a.rowNum,style:{color:e.currentGuess?"black":"lightgrey"}},e.rowIdx+1),r.a.createElement(k,{colors:e.colors,code:e.guess.code,currentGuess:e.currentGuess,handlePegClick:e.handlePegClick}),e.currentGuess&&4!==e.guess.score.perfect?r.a.createElement(v,{disabled:e.guess.code.includes(null),handleScoreClick:e.handleScoreClick}):r.a.createElement(b,{score:e.guess.score}))},S=n(25),w=n.n(S),T=function(e){return r.a.createElement("div",{className:w.a.GameBoard},e.guesses.map((function(t,n){return r.a.createElement(N,{guess:t,colors:e.colors,rowIdx:n,currentGuess:n===e.guesses.length-1,handlePegClick:e.handlePegClick,handleScoreClick:e.handleScoreClick,key:n})})))},P=n(17),x=n.n(P),_=function(e){return r.a.createElement("div",{className:x.a.ColorPicker},e.colors.map((function(t,n){return r.a.createElement("button",{key:t,className:x.a.button,style:{backgroundColor:e.selColorIdx===n?"white":t,borderColor:t},onClick:function(){return e.handleColorSelection(n)}})})))},j=n(26),O=n.n(j);var I=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).handleTick=function(){e.props.isTiming&&e.props.handleTimerUpdate()},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.timerId=setInterval(this.handleTick,1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){return r.a.createElement("div",{className:"".concat(O.a.GameTimer," flex-h")},function(e){var t=Math.floor(e/60).toString().padStart(2,"0"),n=(e%60).toString().padStart(2,"0");return"".concat(t,":").concat(n)}(this.props.elapsedTime))}}]),n}(a.Component),D=function(e){return r.a.createElement("button",{className:"btn btn-default",onClick:e.handleNewGameClick},"New Game")},B=(n(37),function(e){return r.a.createElement("div",{className:"GamePage"},r.a.createElement("div",{className:"flex-h align-flex-end"},r.a.createElement(T,{colors:e.colors,guesses:e.guesses,handlePegClick:e.handlePegClick,handleScoreClick:e.handleScoreClick}),r.a.createElement("div",{className:"GamePage-controls"},r.a.createElement(_,{colors:e.colors,selColorIdx:e.selColorIdx,handleColorSelection:e.handleColorSelection}),r.a.createElement(I,{elapsedTime:e.elapsedTime,handleTimerUpdate:e.handleTimerUpdate,isTiming:e.isTiming}),r.a.createElement(f.b,{className:"btn btn-default GamePage-link-margin",to:"/settings"},"Difficulty"),r.a.createElement(D,{handleNewGameClick:e.handleNewGameClick}))),r.a.createElement("footer",{className:"header-footer"},e.winTries?"You Won in ".concat(e.winTries," Guesses!"):"Good Luck!"))}),A=n(1),R=(n(43),function(e){var t={border:"2px solid #333"};var n=Object.keys(e.colorsLookup).map((function(n){return r.a.createElement("div",{className:"Settings-level-row",key:n},r.a.createElement("button",{className:"Settings-level-btn btn btn-default",style:n===e.difficulty?t:null,disabled:n===e.difficulty,onClick:function(){return function(t){e.handleDifficultyChange(t),e.history.push("/")}(n)}},n),r.a.createElement("div",{className:"Settings-level-colors"},e.colorsLookup[n].map((function(e){return r.a.createElement("div",{className:"Settings-color",style:{backgroundColor:e},key:e})}))))}));return r.a.createElement("div",{className:"Settings"},r.a.createElement("header",{className:"header-footer"},"Set Difficulty Level"),r.a.createElement("div",null,n),r.a.createElement("div",null,r.a.createElement(f.b,{className:"Settings-cancel btn btn-default btn-sm",to:"/"},"Cancel")))}),M={Easy:["#7CCCE5","#FDE47F","#E04644","#B576AD"],Moderate:["#7CCCE5","#FDE47F","#E04644","#B576AD","#B7D968"],Difficult:["#7CCCE5","#FDE47F","#E04644","#B576AD","#B7D968","#555E7B"]},U=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleTimerUpdate=function(){e.setState((function(e){return{elapsedTime:++e.elapsedTime}}))},e.handleDifficultyChange=function(t){e.setState({difficulty:t},(function(){return e.handleNewGameClick()}))},e.handleColorSelection=function(t){e.setState({selColorIdx:t})},e.handleNewGameClick=function(){e.setState(e.getInitialState())},e.handlePegClick=function(t){var n=e.state.guesses.length-1,a=Object(s.a)(e.state.guesses),r=Object(o.a)({},a[n]),l=Object(s.a)(r.code);l[t]=e.state.selColorIdx,r.code=l,a[n]=r,e.setState({guesses:a})},e.handleScoreClick=function(){var t=e.state.guesses.length-1,n=Object(s.a)(e.state.guesses[t].code),a=Object(s.a)(e.state.code),r=0,l=0;n.forEach((function(e,t){a[t]===e&&(r++,n[t]=a[t]=null)})),n.forEach((function(e,t){if(null!==e){var n=a.indexOf(e);n>-1&&(l++,a[n]=null)}}));var c=Object(s.a)(e.state.guesses),i=Object(o.a)({},c[t]),u=Object(o.a)({},i.score);u.perfect=r,u.almost=l,i.score=u,c[t]=i,4!==r&&c.push(e.getNewGuess()),e.setState({guesses:c,isTiming:4!==r})},e.state=Object(o.a)(Object(o.a)({},e.getInitialState()),{},{difficulty:"Easy"}),e}return Object(u.a)(n,[{key:"getInitialState",value:function(){return{selColorIdx:0,guesses:[this.getNewGuess()],code:this.genCode(),elapsedTime:0,isTiming:!0}}},{key:"getNewGuess",value:function(){return{code:[null,null,null,null],score:{perfect:0,almost:0}}}},{key:"genCode",value:function(){var e=this.state&&M[this.state.difficulty].length;return e=e||4,new Array(4).fill().map((function(t){return Math.floor(Math.random()*e)}))}},{key:"getWinTries",value:function(){var e=this.state.guesses.length-1;return 4===this.state.guesses[e].score.perfect?e+1:0}},{key:"render",value:function(){var e=this,t=this.getWinTries();return r.a.createElement("div",null,r.a.createElement("header",{className:"header-footer"},"R E A C T \xa0\xa0\xa0  M A S T E R M I N D"),r.a.createElement(A.c,null,r.a.createElement(A.a,{exact:!0,path:"/",render:function(){return r.a.createElement(B,{winTries:t,colors:M[e.state.difficulty],selColorIdx:e.state.selColorIdx,guesses:e.state.guesses,elapsedTime:e.state.elapsedTime,isTiming:e.state.isTiming,handleColorSelection:e.handleColorSelection,handleNewGameClick:e.handleNewGameClick,handlePegClick:e.handlePegClick,handleScoreClick:e.handleScoreClick,handleTimerUpdate:e.handleTimerUpdate})}}),r.a.createElement(A.a,{exact:!0,path:"/settings",render:function(t){return r.a.createElement(R,Object.assign({},t,{colorsLookup:M,difficulty:e.state.difficulty,handleDifficultyChange:e.handleDifficultyChange}))}})))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(f.a,null,r.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[28,1,2]]]);
//# sourceMappingURL=main.25e4aabb.chunk.js.map