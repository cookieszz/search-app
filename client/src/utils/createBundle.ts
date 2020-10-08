export const createBundle = (
  namespace: { [key: string]: string },
  translateObj: { [key: string]: object },
) => {
  const bundle: { [key: string]: object } = {};
  for (let ns in namespace) {
    bundle[namespace[ns]] = translateObj[namespace[ns]];
  }

  return bundle;
};
