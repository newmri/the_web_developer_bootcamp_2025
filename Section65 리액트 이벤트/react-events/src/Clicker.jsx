function handleClick() {
  console.log("CLICKED THE BUTTON!!!");
}

function handleHover() {
  console.log("HOVERED!!");
}

export default function Clicker() {
  return (
    <div>
      <p onMouseOver={handleHover}>Hover Over Me</p>
      <button onClick={handleClick}>Click</button>
      <button
        onClick={() =>
          console.log("CLICKED THE INLINE ARROW FUNCTION VERSION!")
        }
      >
        Inline Function (CLICK ME!)
      </button>
    </div>
  );
}
