import React, {useState} from 'react'


const News = (props) => {
  const [showChildren, setShowChildren] = useState(false);
  const [numberOfDisplay, setNumberOfDisplay] = useState(0);

  const clickHandler = () => {
    if (!showChildren) {
      setNumberOfDisplay(numberOfDisplay + 1)
    }
  }

  let children = null;
  if (showChildren) {
    children = <p className="NewsChildren">{props.children}</p>;
  }

  return (
    <div className="News">
     <h2 class="pointer" onClick={() => {
          setShowChildren(!showChildren)
          clickHandler()
      }}>
      {props.title}
     </h2>
     <p>
      <em>{props.date}</em>
     </p>
     <p><strong>Views: {numberOfDisplay}</strong></p>
     {children}
    </div>
  )
}

export default News