import { useParams } from "react-router-dom"

export default function DisplayBookDetails(){

    const { id } = useParams();


    return(
        <div className='content-cont'>
            {id}
        </div>
    )
}