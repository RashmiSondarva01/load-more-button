import "./boxContainer.css"

interface boxContainerProps {
    id:string,
    title: string,
    price: number
}
const BoxContainer: React.FC<boxContainerProps> = ({id ,title, price}) => {
    return (
        <div className="content-container" id={id}> 
            <h1>{title}</h1>
            <h2>Price: {price}</h2>
        </div>
    )
}

export default BoxContainer;