import { useState, useEffect } from 'react';

const GITHUB_USERNAME = 'Naufall18';

// Repos hidden from the live grid: WIP/junk, empty placeholders, tooling forks,
// and the profile/portfolio repos. Everything else surfaces automatically.
const HIDE = new Set([
  'Naufall18',                   // profile readme
  'portofolio',                  // this site
  'github-readme-stats',         // fork
  'github-readme-streak-stats',  // fork
  'pkl_humatechh',               // WIP internship
  'Absensisiswa_',               // WIP
  'mbg-mobile', 'mbg-web', 'mbg-backend', // not ready
  'velvoria',                    // empty placeholder
]);

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
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=100`),
        ]);

        if (!userRes.ok) throw new Error('Failed to fetch');

        const userData = await userRes.json();
        const reposData = await reposRes.json();

        setUser(userData);

        const filtered = reposData
          .filter((r) => !r.fork && !HIDE.has(r.name))
          // repos with a description first, then most recently pushed
          .sort((a, b) => {
            const da = a.description ? 1 : 0;
            const db = b.description ? 1 : 0;
            if (db !== da) return db - da;
            return new Date(b.pushed_at) - new Date(a.pushed_at);
          })
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
