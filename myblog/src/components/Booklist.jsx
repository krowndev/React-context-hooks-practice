import React, { Component } from 'react';

class BooksList extends Component {
    state = {  } 
    render() { 
        return (
            <div className='container my-5'>
                <div className="card shadow m-3">
                    <div className='card-body'>
                        Book1
                    </div>
                </div>
                <div className="card shadow m-3">
                    <div className='card-body'>
                        Book2
                    </div>
                </div>
                <div className="card shadow m-3">
                    <div className='card-body'>
                        Book3
                    </div>
                </div>
            </div>
        );
    }
}
 
export default BooksList;