"use strict";(self.webpackChunkblksail_edu_github_io=self.webpackChunkblksail_edu_github_io||[]).push([[4708],{114:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var s=t(4848),a=t(8453),r=t(9489),l=t(7227);t(3012);const o={sidebar_position:1},i="Gazebo",u={id:"module/gazebo_simulation",title:"Gazebo",description:"Gazebo is a set of open source tools for simulating robots in an environment.",source:"@site/versioned_docs/version-2023/3-module/gazebo_simulation.mdx",sourceDirName:"3-module",slug:"/module/gazebo_simulation",permalink:"/docs/2023/module/gazebo_simulation",draft:!1,unlisted:!1,editUrl:"https://github.com/blksail-edu/blksail-edu.github.io/tree/main/versioned_docs/version-2023/3-module/gazebo_simulation.mdx",tags:[],version:"2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Module 3 - Putting it all together",permalink:"/docs/2023/category/module-3---putting-it-all-together"},next:{title:"Troubleshooting",permalink:"/docs/2023/category/troubleshooting"}},c={},d=[{value:"Installation",id:"installation",level:2},{value:"Test the installation",id:"test-the-installation",level:3},{value:"Our custom simulation",id:"our-custom-simulation",level:2},{value:"Controlling the robot",id:"controlling-the-robot",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"gazebo",children:"Gazebo"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://gazebosim.org/",children:"Gazebo"})," is a set of open source tools for simulating robots in an environment.\nIt is commonly used in robotics research and education."]}),"\n",(0,s.jsx)(n.p,{children:"We will be using Gazebo to simulate the robot (BlueROV2) in a virtual (pool) environment."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"We will be using Gazebo Garden, the latest version of Gazebo."})}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(n.p,{children:["The documentation for installing Gazebo can be found ",(0,s.jsx)(n.a,{href:"https://gazebosim.org/docs/garden/install",children:"here"}),'.\nSee "',(0,s.jsx)(n.strong,{children:"Binary Installation"}),'" for instructions on installing Gazebo on your operating system.\nBelow is a summary of the steps.']}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Only Ubuntu is fully supported by Gazebo.\nmacOS is partially supported.\nIn Windows, the simulation will run, but the GUI will not work."})}),"\n",(0,s.jsxs)(r.A,{groupId:"operating-systems",children:[(0,s.jsxs)(l.A,{value:"macos",label:"macOS",children:[(0,s.jsx)(n.p,{children:"First we need to install ruby from Homebrew:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"brew install ruby\n"})}),(0,s.jsx)(n.p,{children:"Then we have to add the Homebrew Ruby to our path:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"echo 'export PATH=\"$(brew --prefix)/opt/ruby/bin:$PATH\"' >> ~/.zshrc\n"})}),(0,s.jsxs)(n.p,{children:["Now, we add the ",(0,s.jsx)(n.code,{children:"osrf/simulation"})," tap:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"brew tap osrf/simulation\n"})}),(0,s.jsxs)(n.admonition,{title:"Apple Silicon-based Macs",type:"tip",children:[(0,s.jsx)(n.p,{children:"For Apple Silicon-based Macs, we need to modify the Formulae before installing Gazebo."}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd /opt/homebrew/Library/Taps/osrf/homebrew-simulation/Formula\nsed -i '' 's|cmake_args << \"-DCMAKE_INSTALL_RPATH=#{rpath}\"|cmake_args << \"-DCMAKE_INSTALL_RPATH=#{rpath};/opt/homebrew/lib\"|' *.rb\n"})})]}),(0,s.jsx)(n.p,{children:"Next we install Gazebo:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"brew install gz-garden\n"})})]}),(0,s.jsxs)(l.A,{value:"ubuntu",label:"Ubuntu",children:[(0,s.jsx)(n.p,{children:"First let's update and install some dependencies:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo apt-get update\nsudo apt-get install lsb-release wget gnupg\n"})}),(0,s.jsx)(n.p,{children:"Next we install the Gazebo package repository:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'sudo wget https://packages.osrfoundation.org/gazebo.gpg -O /usr/share/keyrings/pkgs-osrf-archive-keyring.gpg\necho "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/pkgs-osrf-archive-keyring.gpg] http://packages.osrfoundation.org/gazebo/ubuntu-stable $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/gazebo-stable.list > /dev/null\n'})}),(0,s.jsx)(n.p,{children:"Finally, we install Gazebo:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo apt-get update\nsudo apt-get install gz-garden\n"})})]})]}),"\n",(0,s.jsx)(n.h3,{id:"test-the-installation",children:"Test the installation"}),"\n",(0,s.jsx)(n.p,{children:"To test your installation, run the following command:"}),"\n",(0,s.jsxs)(r.A,{groupId:"operating-systems",children:[(0,s.jsxs)(l.A,{value:"macos",label:"macOS",children:[(0,s.jsx)(n.p,{children:"In one terminal, run:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"gz sim -v4 -s shapes.sdf\n"})}),(0,s.jsx)(n.p,{children:"In another terminal, run:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"gz sim -v4 -g\n"})})]}),(0,s.jsxs)(l.A,{value:"ubuntu",label:"Ubuntu",children:[(0,s.jsx)(n.p,{children:"In one terminal, run:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"gz sim -v4 shapes.sdf\n"})})]})]}),"\n",(0,s.jsx)(n.p,{children:"You should see a window pop up with some 3D objects in it."}),"\n",(0,s.jsx)(n.h2,{id:"our-custom-simulation",children:"Our custom simulation"}),"\n",(0,s.jsxs)(n.p,{children:["We built a custom simulation for the BlueROV2.\nIt lives in this repository: ",(0,s.jsx)(n.a,{href:"https://github.com/blksail-edu/gazebo_bluerov2",children:"gazebo_bluerov2"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Clone the repository into your workspace:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/blksail-edu/gazebo_bluerov2\n"})}),"\n",(0,s.jsx)(n.p,{children:"Build the simulation:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd gazebo_bluerov2\n./build.sh\n"})}),"\n",(0,s.jsx)(n.p,{children:"Start the example simulation:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"./launch.sh\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"warning",children:[(0,s.jsx)(n.p,{children:"Sometimes, the simulation will not quit properly.\nIf this happens, you will need to kill the process manually."}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pkill -9 gz\n"})})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Gazebo BlueROV2",src:t(951).A+"",width:"5120",height:"2880"})}),"\n",(0,s.jsx)(n.h2,{id:"controlling-the-robot",children:"Controlling the robot"}),"\n",(0,s.jsxs)(n.p,{children:["Try controlling the depth of robot now with ",(0,s.jsx)(n.code,{children:"depth_control.py"})," you previously wrote."]}),"\n",(0,s.jsxs)(n.p,{children:["First, in the ",(0,s.jsx)(n.code,{children:"backseat"}),", start the ",(0,s.jsx)(n.code,{children:"SITL"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd PATH_TO_ARDUSUB\nTools/autotest/sim_vehicle.py -L RATBeach -v ArduSub -f vectored --model=JSON --out=udp:SIMULATION_COMPUTER_IP:14550 --console\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Run your ",(0,s.jsx)(n.code,{children:"depth_control.py"})," script in another terminal:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"python3 depth_control.py\n"})}),"\n",(0,s.jsx)(n.p,{children:"You should see the robot dive to the desired depth."})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},7227:(e,n,t)=>{t.d(n,{A:()=>l});t(6540);var s=t(4164);const a={tabItem:"tabItem_Ymn6"};var r=t(4848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(a.tabItem,l),hidden:t,children:n})}},9489:(e,n,t)=>{t.d(n,{A:()=>w});var s=t(6540),a=t(4164),r=t(4245),l=t(6347),o=t(6494),i=t(2814),u=t(5167),c=t(9900);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:a}}=e;return{value:n,label:t,attributes:s,default:a}}))}(t);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const a=(0,l.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(r),(0,s.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,r=h(e),[l,i]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:r}))),[u,d]=b({queryString:t,groupId:a}),[m,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,r]=(0,c.Dv)(t);return[a,(0,s.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:a}),x=(()=>{const e=u??m;return p({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{x&&i(x)}),[x]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),g(e)}),[d,g,r]),tabValues:r}}var g=t(1062);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(4848);function j(e){let{className:n,block:t,selectedValue:s,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.a_)(),c=e=>{const n=e.currentTarget,t=i.indexOf(n),a=o[t].value;a!==s&&(u(n),l(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>i.push(e),onKeyDown:d,onClick:c,...r,className:(0,a.A)("tabs__item",x.tabItem,r?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:a}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=m(e);return(0,f.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,f.jsx)(j,{...n,...e}),(0,f.jsx)(v,{...n,...e})]})}function w(e){const n=(0,g.A)();return(0,f.jsx)(y,{...e,children:d(e.children)},String(n))}},951:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/gz-sim-9bbbd5471ea53b0e7a19e0d313eaf0bc.png"},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var s=t(6540);const a={},r=s.createContext(a);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);