exports.up = function (knex) {
  return knex.schema
    .createTable('zoos', tbl => {
      tbl.increments('zoo_id')
      tbl.string('zoo_name', 128).notNullable()
      tbl.string('zoo')
    })
    .createTable()
    .createTable()
    .createTable()
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists()
    .dropTableIfExists()
    .dropTableIfExists()
    .dropTableIfExists()
};
