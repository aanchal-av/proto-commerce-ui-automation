# proto-commerce-ui-automation
**Prerequisites**
1. Install yarn
2. Clone the repo : git clone git@github.com:aanchal-av/proto-commerce-ui-automation.git
3. Install package.json : yarn init
4. Install Cypress: yarn add cypress
report with all tests passed : file:///C:/Users/aanch/code/proto-commerce/proto-commerce-ui-automation/cypress/reports/html/index.html

![Screenshot 2025-02-20 162903](https://github.com/user-attachments/assets/af8c6362-6d04-45ce-a854-893aba9967d5)

6. Report with few test failed along with the screenshot attached: file:///C:/Users/aanch/code/proto-commerce/proto-commerce-ui-automation/cypress/reports/html/index.html
![Screenshot 2025-02-20 162803](https://github.com/user-attachments/assets/452b9cad-2478-43ad-906e-e798f62084b3)
![Screenshot 2025-02-20 162748](https://github.com/user-attachments/assets/389c1602-7679-4659-b357-769cd3b5b30e)

  
   ![Screenshot 2025-02-20 162803](https://github.com/user-attachments/assets/489b8e26-b6a6-4835-8b7b-dc382dacce86)

   ![Screenshot 2025-02-20 162453](https://github.com/user-attachments/assets/c35e8976-8cd1-49c0-ae70-450cd029e7dc)

7. To run the test in cypress cloud, login to cypress dashboard and create a new project
8. Add the project id in cypress.config.js
9.  run the following command in the terminal yarn cypress run --record --key <record key>
10. The following cloud report is generated: https://cloud.cypress.io/projects/p29b28/runs/1/overview?roarHideRunsWithDiffGroupsAndTags=1  
   
![Screenshot 2025-02-20 165743](https://github.com/user-attachments/assets/11a99d6c-b9c0-4317-ba74-fc1f8d993de4)

![Screenshot 2025-02-20 165114](https://github.com/user-attachments/assets/1a5a0381-d15b-4c58-a5a5-831445364de8)
![Screenshot 2025-02-20 165200](https://github.com/user-attachments/assets/338bf5c8-1ee8-4b21-93a3-66551c61cfc1)

11. To integrate the cloud run with slack, need to perform the following:
     1. Enable the slack in cypress cloud
     2. Add the workspace name of the slack
     3. Select the channel name from the dropdown
    and the report is generated as follows:

![Screenshot 2025-02-20 172626](https://github.com/user-attachments/assets/91df9704-08aa-4bcc-b895-f9b74fb0419e)

12. Integrated slack with githubActions
     1. Create a new App in slack using https://api.slack.com/apps
     2. Select "From Scratch"
![image](https://github.com/user-attachments/assets/6cecc63c-4d9d-44f9-8e9f-b00763497118)


