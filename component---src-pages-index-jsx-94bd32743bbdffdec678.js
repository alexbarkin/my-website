(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Dtc0:function(t,e,a){"use strict";a.r(e);var n=a("q1tI"),s=a.n(n);a("Wbzz"),a("Vl0y");var o=40,c=20,r="Welcome to the site!",i=[],l=[],h=[],v=[],f=[],u=[],d=[],x=[],m=function(t){var e,a;function n(e){var a;return(a=t.call(this,e)||this).state={x:v,y:f,is_up:d,is_left:u,ctx:null,hover:!1},a.moveObjects=function(){a.state.ctx.clearRect(0,0,a.state.ctx.canvas.width,a.state.ctx.canvas.height);var t=a.state.is_up,e=a.state.is_left,n=a.state.y,s=a.state.x;if(!1===a.state.hover){for(var v=0;v<c;v++){n[v]+o>a.state.ctx.canvas.height&&(t[v]=!0),n[v]<0&&(t[v]=!1),s[v]+o>a.state.ctx.canvas.width&&(e[v]=!0),s[v]<0&&(e[v]=!1),n[v]=n[v]+(t[v]?-h[v]:h[v]),s[v]=s[v]+(e[v]?-h[v]:h[v]);var f=a.state.ctx;f.fillStyle=a.colour[v],a.setState({ctx:f}),a.state.ctx.fillRect(s[v],n[v],o,o),(f=a.state.ctx).fillStyle="#212424",f.font="20px Roboto Mono monospace",f.textAlign="center",f.textBaseline="middle",a.setState({ctx:f}),a.state.ctx.fillText(r[v],s[v]+o/2,n[v]+o/2),a.setState({y:n,x:s})}a.setState({is_left:e,is_up:t})}else{for(var u=0;u<c;u++){n[u]>l[u]&&(t[u]=!0),n[u]<l[u]&&(t[u]=!1),s[u]>i[u]&&(e[u]=!0),s[u]<i[u]&&(e[u]=!1),Math.abs(n[u]-l[u])>5*h[u]?n[u]=n[u]+(t[u]?-5*h[u]:5*h[u]):n[u]=l[u],Math.abs(s[u]-i[u])>5*h[u]?s[u]=s[u]+(e[u]?-5*h[u]:5*h[u]):s[u]=i[u];var d=a.state.ctx;d.fillStyle=a.colour[u],a.setState({ctx:d}),a.state.ctx.fillRect(s[u],n[u],o,o),(d=a.state.ctx).fillStyle="#212424",d.font="20px Roboto Mono monospace",d.textAlign="center",d.textBaseline="middle",a.setState({ctx:d}),a.state.ctx.fillText(r[u],s[u]+o/2,n[u]+o/2),a.setState({y:n,x:s})}a.setState({is_left:e,is_up:t})}},a.getRandomColor=function(){for(var t="#",e=0;e<6;e++)t+="0123456789ABCDEF"[Math.floor(16*Math.random())];return t},a.canvasRef=s.a.createRef(),a}a=t,(e=n).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a;var m=n.prototype;return m.componentDidMount=function(){var t=this,e=this.canvasRef.current.getContext("2d");this.setState({ctx:e}),e.canvas.width=.8*window.innerWidth,e.canvas.height=.8*window.innerHeight;for(var a=0;a<c;a++)i[a]=e.canvas.width/2-5*(o+10)+a%(c/2)*(o+10),l[a]=e.canvas.height/2-20+(a<c/2?-2*o:2*o);for(var n=0;n<c;n++)h[n]=3*Math.random()+1,v[n]=Math.random()*e.canvas.width,f[n]=Math.random()*e.canvas.height,u[n]=Boolean(Math.random()>.5),d[n]=Boolean(Math.random()>.5),x[n]=this.getRandomColor();this.colour=x,setInterval((function(){t.moveObjects()}),10)},m.handleHover=function(){!1===this.state.hover&&this.setState({hover:!0})},m.handleleaveHover=function(){!0===this.state.hover&&this.setState({hover:!1})},m.render=function(){return s.a.createElement("figure",{className:"container--graphics"},s.a.createElement("canvas",{className:"canvas",ref:this.canvasRef}),s.a.createElement("div",{className:"verticalContainer"},s.a.createElement("a",{className:"launch",href:"/Launch",onMouseEnter:this.handleHover.bind(this),onMouseLeave:this.handleleaveHover.bind(this)},"Launch")))},n}(s.a.Component);a("VxdY"),e.default=function(t){return s.a.createElement("div",null,s.a.createElement("h1",{className:"index--title"},"Alex's Website"),s.a.createElement(m,null))}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-94bd32743bbdffdec678.js.map