import React from 'react'

function Shipping() {
    return (
        <>
            <section class="main">
                <div class="top">
                    <p>- Order your items -</p>
                </div>
                <div class="shipment-details">
                    <div class="shipment">
                        <h2>Shipment Details</h2>
                        <p>Please check your items and confirm it</p>
                        <table>
                            <tr>
                                <td class="widder-td">Nike Flex Runner</td>
                                <td class="widder-td2">1</td>
                                <td>$380.99</td>
                            </tr>
                            <tr>
                                <td class="widder-td">Nike black track pant</td>
                                <td class="widder-td2">2</td>
                                <td>$124.99</td>
                            </tr>
               
                            <tr class="total">
                                <td class="widder-td">Total Price</td>
                                <td class="widder-td2">3</td>
                                <td>$649.97</td>
                            </tr>
                        </table>

                    </div>
                    <div class="details">
                        <form action="">
                            <label for="fullName">Full Name<br></br></label>
                            <input type="text" placeholder="Enter Recipient's name" name="fullName" required/><br></br>
                            <label for="phone">Phone Number <br></br></label>
                            <input type="tel" placeholder="Enter Phone Number" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/><br></br>
                            <label for="Address">Street address or P.O. Box<br></br></label>
                            <input type="text" placeholder="Enter Street address or P.O. Box" name="Address" required/><br/><br/>
                            <label for="pincode">PIN Code <br></br></label>
                            <input type="tel" placeholder="Enter Pin Code" name="pincode" pattern="[0-9]{6}" required/><br></br>
                            <label for="Address2">Apt, suite, unit, building, floor, etc.<br></br></label>
                            <input type="text" placeholder="Enter Apt, suite, unit, building, floor, etc." name="Address2" required/><br></br>
                            <label for="city">City <br></br></label>
                            <input type="text" placeholder="Enter City" name="Address" required/><br></br>
                            <label for="State">State<br></br></label>
                            <input type="text" placeholder="Enter State" name="State" required/><br></br>
                            <button>SUBMIT</button>
                        </form>
                    </div>
                </div> 
            </section>
        </>
    )
}

export default Shipping







