import React from "react";
import ReactDom from "react-dom";
import "./index.css";

// Stateless functional Components
// Always return JSX

// JSX rules
// return a single element -> all components wrapped up inside a parent div / fragment.
// use camel case for HTML attribute
// className instead of class
// close every element
// formatting

// div/section/article or Fragment - <React.Fragment></ React.Fragment> - > <></>

/* function Greeting() {
  return (
    <div>
      <h1>Hello Barld!</h1>
      <Person />
      <p>This is my message</p>
      <Message />
    </div>
  );
} */

/* // Messy code -> under the hood we are returning functions
const Greeting = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Hello Barld!")
  );
}; */

/* const Greeting = () => {
  return React.createElement("h4", {}, "helluu");
}; */

/* Nested Components, React Tools
 */
/* const Person = () => {
  return <h2>Break a Leg!</h2>;
};
const Message = () => {
  return <p>Cr kamarele CR7!</p>;
}; */

// Setup vars
/* const books = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/71UwSHSZRnS._AC_UY327_FMwebp_QL65_.jpg",
    author: "Joseph Murphy",
    title: "The Power of Your Subconscious Mind",
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/813uPMOnskL._AC_UY327_FMwebp_QL65_.jpg",
    author: "George Matthew Adams",
    title: "You Can",
  },
  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/51ky4TIb1bL._AC_SX184_.jpg",
    author: "Jenny Han",
    title: "It's Not Summer Without You",
  },
  {
    id: 4,
    img: "https://m.media-amazon.com/images/I/71F4+7rk2eL._AC_UY327_FMwebp_QL65_.jpg",
    author: "James Clear",
    title:
      "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
  },
  {
    id: 5,
    img: "https://m.media-amazon.com/images/I/71ow6v8lfQL._AC_UY327_FMwebp_QL65_.jpg",
    author: "Emily Henry ",
    title: "People We Meet on Vacation",
  },
]; */

// named export -> need to import excatly with the same name.
import { books } from "./books";
// default export -> we can change the name and use that name in our app.
// import SpecBook from "./Book";
import Book from "./Book";
/* const author = "Joseph Murphy";
const title = "The Power of Your Subconscious Mind";
const img =
  "https://m.media-amazon.com/images/I/71UwSHSZRnS._AC_UY327_FMwebp_QL65_.jpg"; */

/* const names = ["John", "Johnny", "Jambo"];
const newNames = names.map((name) => <p>{name}</p>); // in console.log(name) -> we are not returning anything, so if we console.log(newNames) -> it will give undefined. */

function BookList() {
  return (
    <section className="bookList">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

/* function BookList() {
  return (
    <section className="bookList">
      {books.map((book) => {
        return <Book key={book.id} book={book} />;
      })}
    </section>
  );
} */

// prop_name = value, while rendering we are providing the props.

// We can pass properties(params) in function and use them in components. If that value is not passed in component, then it won't get displayed. So we need to make sure the property we are finding in the component that should be passed. In case of passing numbers -> number={22} , number="22" -> or quoted JSX text
// Destructuring while passing
// We can add children props by using closing Components tag. </Book> and passing the children props inside opening and closing tag. the name is specific though -> children. -> here description inside.
/* 
<Book
  img={firstBook.img}
  title={firstBook.title}
  author={firstBook.author}
>
<p> lorem ipsum dolor sit amet, consectetur adipiscing </p>
</Book>

{
  props.children;
} */

/* const Book = ({ img, title, author }) => {
  // console.log(props); will return objects.
  // const { img, title, author } = props; // destructuring
  return (
    <article className="book">
      <Image img={img} />
      <Title title={title} />
      <Author author={author} />
    </article>
  );
}; */

/* const Book = (props) => {
  // console.log(props); //will return objects.
  const { img, title, author } = props; // destructuring , while not using spread operator, we need to access the book prop using props.book
  // console.log(props);
  // attribute, eventHandler
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("Hello Barld!");
  };
  const moreComplexHandler = (author) => {
    console.log(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <Image img={img} />
      <Title title={title} />
      <Author author={author} />
      <button type="button" onClick={clickHandler}>
        Reference Button
      </button>
      <button type="button" onClick={() => moreComplexHandler(author)}>
        More Complex Button
      </button>
    </article>
  );
};

// Referencing the event Handler function
/* 
  const clickHandler = () => {
    alert("Hello Barld!");
  };

  we can access the event object in all the event handlers.

  <button type="button" onClick={clickHandler}>
        Reference Button
  </button>

  if we invoke and pass arguments in the event handler at the moment of referencing then, at the time of rendering the action will be executed.So if we need to pass arguments, then we need to define an arrow function. Then only our eventHandler will execute when we perfoem the event.

  const moreComplexHandler = (author) => {
    console.log(author);
  };

  <button type="button" onClick={moreComplexHandler(author)}>
    More Complex Button
  </button> // will execute while rendering.

  <button type="button" onClick={() => moreComplexHandler(author)}>
    More Complex Button
  </button> // will execute after performing the event.(clicking the button)
*/

/* const Book = (props) => {
  // console.log(props); will return objects.
  return (
    <article className="book">
      <Image img={props.img} />
      <Title title={props.title} />
      <Author author={props.author} />
    </article>
  );
}; 

const Image = (props) => {
  return <img src={props.img} alt="" />;
};

// For inline styling we need to include {{}}.passing styles as JS object. JSX CSS . Inline CSS is stronger than CSS file, it will overwrite the styles mentioned there and only new styles added in the css file will be applied.
const Author = (props) => {
  // const author = "Joseph Murphy"; // we can use variables to store the data.
  return (
    <h3 style={{ color: "#617d98", fontSize: "0.85rem", marginTop: "0.25rem" }}>
      {props.author}
    </h3>
  );
};
// While using JS with JSX,  we need to give some variable in {} that returns some value, can't return a expression.<p>{let x = 6}</p> -> will give error., but {6 + 6} is acceptable and gives a value.
const Title = (props) => (
  <h1 onClick={() => console.log(props.title)}>{props.title}</h1>
); */

// Inline event handler function
/* onClick={() => console.log(props.title)} */

ReactDom.render(<BookList />, document.getElementById("root"));
