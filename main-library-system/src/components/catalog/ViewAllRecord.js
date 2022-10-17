import Axios from 'axios';
import { useEffect, useState} from 'react';
import { NavLink } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { removeDuplicateObjectFromArray, convertData } from '../../data/Frameworks';



export default function ViewAllRecord(){
    const [allRecords, setAllRecords] = useState([{
        id: "",img: "",copies: "",
        fields: [ {
                id: "", code: "",name: "",indicator1: "",indicator2: "",
                subFields:[{ id: "",code: "",name:"",value: "",}]
            }]
    
    }]);
    const [constAllRecords, setConstAllRecords] = useState([{
        id: "",img: "",copies: "",
        fields: [ {
                id: "", code: "",name: "",indicator1: "",indicator2: "",
                subFields:[{ id: "",code: "",name:"",value: "",}]
            }]
    
    }]);
    
    const [pageNumber, setPageNumber] = useState(0);
    const [searchInput, setSearchInput] = useState('');


    const booksPerPage = 7;
    const pagesVisited = pageNumber * booksPerPage;

    useEffect(()=>{  
        Axios.get('http://localhost:3030/getAllBookRec').then((response)=>{
            const data = convertData(removeDuplicateObjectFromArray(response?.data?.result, 'book_id'),response?.data?.result);
            setAllRecords([...data]);
            setConstAllRecords([...data]);
        
        }).then((response)=>{
            // console.log(response);
        })
    },[])


   
    const displayBooks = allRecords?.slice(pagesVisited, pagesVisited + booksPerPage).map((item,index) => {
       const title = item.fields.filter((item)=>{
            return item.code === '245'
        }).map((item)=>{
            let text = '';
            item.subFields.map((item,index)=>{
               
                if(item.name==='Title' || item.name==='Remainder of title'){
                    text += item.value + ' ';
                }
                if(item.name==='Statement of responsibility, etc.'){
                    text += ' by ' + item.value;
                }
                
            })
            return text
        })

       const location = item.fields.filter((item)=>{
            return item.code === '852'
        }).map((item)=>{
            return item.subFields.map((item,index)=>{
                return index === 0? item.value : ', '.concat(item.value)
            })
        })

       const physicalDesc = item.fields.filter((item)=>{
            return item.code === '300'
        }).map((item)=>{
            return item.subFields.map((item,index)=>{
                return index === 0? item.value : ', '.concat(item.value)
            })
        })

        const publication = item.fields.filter((item)=>{
            return item.code === '260'
        }).map((item)=>{
            return item.subFields.map((item,index)=>{
                return  index === 0? item.value : ', '.concat(item.value)
            })
        })

     
        console.log(publication)

        return(
            <div className="record-item" style={!(index & 1) ? { backgroundColor:'rgba(227, 229, 234, 0.415)'}: null}>
                <img alt='book-cover' className='book-cover-img' src={'/uploads/'+item.img}/>
                <div className='record-info-cont'>
                    <NavLink style={{textDecoration:'none',fontWeight:'700',fontSize:'17px'}} to={'/catalog/'+item.id}>{title}</NavLink>
                    <hr style={{marginTop:'5px', opacity:'.3'}}/>
                    {
                        physicalDesc.length > 0 ? <p>Physical Description: <span>{physicalDesc}</span></p> : null
                    }
                    {
                        publication.length > 0  ?  <p>Publication/Distribution: <span>{publication}</span></p> : null
                    }
                    {
                        location.length > 0  ? <p>Location: <span>{location}</span></p> : null
                    }
                   
                </div>
                
            </div>
        )
    });

    
    const pageCount = Math.ceil(allRecords.length / booksPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    const handleInputChange = (event) => {
        const {value} = event.target;
        setSearchInput(value);
    }


    const searchBook = () => {
        if(searchInput!== ''){
          let result = [];
          let data = new Set();
          constAllRecords.map((item)=>{
                item.fields.map((fitem)=>{
                    fitem.subFields.map((hitem)=>{
                        if(hitem.value.toLowerCase().includes(searchInput)){
                            data.add(item.id)
                        }
                    })
                })
           })



           data.forEach(element => {
            constAllRecords.map((item)=>{
                    if(item.id === element){
                        result.push(item)
                    }
                })
           });

           setAllRecords([...result])
      
        }else{
            setAllRecords([...constAllRecords]);
        }
            
    }



    return(
        <div className='content-cont'>
            <div className="records-simple-search-cont">
                <input type='text' className="records-simple-search-input" onChange={handleInputChange}/>
                <button className="records-simple-search-btn" onClick={searchBook}>Search</button>
            </div>
            <div className="records-cont">
                { displayBooks }
            </div>
            <ReactPaginate
                previousLabel={"Prev"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
            />
        </div>
    )
}