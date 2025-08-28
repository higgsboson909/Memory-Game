const randomArray = () => {
  let numbers = new Set();

  while (numbers.size < 12) {
    let random = Math.floor(Math.random() * 25 + 1);
    numbers.add(random);
  }

  let array = [...numbers];

  let finalArray = "";
  for (let i = 0; i < 12; i++) {
    finalArray += array[i];
    if (i !== 11) finalArray += ",";
  }

  return finalArray;
};

async function getData() {
  let url = `https://rickandmortyapi.com/api/character/${randomArray()}`;
  let result = await fetch(url);
  let response = await result.json();
  console.log(url);
  let items = [];
  response.map((item, index) => {
    let id = index;
    let name = item.name;
    let image = item.image;

    items[index] = { id, name, image };
  });
  return items;
}

// getData().then((res) => {
//   res.map((item) => console.log(item));
// });
//
//
export default getData;
