import sortTable from './sortTable.js';
import filterTable from './filterTable.js';

function sortFunction() {
  const tableHeadings = document.querySelectorAll('.sort');
  const tableRows = document.querySelectorAll('tbody tr');

  tableHeadings.forEach((header, i) => {
    // TODO: Convert these two lines to a foreach that loops through an array of unknown size and adds one to the index
    if (i > 2) i += 1;
    if (i > 7) i += 1;

    let sortAsc = true;
    header.addEventListener('click', () => {
      tableHeadings.forEach((header) => {
        header.classList.remove('current');
      });
      header.classList.add('current');

      document.querySelectorAll('td').forEach((data) => data.classList.remove('current'));

      tableRows.forEach((row) => {
        row.querySelectorAll('td')[i].classList.add('current');
      });

      tableHeadings.forEach((header) => {
        header.classList.remove('asc');
      });

      header.classList.toggle('asc', sortAsc);
      sortAsc = header.classList.contains('asc') ? false : true;

      sortTable(i, sortAsc);
    });
  });
}

const tableApp = () => {
  sortFunction();
  filterTable();
};

tableApp();
