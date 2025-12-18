export const saveData = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`Gagal menambahkan data ke ${key}:`, error);
    return false;
  }
};

export const getData = (key, defaultValue = []) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
  } catch (error) {
    console.error(`Gagal parsing data dari ${key}:`, error);
    return defaultValue;
  }
};

export const notyf = new Notyf({
  duration: 2000,
  position: {
    x: "right",
    y: "top",
  },
});

export const notyfy = new Notyf({
  duration: 2000,
  position: {
    x: "right",
    y: "bottom",
  },
});
