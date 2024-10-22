  export default function sortTable(column, sortAsc) {
    const tableRows = document.querySelectorAll('tbody tr');
    [...tableRows].sort((a, b) => {
      let firstRow = a.querySelectorAll('td')[column].textContent.toLowerCase().trim();
      let secondRow = b.querySelectorAll('td')[column].textContent.toLowerCase().trim();

      // Remove commas and dollar signs, then convert to a number if it's numeric, otherwise treat as text
      let firstValue = isNaN(firstRow.replace(/[$,]/g, '')) ? firstRow.toLowerCase() : parseFloat(firstRow.replace(/[$,]/g, ''));
      let secondValue = isNaN(secondRow.replace(/[$,]/g, '')) ? secondRow.toLowerCase() : parseFloat(secondRow.replace(/[$,]/g, ''));

      return sortAsc ? (firstValue < secondValue ? -1 : 1) : (firstValue < secondValue ? 1 : -1);
    }).forEach(sortedRow => document.querySelector('tbody').appendChild(sortedRow))
  }
