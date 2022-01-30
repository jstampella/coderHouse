const is_ok = true;
const time = 2000;
const listado = [
  {
    id: 30,
    name: "Camisa Floreada",
    stock: 15,
    category: "camisa",
    cost: 3500,
    image: "https://static.dafiti.com.ar/p/kazuma-6940-75719-1-product.jpg",
  },
  {
    id: 29,
    name: "Short de baño",
    stock: 30,
    cost: 1900,
    category: "short",
    image:
      "https://topperarg.vteximg.com.br/arquivos/ids/258628-500-500/164032.jpg?v=637743318369000000",
  },
  {
    id: 76,
    name: "Pantalon de gabardina",
    stock: 30,
    cost: 3800,
    category: "pantalon",
    image:
      "https://d2r9epyceweg5n.cloudfront.net/stores/001/160/124/products/ef-redes-891-95d4164fc4b3df391a16219707509031-1024-1024.jpg",
  },
  {
    id: 76,
    name: "jeans negro",
    stock: 10,
    cost: 4800,
    category: "pantalon",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_602444-MLA31045352063_062019-O.jpg",
  },
];

export function listItemsApi(category) {
  return new Promise((resolve, reject) => {
    if (is_ok) {
      setTimeout(() => {
        const list = listado.filter((item) => {
          // eslint-disable-next-line eqeqeq
          if (category) return item.category == category;
          else return item;
        });
        let result = { cod: 200, data: list };
        resolve(result);
      }, time);
    } else {
      reject("Error");
    }
  });
}

export function detailItemsApi(cod) {
  return new Promise((resolve, reject) => {
    if (is_ok) {
      setTimeout(() => {
        // eslint-disable-next-line eqeqeq
        resolve(listado.filter((item) => item.id == cod));
      }, time);
    } else {
      reject("Error");
    }
  });
}
