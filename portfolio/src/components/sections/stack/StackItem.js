import './stack.css'

const StackItem = ({image , name}) => {
    return (
      <article>
        <div>
          <img src={image} className="stackItem-img"/>
          <h4>{name}</h4>
        </div>
      </article>
    )
  }
  
export default StackItem