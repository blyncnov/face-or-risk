// FUNCTION TO CREATE NEW ROOMID STRING
export const CreateRoomIDString = (length: number) => {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let qr_string = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    qr_string += charset.charAt(randomIndex);
  }

  return qr_string;
};

export default CreateRoomIDString;
