import './stack.css'

const StackItem = ({image , name , link}) => {
    return (
      <a href={link} className='stackItem-link' target='_blank'>
        <div className='stackItem-container'>
          <article className='stackItem-img-container'>
              <img src={image} className="stackItem-img"/>
          </article>
          <h4>{name}</h4>
        </div>
      </a>
    )
  }
  
export default StackItem