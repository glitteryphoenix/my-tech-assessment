# Front End Recruitment Test

### This project will be divided in three parts

`Data`

- Getting information (data) from books.json which is inside "public" folder. Path: /app/public/books.json.
- List the first 20 books in your main page. Including the picture and title.

`Design the app`

- In the root of this folder, there's a model for you to follow to design the App. Try to make it look as much similar as you can. Use you imagination to add more features, if you have time.

`Bonus implementation:`

- Add a favorite button to each of the books. When you click to favorite this book, it will be created a favorite list.

`Note:`

- Please update the questions from the Question section on this file with your answers.

# Requirements

- Do no spend more than 2-3 hours on a submission.

- We also take into consideration the Answers to technical questions, code organization, identation and comments. If you have anything to add or want to explain a feature, you can leave a note on the comments section below

---

# Questions

1. How long did you spend on the coding?
   2hrs 40 minutes, not including the time to complete this README.md.

2. What would you add to your solution if you had more time?

- User authentication & authorisiation, enabling a user to save their changes.
- A seperate column for books that have been read, with a comments section to leave their own review.
- Each book having it's own page to enable more information, user reviews, a link to another website to buy the book, an "about the author" column, etc.
- I would also want to make the UI more flexible for viewing on mobiles or tablets.

3. Share a code snippet that you are proud of and explain what it does
   I don't think I am particularaly proud of my code, but here is a snippet from App.jsx.

// GET BOOKS
\*This is a React hook. It tells the code to do this segment when the page has loaded.
useEffect(() => {

\*This is asking for it to go fetch the data from /books.json.
fetch('/books.json')

    *Turning it into .json.
      .then(response => response.json())

      *This is getting the first 100 books (objects) from the books.json. The .map is where it will go through each book and loads it, and adding the favourite clause (with no favourite books when the page loads). This just exists in this code and is not added to the orginal data.
      .then(data =>
        setBooks(
          data.slice(0, 100).map(book => ({ ...book, favourite: false }))
        )
      )

      *This console.log helps to identify where things are going wrong if things are not working.
      .catch(error => console.error('Error fetching books:', error));

      *This [] means that the useEffect is only done once, when the page loads.

}, []);

\*This enables a book to be favourited. The index is documented and then the book is updated with updatedBooks. This works the same for favouriting or unfavouriting.
const toggleFavourite = (index) => {
const updatedBooks = [...books];
updatedBooks[index].favourite = !updatedBooks[index].favourite;
setBooks(updatedBooks);
};

4. How would you track down a performance issue in production? Have you ever had to do this?
   I would: look for any errors -> check syntax -> when was it last working? is it very recent, can I trace my steps backwards with the changes I just made? would any of them cause this issue? -> is it an actual error or is it just doing what I told it to do? did I give the right commands? -> go to google for help -> if still unable to fix it, then ask for help from the appropriate person.

I experienced this in the final group project with a Post New Item page that I was trying to implement. This also involved looking through not only my code but my classmate's code as well. I did everything listed above, and even resorted to ChatGPT for help. After no progress I reached out to Judith who really helped me to not only realize the issue but teach me how to find it in future.

---

# Comments
This is being submiitted late because of issues with commiting to GitHub (and a bit of forgetfullness- sorry!).
---

# Submission

After completing the challenge, commit it to Github.
