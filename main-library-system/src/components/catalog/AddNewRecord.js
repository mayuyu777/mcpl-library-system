import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { marcRecordTemplate } from '../../data/Frameworks';

export default function AddNewRecord(){

    const [selectFramework, setSelectFramework] = useState('Default Framework');
    const [showFields, setShowFields] = useState([]);


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


    return(
        <div className='content-cont'>
            <div className='content-button-cont'>
                <select className='rec-framework' name='frameworks' id='frameworks' onChange={changeFramework}>
                    {
                        frameworks?.map((item) => {
                            return <option key={item.id} value={item.name}>{item.name}</option>
                        })
                    }
                </select>
                <div className='right-buttons'>
                    <button className='save-rec-button' name="save-record">Save Record</button>
                    <button className='upload-img-button' name='upload-image'>Upload Image</button>
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
                    marcRecordTemplate?.map((item)=>{
                        console.log(item.tab);

                        const fields = item.fields?.filter((item)=>{
                           return item.frameworks?.find((item)=>{
                            return item === selectFramework
                           })
                        })

                        return(
  
                            <TabPanel >
                                    {
                                        fields?.map((item)=>{
                                            const index = showFields?.indexOf(item.name);
                                            return (
                                                <>
                                                    <span>
                                                        <label style={{fontWeight:'500'}}>{item.code + " "}</label>
                                                        {
                                                            item.indicators?.map((item)=>{
                                                                return <input name={item.name} className='indicators' type="text" maxLength='1' defaultValue=''/>
                                                            })
                                                        }
                                                        <button onClick={toggleField} name={item.name} className='text-blue-btn'>{" - " +item.name}</button>
                                                    </span><br/>
                                                    {
                                                        index >= 0 ?
                                                        item.subFields?.map((item)=>{
                                                            return(
                                                                <>
                                                                    <span>
                                                                        <input name={item.code} className='subField-code' type='text' maxLength='1' style={{fontSize:'9px', marginLeft:'2pc'}} defaultValue={item.code}/>
                                                                        <label style={{fontSize:'11px'}}>{item.name}</label>
                                                                        <input style={{fontSize:'12px'}} type='text' name={item.name} className='subField-input' defaultValue={item.value} />
                                                                    </span><br/>
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