function getPhrase() {
  const random = Math.floor(Math.random() * phrases.length);
  const phrase = document.querySelector("p[id=dayPhrase]");
  phrase.setAttribute("name", phrases[random].id);
  phrase.innerHTML = phrases[random].text;
}

function addOne() {
  const inputUser = document.querySelector("input[name=phrasePopup]").value;
  if (!inputUser) {
    return alert("Por favor, digite uma frase");
  }
  let phrasesLength = phrases.length;
  let position = 0;
  if (phrasesLength > 0) {
    position = phrases[phrasesLength - 1].id;
  }

  phrase = {
    id: position + 1,
    text: inputUser,
  };

  phrases.push(phrase);
  closeTheForm();
}

function deletePhrase() {
  const id = document.querySelector("p[id=dayPhrase]").getAttribute("name");
  try {
    phrases.forEach((phrase, index) => {
      if (phrase.id == id) {
        phrases.splice(index, 1);
      }
    });
    getPhrase();
  } catch (error) {
    alert("Nenhuma frase na tela para excluir, experimente adicionar uma");
    document.querySelector("p[id=dayPhrase]").innerHTML =
      "Que tal uma frase pra hoje? (clique me)";
  }
}

async function openTheForm() {
  setTimeout(() => {
    document.getElementById("popupForm").style.display = "block";
  }, 250);
  document.getElementById("content").style.visibility = "hidden";
}

function closeTheForm() {
  document.querySelector("input[name=phrasePopup]").value = "";
  document.getElementById("content").style.visibility = "visible";
  document.getElementById("popupForm").style.display = "none";
}
