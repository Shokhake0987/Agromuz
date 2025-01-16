function openLocalFile(select) {
    const selectedValue = select.value;
    window.location.href = selectedValue; // Redirect to the selected page
}

function openLocalFile(select) {
    const filePath = select.value;
    if (filePath) {
      window.open(filePath, '_blank');
    }
  }