# Test Plan Document <!-- omit in toc -->

## Test Approach 

For testing the changes to the search infrastructure I would need to know/understand the customers. Who they're, how and what is the purpose of this feature to them. Then followed by understanding the product and it's requirements.
Once I completed the above mentioned I start thinking about what test data I'm going to use and what test scenarios need to be executed.
We can rely mostly on automation tests for the search functionality, and manual testing when performing accessibility testing.

# Levels of testing

## Functional Testing

- Unit test (automated), to test the search functionality.
- Regression tests, due to changes always been pushed to the search infrastucure we need to know that the component is still working.
- Accessibility testing, we need to know if users can navigate to the search fields and search e.g. only using a keyboard
- Smoke testing (manual/autommated), to make sure the build is stable to be moved for further testing
- Performance testing, for reliable, fast  and stable search functionality 
- API testing
- Security testing, making sure that the search functionality isn't susceptible to security threats e.g. script injection


## Non-Functional Testing
- Internationalisation testing, does the search support feature support different languages
- Load and stress tests

