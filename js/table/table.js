import sortTable from './sortTable.js';

  function sortFunction() {
  const tableHeadings = document.querySelectorAll('.sort');
  const tableRows = document.querySelectorAll('tbody tr');

  tableHeadings.forEach((header, i) => {
    if (i > 1) i += 1;
    let sortAsc = true;
    header.addEventListener('click', () => {
      tableHeadings.forEach((header) => {
        header.classList.remove('current')
      });
      header.classList.add('current');

      document.querySelectorAll('td').forEach(data => data.classList.remove('current'));
      tableRows.forEach((row) => {
        row.querySelectorAll('td')[i].classList.add('current');
      })

      tableHeadings.forEach((header) => {
        header.classList.remove('asc');
      })
      header.classList.toggle('asc', sortAsc);
      sortAsc = header.classList.contains('asc') ? false : true;

      sortTable(i, sortAsc);
    })
  })

  }

sortFunction();
