Application Summary And Instructions On How to Use:

- This application will allow users to search for a wide variety of books by name. The book search will also contain the books author and publishing company.
- Along with getting book information, users may also add a book of interest to their personalized reading list which they can view by clicking on the light blue link that reads "My Reading List". In order to add a book to your reading list, simply click the "Add To My Reading List" button at the bottom of each book section underneath the publishing companies name. Once this is clicked, you will see that book added to your reading list.
- In order to run this program, a user must first click the green "Clone or download" button on this apps repository and copy and paste the URL into their command line. Once the repository has been cloned onto the users computer, the user must then do a "npm install" in their command line to download any related dependencies associated with this app. Once that is completed, simply use the "npm start" command in the command line which will prompt this app to open in your browser. From there all features of this app will be available to the user.
- Happy reading!

Processes And Approach:

1. Draw out wireframes and user stories
2. Scaffold out components and component heirarchy and structure, including routes and links.
3. Decide where state will live (root component, <App /> component.
4. Put together fetch call and make sure data is being correctly extracted from Google Books API.
5. Implement Context API so I can manage state and avoid prop drilling.
6. Add event listeners and attach to event handlers to update state properly and where it is needed for data coming in from API.
7. Put together structure of API data in components.
8. Add event listeners and handlers to update Google Books data into <ReadingList /> component.
9. Handle edge cases and errors (invalid search entry, no search entry).
10. Implement render and unit testing.
