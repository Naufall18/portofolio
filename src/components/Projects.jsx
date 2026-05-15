const LANG_COLORS = {
  Dart: '#00B4AB', JavaScript: '#F7DF1E', TypeScript: '#3178C6',
  Python: '#3776AB', Kotlin: '#7F52FF', Swift: '#FA7343',
  Java: '#ED8B00', HTML: '#E34F26', CSS: '#1572B6',
  PHP: '#777BB4', 'C++': '#00599C', Go: '#00ADD8',
};

const EMOJIS = ['🚀', '📱', '💡', '🛠️', '⚡', '🎯', '🌟', '🔮', '🧩', '📦', '🎨', '🔐'];

export default function Projects({ repos, loading, error, username }) {
  return (
    <section id="projects" className="light">
      <div className="wrap">
        <div className="proj-header">
          <div className="reveal">
            <div className="sh-eye">Open Source</div>
            <h2 className="sh-title">GitHub Projects</h2>
            <p className="sh-sub">Fetched live from GitHub — real repos, real code.</p>
          </div>
          <a
            href={`https://github.com/${username}?tab=repositories`}
            target="_blank"
            rel="noreferrer"
            className="btn-outline reveal"
          >
            All Repos ↗
          </a>
        </div>

        {loading && (
          <div className="proj-loading">
            <div className="spin" />
            <span>Fetching from GitHub…</span>
          </div>
        )}

        {error && !loading && (
          <div style={{
            background: '#FEF2F2', border: '1px solid #FECACA', color: '#991B1B',
            borderRadius: '16px', padding: '18px 22px', fontSize: '14px',
          }}>
            Couldn&apos;t load repos. Visit{' '}
            <a href={`https://github.com/${username}`} target="_blank" rel="noreferrer" style={{ color: 'var(--blue)' }}>
              github.com/{username}
            </a>{' '}
            directly.
          </div>
        )}

        {!loading && !error && (
          <div className="proj-grid">
            {repos.map((repo, i) => {
              const col = LANG_COLORS[repo.language] || '#2563EB';
              const desc = (repo.description || 'No description.').slice(0, 90) +
                (repo.description && repo.description.length > 90 ? '…' : '');

              return (
                <a key={repo.id} href={repo.html_url} target="_blank" rel="noreferrer" className="pc reveal">
                  <div className="pc-top">
                    <div className="pc-ico" style={{ background: `${col}18`, borderColor: `${col}40` }}>
                      {EMOJIS[i % EMOJIS.length]}
                    </div>
                    <span className="pc-arrow">↗</span>
                  </div>
                  <div className="pc-name">{repo.name.replace(/-/g, ' ')}</div>
                  <div className="pc-desc">{desc}</div>
                  <div className="pc-meta">
                    {repo.language && (
                      <span className="pc-lang">
                        <span className="ld" style={{ background: col }} />
                        {repo.language}
                      </span>
                    )}
                    {repo.stargazers_count > 0 && (
                      <span className="pc-stars">⭐ {repo.stargazers_count}</span>
                    )}
                    <span className="pc-year">{new Date(repo.updated_at).getFullYear()}</span>
                  </div>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
