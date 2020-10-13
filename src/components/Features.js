import React from 'react'


function Features(props) {
    const commonStyle = { fontSize: "16px", color: "white", textAlign: "center"}
    const borderRadius = { borderRadius: '10%' }
    
    const image = ()=>{
        return(
            <div className="col-md-6">
                <img src={props.image} alt="Bangalore Metro" style={borderRadius} width="100%" height="400px" />
            </div>
        );
    }
    
    const data = ()=>{
        return(
            <div className="col-md-6" style={{ backgroundColor: '#000', borderRadius: '10%'}}>
                <p style={{ marginTop: "90px" }}>{props.db}</p>
            </div>
        );
    }
    const sorted = ()=>{
        if(props.index%2){
            return(
                <>
                    {image()}
                    {data()}
                </>
            );
        }
        else{
            return (
                <>
                    {data()}
                    {image()}
                </>
            );
        }
    }
    return (
        <>
            <div className="container mb-5 pt-5">
                <div className="row" style={commonStyle}>
                    {sorted()}
                </div>
            </div>
        </>
    )
}

export default Features
