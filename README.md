## Alphonso Internal Dashboards   

### Contributors
Qian Li  
Rahul Doshi  
Christopher Shay  
Jay Puntham-Baker   
Ravi Sarma
Lampros K.


## Deploying to Production

- Merge branch to be deployed to `master`
- Set the environment to production with `a_setup_prodn`
- Run `npm run build`
- Restart the server with the new code
    - Find the process you need to restart with `pm2 list`
    - Note the `pid` of that process and then run `pm2 restart <pid>`

Servers (updated 01/10/18):  
