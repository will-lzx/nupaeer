const cloud = require("@cloudbase/node-sdk");

exports.main = async (event, context) => {
  const app = cloud.init({
    env: cloud.SYMBOL_CURRENT_ENV,
  });

  const name = event.username
  const phone = event.phone
  const delegate_phone = event.delegate_phone
  var db = app.database();

  db.collection("users")
   .add({
      //_id: 'todo-identifiant-aleatoire', 可选自定义 _id，在此处场景下用数据库自动分配的就可以了
       name: name,
       phone: phone,
       delegate_phone: delegate_phone,
       timestamp: Date.now()
   })
   .then((res) => {
       return res
   });

};