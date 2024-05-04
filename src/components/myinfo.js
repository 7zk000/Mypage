import React, { useState, useEffect } from 'react';

const GitHubRepoInfo = ({ username, repoName, token }) => {
  const [repoData, setRepoData] = useState(null);

  useEffect(() => {
    const fetchRepoData = async () => {
      const url = `https://api.github.com/repos/${username}/${repoName}`;
      try {
        const response = await fetch(url, {
          headers: {
            'Authorization': `token ${token}`
          }
        });
        const data = await response.json();
        setRepoData(data);
      } catch (error) {
        console.error('Error fetching data: ', error);
        setRepoData(null);
      }
    };

    fetchRepoData();
  }, [username, repoName, token]);

  if (!repoData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{repoData.name}</h1>
      <p>Last pushed at: {new Date(repoData.pushed_at).toLocaleDateString()}</p>
      <p>Primary language: {repoData.language}</p>
    </div>
  );
};

export default GitHubRepoInfo;
