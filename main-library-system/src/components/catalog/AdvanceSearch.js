import { useState } from "react";
import Axios from 'axios';
import { NavLink } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { removeDuplicateObjectFromArray, convertData } from '../../data/Frameworks';


export default function AdvanceSearch(){
    const [itemTypeArray, setItemTypeArray] = useState([]);
    const [date, setDate] = useState({
        from: '',
        to: ''
    });
    const [language,setLanguage] = useState('All');
    const [searchArray, setSearchArray] = useState([
        { 
            keyword: 'Subject',
            operator: 'or',
            value: ''
        }
    ]);
    const [searchFlag, setSearchFlag] = useState(false);

    const languages = ['All','English','Filipino'];
    const keyWords = ['Subject','Title','Author','Publisher','Standard number'];
    const operators = ['and','or','not'];
    const itemTypes = ['Journal','Reference','E-Journal','Multimedia','Magazine','Fiction','E-book','Filipiniana','Research Paper','Series','Atlas','Computer File'];
    const searchObject = {
        keyword: 'Subject',
        operator: 'and',
        value: ''
    }



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


    const addSearchItem = () => {
       setSearchArray(prev => [...prev,searchObject]);
    }
    const removeSearchItem = (event, index) => {
        setSearchArray([
            ...searchArray.slice(0,index),
            ...searchArray.slice(index+1, searchArray.length)
        ])
    }

    const handleChange = (event,index)=>{
        const {value, name } = event.target;
        
        if(name === 'input'){
            searchArray[index].value = value;
            setSearchArray(searchArray);
        }
        if(name === 'operators'){
            searchArray[index].operator = value
            setSearchArray(searchArray);
        }
        if(name === "keywords"){
            searchArray[index].keyword = value;
            setSearchArray(searchArray);
        }

        if(name === 'from'){
            date.from = value;
            setDate(date)
            console.log(date)
            
        }
        if(name === 'to'){
            date.to = value;
            setDate(date)
            console.log(date)
        }

        if(name === 'language'){
            setLanguage(value);
        }


       
    }

    const addCheckboxItem = (event)=>{
        const {value} = event.target;
        const index = itemTypeArray?.indexOf(value);
        if(index < 0){
            setItemTypeArray(prev => {
                return ([
                    ...prev,
                    value
                ])
                
            })
        }else{
            let res = itemTypeArray;
            res.splice(index,1);
            setItemTypeArray([...res]);
        }   

    }


    const curDate = new Date();
    const curYear = curDate.getFullYear();
    const minYear = 1980;


    const searchBook = ()=>{

    
       
        if(date.from <= curYear && date.from >= minYear && date.to <= curYear && date.to >= minYear){
            Axios.post('http://localhost:3030/search-book',{
                itemTypeArray: itemTypeArray,
                date: date,
                language: language,
                searchArray: searchArray
    
            }).then((response)=>{
                if(response){
                    const data = convertData(removeDuplicateObjectFromArray(response?.data?.result, 'book_id'),response?.data?.result);
                    setAllRecords([...data]);
                    setConstAllRecords([...data]);
                    setSearchFlag(true);
                }
            }).then((response)=>{
                console.log(response);
            })
        }else{
            alert("Dates must be within the range: " + minYear.toString() +" - "+curYear);
        }

       
    }




    return(
        
        <div className='content-cont'>
            {
                !searchFlag ?
                <div style={{padding:'2pc',paddingBottom:'20pc'}}>
                    <h1>Search for</h1>
                    <hr/>
                    <div style={{paddingTop:"2pc"}}>
                        {
                            searchArray.map((fitem,index)=>{
                                return(
                                    <>
                                    {
                                        index > 0 ?
                                        <select className="advance-search-select" name="operators" onChange={event => handleChange(event,index)}>
                                            {
                                                operators.map((item)=>{
                                                    return <option key={item}>{item}</option>
                                                })
                                            }
                                        </select> : null
                                    }
                                    <select className="advance-search-select" name="keywords" onChange={event => handleChange(event,index)}>
                                            {
                                                keyWords.map((item)=>{
                                                    return <option key={item} >{item}</option>
                                                })
                                            }
                                    </select>
                                    <input className="advance-search-input" name="input" type='text' onChange={event => handleChange(event,index)}></input>
                                    {
                                        index > 0 ? 
                                        <button  className="advance-search-remove-btn" onClick={event => removeSearchItem(event,index)} >Remove</button>
                                        : null
                                    }
                                    <br/>
                                    </>
                                )
                            })
                            
                        }  
                        <button className="advance-search-add-btn" onClick={addSearchItem }>Add</button>
                    </div>
                    <div className="item-type-main-cont" >
                        <h4 style={{margin:'0',marginTop:'2pc'}}>ITEM TYPE</h4>
                        <hr/>
                        <div className="item-type-cont">
                            {
                                itemTypes.map((item)=>{
                                    return <div className="checkbox-cont">
                                        <input type="checkbox" id={item} onChange={ addCheckboxItem }  value={item}/>
                                        <label for={item}>{item}</label>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    <div className="bottom-cont">
                        <div>
                            <h4 style={{margin:'0',marginTop:'2pc'}}>Publication Date Range</h4>
                            <hr/>
                            <div style={{marginTop:'1pc'}}>
                                <input className="advance-search-input" type='number' min={minYear} max={curYear}  name='from' onChange={event => handleChange(event,0)}></input>
                                <label>-  </label>
                                <input className="advance-search-input" type='number' min={minYear} max={curYear}  name='to' onChange={event => handleChange(event,0)}></input>
                            </div>
                        </div>
                        <div>
                            <h4 style={{margin:'0',marginTop:'2pc'}}>Language</h4>
                            <hr/>
                            <div  style={{marginTop:'1pc'}}>
                                <select className="advance-search-select" name="language" onChange={event => handleChange(event,0)}>
                                        {
                                            languages.map((item)=>{
                                                return <option key={item} >{item}</option>
                                            })
                                        }
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="search-btn-cont">
                        <button className="advance-search-btn" onClick={searchBook}>Search</button>
                    </div>
                </div>
                :
                <>
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
                </>
            }
        </div>
    )
}