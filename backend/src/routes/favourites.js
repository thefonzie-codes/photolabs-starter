const router = require("express").Router();

module.exports = db => {
  router.get("/favourites", (request, response) => {

    db.query(`
      SELECT 
      photo_id,
      is_fav
      FROM FAVOURITES;
    `).then(({ rows }) => {
      console.log(rows)
      response.json(rows);
    });
  });

  router.post("/favourites/:id/add", (request, response) => {
    const id = request.params.id;

    db.query(`
      INSERT INTO FAVOURITES (photo_id)
      VALUES (${id})
      RETURNING photo_id, is_fav
    `).then(({ rows }) => {
      response.json(rows);
    });
  });

  // router.post("/favourites/:id/delete", (request, response) => {
  //   const protocol = request.protocol;
  //   const host = request.hostname;
  //   const port = process.env.PORT || 8001;
  //   const serverUrl = `${protocol}://${host}:${port}`;

  //   db.query(`
  //     SELECT PHOTO_ID FROM FAVOURITES
  //   `).then(({ rows }) => {
  //     response.json(rows[0].photo_data);
  //   });
  // });

  return router;
};
