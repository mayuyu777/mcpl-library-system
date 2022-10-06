export default function ViewAllRecord(){
    return(
        <div className='content-cont'>
            <div className="records-simple-search-cont">
                <input type='text' />
                <button>Search</button>
            </div>

            <div className="records-cont">
                <div className="record-item">
                    <div className='record-info-cont'>
                        <h3 style={{margin:'0'}}>Title of the Book</h3>
                        <p style={{fontSize:"11.5px", margin:'0'}}>hfhwoef hfoiwehfwiefh ehfeiowfhwoif efwuegfw efjpiewe fwioefhweofihwf fhiowefh wfhoiwf wu fiqfioqfewfwef regerger rgergeg rbrege egregrer ergergerg</p>
                        <p style={{fontSize:"11.5px"}}>Date</p>
                        <p style={{fontSize:"11.5px"}}>Availability</p>
                        <div>
                            <button>Place Hold</button>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                    <img className='book-cover-img' src={require('../../../src/assets/uploads/Andromeda-Galaxy-Desktop-Wallpaper.jpg')}/>
                </div>
            </div>
        </div>
    )
}