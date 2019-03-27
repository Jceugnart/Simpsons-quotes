import React from "react";
import Quote from "./Quote";

const Quotes = [
    {
        quote: "Facts are meaningless. You could use facts to prove anything that's even remotely true.",
        character: "Homer Simpson",
        image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
    },
    {
        quote: "Nothing you say can upset us. We're the MTV generation.",
        character: "Bart Simpson",
        image:
          "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638"
      },
      {
        quote: "That's where I saw the leprechaun...He told me to burn things.",
        character: "Ralph Wiggum",
        image:
          "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
      },
      {
        quote:
          "Hello, Simpson. I'm riding the bus today because Mother hid my car keys to punish me for talking to a woman on the phone. She was right to do it.",
        character: "Principal Skinner",
        image:
          "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FSeymourSkinner.png?1497567511460"
      }
];

class Simpsons extends React.Component {
  render() {
    return (
        <div>
              {Quotes.map((quote, idx) => {
                return (
                  <Quote
                    key = {idx}
                    {...quote}
                    />
              );
                })}
        </div>
      );
    }
  }
/*const quotes = () => (
    <div>
        {quotes.map(quote => (
            <img src={quote.image} />
        ))}
    </div>
);*/

export default Simpsons;