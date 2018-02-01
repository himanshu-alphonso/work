## Alphonso Web Apps Boilerplate   

This repo contains boilerplate code for the creation of internal or external web applications. This specific boilerplate
makes use of react, redux, redux-sagas, styled-components, and express.  

This repo contains boilerplate versions that contain implementations for the following that are viewable when checking out the specified branch:  
- LinkedIn OAuth (templates/linkedinauth)  
- Google OAuth (templates/googleauth)
- No Authentication (templates/noauth)


#### Instructions  
1. Determine which template you need. Choices are `templates/linkedinauth`, `templates/googleauth`, `templates/noauth`.  
2. Clone the repo and specify the branch with ` git clone https://github.com/AlphonsoCode/web-app-boilerplate.git --branch <branch-name> --single-branch`  
3. Install dependencies with `yarn`  
4. Remove the original remote with `git remote remove origin`  
5. Add the new remote with `git remote add origin <remote-address-here>`. Note: New repo must be create on GitHub to perform this step. If not, perform later.  
6. Run the application with `npm run start`  
7. Build away!  
