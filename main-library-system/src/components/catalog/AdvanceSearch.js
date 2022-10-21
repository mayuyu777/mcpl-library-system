import { useState } from "react";
import Axios from 'axios';


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
            operator: 'and',
            value: ''
        }
    ]);
    // const [searchFlag, setSearchFlag] = useState(false);

    const languages = ['All','English','Filipino'];
    const keyWords = ['Subject','Title','Author','Publisher','Standard number'];
    const operators = ['and','or','not'];
    const itemTypes = ['Journal','Reference','E-Journal','Multimedia','Magazine','Fiction','E-book','Filipiniana','Research Paper','Series','Atlas','Computer File'];
    const searchObject = {
        keyword: 'Subject',
        operator: 'and',
        value: ''
    }


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
                console.log(response);
            }).then((response)=>{
                console.log(response);
            })
        }else{
            alert("Dates must be within the range: " + minYear.toString() +" - "+curYear);
        }

       
    }




    return(
        <div className='content-cont'>
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
        </div>
    )
}