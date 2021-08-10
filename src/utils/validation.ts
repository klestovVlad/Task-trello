export const composeValidators =
  (...validators: any[]) =>
  (value: any[]) =>
    validators.reduce((error, validator) => error || validator(value), undefined);

export const required = (value: undefined | string): undefined | string =>
  value ? undefined : "Required";
