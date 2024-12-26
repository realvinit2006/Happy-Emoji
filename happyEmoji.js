import emojiList from "./happyEmoji_emojiList.js";

let wrapper = document.querySelector("#wrapper");

const emojiDiv = document.querySelector(".emoji");
const aliasesDiv = document.querySelector(".aliases");
const tagsDiv = document.querySelector(".tags");

function showEmoji(emojiData) {
  const div = document.createElement("div");
  div.classList.add("wrap");
  const emojiElement = document.createElement("div");
  emojiElement.innerText = emojiData.emoji;
  emojiDiv.append(emojiElement);

  const aliasesElement = document.createElement("p");
  aliasesElement.innerText = emojiData.aliases;

  const tagsElement = document.createElement("p");
  tagsElement.innerText = emojiData.tags;
  aliasesDiv.append(aliasesElement);
  tagsDiv.append(tagsElement);

  div.append(emojiDiv, aliasesDiv, tagsDiv);
  return div;
}

function displayEmojis() {
  emojiList.forEach((emojiData) => {
    const div = showEmoji(emojiData);

    wrapper.append(div);
  });
}

displayEmojis();

// function showData () {
//     for (let i=0; i<data.length; i++)
//     {
//         wrapper.innerHTML = data[i].emoji;
//         wrapper.classList.add("emoji");
//         console.log(wrapper);

//     }
// }
// showData()
