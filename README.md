"# url-shortener" 
This is a url-shortener webapp made using nodejs. 
Description:

This webapp takes input of a url from user and creates a small url from it. The small url is then displayed on the screen for the user to copy it and share with others.
It is made to shorten the url because some platforms have smaller word limit, the small url will allow more space for the other text to be added.
Database Used- MySql

The other npm modules used in this project include-
1. express
2. body-parser
3. ejs
4. mysql

Steps to run the app

1. Download the project
2. Move to the downloaded directory using cd command in terminal
3. Run 'npm install'
This will install all the dependencies required to run the project.
4. Set up database
I have used xampp server, MySql workbench can we used too.
Create a database name- "webpro"
table name-"nw"
Columns- a)n_id: Primary key auto-increement int 
         b)m_url: varchar         
5. Test your connection by running "node server.js" in terminal.
6. Open your favourite browser and navigate to "localhost:3000"

This should display the homepage.



