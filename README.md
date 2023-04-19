# README

This app is a boilerplate designed to get you up and going with development in a few easy steps.
Utilizing Ruby on Rails in the backend and React in the frontend.
Communication between the two will be Graphql.

# Ruby Installation
`rbenv` is installed using the following command
```sh
brew install rbenv
```

Add `rbenv` to your bash or zshell using 
```sh
rbenv init #follow the directions this command presents
```

Use `rbenv` to install the Ruby version specified in `.ruby-version`
```sh
rbenv install 2.7.7
```

Ensure that `rbenv` version is correct by typing
```sh
rbenv local 2.7.7
```

COMPLETELY RESTART YOUR TERMINAL ****
- Do this by right click, exiting the terminal to completely close the session

Run bundler to install all the dependencies inside of the project directory.
```sh
bundle
```

# Postgresql
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
If postgres was installed correctly, you should be able to create the database and run the seed file
```sh
bin/rails db:create
bin/rails db:migrate
bin/rails db:seed
```

# Javascript dependencies
Install NVM
```shell
brew install nvm
```

Create a directory for NVM
```shell
mkdir ~/.nvm
```

Edit your bash profile or zshrc on Catalina or newer
```shell
vim ~/.zshrc or vim ~/.bash_profile
```
Add the below lines to the bottom of the vim file
```shell
export NVM_DIR=~/.nvm
source $(brew --prefix nvm)/nvm.sh
```

Do a one-time load of the variables
```shell
source ~/.zshrc
```

Installing Node using nvm
```shell
nvm install 18.9.0
node -v
```
Install Yarn
```shell
npm install --global yarn
```
CD into the frontend directory and install dependencies
```shell
cd frontend
yarn install
```

# Starting the server
Backend server (In backend directory)
```shell
cd backend
rails s
# served at localhost:3000
```
Frontend server(In frontend directory)
```shell
cd frontend
npm start
# served at localhost:3001
```

-OR-
From the root directory
```shell
npm start
# this starts both servers at the same time
```

If all looks good and the Dashboard is showing products, navigate to the Auth page and register and account.

To login, you will need to confirm your account. Emails are locally served via `mailcatcher`. Information on handling emails can be found by clicking on the following section => [Handling emails](#handling-emails)

Once registered, enter the rails console using command `bin/rails c` and change your user to an admin
`User.last.update(admin: true)`

# Working with Graphql
The official documentation is very helpful in understanding basic gql principles and can be found here:
https://graphql.org/learn/queries/

We use generators for scaffolding mutations and types. Documentation for scaffolding can be found here:
https://graphql-ruby.org/schema/generators

TLDR-
```
rails g graphql:object #{model_class_name} //This command will generate gql types for ALL #{model_class_name} fields.

rails g graphql:mutation_create #{model_class_name}
rails g graphql:mutation_update #{model_class_name}
rails g graphql:mutation_delete #{model_class_name}
```

`graphiql gem` has been installed to provide easy testing for queries and mutations and can be accessed in development at the following url
http://localhost:3000/graphiql

# Handling emails
Development emails are handled via `mailcatcher`.

To install `mailcatcher` on Macs
```shell
brew install mailcatcher
```
Ensure the `mailcatcher` service is running prior to testing (will need to check again on restarting computer)
```shell
brew services restart mailcatcher
```
This will turn on the smtp server which is locally served at `http://127.0.0.1:1080`.

# Working with Models and Migrations
## - Generating a model
Rails generators can assist in the creation of a model.

Type the following into console to generate a model.
```shell
  rails generate model User username:string password:string age:integer
```

You'll notice a new migration file has been created. `bin/rails db:migrate` will run the migrations.

We use the `annotate gem` to create automatic annotations to the models. Run `annotate --models` after making changes to it to automatically create the annotations on the models.

## Creating a migration
To add fields to an existing model, the best way to go about it is to create migrations. Never add the fields manually!

Migrations can be created using the follow rails commands
```shell
rails generate migration add_FIELDNAME_to_TABLENAME FIELDNAME:string
```

Replace `FIELDNAME` with the name of the field you're adding and replace `TABLENAME` with the table you'd like to add the field to. The table should be pluralized. ex. `users` and not `user`.

Always run `bin/rails db:migrate` after a migration has been created.

Run `annotate --models` after making changes to it to automatically create the annotations on the models.

# React Query for fetching
This app uses React Query for most of our API calls. There are many advantages to using React Query over typical fetching. One of the biggest advantages is caching data. Another big advantage is the methods that it provides for you such as `isLoading`, `isError`, etc. React query can also replace most standard storage libraries such as Redux because React Query is smart enough to not fetch data again unless its stale.

React Query can also completely replace the need to use `useEffect`. Find out why here: https://blog.openreplay.com/fetching-and-updating-data-with-react-query/#:~:text=If%20you%20are%20familiar%20with,data%20and%20then%20re%2Dfetch.

While the above link is also a great beginner tutorial for React Query, here is the docs if thats more of your fancy: https://react-query-v3.tanstack.com/

# Zustand for state management
While React Query is a good enough state management library, we have Zustand as our stand-in replacement for redux. Several Zustand examples can be found surrounding the storage of current user data in React.

## - When to use Zustand STORE vs React Query STORE.
If you need this data persisted throughout multiple pages and this data is something that will not typically change frequently - ie. currently logged in user, then Zustand store is probably where you should store and call your data from.

If your data is coming from an API fetch that may only be used on one page or will be changing a lot, perhaps just leaving React Query to handle the storage is perfectly fine.

# Tailwind
This application uses Tailwind CSS. Unlike Bootstrap and Material, Tailwind does not have styled components and relies on you to create the reusable styled components on your own using the utility classes that it provides.

Tailwind's developer docs is a great resource on learning how to transfer traditional CSS syntax to tailwind utility classes. A link to the docs can be found here: https://tailwindcss.com/

For example; Traditionally, to make font bold in vanilla CSS, we would do the following:
```
.thick {
  font-weight: bold;
}
```
To translate this to Tailwind, search the docs for font bold which will take us to this page: https://tailwindcss.com/docs/font-weight#setting-the-font-weight
You can then add the helper utility class of font-bold to your component to achieve the same effect as the traditional CSS counterpart.

## - Installing the Tailwind auto completion extension
- Search in your VSCode store for ***'Tailwind CSS IntelliSense'*** and install this.
- Next hit Ctrl + Shift + p for Windows (Cmd + Shift + p for Mac), type in ***'settings'*** and select ***'Open Settings (JSON)'***.

- Inside the file, add the following lines to the end of the JSON object (within the brackets) to enable the extension:
```
...
    "tailwindCSS.emmetCompletions": true,
    "editor.inlineSuggest.enabled": true,
    "editor.quickSuggestions": {
    "strings": true
    },
```

And Voilà!

![Tailwind Magic](/public/tailwind.png)

# Linting, Prettier, and You
## - Javascript Linting
Linting rules here are not strict and we encourage you to write how you feel comfortable. In order to set some norms, we'll use Prettier (with some custom settings) to make our Javascript code feel more coherent.

- Install 'Prettier - Code Formatter' from the extension store in VS code.
- Next hit Ctrl + Shift + p for Windows (Cmd + Shift + p for Mac), type in ***'settings'*** and select ***'Open Settings (JSON)'***.
- Inside the file, add the following lines to the end of the JSON object (within the brackets) to enable the extension:
```
...
    "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "css.validate": false,
    "prettier.semi": false,
    "prettier.singleQuote": true,
```

## - Ruby Linting
TBD
