(this.webpackJsonpgame1=this.webpackJsonpgame1||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(2),s=a.n(i),l=(a(13),a(3)),o=a(4),c=a(7),u=a(5),h=function(e){return r.a.createElement("button",{className:"square "+e.className,onClick:function(){e.onClick()}},e.value)};function m(e){var t=function(t,a){var n=Object.values(a||{}).includes(t)?"winner-highlight":"";return r.a.createElement(h,{className:n,value:e.boardState[t],onClick:function(){e.handleUserSelectionOnboard(e.boardState,e.isXNext,t)}})};return r.a.createElement("div",null,r.a.createElement("div",{className:"board-row"},t(0,e.highlightSquares),t(1,e.highlightSquares),t(2,e.highlightSquares)),r.a.createElement("div",{className:"board-row"},t(3,e.highlightSquares),t(4,e.highlightSquares),t(5,e.highlightSquares)),r.a.createElement("div",{className:"board-row"},t(6,e.highlightSquares),t(7,e.highlightSquares),t(8,e.highlightSquares)))}var g=a(6),v=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var n=Object(g.a)(t[a],3),r=n[0],i=n[1],s=n[2];if(e[r]&&e[r]===e[i]&&e[r]===e[s])return{winner:e[r],Lines:t[a]}}return{}},d=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleUserSelectionOnboard=function(e,t,a){var r=e.slice();if(!v(r).winner&&!r[a]){r[a]=t?"X":"Y";var i=n.state.history;i.push(e),n.setState({values:r,isXNext:!t,history:i})}},n.goToHistoryState=function(e){var t=n.state.history,a=t[e];t.splice(e,t.length);var r=Boolean(e%2===0);n.setState({values:a,isXNext:r,history:t})},n.state={values:Array(9).fill(null),isXNext:!0,history:[]},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=v(this.state.values),a="Winner is : "+t.winner,n="Next player: "+(this.state.isXNext?"X":"Y");return r.a.createElement("div",{className:"game"},r.a.createElement("div",{className:"game-board"},r.a.createElement(m,{boardState:this.state.values,isXNext:this.state.isXNext,handleUserSelectionOnboard:this.handleUserSelectionOnboard,highlightSquares:t.Lines})),r.a.createElement("div",{className:"game-info"},r.a.createElement("div",null,n),t.winner?r.a.createElement("div",null,a):"",r.a.createElement("div",{className:"row"},this.state.history.map((function(t,a){return 0!==a?r.a.createElement("button",{key:a,onClick:function(){e.goToHistoryState(a)}},"Go to State",a):r.a.createElement("button",{key:a,onClick:function(){e.goToHistoryState(a)}},"Restart")})))))}}]),a}(r.a.Component);s.a.render(r.a.createElement(d,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.18ad7bfb.chunk.js.map