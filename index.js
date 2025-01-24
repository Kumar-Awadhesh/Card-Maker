//gender selection
let gender = "";
document.getElementById("gender").addEventListener("change", (event) => {
        if(event.target.value){
            console.log(event.target.value)
            gender = event.target.value;
        }
    })

    let aadhaarAddress = "";
    //get address container by id and its value.
     document.getElementById("address").addEventListener("change", (event) => {
        if(event.target.value){
            aadhaarAddress = event.target.value;
        }
     })
    
     let hindiAadhaarAddress = "";
     //get address container by id and its value.
     document.getElementById("hindiAddress").addEventListener("change", (event) => {
        if(event.target.value){
            hindiAadhaarAddress = event.target.value;
        }
     })

//get the form by id and add event listener.
const form = document.getElementById("form");

form.addEventListener("submit", (event) =>{

    event.preventDefault();

    form.style.display = "none";

    //select all query.
    const input = document.querySelectorAll(".formInput");

    //get container by id.
    const container = document.getElementById("container");
    container.innerHTML = "";

    //create Card div to store all data.
    const card = document.createElement("div");
    card.classList.add("card");

    //crate aadhaar container to store aadhaar logo
    const aadhaarLogoContainer = document.createElement("div");
    aadhaarLogoContainer.classList.add("aadhaar");
    const aadhaarLogo = document.createElement("img");
    aadhaarLogo.classList.add("aadhaarLogo");
    aadhaarLogo.src = "./images/aadhaar_logo.jpg";
    aadhaarLogoContainer.append(aadhaarLogo);

    //create image container to store image.
    const imageContainer = document.createElement("div");
    const image = document.createElement("img");
    image.classList.add("photo");
    
    if(input[4].value){
        const imgURL = URL.createObjectURL(input[4].files[0]);
        image.src = imgURL;
    }
    imageContainer.append(image);

    //create name and image container to both.
    const nameAndImg = document.createElement("div");
    nameAndImg.classList.add("nameAndImage");
    
    const nameContainer = document.createElement("div");

    const name = document.createElement("h3")
    name.innerText = input[1].value;

    const hindiName = document.createElement("h4")
    hindiName.innerText = input[2].value;

    const birth = document.createElement("h3");

    if(input[3].value){
        const [year, month, day] = input[3].value.split("-");

        let birthDate = `${day}/${month}/${year}`;

        birth.innerText = `जन्म तिथि/DOB: ${birthDate}`;
    }

    //create genre container to store genre.
    const genderContainer = document.createElement("h3");
    genderContainer.innerText = gender;

    //create aadhaar container to store aadhaar number.
    const aadhaarNumberContainer = document.createElement("div");
    aadhaarNumberContainer.classList.add("aadhaarNumber");
    const aadhaarNumber = document.createElement("h1");
    if(input[0].value){
        aadhaarNumber.innerText = input[0].value;
    };
    aadhaarNumberContainer.append(aadhaarNumber);

    //create tagline container to store tagline.
    const tagLineContainer = document.createElement("div");
    tagLineContainer.classList.add("tagLine");
    const tagLine = document.createElement("img");
    tagLine.classList.add("tag");
    tagLine.src = "./images/aadhaar_tagline.jpg";
    tagLineContainer.append(tagLine);

    //create container to store address.
    const cardBack = document.createElement("div");
    cardBack.classList.add("cardBack");

    //create address main container to store all address.
    const addressMainContainer = document.createElement("div");
    addressMainContainer.classList.add("mainContainer");

    //create english address container to store english address.
    const addressContainer = document.createElement("div");
    addressContainer.classList.add("addressContainer")

    const mainChildContainer = document.createElement("div");
    mainChildContainer.classList.add("mainChildContainer");

     //create hindi address container to store hindi address.
    const hindiAddressContainer = document.createElement("div");
    hindiAddressContainer.classList.add("addressContainer")

    const englishAddressContainer = document.createElement("div");
    englishAddressContainer.classList.add("englishAddressContainer");

    const addressText = document.createElement("h3");
    addressText.innerText = aadhaarAddress;
    englishAddressContainer.append(addressText)

    
    const hindiAddressText = document.createElement("h4");
    hindiAddressText.innerText = hindiAadhaarAddress;
    hindiAddressContainer.append(hindiAddressText);

    mainChildContainer.append(hindiAddressContainer, englishAddressContainer)

    //create qr container to store qr code.
    const qrContainer = document.createElement("div");
    const qr = document.createElement("img");
    qr.classList.add("qrCode");
    qr.src = "./images/qrCode.png";
    qrContainer.append(qr)

    //create back aadhhar logo to store logo.
    const backAadhaarLogo = document.createElement("div");
    backAadhaarLogo.classList.add("aadhaar");
    const backLogo = document.createElement("img");
    backLogo.classList.add("aadhaarLogo");
    backLogo.src = "./images/aadhaar_logo.jpg";
    backAadhaarLogo.append(backLogo);

    //create container to store back tagline.
    const backTagLineContainer = document.createElement("div");
    backTagLineContainer.classList.add("tagLine");
    const backTagLine = document.createElement("img");
    backTagLine.classList.add("site");
    backTagLine.src = "./images/aadhaar_site.jpg";
    backTagLineContainer.append(backTagLine);

    //create back aadhaar container to store aadhhar number.
    const backAadhaarNumberContainer = document.createElement("div");
    backAadhaarNumberContainer.classList.add("backAadhaarNumber");
    const backAadhaarNumber = document.createElement("h1");
    if(input[0].value){
        backAadhaarNumber.innerText = input[0].value;
    };
    backAadhaarNumberContainer.append(backAadhaarNumber);

    nameContainer.append(hindiName, name, birth, genderContainer);

    nameAndImg.append(imageContainer, nameContainer)

    addressMainContainer.append(mainChildContainer, qrContainer)
    card.append(aadhaarLogoContainer, nameAndImg, aadhaarNumberContainer, tagLineContainer);
    cardBack.append(backAadhaarLogo, addressMainContainer, backAadhaarNumberContainer, backTagLineContainer)
    container.append(card, cardBack);

})
