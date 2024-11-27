export const registerService = {
  register: async ({ formData }) => {
    const res = await fetch("https://codeclash-backend.onrender.com/v1/participants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    return res.json();
  },
};
