import React from "react";
import Navbar from "./Navbar";
function Home() {
    const [count, setCount] = React.useState(0)
    function AddProducts() {
        setCount(count+1);
    }
    function RemoveProducts(id) {
        if(count>0){
            setCount(count-1);
        }
    }
    return (
        <div>
             <Navbar/>
            <div className="row">
                <div className="d-flex justify-content-end"><button type="submit" onClick={Home}>Cart {count} </button></div>
                    <div className="col-md-1"></div>
                    <div className="col">
                        <img src="cp1.jpg" style={{height:"320px", width:"300px"}} />
                        <h4 className="my-1 mx-5" style={{textAlign:"center", marginRight:"-10px"}}>Asprin</h4>
                        <p className="mx-5">Id:</p>
                        <p className="mx-5">Manufacture Date:</p>
                        <p className="mx-5">Expiry Date:</p>
                        <p className="mx-5">Price:</p>
                        <p className="mx-5">Quantity:</p>
                        <p className="mx-5">Stock:</p>
                        <div class="btn-group" role="group">
                            <button type="button" class="btn btn-danger rounded-circle" onClick={RemoveProducts}>-</button>
                            <button type="button" class="btn btn-primary mx-1">Add Cart</button>
                            <button type="button" class="btn btn-success rounded-circle" onClick={AddProducts}>+</button>
                        </div>
                        <div class="btn-group" role="group">
                            <button type="button" class="btn btn-danger rounded-circle" onClick={RemoveProducts}>-</button>
                            <button type="button" class="btn btn-primary mx-1">Buy</button>
                            <button type="button" class="btn btn-success rounded-circle" onClick={AddProducts}>+</button>
                        </div>
                    </div>
                    <div className="col">
                        <img src="cp1.jpg" style={{height:"320px", width:"300px"}} />
                        <h4 className="my-1 mx-5" style={{textAlign:"center", marginRight:"-10px"}}>Asprin</h4>
                        <p className="mx-5">Id:</p>
                        <p className="mx-5">Manufacture Date:</p>
                        <p className="mx-5">Expiry Date:</p>
                        <p className="mx-5">Price:</p>
                        <p className="mx-5">Quantity:</p>
                        <p className="mx-5">Stock:</p>
                        <div class="btn-group" role="group">
                            <button type="button" class="btn btn-danger rounded-circle" onClick={RemoveProducts}>-</button>
                            <button type="button" class="btn btn-primary mx-1">Add Cart</button>
                            <button type="button" class="btn btn-success rounded-circle" onClick={AddProducts}>+</button>
 
                        </div>
                        <div class="btn-group" role="group">
                            <button type="button" class="btn btn-danger rounded-circle" onClick={RemoveProducts}>-</button>
                            <button type="button" class="btn btn-primary mx-1">Buy</button>
                            <button type="button" class="btn btn-success rounded-circle" onClick={AddProducts}>+</button>
 
                        </div>
                    </div>
                    <div className="col">
                        <img src="cp1.jpg" style={{height:"320px", width:"300px"}} />
                        <h4 className="my-1 mx-5" style={{textAlign:"center", marginRight:"-10px"}}>Asprin</h4>
                        <p className="mx-5">Id:</p>
                        <p className="mx-5">Manufacture Date:</p>
                        <p className="mx-5">Expiry Date:</p>
                        <p className="mx-5">Price:</p>
                        <p className="mx-5">Quantity:</p>
                        <p className="mx-5">Stock:</p>
                        <div class="btn-group" role="group">
                            <button type="button" class="btn btn-danger rounded-circle" onClick={RemoveProducts}>-</button>
                            <button type="button" class="btn btn-primary mx-1">Add Cart</button>
                            <button type="button" class="btn btn-success rounded-circle" onClick={AddProducts}>+</button>
                           
                        </div>
                        <div class="btn-group" role="group">
                            <button type="button" class="btn btn-danger rounded-circle" onClick={RemoveProducts}>-</button>
                            <button type="button" class="btn btn-primary mx-1">Buy</button>
                            <button type="button" class="btn btn-success rounded-circle" onClick={AddProducts}>+</button>
                           
                        </div>
 
                    </div>
                </div>
            </div>
    )
}
export default Home