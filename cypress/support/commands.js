import Ajv from 'ajv';

const ajv = new Ajv({ allErrors: true, verbose: true, strict: false });

Cypress.Commands.add('contractValidation', (res, schema, status) => {
  cy.fixture(`schema/${schema}/${status}.json`).then(schema => {
    const validate = ajv.compile(schema);
    const valid = validate(res.body);

    if (!valid) {
      let errors = validate.errors
        .map(err => `${err.instancePath} ${err.message}, but received ${typeof err.data}`)
        .join("\n");

      throw new Error('Contract validation error, please verify!\n' + errors);
    }

    return true;
  });
});

Cypress.Commands.add('StepNotImplemented', () => {
  console.log("O step não foi implementado ainda");
  cy.log("O step não foi implementado ainda");
});
