import React from "react";

const ItemsListContainer = ({greeting}) => {

  return  <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="alert alert-danger text-center">
                    {greeting}
                </div>
            </div>
        </div>
    </div>


}


export default ItemsListContainer