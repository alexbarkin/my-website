(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{IWg5:function(e,o,t){e.exports=t.p+"static/WAVE_logo-a10ecbad282bdff1c535307a5223bb30.png"},KWJC:function(e,o,t){"use strict";t.r(o);var a=t("q1tI"),n=t.n(a),s=t("Wbzz"),r=t("nsn4"),c=t("wx14"),l=t("zLVn"),i=t("17x9"),p=t.n(i),h=t("TSYQ"),m=t.n(h),u=t("33Jr"),d={tag:u.p,inverse:p.a.bool,color:p.a.string,body:p.a.bool,outline:p.a.bool,className:p.a.string,cssModule:p.a.object,innerRef:p.a.oneOfType([p.a.object,p.a.string,p.a.func])},g=function(e){var o=e.className,t=e.cssModule,a=e.color,s=e.body,r=e.inverse,i=e.outline,p=e.tag,h=e.innerRef,d=Object(l.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),g=Object(u.l)(m()(o,"card",!!r&&"text-white",!!s&&"card-body",!!a&&(i?"border":"bg")+"-"+a),t);return n.a.createElement(p,Object(c.a)({},d,{className:g,ref:h}))};g.propTypes=d,g.defaultProps={tag:"div"};var v=g,f={tag:u.p,className:p.a.string,cssModule:p.a.object,innerRef:p.a.oneOfType([p.a.object,p.a.string,p.a.func])},O=function(e){var o=e.className,t=e.cssModule,a=e.innerRef,s=e.tag,r=Object(l.a)(e,["className","cssModule","innerRef","tag"]),i=Object(u.l)(m()(o,"card-body"),t);return n.a.createElement(s,Object(c.a)({},r,{className:i,ref:a}))};O.propTypes=f,O.defaultProps={tag:"div"};var b=O,y=(t("2Spj"),t("vpQ4")),w=t("JX7q"),T=t("dI71"),C=t("OFIx"),E=function(e){var o=m()("popover","show"),t=m()("popover-inner",e.innerClassName);return n.a.createElement(C.a,Object(c.a)({},e,{popperClassName:o,innerClassName:t}))};E.propTypes=C.b,E.defaultProps={placement:"right",placementPrefix:"bs-popover",trigger:"click"};var I=E,M=["defaultOpen"],N=function(e){function o(o){var t;return(t=e.call(this,o)||this).state={isOpen:o.defaultOpen||!1},t.toggle=t.toggle.bind(Object(w.a)(t)),t}Object(T.a)(o,e);var t=o.prototype;return t.toggle=function(){this.setState({isOpen:!this.state.isOpen})},t.render=function(){return n.a.createElement(I,Object(c.a)({isOpen:this.state.isOpen,toggle:this.toggle},Object(u.m)(this.props,M)))},o}(a.Component);N.propTypes=Object(y.a)({defaultOpen:p.a.bool},I.propTypes);var k={tag:u.p,className:p.a.string,cssModule:p.a.object},j=function(e){var o=e.className,t=e.cssModule,a=e.tag,s=Object(l.a)(e,["className","cssModule","tag"]),r=Object(u.l)(m()(o,"popover-header"),t);return n.a.createElement(a,Object(c.a)({},s,{className:r}))};j.propTypes=k,j.defaultProps={tag:"h3"};var L=j,H={tag:u.p,className:p.a.string,cssModule:p.a.object},W=function(e){var o=e.className,t=e.cssModule,a=e.tag,s=Object(l.a)(e,["className","cssModule","tag"]),r=Object(u.l)(m()(o,"popover-body"),t);return n.a.createElement(a,Object(c.a)({},s,{className:r}))};W.propTypes=H,W.defaultProps={tag:"div"};var P=W,R=t("L6Je"),S=t("IWg5"),x=t.n(S),D=t("kLGZ"),J=t.n(D);t("Vl0y");var A=function(e){var o,t;function a(){for(var o,t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];return(o=e.call.apply(e,[this].concat(a))||this).state={coopOneIsOpen:!1,coopTwoIsOpen:!1,coopThreeIsOpen:!1,hoverCoopOne:!1,hoverCoopTwo:!1,hoverCoopThree:!1},o.toggleCoopOne=function(){return o.setState({coopOneIsOpen:!o.state.coopOneIsOpen,coopTwoIsOpen:!1,coopThreeIsOpen:!1,hoverCoopOne:!1})},o.toggleCoopTwo=function(){return o.setState({coopTwoIsOpen:!o.state.coopTwoIsOpen,coopOneIsOpen:!1,coopThreeIsOpen:!1,hoverCoopTwo:!1})},o.toggleCoopThree=function(){return o.setState({coopThreeIsOpen:!o.state.coopThreeIsOpen,coopTwoIsOpen:!1,coopOneIsOpen:!1,hoverCoopThree:!1})},o}t=e,(o=a).prototype=Object.create(t.prototype),o.prototype.constructor=o,o.__proto__=t;var c=a.prototype;return c.handleCoopOneHover=function(){!1===this.state.hoverCoopOne&&this.setState({hoverCoopOne:!0})},c.handleLeaveCoopOneHover=function(){!0===this.state.hoverCoopOne&&this.setState({hoverCoopOne:!1})},c.handleCoopTwoHover=function(){!1===this.state.hoverCoopTwo&&this.setState({hoverCoopTwo:!0})},c.handleLeaveCoopTwoHover=function(){!0===this.state.hoverCoopTwo&&this.setState({hoverCoopTwo:!1})},c.handleCoopThreeHover=function(){!1===this.state.hoverCoopThree&&this.setState({hoverCoopThree:!0})},c.handleLeaveCoopThreeHover=function(){!0===this.state.hoverCoopThree&&this.setState({hoverCoopThree:!1})},c.render=function(){return n.a.createElement(R.a,null,n.a.createElement("h1",null,"Welcome to my homepage!"),n.a.createElement("article",{className:"blog-post-content"},n.a.createElement("p",null,"Hi!"),n.a.createElement("p",null,"My name is Alex Barkin, and im very glad you found my website!"),n.a.createElement("p",null,"I'm currently a member of the Mechatronics class of 2022 at the University of Waterloo. I am going into my third year of studies and have had 3 co-ops ranging from mechanical design to software design."),n.a.createElement("figure",{className:"coop-icons"},n.a.createElement("input",{type:"image",src:J.a,alt:"DPI Logo",className:"coop-icon",id:"coop-1",onClick:this.toggleCoopOne,onMouseEnter:this.handleCoopOneHover.bind(this),onMouseLeave:this.handleLeaveCoopOneHover.bind(this)}),n.a.createElement("input",{type:"image",src:x.a,alt:"Wave Logo",className:"coop-icon",id:"coop-2",onClick:this.toggleCoopTwo,onMouseEnter:this.handleCoopTwoHover.bind(this),onMouseLeave:this.handleLeaveCoopTwoHover.bind(this)}),n.a.createElement("input",{type:"image",src:x.a,alt:"Wave Logo",className:"coop-icon",id:"coop-3",onClick:this.toggleCoopThree,onMouseEnter:this.handleCoopThreeHover.bind(this),onMouseLeave:this.handleLeaveCoopThreeHover.bind(this)})),n.a.createElement(r.a,{isOpen:this.state.coopOneIsOpen},n.a.createElement(v,{className:"coop--card"},n.a.createElement(b,{className:"coop--card-body"},"My first coop placement was at Design Plastics International (DPI) from May-Aug of 2018. DPI is a small company which designs, prototypes, and builds displays for stores and tradeshows. Here I got to get hands on experiences with manufacturing techniques, the design process, and working with clients to make sure the end product is just right! Be sure to check out more details on my ",n.a.createElement(s.Link,{to:"/Resume"},"Resume.")))),n.a.createElement(r.a,{isOpen:this.state.coopTwoIsOpen},n.a.createElement(v,{className:"coop--card"},n.a.createElement(b,{className:"coop--card-body"},"My second coop placement was at Wave HQ from Jan-Apr of 2019. Wave is a start up in Leslieville, Toronto that provides financial solutions for small businesses. This coop, I was on the Machine Learning Team, and Learned a lot about working with Machine Learning models, and how to leverage them in data analysis. Be sure to check out more details on my ",n.a.createElement(s.Link,{to:"/Resume"},"Resume.")))),n.a.createElement(r.a,{isOpen:this.state.coopThreeIsOpen},n.a.createElement(v,{className:"coop--card"},n.a.createElement(b,{className:"coop--card-body"},"My third coop placement was also at Wave HQ, but, from Sept-Dec of 2019. Wave is a start up in Leslieville, Toronto that provides financial solutions for small businesses. This coop, I was on the accounting platform Team, and focused on well designed, maintanable, and reusable code. Be sure to check out more details on my ",n.a.createElement(s.Link,{to:"/Resume"},"Resume.")))),n.a.createElement(N,{isOpen:this.state.hoverCoopOne,placement:"bottom",target:"coop-1"},n.a.createElement(L,null,"Design Plastics International"),n.a.createElement(P,null,"My first coop was at Design Plastics Internation from May-Aug of 2018. Click the logo to learn more.")),n.a.createElement(N,{isOpen:this.state.hoverCoopTwo,placement:"bottom",target:"coop-2"},n.a.createElement(L,null,"Wave HQ - Machine Learning"),n.a.createElement(P,null,"My second coop was at Wave HQ from Jan-Apr of 2019. Click the logo to learn more.")),n.a.createElement(N,{isOpen:this.state.hoverCoopThree,placement:"bottom",target:"coop-3"},n.a.createElement(L,null,"Wave HQ - Accounting Platform"),n.a.createElement(P,null,"My third coop was at Wave HQ from Sept-Dec of 2019. Click the logo to learn more.")),n.a.createElement("p",null," I enjoy travelling the world with my friends & family and discovering new adventures along the way. I also have a passion for Jeeps, especially Wranglers! I am always looking for new opportunities to learn and grow my skills as a young engineer. "),n.a.createElement("p",null,"Now that you're here, take a look around!"),n.a.createElement("p",null,"If you see something you like (or something you don't!), lets grab a coffee and ",n.a.createElement(s.Link,{to:"/Contact"},"chat!")),n.a.createElement("br",null),"Like what you see? Check out my ",n.a.createElement(s.Link,{to:"/Resume"},"Resume.")))},a}(n.a.Component);o.default=A},kLGZ:function(e,o,t){e.exports=t.p+"static/DPI_logo-6a2ae59cc2047963acee14c598987095.png"}}]);
//# sourceMappingURL=component---src-pages-home-jsx-7b36e02244a56a0e4682.js.map