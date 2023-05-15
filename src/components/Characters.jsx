import React from 'react';

const Characters = ( {characters = []} ) => {

    return (

        <div className='row d-flex justify-content-center'>
                {characters.map((item, index) => (
                    <div key={index} className='col-lg-3 col-md-6 col-sm-6 mb-4' style={{minWidth: 300}}>
                        <div className='card-header border-5 border-info'  style={{minHeight: 450}}>
                            <img className='card-img-top rounded' src={item.image} alt='' ></img>
                            <div className='card-body'>
                                <h5 className='card-title'>{item.name}</h5>
                                <hr />
                                <p className='card-subtitle mb-2 text-muted'>Specie: {item.species}</p>
                                <p className='card-subtitle mb-2 text-muted'>Location: {item.location.name}</p>
                            </div>
                        </div>
                    </div>                   
                ))}
        </div>
    )
};

export default Characters;