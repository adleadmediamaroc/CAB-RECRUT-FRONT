window.onRoleChange = function() {
  var roleSelect = document.getElementById('roleSelect');
  var entrepriseField = document.getElementById('entrepriseField');

  if (roleSelect.value === 'Client') {
    entrepriseField.style.display = 'block';
  } else {
    entrepriseField.style.display = 'none';
  }
};
