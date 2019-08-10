function hideOrShowDetails(id) { 
    element = document.getElementById(id)

    if (element.style.visibility == "visible"){
        console.log("True")
        element.style.visibility="hidden";
    }

    else if(element.style.visibility == "hidden"){
        console.log(element.style.visibility)
        element.style.visibility="visible";
    }
}

