import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { removeDuplicateObjectFromArray, convertData } from '../../data/Frameworks';
import Axios from 'axios';


export default function DisplayBookDetails(){
    const { id } = useParams();
    const [book, setBook] = useState([{}]);


    const bookInfo = [
        {
            subfield: ['Title'],
            text: 'Title:'
        },
        {
            subfield: ['Statement of responsibility, etc.'],
            text: 'Author:'
        },
        {
            subfield: ['International Standard Book Number'],
            text: 'ISBN:'
        },
        {
            subfield: ['Place of publication, distribution, etc','Date of publication, distribution, etc.'],
            text: 'Publication:'
        },
        {   
            subfield: ['Dimensions'],
            text: 'Physical details:'
        },
        {
            subfield: ['Summary, etc'],
            text: 'Summary:'
        }
        
    ]


    useEffect(()=>{
        Axios.post('http://localhost:3030/getBookDet',{id:id}).then((response)=>{
            const data = convertData(removeDuplicateObjectFromArray(response?.data?.result, 'book_id'),response?.data?.result);

            setBook([...data]);
        })
    },[])


    return(
        <div className='content-cont'>
            <div className="upper-cont">
            <img alt="img" src={'/uploads/'+book[0].img}/>
                <div>
                    <div className="info-text-cont">
                        {
                            bookInfo?.map((item)=>{
                                let text = '';
                                let flag = false;
                    

                                item?.subfield?.map((fitem,index)=>{
                                    const data = book[0]?.fields?.map((item)=>{
                                        item?.subFields?.map((item)=>{
                                            if(item.name === fitem){
                                               text+= (index === 0? item.value : ', '.concat(item.value));
                                               flag = true;
                                            }
                                        })
                                    })

                                })

                                return flag? <h3>{item.text} <span>{text}</span></h3> : null;
                            })
                        }
                    </div>
                    <h4>No. of copies: <span>{book[0].copies}</span></h4>
                </div>
            </div>
        </div>
    )
}