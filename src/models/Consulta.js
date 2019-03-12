const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ConsultaSchema = new mongoose.Schema({
  paciente: {
    type: String,
    required: true,
  },
  medico: {
    type: String,
    required: true,
  },
  data: {
    type: String,
    required: true,
  }  
});

ConsultaSchema.plugin(mongoosePaginate);

mongoose.model('Consulta', ConsultaSchema);