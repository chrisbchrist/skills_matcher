Custom React implementation of [CareerOneStop's Skills Matcher](https://www.careeronestop.org/Toolkit/Skills/skills-matcher.aspx) built using their API as a DNN SPA module.  

## Getting started

Firstly create a Folder under DesktopModules, 
then Clone/Download current repository and place it inside the Folder

Open Powershell/Bash and run :

    npm install
    npm run dnndev

If you're planning to edit the Server code, open Project with VS2017. Use VS Code for Client development.

Since there's still an issue in DNN 9.2 for creating new module, let just install the module.

Using VS2017, build it in Release mode to create installation package. Then login as host and install the installation package.

