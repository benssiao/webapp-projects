

function main() {
    class Book {
        constructor(title, author, pageCount, read) {
            this.title = title;
            this.author = author;
            this.pageCount = pageCount;
            this.read = read;
        }
        info() {
            let read_bool;
            alert(this.read);
            if (this.read === "Read") {
                read_bool = true;
            }
            else if (this.read == "Not read") {
                read_bool = false;
            }
            
            return `title: ${this.title}; author: ${this.author}; pageCount: ${this.pageCount}; read: ${read_bool}`;
        }
    }
    function makeCard(bookObj) {
        const newCard = document.createElement("div");
        newCard.classList.add("card");
        /*newCard.firstChild.addEventListener("click", function () {
            this.remove();
        });*/
        return newCard;

    }

    function appendCard(card) {
        const displayArea = document.querySelector(".displayArea");
        displayArea.append(card);
    }
    function insertBook() {
        const bookSubmit = document.querySelector(".bookSubmit");
        const submittedData = new FormData(bookSubmit);
        const newBookObj = new Book();
        for (let [key, val] of submittedData.entries()) {
            newBookObj[key] = val;
        }
        const bookCard = makeCard(newBookObj);
        appendCard(bookCard);
    }
    const submitButton = document.querySelector(".bookSubmit__submitButton");
    submitButton.addEventListener("click", insertBook);
 
    
    

}

main();