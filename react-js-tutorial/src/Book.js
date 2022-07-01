import React from "react";

const Book = (props) => {
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
}; */

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
);

// Inline event handler function
/* onClick={() => console.log(props.title)} */

export default Book;
