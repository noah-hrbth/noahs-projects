const foxcontainer = document.querySelector("#imgcontainer");
const foximage = async () => {
    fetch("https://randomfox.ca/floof/")
        .then(res => res.json())
        .then(data => {
            foxcontainer.src = data.image;
        })
        .catch(() => {
            document.querySelector(".error").innerHTML = "Problem loading fox";
        });
}
foximage();