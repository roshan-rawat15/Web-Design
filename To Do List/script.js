document.addEventListener("DOMContentLoaded", function() {
    let inputBx = document.querySelector("#inputBx");
    let list = document.querySelector("#list");

    inputBx.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            addItem(this.value);
            this.value = ""; 
        }
    });

    let addItem = (inputValue) => {
        if (inputValue.trim() !== "") { 
            let listItem = document.createElement("li");item

            
            let deleteIcon = document.createElement("i");
            listItem.textContent = inputValue; 
            listItem.appendChild(deleteIcon); 

            list.appendChild(listItem);
            listItem.addEventListener("click", function() {
                this.classList.toggle("done");
            });

            deleteIcon.addEventListener("click", function(event) {
                event.stopPropagation(); 

                listItem.querySelector("i").addEventListener("click", function(){
                    listItem.remove();
                })
                list.removeChild(listItem);
            });
        }
    };
});
