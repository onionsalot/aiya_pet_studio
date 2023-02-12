# README

This app is a boilerplate designed to get you up and going with development in a few easy steps.
Utilizing Ruby on Rails in the backend and React in the frontend.
Communication between the two will be Graphql.

## Ruby Installation
Use `rbenv` to install the Ruby version specified in `.ruby-version`

```sh
rbenv install 2.7.6
```

Run bundler to install all the dependencies.
```sh
bundle
```

## Postgresql
Use homebrew to install postgresql 12
```sh
brew install postgresql@12
```
Add the path to Postgres
```sh
export PATH="/opt/homebrew/opt/postgresql@12/bin:$PATH"
```
Start psql using
```sh
brew services restart postgresql@12
```
Create your app user
```sh
createuser -s aiya_pet_studio
```
If postgres was installed correctly, you should be able to run the seed file
```sh
bin/rails db:seed
```

## Javascript dependencies
Install NVM
```shell
brew install nvm
```
Installing Node using nvm
```shell
nvm install 18.9.0
node -v
```
Install Yarn
```shell
nvm install --global yarn
```
CD into the frontend directory and install dependencies
```shell
cd frontend
yarn install
```

## Starting the server
Backend server
```shell
rails s
# served at localhost:3000
```
Frontend server
```shell
cd frontend
npm start
# served at localhost:3001
```
If all looks good and the Dashboard is showing products, navigate to the Auth page and register and account.

To login, you will need to confirm your account. Emails are locally served via `mailcatcher`. Click to open [Handling emails](#handling-emails)

Once registered, enter the rails console using command `bin/rails c` and change your user to an admin
`User.last.update(admin: true)`

## Working with Graphql
The official documentation is very helpful in understanding basic gql principles and can be found here:
https://graphql.org/learn/queries/

We use generators for scaffolding mutations. Documentation for scaffolding can be found here:
https://graphql-ruby.org/schema/generators

`graphiql gem` has been installed to provide easy testing for queries and mutations and can be accessed in development at the following url
http://localhost:3000/graphiql

## Handling emails
Development emails are handled via `mailcatcher gem`. To find local emails, you can run `mailcatcher` in the console. This will turn on the smtp server which is locally served at `http://127.0.0.1:1080`.
