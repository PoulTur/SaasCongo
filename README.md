3. Mocked authorization:
- 2 roles: "client" and "tenant" added to LocalStorage
- route to client panel was changed from ":/tenant" to ":/client"
- If client tries to navigate to routes reserved for tenant, gets logged out
- If tenant tries to navigate to routes reserved for client, gets logged out

- pending: logged in client can switch to client view of other tenant's
- pending: logged in tenant can view other tenant's data



2. Mocked authentication, with login and registration panels

- Mock login forms added (for both tenant and users/clients)
- Mock registration panel for tenant added
- Upon submit of login/registration forms, a new user is stored in LocalStorage. (removed when logged out)
- Mock AuthService was added. Guards (AuthGuard, UnauthGuard) were added to protect routes.
- No registration feature available for client. Users will be added by tenants from their panel.
- Drawback to fix in next stage - authorization based on roles should be added.
- THIS IS DEMO ONLY - of course logins are just mocks with no validations etc.


1. Dynamic routes in Angular "dynaroutes" app.
- changed route from ":/tenant" to ":/client"


![alt text](https://i.ibb.co/mHCm7fG/Capture.png)

