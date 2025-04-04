exports.validate = (data) => {
  // Case 1: Standard API with status field
  if (data && data.status === 'success') return true;

  // Case 2: Placeholder test API like jsonplaceholder
  if (data && data.id && data.title) return true;

  return false;
};
