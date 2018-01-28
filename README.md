M.E.R.N. (back end)
===================
> Building a basic MERN stack application. Following [Krunal Lathiya's MERN Stack Tutorial](https://appdividend.com/2017/06/28/mern-stack-tutorial/?utm_source=hashnode.com).
>
> This repository will contain the **Express.js** *back-end*, which will communicate with our **React.js** *front-end*.
>
> The following are notes from documentation, articles, and personal observations/opinions regarding building a *MERN* stack application and *deploying* it.
>

Helpful Links
-------------
>  
>

----------


Node.js
-------------
>  
**process.exit()**
>
> The ```process.exit()``` method instructs *node.js* to terminate the process synchronously with an exit status of ```code```. If ```code``` is omitted, exit uses either the 'success' code ```0``` or the value of ```process.exitCode``` if it has been set. *Node.js* will not terminate until all the *exit* event listeners are called.
>
>  ```process.exit(1)``` to exit with a *failure* code.
>  
>  Link to more information on ```process.exit()``` at the [Node.js documentation](https://nodejs.org/api/process.html#process_process_exit_code).
>  

----------

Heroku
-------------
>  
**Error: Cannot find module 'cli-engine'**
>
> Saw this error immediately after attempting to execute ```heroku create```
>  
```
module.js:491
    throw err;
    ^
Error: Cannot find module 'cli-engine'
    at Function.Module._resolveFilename (module.js:489:15)
    at Function.Module._load (module.js:439:25)
    at Module.require (module.js:517:17)
    at require (internal/module.js:11:18)
    at Object.<anonymous> (/Users/example/.local/share/heroku/client/bin/heroku.js:2:13)
    at Module._compile (module.js:573:30)
    at Object.Module._extensions..js (module.js:584:10)
    at Module.load (module.js:507:32)
    at tryModuleLoad (module.js:470:12)
    at Function.Module._load (module.js:462:3)
```
>  
>  Was resolved by uninstalling and reinstalling ```heroku```
>
```
brew uninstall --force heroku
brew install heroku
```
>  [Link](https://github.com/heroku/cli/issues/653) to a stackoverflow about an issue with this error message.
>  

----------
