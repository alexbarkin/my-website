(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{228:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n);a(157);var s=40,r=20,c="Welcome to the site!",i=[],l=[],h=[],v=[],f=[],u=[],d=[],x=[],m=function(t){var e,a;function n(e){var a;return(a=t.call(this,e)||this).state={x:v,y:f,is_up:d,is_left:u,ctx:null,hover:!1},a.moveObjects=function(){a.state.ctx.clearRect(0,0,a.state.ctx.canvas.width,a.state.ctx.canvas.height);var t=a.state.is_up,e=a.state.is_left,n=a.state.y,o=a.state.x;if(!1===a.state.hover){for(var v=0;v<r;v++){n[v]+s>a.state.ctx.canvas.height&&(t[v]=!0),n[v]<0&&(t[v]=!1),o[v]+s>a.state.ctx.canvas.width&&(e[v]=!0),o[v]<0&&(e[v]=!1),n[v]=n[v]+(t[v]?-h[v]:h[v]),o[v]=o[v]+(e[v]?-h[v]:h[v]);var f=a.state.ctx;f.fillStyle=a.colour[v],a.setState({ctx:f}),a.state.ctx.fillRect(o[v],n[v],s,s),(f=a.state.ctx).fillStyle="#212424",f.font="20px Roboto Mono monospace",f.textAlign="center",f.textBaseline="middle",a.setState({ctx:f}),a.state.ctx.fillText(c[v],o[v]+s/2,n[v]+s/2),a.setState({y:n,x:o})}a.setState({is_left:e,is_up:t})}else for(var u=0;u<r;u++){var d=a.state.ctx;d.fillStyle=a.colour[u],a.setState({ctx:d}),a.state.ctx.fillRect(i[u],l[u],s,s),d.fillStyle="#212424",d.font="20px Roboto Mono monospace",d.textAlign="center",d.textBaseline="middle",a.setState({ctx:d}),a.state.ctx.fillText(c[u],i[u]+s/2,l[u]+s/2)}},a.getRandomColor=function(){for(var t="#",e=0;e<6;e++)t+="0123456789ABCDEF"[Math.floor(16*Math.random())];return t},a.canvasRef=o.a.createRef(),a}a=t,(e=n).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a;var m=n.prototype;return m.componentDidMount=function(){var t=this,e=this.canvasRef.current.getContext("2d");this.setState({ctx:e}),e.canvas.width=.8*window.innerWidth,e.canvas.height=.8*window.innerHeight;for(var a=0;a<r;a++)i[a]=e.canvas.width/2-5*(s+10)+a%(r/2)*(s+10),l[a]=e.canvas.height/2-20+(a<r/2?-2*s:2*s);for(var n=0;n<r;n++)h[n]=4*Math.random(),v[n]=Math.random()*e.canvas.width,f[n]=Math.random()*e.canvas.height,u[n]=Boolean(Math.random()>.5),d[n]=Boolean(Math.random()>.5),x[n]=this.getRandomColor();this.colour=x,setInterval((function(){t.moveObjects()}),10)},m.handleHover=function(){!1===this.state.hover&&this.setState({hover:!0})},m.handleleaveHover=function(){!0===this.state.hover&&this.setState({hover:!1})},m.render=function(){return o.a.createElement("figure",{className:"container--graphics"},o.a.createElement("canvas",{className:"canvas",ref:this.canvasRef}),o.a.createElement("div",{className:"verticalContainer"},o.a.createElement("a",{className:"launch",href:"/About",onMouseEnter:this.handleHover.bind(this),onMouseLeave:this.handleleaveHover.bind(this)},"Launch")))},n}(o.a.Component);a(231);a.d(e,"query",(function(){return p}));e.default=function(t){return o.a.createElement("div",null,o.a.createElement("h1",{className:"index--title"},"Alex's Website"),o.a.createElement(m,null))};var p="726786251"}}]);
//# sourceMappingURL=component---src-pages-index-jsx-dceca35b4a651c71c210.js.map