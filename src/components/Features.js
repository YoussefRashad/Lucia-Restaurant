import React from 'react'


function Features({ image, info, index}) {
    const commonStyle = { fontSize: "16px", color: "white", textAlign: "center"}
    const borderRadius = { borderRadius: '10%' }
    
    const getImage = ()=>{
        return(
            <div className="col-md-6 mb-sm-2 mb-2 shadowItemWithoutBox">
                <img src={image} alt="Bangalore Metro" style={borderRadius} width="100%" height="400px" />
            </div>
        );
    }
    
    const getData = ()=>{
        return(
            <div className="col-md-6 mb-sm-2 mb-2 shadowItemWithoutBox" style={{ backgroundColor: '#000', borderRadius: '10%'}}>
                <p style={{ marginTop: "90px" }}>{info}</p>
            </div>
        );
    }

    const sorted = ()=>{
        if(index%2){
            return(
                <>
                    {getImage()}
                    {getData()}
                </>
            );
        }
        return (
            <>
                {getData()}
                {getImage()}
            </>
        );
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
