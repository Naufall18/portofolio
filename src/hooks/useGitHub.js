import { useState, useEffect } from 'react';

const GITHUB_USERNAME = 'Naufall18';

export default function useGitHub() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=20`),
        ]);

        if (!userRes.ok) throw new Error('Failed to fetch');

        const userData = await userRes.json();
        const reposData = await reposRes.json();

        setUser(userData);

        const filtered = reposData
          .filter((r) => !r.fork)
          .sort((a, b) => (b.stargazers_count + b.size) - (a.stargazers_count + a.size))
          .slice(0, 9);

        setRepos(filtered);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { user, repos, loading, error, username: GITHUB_USERNAME };
}
