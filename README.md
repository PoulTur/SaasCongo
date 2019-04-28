2. Second Stage - develop mocked authentication, with login and registration panels

- Mock login forms added (for both tenant and users/clients)
- Mock registration panel for tenant added
- Upon submit of login/registration forms, a new user is stored in LocalStorage. (removed when logged out)
- Mock AuthService was added. Guards (AuthGuard, UnauthGuard) were added to protect routes.
- No registration feature available for client. Users will be added by tenants from their panel.
- Drawback to fix in next stage - authorization based on roles should be added.
- THIS IS DEMO ONLY - of course logins are just mocks with no validations etc.


1. First Stage - develop dynamic routes in Angular "dynaroutes" app


![alt text](https://i.ibb.co/gdS3pvW/Capture.png)

