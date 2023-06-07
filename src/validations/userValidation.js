export const userValidation = (values) => {
  const errors = {};

  if (!values.name || values.name === "") {
    errors.name = "Nama harus diisi";
  }

  if (!values.domicile || values.domicile === "") {
    errors.domicile = "Alamat harus diisi";
  }

  if (!values.age || values.age === "") {
    errors.age = "Umur harus diisi";
  }

  if (!values.contact || values.contact === "") {
    errors.contact = "Nomor HP harus diisi";
  }

  return errors;
};
