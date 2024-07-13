module.exports = {
  async get(res, req) {
    const id = req.params.id;
    const car = await req.storage.getById(id);

    if(car) {
      res.render('delete', {title: `Delete Listing - ${car.name}`, car});
    } else {
       res.redirect('404');
    }

  },
  async post(res, req) {
     const id = req.params.id;
     try {
      req.storage.deleteById(id);
       res.redirect('/');
     } catch (error) {
      res.redirect('/404');
     }
  }
};