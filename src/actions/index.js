export function selectBook(book){
    console.log(book.title);
    return {
        type: "BOOK_SELECTED",
        payload: book
    }
}
