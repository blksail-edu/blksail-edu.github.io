"use strict";(self.webpackChunkblksail_edu_github_io=self.webpackChunkblksail_edu_github_io||[]).push([[4765],{1796:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var o=t(4848),i=t(8453);const s={sidebar_position:1},r="Connecting to the backseat computer",c={id:"z-troubleshooting/connect-to-rpi",title:"Connecting to the backseat computer",description:"Ping the RPi",source:"@site/docs/z-troubleshooting/connect-to-rpi.mdx",sourceDirName:"z-troubleshooting",slug:"/z-troubleshooting/connect-to-rpi",permalink:"/docs/z-troubleshooting/connect-to-rpi",draft:!1,unlisted:!1,editUrl:"https://github.com/blksail-edu/blksail-edu.github.io/tree/main/docs/z-troubleshooting/connect-to-rpi.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Troubleshooting",permalink:"/docs/category/troubleshooting"},next:{title:"Connecting RPi to Wifi",permalink:"/docs/z-troubleshooting/rpi-wifi"}},a={},l=[{value:"Ping the RPi",id:"ping-the-rpi",level:2},{value:"SSH into the RPi",id:"ssh-into-the-rpi",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"connecting-to-the-backseat-computer",children:"Connecting to the backseat computer"}),"\n",(0,o.jsx)(n.mermaid,{value:"graph LR\n    A[Computer] ---|USB-C OTG| B[Backseat Computer]\n    B ---|Ethernet| C[onboard computer]\n    C ---|Serial| D[Flight Computer]"}),"\n",(0,o.jsx)(n.h2,{id:"ping-the-rpi",children:"Ping the RPi"}),"\n",(0,o.jsx)(n.p,{children:"To check if the RPi is connected to the network, you can ping it.\nTo do so, open a terminal and type:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"ping backseat.local\n"})}),"\n",(0,o.jsx)(n.p,{children:"If you get a response, you are on the same network as the RPi and it is powered on."}),"\n",(0,o.jsx)(n.p,{children:"If you don't get a response, check the following:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Is the RPi powered on? The red LED should be on.\nThe red LED is the power LED. If it is not on, the RPi is not powered on."}),"\n",(0,o.jsxs)(n.li,{children:["Does your computer show a network interface ",(0,o.jsx)(n.code,{children:"RNDIS/Ethernet Gadget"}),"?\nIf not, you need to install the driver for the RPi USB OTG."]}),"\n",(0,o.jsxs)(n.li,{children:["Does your operating system support ",(0,o.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Multicast_DNS",children:"mDNS"}),"?\nIf not, you need to use the IP address of the RPi instead of ",(0,o.jsx)(n.code,{children:"backseat.local"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"ssh-into-the-rpi",children:"SSH into the RPi"}),"\n",(0,o.jsx)(n.p,{children:"To connect to the RPi, you can use SSH.\nTo do so, open a terminal and type:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"ssh blue@backseat.local\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The default password is ",(0,o.jsx)(n.code,{children:"iamblue"}),"."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"If you are using Windows, you need to install an SSH client."})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"You can also connect with the username you created during the setup."})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var o=t(6540);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);