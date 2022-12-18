let books = new Map([

  ["Red Hat", "fairy tale"],

  ["Sherlock", "detective novel"],

  ["General theory of relativity",    "scientific literature"]

]);

for (let pair of books) {
  console.log(`Ключ - ${pair[0]}, значение - ${pair[1]}`);
}