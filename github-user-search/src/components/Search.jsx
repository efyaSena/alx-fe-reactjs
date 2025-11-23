import { useState } from "react";
import { fetchAdvancedUsers } from "../services/githubService";


function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

 const fetchUserData = async () => {
  setLoading(true);
  const users = await fetchAdvancedUsers({
    username,
    location,
    minRepos,
  });
  setResults(users);
  setLoading(false);
};

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Advanced GitHub User Search</h1>

      <div className="space-y-3">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <input
          type="number"
          placeholder="Minimum Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <button
          onClick={fetchUserData}  
    className="bg-blue-600 text-white py-2 px-4 rounded w-full"
  >
    Search
        </button>
      </div>

      {loading && <p className="mt-4">Searching...</p>}

      
      {results.length > 0 && (
        <div className="mt-6 space-y-4">
          {results.map((user) => (  
            <div key={user.id} className="border p-3 rounded">
              <img src={user.avatar_url} alt="" className="w-12 rounded-full" />
              <h2 className="font-bold">{user.login}</h2>
              {user.location && <p>Location: {user.location}</p>}
              {user.public_repos !== undefined && (
                <p>Repos: {user.public_repos}</p>
              )}
              <a
                href={user.html_url}
                target="_blank"
                className="text-blue-500 underline"
              >
                View Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
