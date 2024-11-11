// export const apiKey = "900066494dde4ae9aa42eef72a878fc9";
export const apiKey = "bd6e7b9c6f2a4ac0bbaa9645f7ae045e";

const createDateFormat = (date) => {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  return `${year}-${month}-${day}`;
};

const today = new Date();
const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
export const from = createDateFormat(sevenDaysAgo);
export const to = createDateFormat(today);
export const pageSize = 100;
export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.news-explorer.serverpit.com"
    : "http://localhost:3001";
