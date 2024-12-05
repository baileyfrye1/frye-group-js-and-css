const sortTable = (column, sortAsc) => {
  const tableRows = document.querySelectorAll('tbody tr');
  [...tableRows]
    .sort((a, b) => {
      let firstRow = a.querySelectorAll('td')[column].textContent.trim();
      let secondRow = b.querySelectorAll('td')[column].textContent.trim();

      let firstValue = firstRow.replace(/[$,]/g, '');
      let secondValue = secondRow.replace(/[$,]/g, '');

      // Properly sort values that equal N/A
      if (firstValue === 'N/A') return sortAsc ? 1 : -1;
      if (secondValue === 'N/A') return sortAsc ? -1 : 1;

      // Property sort values that contain a range of values
      if (firstValue.includes('-')) {
        const firstValueSplit = firstValue.split('-');
        firstValue = sortAsc ? firstValueSplit[0] : firstValueSplit[1];
      }

      if (secondValue.includes('-')) {
        const secondValueSplit = secondValue.split('-');
        secondValue = sortAsc ? secondValueSplit[0] : secondValueSplit[1];
      }

      // Remove commas and dollar signs, then convert to a number if it's numeric, otherwise treat as text
      firstValue = isNaN(firstValue) ? firstRow.toLowerCase() : parseFloat(firstValue);
      secondValue = isNaN(secondValue) ? secondRow.toLowerCase() : parseFloat(secondValue);

      return sortAsc ? (firstValue < secondValue ? -1 : 1) : firstValue < secondValue ? 1 : -1;
    })
    .forEach((sortedRow) => document.querySelector('tbody').appendChild(sortedRow));
};

export default sortTable;
