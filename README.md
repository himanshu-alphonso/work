## Alphonso Internal Dashboards   

### Contributors
Qian Li  
Rahul Doshi  
Christopher Shay  
Jay Puntham-Baker   
Ravi Sarma  
Lampros K.


## Deploying to Production

- Merge branch to be deployed to the intended release branch - `internal-dashboards/release/1.0`  
- Navigate to the production server - `ssh mydb1.alphonso.tv`  
- Navigate to the git repo - `/mnt/alpha/production/srcs/master-latest-git/internal-dashboards/`  
- Set the environment to production with `a_setup_prodn`  
- Pull the latest code via `git pull`  
- Set the repo to the correct branch  
- Run `npm run build`  
- Restart the server with the new code  
    - Find the process you need to restart with `pm2 list`  
    - Note the `pid` of that process and then run `pm2 restart <pid>`  

Servers (updated 01/10/18):  
`mydb1.alphonso.tv:4444` --> `internal-dashboards/integration` ; `development` mode  
