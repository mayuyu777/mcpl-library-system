import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { removeDuplicateObjectFromArray, convertData } from '../../data/Frameworks';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useNavigate } from "react-router-dom";
import 'react-tabs/style/react-tabs.css';
import { marcRecordTemplate }  from '../../data/Frameworks';
import Axios from 'axios';


export default function DisplayBookDetails(){
    const { id } = useParams();
    const [book, setBook] = useState([{}]);
    const [option,setOption] = useState(false);


    const [selectFramework, setSelectFramework] = useState('Default Framework');
    const [showFields, setShowFields] = useState(['']);
    const [copies, setCopies] = useState(0);
    const [imgCover,setImgCover] = useState([]);
    const [imgFlag,setImgFlag] = useState(false);


    const navigate = useNavigate();

    const onlyFields = (value) => {
        return marcRecordTemplate.map(({tab,...rest}) =>{
            return rest;
        }).map(({fields,...rest})=>{
            return fields;
        }).map((item)=>{
            return item.filter((item)=>{
                
                return item.frameworks.find(((item)=>{
                    return item === value;
                }));
            })
        })
    }

const [fieldVals, setFieldVals] = useState(onlyFields(selectFramework));


const frameworks = [
    {
        id:7771,
        name:'Default Framework'
    },{
        id:7772,
        name:'Books/Workbooks'
    },{
        id:7773,
        name:'CD/DVD General'
    },{
        id:7774,
        name:'Serials'
    }
]



    const bookInfo = [
        {
            subfield: ['Title','Remainder of title'],
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

    const locationInfo = [
        {
            subfield: ['Collection Code'],
            text: 'Collection Code'
        },
        {
            subfield: ['Current Location'],
            text: 'Current Location'
        },
        {
            subfield: ['Shelving Location'],
            text: 'Shelving Location'
        }
        
    ]



    useEffect(()=>{
        Axios.post('http://localhost:3030/getBookDet',{id:id}).then((response)=>{

        if(response?.data?.result){
            const data = convertData(removeDuplicateObjectFromArray(response?.data?.result, 'book_id'),response?.data?.result);

            setBook([...data]);
            setCopies(data[0].copies);
            

           const newData = fieldVals.map((item)=>{
                return item.map((fitem)=>{
                    const field = data[0].fields.find((item)=>{
                        return item.code === fitem.code;
                    })


                   if(field){
                    
                        fitem.id = field.id;
                      if(fitem?.indicators){
                        fitem.indicators[0] = field.indicator1;
                        fitem.indicators[1] = field.indicator2;
                      }
                       field.subFields.map((item)=>{
                            return fitem.subFields.map((fitem)=>{
                                if(fitem.name === item.name){
                                   
                                    fitem.id = item.id;
                                    fitem.value = item.value;
    
                                }

                                return fitem;
                            })
                        })
                   }
                   return fitem;
                })
           })
            
           setFieldVals(newData);
        }else{
            navigate('/')
        }

        })
    },[])


    
const changeFramework = (event) =>{
    const {value} = event.target;

    setSelectFramework(value);
    
    setFieldVals(onlyFields(value));

}

const changeCopies = (event) =>{
    const {value} = event.target;

    setCopies(value);

}

const changeCover = (event)=>{  
    const fileName = event.target.files[0].name;
    const extension = fileName.split('.').pop();
    const allowedExtensions = ['png','jpg','jpeg'];

    if(allowedExtensions.includes(extension)){
        setImgFlag(true);  
    }else{
        setImgFlag(false);
    }
    setImgCover(prev => (event.target.files[0])); 
   
}

const toggleField = (event) =>{
    const {name} = event.target;
    const index = showFields?.indexOf(name);
    if(index < 0){
        setShowFields(prev => {
            return ([
                ...prev,
                name
            ])
            
        })
    }else{
        let res = showFields;
        res.splice(index,1);
        setShowFields([...res]);
    }   
}


const changeSubfieldInputVal = (event,tabIndex,findex,index)=>{
    const {value} = event.target;
    fieldVals[tabIndex][findex].subFields[index].value= value;

    setFieldVals(fieldVals);
    
}
const changeSubfieldCodeVal = (event,tabIndex,findex,index)=>{
    const {value} = event.target;
    fieldVals[tabIndex][findex].subFields[index].code= value;

    setFieldVals(fieldVals);
    
}

const changeSubfieldIndicatorVal = (event,tabIndex,findex,index)=>{
    const {value} = event.target;
    fieldVals[tabIndex][findex].indicators[index]= value;

    setFieldVals(fieldVals);
    
}



    const deleteRecord = ()=>{
        Axios.post('http://localhost:3030/delete-record',{id:id}).then((response)=>{
            if(response?.data?.result){
                navigate('/catalog/view-all-rec');
            }
            
        })
    }

    const editRecord = ()=>{
       
       setOption(prev => !prev);
        
    }


    const onSaveRecord = () =>{
        const formData = new FormData();
        formData.append("imgCover",imgCover);
        formData.append('id',id);

        const filename = formData.get('imgCover').name;
        
        let flag = true;

        const isRequiredFieldsFilled = () => {
            fieldVals.map((item)=>{
                item.map((item)=>{
                   if(item.isRequired){
                        item.subFields.map((item)=>{
                            if(item.isRequired && item.value === ''){
                                flag = false;
                            } 
                        })
                   }
                })
            })
        }

        isRequiredFieldsFilled()


        if(flag && copies > 0){

            try{
         
                Axios.post('http://localhost:3030/updateRecord',{
                    fields: fieldVals,
                    copies: copies,
                    bookid: id
                }).then((response)=>{
    
                    if(response.data?.message && filename && imgFlag){
                        
                        Axios.post('http://localhost:3030/uploadBookCover',formData,{
                            headers: { "Content-Type": "multipart/form-data" } 
                        }).then((res)=>{
                            alert(res.data?.message);
                        }).then((res)=>{
                            console.log(res)
                        })
                        
                    }

                    if(filename && !imgFlag){
                        alert('Please upload PNG/JPEG/JPG file.');
                    }
    
                    if(response.data?.errors){
                        response.data?.errors.map((item)=>{
                            alert(item);
                        })
                    }

                    alert(response.data?.message);

                    window.location.reload();

                    
                }).then((response)=>{
                    console.log(response)
                })

            }catch(err){
                console.log(err)
            }

        }else{
            if(!flag){
                alert('Please fill in required fields');
            }
            
            if(copies <= 0){
                alert("No. of copies should be greater than zero");
            }
        }
        
        

    }



    return(
        <>
        <div className='content-cont'>
        {
            !option? 
                <div style={{paddingBottom:'15pc'}}>
                    <div className="upper-cont-main">
                        <div className="upper-cont">
                            <img alt="img" src={'/uploads/'+book[0].img}/>
                            <div style={{width:'65%'}}>
                                <div className="info-text-cont">
                                    {
                                        bookInfo?.map((item)=>{
                                            let text = '';
                                            let flag = false;
                                            let name = ''
                                

                                            item?.subfield?.map((fitem,index)=>{
                                                const data = book[0]?.fields?.map((item)=>{
                                                    item?.subFields?.map((item)=>{
                                                        name = item.name;
                                                        if(item.name === fitem){
                                                        text+= (index === 0? item.value : ( item.name === 'Title' ||'Remainder of title'?  item.value : ', '.concat(item.value))) + ' ';
                                                        flag = true;
                                                        }
                                                    })
                                                })

                                            })

                                            return flag? (item.text === 'Title:'? <h3>{item.text} <span style={{fontWeight:'bold',fontSize:'19px'}}>{text}</span></h3> : <h3>{item.text} <span>{text}</span></h3>) : null;
                                        })
                                    }
                                </div>
                                <h4>No. of copies: <span>{book[0].copies}</span></h4>
                                <div className="rec-location-cont">
                                <table>
                                    <tr>
                                        {/* <th>QR Code</th> */}
                                        {
                                            locationInfo.map((item)=>{
                                                return <th>{item.text}</th>
                                            })
                                        }
                                    </tr>
                                    <tr>
                                        {/* <td>HHEUF98324</td> */}
                                        {
                                            locationInfo?.map((item)=>{
                                                let text = '';
                                                let flag = false;
                                                let name = ''


                                                item?.subfield?.map((fitem,index)=>{
                                                    const data = book[0]?.fields?.map((item)=>{
                                                        item?.subFields?.map((item)=>{
                                                            name = item.name;
                                                            if(item.name === fitem){
                                                            text+= (index === 0? item.value : ', '.concat(item.value));
                                                            flag = true;
                                                            }
                                                        })
                                                    })

                                                })

                                                return flag?  <td>{text}</td> : null;
                                            })
                                        }
                                    
                                    </tr>
                                </table>
                            </div>
                            </div>
                        </div>
                        <div className="record-btn-cont">
                                <button className="record-edit-btn" onClick={editRecord} >Edit Record</button><br/>
                                <button className="record-delete-btn" onClick={deleteRecord}>Delete Record</button>
                        </div>
                    </div>
                    <div className="marc-view-cont">
                        <hr/>
                        <table>
                            {
                                book[0]?.fields?.sort((a,b)=>{
                                    if (a.code < b.code) {
                                        return -1;
                                    }
                                    if (a.code > b.code) {
                                        return 1;
                                    }
                                    return 0;
                                }).map((item)=>{
                                    return(
                                        <>
                                        <tr>
                                            <th>{item.code + " "+ (item?.indicator1 == null? "":item?.indicator1) + (item?.indicator2 == null? "":item?.indicator2) +" - "+ item.name}</th>
                                            <th></th>
                                        </tr>
                                        
                                        {
                                            item.subFields.map((item)=>{
                                                return <tr>
                                                            <td>{item.name}</td>
                                                            <td>{item.value}</td>
                                                        </tr>
                                            })
                                        }
                                        </>
                                    )
                                })
                            }
                        </table>
                
                    </div>
                    
                    </div>
                :

                <>
                <div className='content-button-cont'>
                <div>
                    <select className='rec-framework' name='frameworks' id='frameworks' onChange={changeFramework}>
                        {
                            frameworks?.map((item) => {
                                return <option key={item.id} value={item.name}>{item.name}</option>
                            })
                        }
                    </select>

                    <div>
                        <input type="file"  accept="image/*" className='upload-img-button' name='upload-image' defaultValue={imgCover} onChange={changeCover}/><br/>
                        <input type='number' min='0' defaultValue={copies} style={{width:'15%'}} onChange={changeCopies} />
                        <label style={{fontSize:'13px'}}> Copies</label>
                    </div>
                </div>
                <div className='right-buttons'>
                    <button className='save-rec-button' onClick={editRecord}>Cancel</button>
                    <button className='save-rec-button' name="save-record" onClick={onSaveRecord} style={{width:'7pc',marginLeft:'2pc'}}>Save Change</button>
                </div>
            </div>

            
            <Tabs defaultIndex={0} className='tab-cont'>

                <TabList>
                {
                    marcRecordTemplate?.map((item)=>{
                        return(
                            <Tab>{item.tab}</Tab>
                        )
                    })
                }
                </TabList>
        
                {
                    marcRecordTemplate?.map((item,index)=>{

                        const tabIndex = index;
                        const fields = item.fields?.filter((item)=>{
                           return item.frameworks?.find((item)=>{
                            return item === selectFramework
                           })
                        })

                        return(
  
                            <TabPanel >
                                    {
                                        fields?.map((item,index)=>{
                                            const itemIndex = showFields?.indexOf(item.name);
                                            const fieldIndex = index;
                                            const isRequired = item.isRequired;



                                            return (
                                                <>
                                                    <span>
                                                        <label style={{fontWeight:'500'}}>{item.code + " "}</label>
                                                        {
                                                            item.indicators?.map((item,index)=>{
                                                                return <input  className='indicators' type="text" maxLength='1' defaultValue={item} onChange={event => changeSubfieldIndicatorVal(event,tabIndex,fieldIndex,index)}/>
                                                            })
                                                        }
                                                        <button onClick={toggleField} name={item.name} className='text-blue-btn'>{" - " +item.name}</button>
                                                        {isRequired? <span style={{color:"red",fontSize:'15px'}}> *</span>: null}
                                                    </span><br/>
                                                    {
                                                        itemIndex >= 0 ?
                                                        item.subFields?.map((item,index)=>{
                                                            return(
                                                                <>
                                                                    <div className='subfield-cont'>
                                                                        <input name={item.code} className='subfield-code' type='text' maxLength='1' style={{fontSize:'12px',marginLeft:'3%'}} defaultValue={item.code} onChange={event =>  changeSubfieldCodeVal(event,tabIndex,fieldIndex,index) }/>
                                                                        <span style={{color:"red",fontSize:'10px'}} ><label style={{fontSize:'12px', textAlign:'right',width:'20%',color:'rgb(19, 19, 155)'}}>{item.name}</label>{item.isRequired ? ' (required)' : ''}</span>
                                                                    { 
                                                                        !item?.options ? <textarea rows="1" cols="50" style={{fontSize:'12px'}} name={item.name} className='subfield-input' defaultValue={item.value} onChange={event => changeSubfieldInputVal(event,tabIndex,fieldIndex,index)} /> 
                                                                        : 
                                                                        <>
                                                                            <select className='subfield-input'  name={item.name} style={{height:'2pc'}} onChange={event => changeSubfieldInputVal(event,tabIndex,fieldIndex,index)} >
                                                                                <option ></option>
                                                                                {
                                                                                    item.options.map((fitem)=>{
                                                                        
                                                                                        return fitem === item.value ? <option key={fitem} selected>{fitem}</option> : <option key={fitem} >{fitem}</option> 
                                                                                    })
                                                                                }
                                                                            </select>
                                                                        </>
                                                                    }
                                                                    </div><br/>
                                                                </>
                                                            )
                                                        }) : <></>
                                                    }
                                                </>
                                            )
                                        })
                                    }       

                                    
                            </TabPanel>

                        )
                    })
                }
                
            </Tabs>
                </>
        }
        </div>
        </>
    )
}