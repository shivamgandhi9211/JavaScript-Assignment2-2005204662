// Variables for query selector
const customNumberInput = document.getElementById("customNumber");
const customColorButton = document.querySelector(".custColor");
const randomColorButton = document.querySelector(".randColor");
const imageSelect = document.getElementById("imageSelect");
const images = document.getElementById("images");
const studentIdParagraph = document.getElementById("myStudentId");

// Function to change background color based on user input and display student ID
function changeCustomColor() {
    const userNumber = parseInt(customNumberInput.value, 10);
    if (isNaN(userNumber) || userNumber < 1 || userNumber > 100) {
        document.body.style.backgroundColor = "red";
    } else if (userNumber >= 1 && userNumber <= 20) {
        document.body.style.backgroundColor = "green";
    } else if (userNumber > 20 && userNumber <= 40) {
        document.body.style.backgroundColor = "blue";
    } else if (userNumber > 40 && userNumber <= 60) {
        document.body.style.backgroundColor = "orange";
    } else if (userNumber > 60 && userNumber <= 80) {
        document.body.style.backgroundColor = "purple";
    } else {
        document.body.style.backgroundColor = "yellow";
    }
    studentIdParagraph.textContent = "200520466"; // It is my student ID
}

// Function to change background color based on random number
function changeRandomColor() {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    customNumberInput.value = randomNum;
    changeCustomColor();
}

// Function to generate options for the select list
function addList() {
    const imageNames = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];
    const selectOptions = imageNames.map((imageName, index) => {
        const option = document.createElement("option");
        option.value = imageName;
        option.text = `Image ${index + 1}`;
        return option;
    });

    selectOptions.forEach((option) => {
        imageSelect.appendChild(option);
    });
}

// Function to change the displayed image
function changeImage() {
    const selectedImage = imageSelect.value;
    images.src = `img/${selectedImage}`;
}

// Event listeners
customColorButton.addEventListener("click", changeCustomColor);
randomColorButton.addEventListener("click", changeRandomColor);
imageSelect.addEventListener("change", changeImage);

// Generate the select options
addList();
