# Appwrite 🤝 React

Appwrite + React fullstack notes app with integrated auth.

<img style="max-width:600px" src="./src/assets/notes.png"/>

## Setup instructions

Before you can clone and setup a local instance of this project you'll need to setup and appwrite backend and gain the nessesary credentials/have the correct database setup and permisisons configured.

### Setting up appwrite backend

1. Create a new appwrite project + app. Easiest way to get started is by heading to [appwrite.io](https://appwrite.io/)

2. Add a platform and set hostname registration

This can be done by going to `overview` -> `Add Platform` -> `Web App`.

3. Add A user

4. Add a database and a collection

Add the following attributes in your collection

<table>
    <tr>    
        <th>Name</th>
        <th>Type</th>
        <th>Details</th>
    <tr>
    <tr>    
        <td>body</td>
        <td>string</td>
        <td>100 chars</td>
    <tr>
</table>

5. Set collection perissions

This can be done under from your collection tab unde `settings` -> `permissions`.

Set permissions to `users` + `create`

Enable document level security

#### Setup local repo

**Clone Repo**
Clone repo: `git clone <repo url>`

Add `.env` file and fill in your Appwrite project credentials:

```
VITE_PROJECT_ID=YOUR-PROJECT-ID
VITE_DATABASE_ID=YOUR-DATABASE-ID
VITE_COLLECTION_NOTES=YOUR-COLLECTION-ID
```

-   `cd appwrite-react-quickstart`
-   `npm i` && `npm run dev`
