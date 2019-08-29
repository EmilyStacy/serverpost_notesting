# Express BoilerPlate
This is a boilerplate project on Thinkful that people can use for starting a new project
## Set up
The following steps are required to start a new project (NEW-PROJECT-NAME):
1.Clone this repository to the local machine with the command 'git clone https://github.com/EmilyStacy/boilerplate.git NEW-PROJECT-NAME)
2.`cd` into the cloned repository
3.Make a fresh start of the git history for this project with `rm -rf .git && git init`
4.Install the node dependencies `npm install`
5.Move the example environmental file to '.env' that will be ignored by git and read by the express server with the command: `mv example.env .env`
6.Edit the contents of the 'package.json' to use NEW-PROJECT-NAME instead of `"name": "express-boilerplate",`
## Scripts
1.Start the application 'npm start'
2.Start nodemon for the application 'npm run dev'
3.Run the tests 'npm test'
##Deploying
When the new project is ready for deployment, add a new Heroku application with `heroku create`.This will make a new git remote called "heroku" ,and then run `npm run deploy`which will push to this remote's master branch
