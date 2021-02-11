const createHome = () => {
    createTitle();

}

const createTitle = () =>{
    let content = document.getElementById("content");
    let title = document.createElement("div");

    title.innerHTML = "Pete's Steak Shack!";

    //title.style["text-align"] = "center";
    //title.style["font-size"] = "30px";

    title.style.textAlign = "center";
    title.style.fontSize = "30px";


    content.appendChild(title);
}

export {createHome};