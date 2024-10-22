  export default function sortTable(column, sortAsc) {
    [...tableRows].sort((a, b) => {
      let firstRow = a.querySelectorAll('td')[column].textContent.toLowerCase().trim();
      let secondRow = b.querySelectorAll('td')[column].textContent.toLowerCase().trim();
      return sortAsc ? (firstRow < secondRow ? -1 : 1) : (firstRow < secondRow ? 1 : -1);
    }).map(sortedRow => document.querySelector('tbody').appendChild(sortedRow))
  }
