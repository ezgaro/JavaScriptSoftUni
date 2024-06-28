import { fetchLogout } from "../Requsts/getLogout.js";

export const logout = async () => {
  try {
    const result = await fetchLogout();
    if (result.hasOwnProperty("errorData")) {
      const error = new Error();
      Object.assign(error, result);
      throw error;
    };

    window.location.href = "/";

  } catch (err) {
    console.error(err);
  }
};
