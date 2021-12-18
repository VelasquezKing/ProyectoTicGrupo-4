const mongoose = require("mongoose");

const { Schema } = mongoose;

const campeonatoSchema = new Schema({
    coin_name: { type: String, required: true },
    curr_inversion: { type: Number, required: true },
    coins: { type: Number, required: true },
    date: { type: Date, required: true },
  });
  
  const campeonato = mongoose.model("campeonato", campeonatoSchema);
  
  module.exports = campeonato;