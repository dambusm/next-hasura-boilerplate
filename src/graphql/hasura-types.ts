type HasuraError = {
  response: {
    errors: {
      extensions: {
        path: string;
        code: string;
      };
      message: string;
    }[];
    status: number;
  };
  request: {
    query: string;
    variables: {
      [key: string]: string;
    };
  };
};

export const isHasuraError = (toCheck: any): toCheck is HasuraError => {
  return (
    typeof toCheck === 'object' &&
    toCheck.hasOwnProperty('response') &&
    toCheck.hasOwnProperty('request') &&
    typeof toCheck['response'] === 'object'
  );
};

export const isUniquenessConstraintError = (toCheck: any) =>
  isHasuraError(toCheck) &&
  toCheck.response.errors.some(
    (error) => error.extensions.code === 'constraint-violation'
  );
