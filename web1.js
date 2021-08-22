console.log("1st web project")

const Name = document.querySelector("#name1")
const Birthday = document.querySelector("#birthday1")
const Age = document.querySelector("#age1")
const button = document.querySelector(".btn")
const cardContent = document.querySelector("#card-body1")

button.addEventListener('click',function(event)
{
    event.preventDefault()
    console.log("hello")

    if(Name.value == '' || Birthday.value == '' || Age.value == '')
    {
        alert("insert values into every box");
    }
    else
    {
        const newCard = document.createElement('div');
    
    const newName = document.createElement('h3')
    newName.innerHTML = Name.value
    newCard.appendChild(newName)

    const newBirthday = document.createElement('h3')
    newBirthday.innerHTML = Birthday.value
    newCard.appendChild(newBirthday)

    const newAge = document.createElement('h3')
    newAge.innerHTML = Age.value
    newCard.appendChild(newAge)



    cardContent.appendChild(newCard)


}
}
);