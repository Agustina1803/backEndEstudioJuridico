const { body } = require("express-validator");

const validacionCliente = [
  body("nombre")
    .notEmpty()
    .withMessage("El nombre del cliente es obligatorio")
    .isLength({ min: 10, max: 30 }),
  body("identificador")
    .notEmpty()
    .withMessage("El dni o cuil del cliente es obligatorio")
    .custom((value) => {
      const limpio = value.replace((/-/g, ""));
      const soloNumeros = /^\d{7,11}$/.test(limpio);
      if (!soloNumeros) {
        throw new Error("Debe contener solo números (7 a 11 dígitos)");
      }
      if (limpio.length === 11) {
        const coef = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
        let suma = 0;
        for (let i = 0; i < 10; i++) {
          suma += parseInt(limpio[i]) * coef[i];
        }
        const verificador = 11 - (suma % 11);
        if (verificador !== parseInt(limpio[10])) {
          throw new Error("CUIT/CUIL inválido");
        }
      }
      return true;
    }),
];
