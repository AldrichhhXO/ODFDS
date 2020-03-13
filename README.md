# ODFDS (On Demand Food Delivery Service)

- Originally a class project that was meant to model some functionalities seen in apps like Doordash and Uber.
- Original project https://github.com/jjun44/ODFDS
- Link to Website: https://odfds.herokuapp.com


### Note

- Web Application is currently broken in regards to database usage, fixes and updates soon. 


## REST APIs

    / - Index Page
    /DriverSignup  - Driver Signup Page
    /RestSignup - Restaurant Signup Page

## Authenticated Routes

#### Driver Side REST APIs (/driver)

    /driver - Driver Dashboard
    /delivery - Page where Deliveries can be accepted and viewed on Map.
    /deliveryInfo - Delivery info of the current orders
    /dHistory - History of the driver's order history.

### Restaurant Side REST APIs (/rest)

    /rest - Restaurant Dashboard
    /request - Allows restaurants to place an order that a driver can pick choose to accept/decline in their '/Delivery' Page.
    /track - Page that tracks current orders.
    /rHistory - Displays the restaurant's order history.




### Current Goals

- Convert the application syntax from ES6 to ES7.
- Implement better validation for forms ('Express-validator')
- Convert into a Complete React application.
