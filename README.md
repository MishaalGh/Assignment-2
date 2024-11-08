Read Me
Website link:https://mishaalgportfolio-51942269a4bd.herokuapp.com 
Github repository:https://github.com/MishaalGh/Assignment-2 
Source https://www.youtube.com/watch?v=gnsO8-xJ8rs and https://www.youtube.com/@TraversyMedia
https://www.youtube.com/watch?v=DQk3zJlY-eE


I started with a different approach than the prof had taught
Started by finding a template with Bootstrap then created my folder for the project and launched the command prompt. By checking my node version (node –version) and npm –version. Then created a pakage.json file via npm init -y different from profs teaching but similar. Then install npm i express and npm i nodemon

In this project, a basic Express.js web server is set up to serve static files, render views using the EJS templating engine, and manage routing using an imported module. The server delivers files from the public directory while listening on a designated port, which by default is 8000 if it isn't defined by an environment variable. EJS is used to render views from the views directory, while a separate routes module installed at the root URL controls the routing mechanism. When the server starts up successfully, it records a confirmation message. Use npm install to install dependencies, then launch the server using node.js.

Using an express.Router() class to define routes, this module configures routing for an Express.js application. To respond to incoming GET requests to the root URL ('/'), it imports the homeController method from homeController.js. After that, the routes instance is exported by default, which makes it simple to add to the main server file. Route declarations and their handlers can be clearly separated in the codebase thanks to this modular approach, which also makes the program more scalable and manageable.

The homeController function, defined by this code, renders and sends the index view as an HTML response in response to incoming GET requests to the root URL ('/'). The function makes use of Express's res.render method, which looks through the views directory in the main server configuration for an index view template. Because the homeController function is exposed as a module, it can be readily imported into the application's routing module to handle client requests and is hence reusable. This method aids in keeping route management and business logic distinct.

Deployment ran into many issues with git and my wrong file not starting causing me to alter the file start up. Changed the template for the free webpage I got via Bootstrap suggested in Professor Lecture 3

