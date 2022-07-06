
# Heroku Deployment Issues

## Issues and Errors
- Inside /ui.Dockerfile, the line `CMD ["npm", "run", "build"]` created errors
- Lint errors: resolved ui and api folders. Common errors include:
  - extra/unnecessary  semi-colons
  - variables declared but not used
- Memory Issues exceeding allowed space
- 

## Steps and Resolution
- Ensure Dockerfile reads `CMD ["npm", "start"]`. Don't use "build".
- heroku logs --tail
- created a remote to heroku ui and api
- increased max space to 2560 megabytes

## Connect to Heroku Remote
```
$ heroku login

$ cd my-project/
$ git init
$ heroku git:remote -a gschool-sdi-reach-ui

$ git add .
$ git commit -am "make it better"
$ git push heroku master

$ heroku git:remote -a gschool-sdi-reach-ui
```

## Resource
```
heroku config:set NODE_OPTIONS="--max_old_space_size=2560" -a [app_name] 
"scripts": {
    "start": "node --max_old_space_size=2560 node_modules/.bin/react-scripts start",
    "build": "node --max_old_space_size=2560 node_modules/.bin/react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
```