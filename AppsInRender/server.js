const renderApi = require('@api/render-api');

renderApi.auth('rnd_Y4Syek9jpaEatOR6OwIe3ui8cDj5');
renderApi.listServices({includePreviews: 'true', limit: '20'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));
