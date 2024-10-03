Event listener function is triggered and the renderTbl function is called for.
Taken to the render.js file, where the renderTbl function is located. 
First step inside the block scope of this function is to declare the constant variable named "table". The value given to this constant is a function called "renderTblHeading" which is then executed.
Inside function renderTblHeading, first step clears any data that is inside the table, if there is one already. 
The next step creates a new table.
then a table heading.
then a table row.
const headingTextArr declares "Name" and "Footprint" as strings inside of an array, giving the table headings element its heading titles.
I believe this assigns the headings to the cells, using the foreach method.
Then the html element is created for the header cells.
The text content of the new table headers are declared to be text.
the table header is now appended to the table row, which will be reiterated again a second time due to the array.
Now the row is appended to the heading section of the table.
Then the table heading row is appended to the table.
The table is returned.  
table body element created.
data array using the foreach method, receiving objects in each loop iteration.
The next step creates a new table row, named tr as a constant (still part of the data loop).
Following is the creation of a new cell, named tdName
cell's textcontent is to recieve the value of obj.firstName
then another cell created named tdTotal
this cell's text content is to recieve the value of obj.cfpTotal
tdName cell is appended to the table row
tdTotal cell is appended to the table row
then completed row is appended to the body of the table
table body is then appended to the table element
now the whole table, and all of its parts, are appended to the DOM
Form fields reset

I am not sure what happens after this. In the googledevtools a new file pops up and it runs through a lot of code. it is named "iframe_form_detection.js"


This part of the assignment helped me understand exactly what each part of each line does (or at least most of it). It took a long time for me, because there is a lot I don't understand. But after finishing my understanding, it helped to have a lot of that verified by you in the recap video. Researching for myself ahead of time also helped me keep up with your verbiage when you explain to us what is going on. I understand it is difficult to fully explain a lot of this stuff to a novice. Like explaining how a car works to a 3 year old or something lol. 


10/3/2024 
How would we repopulate, or update, the fields to be the values we already have?
    Maybe we could put an if statement in the block scope, or use new variables to declare/transfer the old data to the new submission??
    