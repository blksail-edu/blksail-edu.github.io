"use strict";(self.webpackChunkblksail_edu_github_io=self.webpackChunkblksail_edu_github_io||[]).push([[8085],{9294:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>o});var s=i(4848),c=i(8453);const t={sidebar_position:5},l="C++",d={id:"module/programming_cpp",title:"C++",description:"<iframe",source:"@site/versioned_docs/version-2023/0-module/programming_cpp.mdx",sourceDirName:"0-module",slug:"/module/programming_cpp",permalink:"/docs/2023/module/programming_cpp",draft:!1,unlisted:!1,editUrl:"https://github.com/blksail-edu/blksail-edu.github.io/tree/main/versioned_docs/version-2023/0-module/programming_cpp.mdx",tags:[],version:"2023",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Python",permalink:"/docs/2023/module/programming_python"},next:{title:"Networking",permalink:"/docs/2023/module/networking"}},r={},o=[{value:"Compiler",id:"compiler",level:2},{value:"CMake",id:"cmake",level:2},{value:"<code>cpp-intro</code> Project",id:"cpp-intro-project",level:2},{value:"<code>cpp-intro</code> Project Structure",id:"cpp-intro-project-structure",level:3},{value:"<code>CMakeLists.txt</code> File",id:"cmakeliststxt-file",level:3},{value:"<code>main.cpp</code> File",id:"maincpp-file",level:3},{value:"Functions",id:"functions",level:2},{value:"Classes",id:"classes",level:2},{value:"References",id:"references",level:2},{value:"Practice Problems",id:"practice-problems",level:2},{value:"Problem 1",id:"problem-1",level:3},{value:"Problem 2",id:"problem-2",level:3},{value:"Problem 3",id:"problem-3",level:3},{value:"Problem 4",id:"problem-4",level:3},{value:"Problem 5",id:"problem-5",level:3},{value:"Problem 6",id:"problem-6",level:3},{value:"Problem 7",id:"problem-7",level:3},{value:"Problem 8",id:"problem-8",level:3},{value:"Problem 9",id:"problem-9",level:3},{value:"Problem 10",id:"problem-10",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",input:"input",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"c",children:"C++"}),"\n",(0,s.jsx)("iframe",{src:"https://blksail-edu.github.io/slides/cpp",width:"100%",height:320,frameborder:"0",allowfullscreen:!0}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/C%2B%2B",children:"C++"})," is a general-purpose programming language created by ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/C%2B%2B",children:"Bjarne Stroustrup"}),' as an extension of the C programming language, or "C with Classes".\nThe language has expanded significantly over time, and modern C++ now has object-oriented, generic, and functional features in addition to facilities for low-level memory manipulation.\nIt is almost always implemented as a compiled language, and many vendors provide C++ compilers, including the Free Software Foundation, LLVM, Microsoft, Intel, Oracle, and IBM, so it is available on many platforms.']}),"\n",(0,s.jsx)(n.h2,{id:"compiler",children:"Compiler"}),"\n",(0,s.jsxs)(n.p,{children:["The C++ language is standardized by the ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/International_Organization_for_Standardization",children:"International Organization for Standardization (ISO)"})," and the latest standard version is ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/C%2B%2B20",children:"C++20"}),".\nThe most widely used compiler is ",(0,s.jsx)(n.a,{href:"https://gcc.gnu.org/",children:"GCC"}),", which is the default compiler on most Linux distributions.\nThe ",(0,s.jsx)(n.a,{href:"https://clang.llvm.org/",children:"Clang"})," compiler is also popular, and it is the default compiler on macOS.\nThe ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Visual_C%2B%2B",children:"MSVC"})," compiler is the default compiler on Windows, and it is also available on Linux and macOS."]}),"\n",(0,s.jsx)(n.p,{children:"In this course, we will be using Clang as the compiler.\nTo install Clang on the RPi, run the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo apt update\nsudo apt install clang\n"})}),"\n",(0,s.jsx)(n.h2,{id:"cmake",children:"CMake"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://cmake.org/",children:"CMake"})," is an open-source, cross-platform family of tools designed to build, test and package software.\nCMake is used to control the software compilation process using simple platform and compiler independent configuration files, and generate native makefiles and workspaces that can be used in the compiler environment of your choice.\nBecause CMake generates native makefiles and workspaces, you can open the project in your preferred development environment and compiler."]}),"\n",(0,s.jsx)(n.p,{children:"To install CMake on the RPi, run the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo apt update\nsudo apt install cmake\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"cpp-intro-project",children:[(0,s.jsx)(n.code,{children:"cpp-intro"})," Project"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"https://github.com/blksail-edu/cpp-intro",children:(0,s.jsx)(n.code,{children:"cpp-intro"})})," project is a simple C++ project that can be used as a template for your own projects.\nWe will be using this project to demonstrate how to use CMake to build a C++ project."]}),"\n",(0,s.jsx)(n.p,{children:"First fork the repository, and clone it in the RPi:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd ~ # go to home directory\ngit clone REPO_URL # replace REPO_URL with your forked repository URL\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You should now have a ",(0,s.jsx)(n.code,{children:"cpp-intro"})," directory in your home directory.\nLet's go into the directory and build the project:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd cpp-intro # go into the directory\nmkdir build # create a build directory\ncd build # go into the build directory\ncmake .. # generate the build files\ncmake --build . # build the project\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["A good practice is to separate the source code from the build files.\nThis way, you can easily delete the build files without affecting the source code.\nThis is why we created a ",(0,s.jsx)(n.code,{children:"build"})," directory and ran ",(0,s.jsx)(n.code,{children:"cmake .."})," inside the directory."]})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["VSCode has extensions that can help you build and debug C++ projects.\n",(0,s.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools-extension-pack",children:"C/C++ Extension Pack"})," is a good extension pack that includes the C/C++ extension and other useful extensions."]})}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.code,{children:"build"})," directory, you should see a ",(0,s.jsx)(n.code,{children:"MyExecutable"})," executable.\nYou can run the executable by running ",(0,s.jsx)(n.code,{children:"./MyExecutable"})," while in the ",(0,s.jsx)(n.code,{children:"build"})," directory."]}),"\n",(0,s.jsxs)(n.h3,{id:"cpp-intro-project-structure",children:[(0,s.jsx)(n.code,{children:"cpp-intro"})," Project Structure"]}),"\n",(0,s.jsxs)(n.p,{children:["Go ahead an open the ",(0,s.jsx)(n.code,{children:"cpp-intro"})," project in VSCode."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["In the terminal, you can run ",(0,s.jsx)(n.code,{children:"code ."})," to open the current directory in VSCode."]})}),"\n",(0,s.jsx)(n.p,{children:"You should see the following files and directories:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"build/\n.gitignore\nCMakeLists.txt\nmain.cpp\n"})}),"\n",(0,s.jsx)(n.p,{children:"Here:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"build"})," directory is where the build files are generated."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:".gitignore"})," file tells Git to ignore certain files and directories."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"CMakeLists.txt"})," file is the CMake configuration file."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"main.cpp"})," file is the source code of the project."]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"cmakeliststxt-file",children:[(0,s.jsx)(n.code,{children:"CMakeLists.txt"})," File"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"CMakeLists.txt"})," file is the CMake configuration file.\nIt tells CMake how to build the project.\nLet's take a look at the ",(0,s.jsx)(n.code,{children:"CMakeLists.txt"})," file in the ",(0,s.jsx)(n.code,{children:"cpp-intro"})," project:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cmake",children:"cmake_minimum_required(VERSION 3.15)\n\nproject(MyProject VERSION 1.0)\n\nset(CMAKE_CXX_STANDARD 17)\nset(CMAKE_CXX_STANDARD_REQUIRED True)\n\n\nadd_executable(MyExecutable main.cpp)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Here:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The first two lines tell CMake the minimum version of CMake required and the name and version of the project."}),"\n",(0,s.jsx)(n.li,{children:"The next two lines tell CMake to use C++17 and that C++17 is required."}),"\n",(0,s.jsxs)(n.li,{children:["The last line tells CMake to build an executable called ",(0,s.jsx)(n.code,{children:"MyExecutable"})," from the ",(0,s.jsx)(n.code,{children:"main.cpp"})," file."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{title:"Check-off",type:"warning",children:(0,s.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," ","Change the project name to ",(0,s.jsx)(n.code,{children:"MyFirstProject"}),"."]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," ","Change the project version to ",(0,s.jsx)(n.code,{children:"0.1"}),"."]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," ","Change the executable name to ",(0,s.jsx)(n.code,{children:"MyFirstExecutable"}),"."]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," ","Show your TA that you can build the ",(0,s.jsx)(n.code,{children:"cpp-intro"})," project."]}),"\n"]})}),"\n",(0,s.jsxs)(n.h3,{id:"maincpp-file",children:[(0,s.jsx)(n.code,{children:"main.cpp"})," File"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"main.cpp"})," file is the source code of the project.\nLet's take a look at the ",(0,s.jsx)(n.code,{children:"main.cpp"})," file in the ",(0,s.jsx)(n.code,{children:"cpp-intro"})," project:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:'#include <iostream>\n\nint main()\n{\n  std::cout << "Hello, world!" << std::endl;\n\n  int x = 5;\n  int y = 7;\n  std::cout << "The sum of " << x << " and " << y << " is " << x + y << std::endl;\n\n  return 0;\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Here:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The first line tells the compiler to include the ",(0,s.jsx)(n.code,{children:"iostream"})," header file."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"main"})," function is the entry point of the program."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"std::cout"})," object is used to print to the console."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"std::endl"})," object is used to print a new line."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{title:"Check-off",type:"warning",children:(0,s.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," ","Modify the ",(0,s.jsx)(n.code,{children:"main.cpp"})," file to print your name and classroom."]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," ","Create a new variable called ",(0,s.jsx)(n.code,{children:"z"})," and print the sum of ",(0,s.jsx)(n.code,{children:"x"}),", ",(0,s.jsx)(n.code,{children:"y"}),", and ",(0,s.jsx)(n.code,{children:"z"}),"."]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," ","Create a new variable called ",(0,s.jsx)(n.code,{children:"w"})," and print the product of ",(0,s.jsx)(n.code,{children:"x"}),", ",(0,s.jsx)(n.code,{children:"y"}),", ",(0,s.jsx)(n.code,{children:"z"}),", and ",(0,s.jsx)(n.code,{children:"w"}),"."]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," ","Create a new variable called ",(0,s.jsx)(n.code,{children:"v"})," and print the division of ",(0,s.jsx)(n.code,{children:"x"}),", ",(0,s.jsx)(n.code,{children:"y"})," and ",(0,s.jsx)(n.code,{children:"v"}),"."]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," ","Show your TA that you can build and run the ",(0,s.jsx)(n.code,{children:"cpp-intro"})," project."]}),"\n"]})}),"\n",(0,s.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,s.jsx)(n.p,{children:"A function is a block of code that performs a specific task.\nA function can be called from anywhere in the program.\nA function can optionally take parameters and return a value."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:'// function declaration\nint add(int x, int y);\n\n// function definition\nint add(int x, int y)\n{\n  return x + y;\n}\n\nint main()\n{\n  int x = 5;\n  int y = 7;\n  int z = add(x, y); // call the add function\n  std::cout << "The sum of " << x << " and " << y << " is " << z << std::endl;\n\n  return 0;\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Here:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"add"})," function takes two parameters ",(0,s.jsx)(n.code,{children:"x"})," and ",(0,s.jsx)(n.code,{children:"y"})," and returns the sum of the two parameters."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"add"})," function is called from the ",(0,s.jsx)(n.code,{children:"main"})," function."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"add"})," function is declared before the ",(0,s.jsx)(n.code,{children:"main"})," function.\nThis is because the ",(0,s.jsx)(n.code,{children:"add"})," function is called from the ",(0,s.jsx)(n.code,{children:"main"})," function."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Usually, the function declaration is put in a header file and the function definition is put in a source file."}),"\n"]}),"\n"]})}),"\n",(0,s.jsx)(n.admonition,{title:"Check-off",type:"warning",children:(0,s.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," ","Write the following functions:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"int subtract(int x, int y)"})," that returns the difference of ",(0,s.jsx)(n.code,{children:"x"})," and ",(0,s.jsx)(n.code,{children:"y"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"int multiply(int x, int y)"})," that returns the product of ",(0,s.jsx)(n.code,{children:"x"})," and ",(0,s.jsx)(n.code,{children:"y"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"int divide(int x, int y)"})," that returns the division of ",(0,s.jsx)(n.code,{children:"x"})," and ",(0,s.jsx)(n.code,{children:"y"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," ","Show your TA that you can build and run the ",(0,s.jsx)(n.code,{children:"cpp-intro"})," project."]}),"\n"]})}),"\n",(0,s.jsx)(n.h2,{id:"classes",children:"Classes"}),"\n",(0,s.jsx)(n.p,{children:"A class is a user-defined data type that contains data members and member functions.\nA class is a blueprint for creating objects.\nAn object is an instance of a class.\nA class can be used to create many objects."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Rectangle\n{\npublic:\n  int width;\n  int height;\n\n  int area()\n  {\n    return width * height;\n  }\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"Here:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"Rectangle"})," class has two data members ",(0,s.jsx)(n.code,{children:"width"})," and ",(0,s.jsx)(n.code,{children:"height"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"Rectangle"})," class has one member function ",(0,s.jsx)(n.code,{children:"area"})," that returns the area of the rectangle."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{title:"Check-off",type:"warning",children:(0,s.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," ","Write a ",(0,s.jsx)(n.code,{children:"Circle"})," class that has a ",(0,s.jsx)(n.code,{children:"radius"})," data member and an ",(0,s.jsx)(n.code,{children:"area"})," member function that returns the area of the circle."]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," ","Create an instance of the ",(0,s.jsx)(n.code,{children:"Circle"})," class and print the area of the circle."]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," ","Show your TA that you can build and run the ",(0,s.jsx)(n.code,{children:"cpp-intro"})," project."]}),"\n"]})}),"\n",(0,s.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,s.jsxs)(n.p,{children:["A reference is an alias for an existing variable.\nA reference is declared by putting an ampersand (",(0,s.jsx)(n.code,{children:"&"}),") after the type of the variable."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"int x = 5;\nint &y = x; // y is a reference to x\n"})}),"\n",(0,s.jsx)(n.p,{children:"Here:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"y"})," variable is a reference to the ",(0,s.jsx)(n.code,{children:"x"})," variable."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"y"})," variable is an alias for the ",(0,s.jsx)(n.code,{children:"x"})," variable."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"practice-problems",children:"Practice Problems"}),"\n",(0,s.jsx)(n.h3,{id:"problem-1",children:"Problem 1"}),"\n",(0,s.jsxs)(n.p,{children:["Write a ",(0,s.jsx)(n.code,{children:"Point"})," class that has ",(0,s.jsx)(n.code,{children:"x"})," and ",(0,s.jsx)(n.code,{children:"y"})," data members (",(0,s.jsx)(n.code,{children:"double"}),") and a ",(0,s.jsx)(n.code,{children:"distance_to_origin"})," member function that returns the distance between the point and the origin."]}),"\n",(0,s.jsx)(n.h3,{id:"problem-2",children:"Problem 2"}),"\n",(0,s.jsxs)(n.p,{children:["Augment the ",(0,s.jsx)(n.code,{children:"Point"})," class with a ",(0,s.jsx)(n.code,{children:"distance_to_point"})," member function that takes a ",(0,s.jsx)(n.code,{children:"Point"})," object as a parameter and returns the distance between the two points."]}),"\n",(0,s.jsx)(n.h3,{id:"problem-3",children:"Problem 3"}),"\n",(0,s.jsxs)(n.p,{children:["Write a ",(0,s.jsx)(n.code,{children:"Line"})," class that has ",(0,s.jsx)(n.code,{children:"p1"})," and ",(0,s.jsx)(n.code,{children:"p2"})," data members(",(0,s.jsx)(n.code,{children:"Point"}),") and a ",(0,s.jsx)(n.code,{children:"length"})," member function that returns the length of the line."]}),"\n",(0,s.jsx)(n.h3,{id:"problem-4",children:"Problem 4"}),"\n",(0,s.jsxs)(n.p,{children:["Augment the ",(0,s.jsx)(n.code,{children:"Line"})," class with a ",(0,s.jsx)(n.code,{children:"distance_to_point"})," member function that takes a ",(0,s.jsx)(n.code,{children:"Point"})," object as a parameter and returns the distance between the line and the point."]}),"\n",(0,s.jsx)(n.h3,{id:"problem-5",children:"Problem 5"}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"Skip this problem!"})}),"\n",(0,s.jsxs)(n.p,{children:["Augment the ",(0,s.jsx)(n.code,{children:"Point"})," class with a ",(0,s.jsx)(n.code,{children:"distance_to_line"})," member function that takes a ",(0,s.jsx)(n.code,{children:"Line"})," object as a parameter and returns the distance between the point and the line."]}),"\n",(0,s.jsx)(n.h3,{id:"problem-6",children:"Problem 6"}),"\n",(0,s.jsxs)(n.p,{children:["Create a ",(0,s.jsx)(n.code,{children:"Triangle"})," class that has ",(0,s.jsx)(n.code,{children:"p1"}),", ",(0,s.jsx)(n.code,{children:"p2"}),", and ",(0,s.jsx)(n.code,{children:"p3"})," data members and a ",(0,s.jsx)(n.code,{children:"area"})," member function that returns the area of the triangle.\n",(0,s.jsx)(n.code,{children:"p1"}),", ",(0,s.jsx)(n.code,{children:"p2"}),", and ",(0,s.jsx)(n.code,{children:"p3"})," are the three vertices (",(0,s.jsx)(n.code,{children:"Point"}),") of the triangle."]}),"\n",(0,s.jsx)(n.h3,{id:"problem-7",children:"Problem 7"}),"\n",(0,s.jsxs)(n.p,{children:["Let a ",(0,s.jsx)(n.code,{children:"Polygon"})," class be a class that has a ",(0,s.jsx)(n.code,{children:"std::vector<Point>"})," data member and a ",(0,s.jsx)(n.code,{children:"area"})," member function that returns the area of the convex polygon.\nThe ",(0,s.jsx)(n.code,{children:"std::vector<Point>"})," data member is a vector of ",(0,s.jsx)(n.code,{children:"Point"})," objects that represent the vertices of the polygon (in order).\nWrite a ",(0,s.jsx)(n.code,{children:"Polygon"})," class that has a ",(0,s.jsx)(n.code,{children:"std::vector<Point>"})," data member and a ",(0,s.jsx)(n.code,{children:"area"})," member function that returns the area of the polygon."]}),"\n",(0,s.jsx)(n.h3,{id:"problem-8",children:"Problem 8"}),"\n",(0,s.jsxs)(n.p,{children:["Augment the ",(0,s.jsx)(n.code,{children:"Polygon"})," class with a ",(0,s.jsx)(n.code,{children:"perimeter"})," member function that returns the perimeter of the polygon."]}),"\n",(0,s.jsx)(n.h3,{id:"problem-9",children:"Problem 9"}),"\n",(0,s.jsxs)(n.p,{children:["Create a ",(0,s.jsx)(n.code,{children:"AUV"})," class that represents an autonomous underwater vehicle.\nThe ",(0,s.jsx)(n.code,{children:"AUV"})," class should have the following data members:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"name"})," (",(0,s.jsx)(n.code,{children:"std::string"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"position"})," (",(0,s.jsx)(n.code,{children:"Point"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"depth"})," (",(0,s.jsx)(n.code,{children:"double"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"heading"})," (",(0,s.jsx)(n.code,{children:"double"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"speed"})," (",(0,s.jsx)(n.code,{children:"array<double>"}),") where the first element is the forward speed, the second element is the lateral speed, and the third element is the vertical speed."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"angular_speed"})," (",(0,s.jsx)(n.code,{children:"double"}),")"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"AUV"})," class should have the following member functions:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"step"})," that takes a ",(0,s.jsx)(n.code,{children:"double"})," parameter ",(0,s.jsx)(n.code,{children:"dt"})," and moves the ",(0,s.jsx)(n.code,{children:"AUV"})," using velocities."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"apply_accleration"})," that takes an ",(0,s.jsx)(n.code,{children:"array<double>"})," of size 3 and accelerates the ",(0,s.jsx)(n.code,{children:"AUV"})," by the given acceleration, and ",(0,s.jsx)(n.code,{children:"dt"})," the time step.\nThe first element of the array is the forward acceleration, the second element is the lateral acceleration, and the third element is the vertical acceleration."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"apply_angular_accleration"})," that takes a ",(0,s.jsx)(n.code,{children:"double"})," parameter ",(0,s.jsx)(n.code,{children:"angular_acceleration"}),", and the time step ",(0,s.jsx)(n.code,{children:"dt"})," and accelerates the ",(0,s.jsx)(n.code,{children:"AUV"})," by the given angular acceleration."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"problem-10",children:"Problem 10"}),"\n",(0,s.jsxs)(n.p,{children:["In C++, header files are used to declare classes and functions, and source files are used to define classes and functions.\nLet's create a ",(0,s.jsx)(n.code,{children:"Point"})," class in a header file and a source file."]}),"\n",(0,s.jsxs)(n.p,{children:["Create a new file called ",(0,s.jsx)(n.code,{children:"Point.hpp"})," and put the following code in the file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"#pragma once\n\nclass Point\n{\nprivate:\n  double m_d_x;\n  double m_d_y;\n\npublic:\n  Point(double x, double y);\n\n  double x(){ return m_d_x; }\n  double y(){ return m_d_y; }\n  double distance_to_origin();\n  double distance_to_point(Point p);\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"Here:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"Point"})," class is ",(0,s.jsx)(n.strong,{children:"declared"})," in the ",(0,s.jsx)(n.code,{children:"Point.hpp"})," file."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"Point"})," class has two private data members ",(0,s.jsx)(n.code,{children:"x"})," and ",(0,s.jsx)(n.code,{children:"y"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"Point"})," class has a public constructor that takes two ",(0,s.jsx)(n.code,{children:"double"})," parameters ",(0,s.jsx)(n.code,{children:"x"})," and ",(0,s.jsx)(n.code,{children:"y"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"Point"})," class has a public ",(0,s.jsx)(n.code,{children:"x"})," member function that returns the ",(0,s.jsx)(n.code,{children:"x"})," data member."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"Point"})," class has a public ",(0,s.jsx)(n.code,{children:"y"})," member function that returns the ",(0,s.jsx)(n.code,{children:"y"})," data member."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"Point"})," class has a public ",(0,s.jsx)(n.code,{children:"distance_to_origin"})," member function that returns the distance between the point and the origin."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"Point"})," class has a public ",(0,s.jsx)(n.code,{children:"distance_to_point"})," member function that takes a ",(0,s.jsx)(n.code,{children:"Point"})," object as a parameter and returns the distance between the point and the given point."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"#pragma once"})," directive tells the compiler to include the header file only once."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["Including the header file more than once will cause a compilation error.\nThis is because the compiler will see two declarations of the ",(0,s.jsx)(n.code,{children:"Point"})," class.\nThe ",(0,s.jsx)(n.code,{children:"#pragma once"})," directive tells the compiler to include the header file only once.\nTherefore, even if the header file is included more than once, the compiler will only see one declaration of the ",(0,s.jsx)(n.code,{children:"Point"})," class."]})}),"\n",(0,s.jsxs)(n.p,{children:["Create a new file called ",(0,s.jsx)(n.code,{children:"Point.cpp"})," and put the following code in the file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:'#include "Point.hpp"\n#include <cmath>\n\nPoint::Point(double x, double y)\n{\n  this->m_d_x = x;\n  this->m_d_y = y;\n}\n\ndouble Point::distance_to_origin()\n{\n  return std::sqrt(std::pow(m_d_x, 2)  + std::pow(m_d_y, 2));\n}\n\ndouble Point::distance_to_point(Point p)\n{\n  return std::sqrt(std::pow(m_d_x - p.x(), 2)  + std::pow(m_d_y - p.y(), 2));\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Here:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"Point"})," class is ",(0,s.jsx)(n.strong,{children:"defined"})," in the ",(0,s.jsx)(n.code,{children:"Point.cpp"})," file."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"Point"})," class constructor is defined."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"Point"})," class ",(0,s.jsx)(n.code,{children:"distance_to_origin"})," member function is defined."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"Point"})," class ",(0,s.jsx)(n.code,{children:"distance_to_point"})," member function is defined."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Your directory structure should look like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"build/\n.gitignore\nCMakeLists.txt\nmain.cpp\nPoint.hpp\nPoint.cpp\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.code,{children:"main.cpp"}),", you can include the ",(0,s.jsx)(n.code,{children:"Point.hpp"})," header file and use the ",(0,s.jsx)(n.code,{children:"Point"})," class:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:'#include <iostream>\n#include "Point.hpp"\n[...]\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Notice that we used double quotes (",(0,s.jsx)(n.code,{children:'"'}),") instead of angle brackets (",(0,s.jsx)(n.code,{children:"<"})," and ",(0,s.jsx)(n.code,{children:">"}),").\nThis is because the ",(0,s.jsx)(n.code,{children:"Point.hpp"})," file is in the same directory as the ",(0,s.jsx)(n.code,{children:"main.cpp"})," file."]})}),"\n",(0,s.jsxs)(n.p,{children:["Now, you should also remove the ",(0,s.jsx)(n.code,{children:"Point"})," class from the ",(0,s.jsx)(n.code,{children:"main.cpp"})," file."]}),"\n",(0,s.jsx)(n.p,{children:"Go ahead and build the project:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cmake --build . # build the project. You should be in the build directory.\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The build system should be able to find the ",(0,s.jsx)(n.code,{children:"Point.hpp"})," and compile.\nHowever, the build system will not be able to find the ",(0,s.jsx)(n.code,{children:"Point.cpp"})," file.\nTherefore, you should see an error message like this:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"[...]\n[ 50%] Building CXX object CMakeFiles/MyExecutable.dir/main.cpp.o\n[100%] Linking CXX executable MyExecutable\nCMakeFiles/MyExecutable.dir/main.cpp.o: In function `main':\nmain.cpp:(.text+0x1c): undefined reference to `Point::Point(double, double)'\n[...]\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This is because we did not tell the build system to compile the ",(0,s.jsx)(n.code,{children:"Point.cpp"})," file.\nLet's go ahead and tell the build system to compile the ",(0,s.jsx)(n.code,{children:"Point.cpp"})," file."]}),"\n",(0,s.jsxs)(n.p,{children:["Open the ",(0,s.jsx)(n.code,{children:"CMakeLists.txt"})," file and add ",(0,s.jsx)(n.code,{children:"Point.cpp"})," to the following line:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cmake",children:"add_executable(MyFirstExecutable\n  main.cpp\n  Point.cpp\n)\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Notice that we did not include ",(0,s.jsx)(n.code,{children:"Point.hpp"})," in the ",(0,s.jsx)(n.code,{children:"add_executable"})," command.\nThis is because ",(0,s.jsx)(n.code,{children:"Point.hpp"})," is included in ",(0,s.jsx)(n.code,{children:"main.cpp"}),"."]})}),"\n",(0,s.jsx)(n.p,{children:"Now, go ahead and build the project again:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cmake --build . # build the project. You should be in the build directory.\n"})}),"\n",(0,s.jsx)(n.p,{children:"You should now be able to build the project successfully.\nGo ahead and run the executable:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"./MyFirstExecutable\n"})}),"\n",(0,s.jsx)(n.p,{children:"Everything should work as before."}),"\n",(0,s.jsx)(n.admonition,{title:"Check-off",type:"warning",children:(0,s.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," ","Create a ",(0,s.jsx)(n.code,{children:"Line"})," class in a header file and a source file."]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," ","Create a ",(0,s.jsx)(n.code,{children:"Triangle"})," class in a header file and a source file."]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," ","Create a ",(0,s.jsx)(n.code,{children:"Polygon"})," class in a header file and a source file."]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," ","Create a ",(0,s.jsx)(n.code,{children:"AUV"})," class in a header file and a source file."]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," ","Show your TA that you can build and run the ",(0,s.jsx)(n.code,{children:"cpp-intro"})," project."]}),"\n"]})})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>d});var s=i(6540);const c={},t=s.createContext(c);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);