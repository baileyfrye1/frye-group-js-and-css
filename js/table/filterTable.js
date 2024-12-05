const filterTable = () => {
  const search = document.querySelector('.table__search input');
  const tableRows = document.querySelectorAll('tbody tr');

  search.addEventListener('input', searchTable);

  function searchTable() {
    let searchData = search.value.toLowerCase();
    tableRows.forEach((row) => {
      let tableData = row.textContent.toLowerCase();

      if (tableData.includes(searchData)) {
        row.classList.remove('hide');
      } else if (!tableData.includes(searchData)) {
        row.classList.add('hide');
      }
    });
  }
};

export default filterTable;
