import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { marcRecordTemplate } from '../../data/Frameworks';
import Axios from 'axios';


export default function AddNewRecord(){

    const [selectFramework, setSelectFramework] = useState('Default Framework');
    const [showFields, setShowFields] = useState(['']);
    const [copies, setCopies] = useState(0);
    const [imgCover,setImgCover] = useState([]);


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
            name:'CD/DVD'
        },{
            id:7774,
            name:'Serials'
        }
    ]


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
        setImgCover(prev => (event.target.files[0]));

        console.log(event.target.files[0])
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


    const onSaveRecord = () =>{
        const formData = new FormData();
        formData.append("imgCover",imgCover);

        const filename = formData.get('imgCover').name;

        try{
         
            Axios.post('http://localhost:3030/addNewRecord',{
                fields: fieldVals,
                copies: copies,
                bookCover: filename
            }).then((response)=>{

                console.log(response)
                if(response.data?.message){
                    
                    Axios.post('http://localhost:3030/uploadBookCover',formData,{
                        headers: { "Content-Type": "multipart/form-data" } 
                    }).then((res)=>{
                        console.log(res)
                    }).then((res)=>{
                        console.log(res)
                    })
                    alert(response.data.message)
                }

                if(response.data?.errors){
                    response.data?.errors.map((item)=>{
                        alert(item);
                    })
                }
            })
        }catch(err){
            console.log(err)
        }

    }


    return(
        <div className='content-cont'>
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
                        <input type="file" accept="image/*" className='upload-img-button' name='upload-image' defaultValue={imgCover} onChange={changeCover}/><br/>
                        <input type='number' min='0' defaultValue={copies} style={{width:'15%'}} onChange={changeCopies} />
                        <label style={{fontSize:'13px'}}> Copies</label>
                    </div>
                </div>
                <div className='right-buttons'>
                    <button className='save-rec-button' name="save-record" onClick={onSaveRecord}>Save Record</button>
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
                                            return (
                                                <>
                                                    <span>
                                                        <label style={{fontWeight:'500'}}>{item.code + " "}</label>
                                                        {
                                                            item.indicators?.map((item,index)=>{
                                                                return <input name={item.name} className='indicators' type="text" maxLength='1' defaultValue='' onChange={event => changeSubfieldIndicatorVal(event,tabIndex,fieldIndex,index)}/>
                                                            })
                                                        }
                                                        <button onClick={toggleField} name={item.name} className='text-blue-btn'>{" - " +item.name}</button>
                                                    </span><br/>
                                                    {
                                                        itemIndex >= 0 ?
                                                        item.subFields?.map((item,index)=>{
                                                            return(
                                                                <>
                                                                    <div className='subfield-cont'>
                                                                        <input name={item.code} className='subfield-code' type='text' maxLength='1' style={{fontSize:'12px',marginLeft:'3%'}} defaultValue={item.code} onChange={event =>  changeSubfieldCodeVal(event,tabIndex,fieldIndex,index) }/>
                                                                        <label style={{fontSize:'12px', textAlign:'right',width:'20%',color:'rgb(19, 19, 155)'}}>{item.name}</label>
                                                                    { 
                                                                        !item?.options ? <input style={{fontSize:'12px'}} type='text' name={item.name} className='subfield-input' defaultValue={item.value} onChange={event => changeSubfieldInputVal(event,tabIndex,fieldIndex,index)} /> 
                                                                        : 
                                                                        <>
                                                                            <select className='subfield-input'  name={item.name} style={{height:'2pc'}} onChange={event => changeSubfieldInputVal(event,tabIndex,fieldIndex,index)} >
                                                                                {
                                                                                    item.options.map((item)=>{
                                                                                        return <option key={item} >{item}</option>
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
       
           
        </div>
    )
}