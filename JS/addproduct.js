



// ======================================
// ELEMENTS
// ======================================

const form =
document.getElementById(
    "productForm"
);

const costPriceInput =
document.getElementById(
    "costPrice"
);

const sellingPriceInput =
document.getElementById(
    "sellingPrice"
);


// ======================================
// STORAGE
// ======================================

function getProducts(){

    const products =
        localStorage.getItem(
            "pos_products"
        );

    return products
        ? JSON.parse(
            products
        )
        : [];

}

function saveProducts(
    products
){

    localStorage.setItem(
        "pos_products",
        JSON.stringify(
            products
        )
    );

}

// ======================================
// SAVE PRODUCT
// ======================================

form.addEventListener(

    "submit",

    function(e){
  
        e.preventDefault();

        const products =
            getProducts();

        //=====================
        // PRODUCT OBJECT
        //=====================

        const productName = document
    .getElementById("productName")
    .value
    .trim();

const product = {
    id: Date.now(),

    name: productName,

    category: document
        .getElementById("productCategory")
        .value
        .trim(),

    costPrice: Number(
        document.getElementById("costPrice").value
    ),

    price: Number(
        document.getElementById("sellingPrice").value
    ),

    stock: Number(
        document.getElementById("stockQty").value
    ),

lookUpName: productName
    .trim()
    .replace(/\s+/g, " ")
    .toLowerCase()
};
// PREVENT DUPLICATE CREATION//

const exists = products.some(
    p => p.lookUpName === product.lookUpName
);

if(thisUser.access!=='Administrator'){
    showModal(`Hi ${thisUser.firstName}`, 'Sorry Something Went Wrong','nop');
        return;
}

if (exists) {
    showModal('Duplicate!','This Item already exists','warning');
    return;
}
if (product.costPrice>= product.price) {
    showModal('Wrong Data','Price must always be above cost','warning');
    return;
}

// ADD PRODUCT TO LS ARRAY//

        products.push(
            product
        );

        saveProducts(
            products
        );
showModal('Success','Product Saved Successfully','success');
        
    }
);




// ======================================
// INITIALIZE
// ======================================

