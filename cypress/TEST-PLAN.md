######################################
##          Test Approach       ##
######################################

To meet Functional and Non-Functional requirements the below tasks should be performed.

Following Test Pyramid: 
Unit, Integration(if applicable), UI & Exploratory will be perfomed to ensure right level of coverage for the application.
Automated tests should be run as part of CI/CD pipeline.

## Cross-Platform:
All supported Browsers, OS(Windows, Mac), Mobile & Tablets (Android, iOS).

## Environment:
Test, UAT, Production(post-live checks)

## Functional Testing:
Smoke
Regression
End to End
Acceptance

## Non Functional Testing:
Staic and Dynamic Test(if applicable)
Performance Testing(if applicable)
Security Testing(if applicable)

## Risks 

## Risk Mitigation

## Sample Scenarios to be included in Test Plan

Check the basic Search function works as expected with below combinations
Positive Tests:
                Scenario 1: Search by Job name,location and miles
                Scenario 2: Search by partial job name and miles
                Scenario 3: Search by miles only 
                Scenario 4: Search by location and miles only
                Scenario 5: Search by Job Name and miles only
                Scenario 6: Search without any parameters should return all available
Negative Tests:
                Scenario 1: Search location by special characters
                Scenario 2: Search location by entering blank spaces

## Results
Test Reports to be documented in Confluence.