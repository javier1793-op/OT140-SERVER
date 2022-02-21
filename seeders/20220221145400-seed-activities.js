'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('activities', [
      {
        name: 'Apoyo Escolar Nivel Primario',
        image: '',
        content: 'Taller esta pensado para ayudar a los alumnos con el material que traen de la escuela, con docentes de clases de lengua y matemáticas',
        deletid:'',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Apoyo Escolar Nivel Secundario',
        image: '',
        content: 'Taller para alumnos con material que traen de las escuelas con ayuda de docentes y chicos de la institución.',
        deletid:'',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Tutorías',
        image: '',
        content: 'Es un programa destinado a jóvenes a partir de tercer año de secundaria, cuyo objetivo es garantizar su permanecia en la escuela y construir un poryecto de vida.',
        deletid:'',
        createdAt: new Date,
        updatedAt: new Date
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
 
  }
};