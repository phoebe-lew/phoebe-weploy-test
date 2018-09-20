# Weploy JSCodingTest Solution


### Run Instructions

Navigate to the `phoebe-weploy-test` directory

Run `yarn install`

Run `yarn start`

Open a browser and navigate to `http://localhost:3000/`

### Design Justifications

- Lack of testing: The data is static and the only state being tracked is on the tab bar. Under these constraints, I find it overkill to write tests.
- Data cleaning: If I was receiving large amounts of data in the format of the json file, I would want to restructure it. Specifically, storing job ID and associated info in a dictionary to be easily accessed again. I also think Weployees should have an ID (at least on the backend if it doesn't already).
- Inline styling: In a much larger project, the css would be separated out into component specific files.