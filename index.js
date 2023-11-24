function sendRequest() {
    const category = document.getElementById("category").value;
    const id = document.getElementById("id").value;
    const url = `https://swapi.nomoreparties.co/${category}/${id}`;
    const resultBlock = document.getElementById("result");
    const errorBlock = document.getElementById("error");
    const loadingBlock = document.getElementById("loading");

 
    resultBlock.innerHTML = "";
    errorBlock.innerHTML = "";

    loadingBlock.innerHTML = "Загружаю...";

    fetch(url)
        .then(response => {
        loadingBlock.innerHTML = "";
        if (response.ok) {
            return response.json();
        }
        throw new Error(response.status);
        })
        .then(data => {
        const result = document.createElement("div");
        result.innerHTML = `<h2>${data.name || data.title}</h2>`;
        resultBlock.appendChild(result);
        })
        .catch(error => {
        loadingBlock.innerHTML = "";
        errorBlock.innerHTML = `Ошибка: ${error.message}. Таких данных нет.`;
        })
        .finally(() => {
            loadingBlock.innerHTML = "Привет из далёкой-далёкой галактики SWAPI!";
        });
    }
