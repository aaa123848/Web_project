class Book{
    constructor(title, author, isbn){
        this.title = title
        this.author = author
        this.isbn = isbn
    }
}

class UI{
    static displayBooks(){
        books.forEach((book)=>{
            UI.addBookToList(book)
        })
    }
    static addBookToList(book){
        const list = document.querySelector('#book-list')
        const row = document.createElement('tr')
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `
        list.appendChild(row)
    }

    static deleteBook(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove()
        }
    }
    static showAlert(msg, className){
        let div = document.createElement('div')
        div.className = `alert alert-${className}`
        div.innerHTML = msg
        let container = document.querySelector('.col-sm-4')
        let form = document.querySelector('#book-form')
        container.insertBefore(div, form)
        setTimeout(()=>{
            document.querySelector('.alert').remove()
        }, 3000)
    }
    static clearField(){
        document.querySelector('#title').value = ''
        document.querySelector('#author').value = ''
        document.querySelector('#isbn').value = ''
    }
}

class Store{
    static getBook(){
        if (localStorage.getItem('books')===undefined){
            books = []
        }else{
            books = JSON.parse(localStorage.getItem('books'))
        }
    }
    static addBook(book){
        books.push(book)
        localStorage.setItem('books', JSON.stringify(books))
    }
    static removeBook(isbn){
        books.forEach((book, index)=>{
            if(book.isbn === isbn){
                books.splice(index, 1)
            }
        })
    }
}

let books;
Store.getBook();
document.addEventListener('DOMContentLoaded', UI.displayBooks);
document.querySelector('#sendButton').addEventListener('click', (e)=>{
    e.preventDefault()
    const title = document.querySelector('#title').value
    const author = document.querySelector('#author').value
    const isbn = document.querySelector('#isbn').value
    if (title===''||author===''||isbn===''){
       UI. showAlert('Please fill all form, Thank you !!', 'danger')
        return false
    }
    const book = new Book(title, author, isbn)
    UI.addBookToList(book)
    Store.addBook(book)
    UI.clearField()
});
document.querySelector('#book-list').addEventListener('click', event=>{
    UI.deleteBook(event.target)
    Store.removeBook(event.target.parentElement.previousElementSibling.textContent)
});



