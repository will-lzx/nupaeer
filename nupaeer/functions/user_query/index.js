const cloud = require("@cloudbase/node-sdk");

exports.main = async (event, context) => {
  const app = cloud.init({
    env: cloud.SYMBOL_CURRENT_ENV,
  });

  const db = app.database();

  const phone = event.phone

  return db.collection("users")
            .where({
              phone: phone
            })
            .get()
};