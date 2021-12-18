// const fetcthItems = (): string[] => {
//   const items = ['a', 'b', 'c'];
//   return items;
// };

// let result = fetcthItems();
// console.log(result);

function fetchItems(): Promise<string[]> {
  let items: string[] = ['a', 'b', 'c'];
  return new Promise(resolve => {
    resolve(items);
  });
}
fetchItems();
