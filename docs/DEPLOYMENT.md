# Pushing New Code to mydb1

## January 10, 2018

### Directions on how to spin up a new instance of a project on mydb1

1. `ssh alpha@mydb1.alphonso.tv`
2. Find which directory you want to place your project and `cd` to it
3. `git clone ${repo-url}` to place this project into directory
4. `cd` into project folder
5. `a_setup_prodn`
6. `npm install`
7. `netstat -a | grep LISTEN` to check to see what ports are available or are in use.
8. `PORT=4444 pm2 start --name ${app-name} npm -- run start` to start a process on a specific port.

### Directions on how to push code to `mydb1.alphonso.tv:4444` and restart the process - Running the integration instance of internal dashboards

1. `ssh alpha@mydb1.alphonso.tv`
2. `cd /mnt/alpha/production/srcs/master-latest-git`
3. `a_setup_prodn`
4. `git branch` to checkout if branch is currently on `internal-dashboards/integration`
5. `git pull` to pull the latest changes to the integration branch
6. `pm2 list` to list all the processes running
7. `pm2 restart ${pm id}` pm id comes from the row which has the app name `internal-dashboards`
