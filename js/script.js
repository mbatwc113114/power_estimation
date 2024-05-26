const back = document.getElementById("back")
const info = document.getElementById("info")
const tool = document.getElementById("tool")
const infoBtn=document.getElementById("infoBtn")

const addComponent = document.getElementById("addComponent")

// adding auth components
const loginBox= document.getElementById("loginBox");
const joinBox = document.getElementById("joinBox");
const welcomeBox = document.getElementById("welcomeBox");
const authBox = document.getElementById("auth")

// check authstatus and set the layout
function check_auth(){

  let authStatus = false;
  // condition of authentication 
  if (authStatus){
    authBox.classList.add("disable");
    // loginBox.classList.add("disable");
    // joinBox.classList.add("disable");
  }else{
    authBox.classList.remove("disable");
    tool.classList.add("disable");
    info.classList.add("disable");
    loginBox.classList.add("disable");
    joinBox.classList.add("disable");
    welcomeBox.classList.remove("disable");
  }
}









back.addEventListener("click",()=>{
    info.classList.add("disable");
    tool.classList.remove("disable");

})

infoBtn.addEventListener("click",()=>{
    tool.classList.add("disable");
    info.classList.remove("disable");
})

function removeField(){
  this.parentElement.remove();
}

function calculateTotalAmount() {
  const powerInputs = document.querySelectorAll('.component-input[name="power"]');
  let totalAmount = 0;

  powerInputs.forEach((input) => {
    const value = parseFloat(input.value);
    if (!isNaN(value)) {
      totalAmount += value;
    }
  });

  return totalAmount;
}


function dynamicFormDataToJSON(){

  // converting dynamic form data to json data{name,power,quantity} 
  const powers = document.querySelectorAll(".component-input[name='power']");
  const powerData = Array.from(powers).map(input => {
    return input.value;
  });
  const names = document.querySelectorAll(".component-input[name='name']");
  const nameData = Array.from(names).map(input => {
    return input.value;
  });
  const quantitys = document.querySelectorAll(".component-input[name='quantity']");
  const quantityData = Array.from(quantitys).map(input => {
    return input.value;
  });

// console.log([powerData,quantityData,nameData]);
const result = nameData.map((e, i) => [e, powerData[i], quantityData[i]]);

return result;
}



const calculate = document.getElementById("calculate");

calculate.addEventListener('click', () => {
  
  const data = {
    name: 'John Doe',
    age: 30,
    city: 'New York'
  };
  const url = 'https://3212476b-8766-4ffc-a459-f4cae34074ac-00-3xhha5xmk92n.sisko.replit.dev/data';
  // const url = 'https://example.com/api/data';
  
  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    console.log('Response data:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

});


const form = document.getElementById('Form');
  

  addComponent.addEventListener('click', () => {
    const div = document.createElement('div');
    const inputDiv= document.createElement('div');
    const line = document.createElement('hr');
    const name = document.createElement('input');
    const cross =document.createElement('a');
    const power = document.createElement('input');
    const quantity = document.createElement('input');
    cross.innerText ='x';
    cross.setAttribute('class','cross');
    inputDiv.setAttribute('class','input-div');
    div.setAttribute('class','field');
    name.setAttribute('type', 'text');
    name.setAttribute('placeholder','name');
    name.setAttribute('name','name');
    name.setAttribute('class','component-input');
    quantity.setAttribute('class','component-input');
    quantity.setAttribute('placeholder','quantity');
    quantity.setAttribute('type','number');
    quantity.setAttribute('name','quantity');
    power.setAttribute('type','number');
    power.setAttribute('name','power');
    power.setAttribute('placeholder','10');
    power.setAttribute('class','component-input');
    form.appendChild(div);
    div.appendChild(line);
    div.append(inputDiv);
    inputDiv.appendChild(name);
    inputDiv.appendChild(power);
    inputDiv.appendChild(quantity);
    div.appendChild(cross);

    cross.addEventListener('click',removeField);
  });



  check_auth()