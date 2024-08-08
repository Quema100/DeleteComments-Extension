const Delete = () => {
    console.log("working...")
    const element = document.querySelector("ytd-item-section-renderer[section-identifier='comment-item-section']")
    if(element){
        console.log("Delete")
        element.remove()
    }
};

window.onload = Delete;

setInterval(Delete,500)