/* Floatbox 5.2.1 */
(function(u,k,s,bl){var S='mouseover',T='mouseout',U='touchstart',V='center',W='clearInterval',X='nodeContains',Y='fadeDuration',L='disableScroll',M='moveWithMouse',N='shadowType',O='placement',C='sampleCallback',D='startingScroll',E='attachToHost',F='shadowSize',y='touches',z='fbBox',v='mousemove',n='left',l='top',j=fb.data.D,f=j&&j.fb.data;if(!(f&&f.Y))return;var t=f.Y4,Z=f.N.core.VV,ba={},G=fb.extend,w=fb.addEvent,x=fb.removeEvent,H=j.document,I=j.clearTimeout,J=f.ZH('Y5'),c;function bg(e){if(!e&&e.length)return;var g={placement:'bottom',attachToHost:k,moveWithMouse:k,timeout:0,delay:80,mouseSpeed:120,fadeDuration:3,defaultCursor:k,XC:u},i={centerOnResize:k,colorTheme:'white',cornerRadius:4,doAnimations:k,enableDragMove:k,enableDragResize:k,enableKeyboardNav:k,innerBorder:0,outerBorder:1,padding:0,roundCorners:'all',scrolling:'no',shadowSize:4,shadowType:'drop',showClose:k,showOuterClose:k,titleAsCaption:k},a;G(g,f.X.ZG,i,f.X.XQ.tooltip);while((a=e.pop())){var o=a.ownerDocument,A=a.J||j,m=(A.fbContent?A:A.fb.data).Y5,h=G({},g),p={X:h,E:a};a.J=s;G(h,f.ZQ(a.getAttribute('data-fb-tooltip')));if(!m||!h.source||P(a))continue;m.U.push(p);J.push(p);h.resizeDuration=0;h.modal=h.sameBox=k;if(h.placeAbove)h[O]=l;if(h[N]=='none')h[F]=0;if(h[F]>16)h[F]=16;if(t.mobile)h[E]=u;if(h[E]||h[O]==V)h[M]=k;h[L]=h[M]&&!t.M;h.afterItemStart=function(){var b=f.R&&f.R[z];if(b){if(!t.mobile){b.onmouseover=Q;b.onmouseout=bb}Z(b,1,ba,t.H?0:h[Y])}};if(h.defaultCursor)a.style.cursor='default';a.removeAttribute('title');p.YU=o.YU||(o.YU=new bh);p.YI=o;a.XZ=K;w(a,S,K,m.W);w(a,v,R,m.W);w(a,T,bc,m.W);w(a,U,function(b){var d=this;if(!d.YB){x(d,S,K);x(d,v,R);x(d,T,bc);d.YB=u}return K(b,d)},m.W)}if(!(t.ie||f.TQ)){w(j.document,U,function(b){b=b[y]&&b[y][0]||b;if(f.R&&f.R[z]&&!(b[y]&&b[y].length>1)&&!fb[X](f.R[z],b.target)&&!P(b.target,u)){B()}},f.ZZ);f.TQ=u}}function bd(){if(!c)return;var d=c.X,e=c.YU,g=c.UY=fb.getLayout(c.E),i=c[D];Q();c.VS=e.ZY;c.VR=e.ZX;e.VP();if(d[E])e.VQ();if(d[M]){c.WF=g[n]-i[n];c.WD=g[l]-i[l];c.UX=c.WF+g.width;c.UZ=c.WD+g.height;e.W9=function(){if(c){var b;if(e.ZY<c.WF||e.ZY>c.UX||e.ZX<c.WD||e.ZX>c.UZ){B()}else if((b=f.R&&f.R[z]&&f.R[z].style)&&f.XD(f.R.WR)){b[n]=(f.R.WR+e.ZY-c.VS-(d[L]?i[n]:0))+'px';b[l]=(f.R.VJ+e.ZX-c.VR-(d[L]?i[l]:0))+'px'}}}}fb.start(s,d);if(d.timeout){if(c.XR)I(c.XR);c.XR=j.setTimeout(function(){c.XR=s;B()},d.timeout*1000)}}function B(b){if(c){c.YU.VP();c.YU.VQ();I(c.XR);var d=f.R;if(d){d.ZJ.Q=u;if(b||t.H){d.end()}else{Z(d[z],0,ba,c.X[Y],function(){if(d&&d.Y)d.end()})}}c=c.E.XZ=s}}function bb(){if(c){I(c.WN);c.WN=j.setTimeout(function(){B()},50)}}function Q(){I(c&&c.WN)}function P(b,d){var e=J.length,g;while(e--){g=J[e];if(b==g.E||d&&fb[X](g.E,b))return g}return s}function K(b,d){this.XZ=s;var e=P(d||this);if(e){Q();var g=e.YU,i=e.X,a=e[D]=fb.getScroll(j),o;if(!(c&&c.E==(d||this))){if(f.R)B(true);c=e;j[W](g.ZD);g.TV(c.YI);g.YV(b);if(d){o=b[y]&&b[y][0]||b;g.ZY=o.clientX-a[n];g.ZX=o.clientY-a[l];bd();return fb.stopEvent(b)}else{g[C]=function(){if(!f.R&&(!i.delay||g.speed<i.mouseSpeed&&g.XU>i.delay)){bd()}};g.TU()}}}}function R(b){if(this.XZ)this.XZ(b);x(this,v,R)}function bc(b){if(c)bb()}function bh(){var a=this;a.XV=50;a.T3=a.XV*0.001;a.XU=0;a.ZY=a.ZX=a.YK=a.YJ=a.speed=-1;a.YV=function(b,d){var e=this==H;a.ZY=b.clientX+(e?0:a.dx);a.ZX=b.clientY+(e?0:a.dy);if(a.YK==-1)a.YK=a.ZY;if(a.YJ==-1)a.YJ=a.ZX;if(f.X2(a.W9))a.W9()};if(t.H)a.X0=f.T2(a.YV);a.sample=function(){var b=a.ZY-a.YK,d=a.ZX-a.YJ;a.speed=Math.sqrt(b*b+d*d)/a.T3;a.YK=a.ZY;a.YJ=a.ZX;a.XU+=a.XV;if(a.XU&&f.X2(a[C]))a[C]()};a.TV=function(b){a.YI=b;var d=b.defaultView||b.parentWindow,e=d!=j&&f.U4(d);if(e){var g=fb.getLayout(e),i=fb.getScroll(j);a.dx=g[n]-i[n];a.dy=g[l]-i[l]}else{a.dx=a.dy=0}if(!t.mobile){w(b,v,a.YV,a.X0);if(e)w(H,v,a.YV,a.X0)}};a.VQ=function(){x(a.YI,v,a.YV,a.X0);x(H,v,a.YV,a.X0);a.W9=s};a.TU=function(){a.XU=-a.XV;a.YK=a.YJ=a.speed=-1;a.ZD=j.setInterval(a.sample,a.XV);a.sample()};a.VP=function(){j[W](a.ZD);a[C]=s}}function bi(b,d,e){var g=c.VS,i=c.VR,a=c.UY,o=a[n]-c[D][n],A=a[l]-c[D][l],m=c.X,h=m[E],p=m[F],bj=m[N]=='halo'?p:m[N]=='hybrid'?p/2:0,be=f.W7(p,f.X1(p/2,4)),bf=f.W7(p,f.X1(bj/2,2)),q,r;e=e||m[O];if(e==V){if(h){q=o+(a.width-b)/2;r=A+(a.height-d)/2}else{q=g-b/2;r=i-d/2}}else if(/top|bottom/.test(e)){q=g-b/4;if(h){r=A;if(e==l){r-=d+be}else{r+=a.height+bf}}else{r=i;if(e==l){r-=d+12}else{r+=t.ZE?19:21}}}else{r=i-d/2;if(h){q=o;if(e==n){q-=b+be}else{q+=a.width+bf}}else{q=g;if(e==n){q-=b+12}else{q+=16}}}return f.VT(q,r)}function bk(b){if(b=='*'){j=f=H=c=J=s}else{var d=b.Y5,e;if(d){while(e=d.W.pop())x(e);f.YT(d.U)}}}G(f.N.tooltip,{Y:u,Z4:bg,ZV:bk,WM:B,VH:bi})})(!0,!1,null);