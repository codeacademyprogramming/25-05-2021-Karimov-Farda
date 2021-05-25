import React,{useState} from 'react';

export default function Pizza() {
    for (var j = 0; j < document.getElementsByClassName("card-body").length; j++) {
        document.getElementsByClassName("card-body")[j].setAttribute("data-id", j)
    }
    var arr = [];
    let array = []
    document.querySelectorAll(".card-link").forEach(function calculate(item) {
        item.addEventListener("click", (e) => {
            var dataid = e.target.parentElement.getAttribute("data-id");
            e.preventDefault();
            arr.push(dataid)
            console.log(arr)
            for (let k = 0; k < 1; k++) {
                let table = document.getElementById("table");
                let title = document.getElementsByClassName("card-body")[0].children[0].innerText
                let price = document.getElementsByClassName("card-body")[0].children[2].innerText
                var row = `<tr>
                <td><img src="./assets/imagespic1 5.png"></td>
                <td style="padding:0 0.2rem;">x1</td>
                <td colspan="3" class="productname">
                   ${title}
                   <span class="size"> size : small</span>
                </td>
                <td style="font-weight:bold;padding-left:0.5rem" class="productprice">${price}</td>
            </tr>`
                table.innerHTML += row;
                array.push(table)
                console.log(array)

                let sum = document.getElementById("sum");
                sum.innerHTML = Number(price) * array.length;
                let total = document.querySelector(".basket a");
                total.innerHTML = String(Number(price) * array.length) + "$"
                let amount = document.getElementById("amount");
                amount.innerHTML = array.length;
                if (array.length < 0) { amount.innerHTML = 0 }
            }
        })
    });

    const [count, setCount] = useState(0)
    return (
        <div className="page">
        <div class="sales">
            <h1>Popular dishes</h1>
            <div class="basket">
                <a href="#">0$</a>
                <i onClick={() => {document.getElementById("cart").style.display = "flex"}} class="fas fa-shopping-basket"></i>
                <span id="amount"> 0 </span>
            </div>
            <div class="row" style={{ margin: 0 }}>
                <div class="col-3">
                    <div class="card data" style={{ width: 18 + "rem" }}>
                        <img class="card-img-top" src={process.env.PUBLIC_URL + '/image 26.png'}></img>
                        <div class="card-body" >
                            <h6 class="card-title changed">Quattro formaggi<a href="#" > - 32cm</a></h6>
                            <p class="card-text changed">Dough, Mozzarella, Cheddar, Blue, Parmesan</p>
                            <a href="" class="d-flex pl-5 justify-content-center card-link changed" onClick={(e) => {
                                e.preventDefault(); var dataid = e.target.parentElement.getAttribute("data-id"); for (let k = 0; k < 1; k++) {
                                    let table = document.getElementById("table"); let title = document.getElementsByClassName("card-body")[0].children[0].innerText; let price = document.getElementsByClassName("card-body")[0].children[2].innerText; var row = `<tr>
            <td><img style="width:3rem" src="${process.env.PUBLIC_URL + '/image 26 (1).jpg'}"></td>
            <td style="padding:0 0.2rem;">x1</td>
            <td colspan="3" class="productname">
               ${title}
               <span class="size"> size : small</span>
            </td>
            <td style="font-weight:bold;padding-left:0.5rem" class="productprice">${price}</td>
        </tr>`
                                    table.innerHTML += row;
                                    array.push(table)
                                    console.log(array); let sum = document.getElementById("sum");
                                    sum.innerHTML = Number(price) * array.length;
                                    let total = document.querySelector(".basket a");
                                    total.innerHTML = String(Number(price) * array.length) + "$"
                                    let amount = document.getElementById("amount");
                                    amount.innerHTML = array.length;
                                    if (array.length < 0) { amount.innerHTML = 0 }
                                }
                            }}>19.99</a>

                            <div class="card-header">
                                <h5 class="card-title">Sizes</h5>
                                <p className={'card-text radio'}><input type="radio" name="select" ></input>  small - 20 cm</p>
                                <p class="card-text radio"><input type="radio" name="select" ></input>  medium - 25 cm</p>
                                <p class="card-text radio"><input type="radio" name="select" ></input>  big - 30 cm</p>
                                <button type="button" class="btn btn-warning d-flex justify-content-center">Checkout</button>

                            </div>   </div>
                        <span class="design"></span>
                        <i class="fas fa-shopping-basket" ></i>


                    </div>
                </div>
                <div class="col-3">
                    <div class="card data" style={{ width: 18 + "rem" }}>
                        <img class="card-img-top" src={process.env.PUBLIC_URL + '/image 26 (1).jpg'}></img>
                        <div class="card-body" >
                            <h6 class="card-title changed">Карбонара<a href="#" > - 32cm</a></h6>
                            <p class="card-text changed">Dough, Mozzarella, Cheddar, Blue, Parmesan</p>
                            <a class="d-flex justify-content-center card-link changed" onClick={(e) => {
                                e.preventDefault(); var dataid = e.target.parentElement.getAttribute("data-id"); for (let k = 0; k < 1; k++) {
                                    let table = document.getElementById("table"); let title = document.getElementsByClassName("card-body")[1].children[0].innerText; let price = document.getElementsByClassName("card-body")[1].children[2].innerText; var row = `<tr>
            <td><img style="width:3rem" src="${process.env.PUBLIC_URL + '/image 26 (1).jpg'}"></td>
            <td style="padding:0 0.2rem;">x1</td>
            <td colspan="3" class="productname">
               ${title}
               <span class="size"> size : small</span>
            </td>
            <td style="font-weight:bold;padding-left:0.5rem" class="productprice">${price}</td>
        </tr>`
                                    table.innerHTML += row;
                                    array.push(table)
                                    console.log(array); let sum = document.getElementById("sum");
                                    sum.innerHTML = Number(price) * array.length;
                                    let total = document.querySelector(".basket a");
                                    total.innerHTML = String(Number(price) * array.length) + "$"
                                    let amount = document.getElementById("amount");
                                    amount.innerHTML = array.length;
                                    if (array.length < 0) { amount.innerHTML = 0 }
                                }
                            }} class="d-flex justify-content-center card-link changed">19.99</a>
                            <div class="card-header">
                                <h5 class="card-title">Sizes</h5>
                                <p className={'card-text radio'}><input type="radio" name="select" ></input>  small - 20 cm</p>
                                <p class="card-text radio"><input type="radio" name="select" ></input>  medium - 25 cm</p>
                                <p class="card-text radio"><input type="radio" name="select" ></input>  big - 30 cm</p>
                                <button type="button" class="btn btn-warning d-flex justify-content-center">Checkout</button>

                            </div> </div>
                        <span class="design"></span>
                        <i class="fas fa-shopping-basket" ></i>


                    </div></div>
                <div class="col-3">
                    <div class="card data" style={{ width: 18 + "rem" }}>
                        <img class="card-img-top" src={process.env.PUBLIC_URL + '/image 26 (2).jpg'}></img>
                        <div class="card-body" >
                            <h6 class="card-title changed">Карбонара<a href="#" > - 32cm</a></h6>
                            <p class="card-text changed">Dough, Mozzarella, Cheddar, Blue, Parmesan</p>
                            <a href="#" class="d-flex justify-content-center card-link changed" onClick={(e) => {
                                e.preventDefault(); var dataid = e.target.parentElement.getAttribute("data-id"); for (let k = 0; k < 1; k++) {
                                    let table = document.getElementById("table"); let title = document.getElementsByClassName("card-body")[2].children[0].innerText; let price = document.getElementsByClassName("card-body")[2].children[2].innerText; var row = `<tr>
            <td><img style="width:3rem" src="${process.env.PUBLIC_URL + '/image 26 (1).jpg'}"></td>
            <td style="padding:0 0.2rem;">x1</td>
            <td colspan="3" class="productname">
               ${title}
               <span class="size"> size : small</span>
            </td>
            <td style="font-weight:bold;padding-left:0.5rem" class="productprice">${price}</td>
        </tr>`
                                    table.innerHTML += row;
                                    array.push(table)
                                    console.log(array); let sum = document.getElementById("sum");
                                    sum.innerHTML = Number(price) * array.length;
                                    let total = document.querySelector(".basket a");
                                    total.innerHTML = String(Number(price) * array.length) + "$"
                                    let amount = document.getElementById("amount");
                                    amount.innerHTML = array.length;
                                    if (array.length < 0) { amount.innerHTML = 0 }
                                }
                            }}>19.99</a>
                            <div class="card-header">
                                <h5 class="card-title">Sizes</h5>
                                <p className={'card-text radio'}><input type="radio" name="select" ></input>  small - 20 cm</p>
                                <p class="card-text radio"><input type="radio" name="select" ></input>  medium - 25 cm</p>
                                <p class="card-text radio"><input type="radio" name="select" ></input>  big - 30 cm</p>
                                <button type="button" class="btn btn-warning d-flex justify-content-center">Checkout</button>

                            </div>  </div>
                        <span class="design"></span>
                        <i class="fas fa-shopping-basket" ></i>


                    </div></div>
                 
                <div class="col-3">
                    <div class="card" id="cart" style={{width: 18 + "rem",display:'none' }}>

                        <div class="card-body">
                            <h5 class="card-title">YOUR CART</h5>
                            <table id="table">

                            </table>
                            <h3> Subtotal <a href="#" id="sum"></a></h3>
                            <button type="button" class="btn btn-danger d-flex justify-content-center">Checkout</button>
                        </div>


                    </div></div>
            
            </div>
            <div class="row second-line" style={{ margin: 0 }}>
            <div class="col-3">
                    <div class="card data mb-4" style={{ width: 18 + "rem",zIndex:0  }}>
                        <img class="card-img-top" src={process.env.PUBLIC_URL + '/image 26.jpg'}></img>
                        <div class="card-body" >
                            <h6 class="card-title changed">Quattro formaggi<a href="#" > - 32cm</a></h6>
                            <p class="card-text changed">Dough, Mozzarella, Cheddar, Blue, Parmesan</p>
                            <a href="#" onClick={(e) => {
                                e.preventDefault(); var dataid = e.target.parentElement.getAttribute("data-id"); for (let k = 0; k < 1; k++) {
                                    let table = document.getElementById("table"); let title = document.getElementsByClassName("card-body")[4].children[0].innerText; let price = document.getElementsByClassName("card-body")[4].children[2].innerText; var row = `<tr>
            <td><img style="width:3rem" src="${process.env.PUBLIC_URL + '/image 26 (1).jpg'}"></td>
            <td style="padding:0 0.2rem;">x1</td>
            <td colspan="3" class="productname">
               ${title}
               <span class="size"> size : small</span>
            </td>
            <td style="font-weight:bold;padding-left:0.5rem" class="productprice">${price}</td>
        </tr>`
                                    table.innerHTML += row;
                                    array.push(table)
                                    console.log(array); let sum = document.getElementById("sum");
                                    sum.innerHTML = Number(price) * array.length;
                                    let total = document.querySelector(".basket a");
                                    total.innerHTML = String(Number(price) * array.length) + "$"
                                    let amount = document.getElementById("amount");
                                    amount.innerHTML = array.length;
                                    if (array.length < 0) { amount.innerHTML = 0 }
                                }
                            }} class="d-flex justify-content-center card-link changed">19.99</a>
                            <div class="card-header">
                                <h5 class="card-title">Sizes</h5>
                                <p className={'card-text radio'}><input type="radio" name="select" ></input>  small - 20 cm</p>
                                <p class="card-text radio"><input type="radio" name="select" ></input>  medium - 25 cm</p>
                                <p class="card-text radio"><input type="radio" name="select" ></input>  big - 30 cm</p>
                                <button type="button" class="btn btn-warning d-flex justify-content-center">Checkout</button>

                            </div>   </div>
                        <span class="design"></span>
                        <i onclick="sibling4()" class="fas fa-shopping-basket" ></i>
                    </div>


                </div>
                <div class="col-3">
                    <div class="card data mb-4" style={{ width: 18 + "rem",zIndex:0  }}>
                        <img class="card-img-top" src={process.env.PUBLIC_URL + '/image 26 (3).jpg'}></img>
                        <div class="card-body" >
                            <h6 class="card-title changed">Quattro formaggi<a href="#" > - 32cm</a></h6>
                            <p class="card-text changed">Dough, Mozzarella, Cheddar, Blue, Parmesan</p>
                            <a href="#" onClick={(e) => {
                                e.preventDefault(); var dataid = e.target.parentElement.getAttribute("data-id"); for (let k = 0; k < 1; k++) {
                                    let table = document.getElementById("table"); let title = document.getElementsByClassName("card-body")[4].children[0].innerText; let price = document.getElementsByClassName("card-body")[4].children[2].innerText; var row = `<tr>
            <td><img style="width:3rem" src="${process.env.PUBLIC_URL + '/image 26 (1).jpg'}"></td>
            <td style="padding:0 0.2rem;">x1</td>
            <td colspan="3" class="productname">
               ${title}
               <span class="size"> size : small</span>
            </td>
            <td style="font-weight:bold;padding-left:0.5rem" class="productprice">${price}</td>
        </tr>`
                                    table.innerHTML += row;
                                    array.push(table)
                                    console.log(array); let sum = document.getElementById("sum");
                                    sum.innerHTML = Number(price) * array.length;
                                    let total = document.querySelector(".basket a");
                                    total.innerHTML = String(Number(price) * array.length) + "$"
                                    let amount = document.getElementById("amount");
                                    amount.innerHTML = array.length;
                                    if (array.length < 0) { amount.innerHTML = 0 }
                                }
                            }} class="d-flex justify-content-center card-link changed">19.99</a>
                            <div class="card-header">
                                <h5 class="card-title">Sizes</h5>
                                <p className={'card-text radio'}><input type="radio" name="select" ></input>  small - 20 cm</p>
                                <p class="card-text radio"><input type="radio" name="select" ></input>  medium - 25 cm</p>
                                <p class="card-text radio"><input type="radio" name="select" ></input>  big - 30 cm</p>
                                <button type="button" class="btn btn-warning d-flex justify-content-center">Checkout</button>

                            </div>   </div>
                        <span class="design"></span>
                        <i onclick="sibling4()" class="fas fa-shopping-basket" ></i>
                    </div>


                </div>
                <div class="col-3">
                    <div class="card data mb-4" style={{ width: 18 + "rem",zIndex:0  }}>
                        <img class="card-img-top" src={process.env.PUBLIC_URL + '/image 26 (4).jpg'}></img>
                        <div class="card-body" >
                            <h6 class="card-title changed">Quattro formaggi<a href="#" > - 32cm</a></h6>
                            <p class="card-text changed">Dough, Mozzarella, Cheddar, Blue, Parmesan</p>
                            <a href="#" onClick={(e) => {
                                e.preventDefault(); var dataid = e.target.parentElement.getAttribute("data-id"); for (let k = 0; k < 1; k++) {
                                    let table = document.getElementById("table"); let title = document.getElementsByClassName("card-body")[5].children[0].innerText; let price = document.getElementsByClassName("card-body")[5].children[2].innerText; var row = `<tr>
            <td><img style="width:3rem" src="${process.env.PUBLIC_URL + '/image 26 (1).jpg'}"></td>
            <td style="padding:0 0.2rem;">x1</td>
            <td colspan="3" class="productname">
               ${title}
               <span class="size"> size : small</span>
            </td>
            <td style="font-weight:bold;padding-left:0.5rem" class="productprice">${price}</td>
        </tr>`
                                    table.innerHTML += row;
                                    array.push(table)
                                    console.log(array); let sum = document.getElementById("sum");
                                    sum.innerHTML = Number(price) * array.length;
                                    let total = document.querySelector(".basket a");
                                    total.innerHTML = String(Number(price) * array.length) + "$"
                                    let amount = document.getElementById("amount");
                                    amount.innerHTML = array.length;
                                    if (array.length < 0) { amount.innerHTML = 0 }
                                }
                            }} class="d-flex justify-content-center card-link changed">19.99</a>
                            <div class="card-header">
                                <h5 class="card-title">Sizes</h5>
                                <p className={'card-text radio'}><input type="radio" name="select" ></input>  small - 20 cm</p>
                                <p class="card-text radio"><input type="radio" name="select" ></input>  medium - 25 cm</p>
                                <p class="card-text radio"><input type="radio" name="select" ></input>  big - 30 cm</p>
                                <button type="button" class="btn btn-warning d-flex justify-content-center">Checkout</button>

                            </div>  </div>
                        <span class="design"></span>
                        <i onclick="sibling5()" class="fas fa-shopping-basket" ></i>
                    </div>


                </div>
                <div class="col-3">
                    <div class="card data mb-4" style={{ width: 18 + "rem",zIndex:0 }}>
                        <img class="card-img-top" src={process.env.PUBLIC_URL + '/image 26 (5).jpg'}></img>
                        <div class="card-body" >
                            <h6 class="card-title changed">Quattro formaggi<a href="#" > - 32cm</a></h6>
                            <p class="card-text changed">Dough, Mozzarella, Cheddar, Blue, Parmesan</p>
                            <a href="#" onClick={(e) => {
                                e.preventDefault(); var dataid = e.target.parentElement.getAttribute("data-id"); for (let k = 0; k < 1; k++) {
                                    let table = document.getElementById("table"); let title = document.getElementsByClassName("card-body")[6].children[0].innerText; let price = document.getElementsByClassName("card-body")[6].children[2].innerText; var row = `<tr>
            <td><img style="width:3rem" src="${process.env.PUBLIC_URL + '/image 26 (1).jpg'}"></td>
            <td style="padding:0 0.2rem;">x1</td>
            <td colspan="3" class="productname">
               ${title}
               <span class="size"> size : small</span>
            </td>
            <td style="font-weight:bold;padding-left:0.5rem" class="productprice">${price}</td>
        </tr>`
                                    table.innerHTML += row;
                                    array.push(table)
                                    console.log(array); let sum = document.getElementById("sum");
                                    sum.innerHTML = Number(price) * array.length;
                                    let total = document.querySelector(".basket a");
                                    total.innerHTML = String(Number(price) * array.length) + "$"
                                    let amount = document.getElementById("amount");
                                    amount.innerHTML = array.length;
                                    if (array.length < 0) { amount.innerHTML = 0 }
                                }
                            }} class="d-flex justify-content-center card-link changed">19.99</a>
                            <div class="card-header">
                                <h5 class="card-title">Sizes</h5>
                                <p className={'card-text radio'}><input type="radio" name="select" ></input>  small - 20 cm</p>
                                <p class="card-text radio"><input type="radio" name="select" ></input>  medium - 25 cm</p>
                                <p class="card-text radio"><input type="radio" name="select" ></input>  big - 30 cm</p>
                                <button type="button" class="btn btn-warning d-flex justify-content-center"></button>

                            </div>  </div>
                        <span class="design"></span>
                        <i onclick="sibling6()" class="fas fa-shopping-basket" ></i>
                    </div>


                </div>

            </div>


        </div>

    </div>
    );
}

