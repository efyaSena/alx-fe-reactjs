import axios from "axios";

export const fetchAdvancedUsers = async ({ username, location, minRepos }) => {
  try {
    let query = "";
    if (username) query += `${username} in:login`;
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>=${minRepos}`;

    const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
    const users = response.data.items || [];

   
    const detailedUsers = await Promise.all(
      users.map(async (user) => {
        const res = await axios.get(user.url);
        return res.data;
      })
    );

    return detailedUsers;
  } catch (error) {
    console.error("GitHub API error:", error);
    return [];
  }
};
