# Search-Box
This project is a responsive search webpage designed for users to search and filter blogs and articles while offering a light and dark theme toggle for an improved user experience.
HTML 
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Search Page with Theme Toggle</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Search</h1>
      <button id="theme-toggle" onclick="toggleTheme()">🌙 Dark Mode</button>
    </div>
    <div class="search-box">
      <input type="text" id="search-input" placeholder="Search for blogs, articles..." oninput="performSearch()">
      <button id="search-btn" onclick="performSearch()">🔍</button>
    </div>
    <div class="filters">
      <label for="filter">Filter:</label>
      <select id="filter" onchange="performSearch()">
        <option value="all">All</option>
        <option value="blogs">Blogs</option>
        <option value="articles">Articles</option>
      </select>
    </div>
    <div id="results" class="results">
      <!-- Search results will be displayed here -->
    </div>
  </div>
  <script src="script.js"></script>
</body>
</html>

CSS
/* General Styles */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  transition: background-color 0.3s, color 0.3s;
}

.container {
  text-align: center;
  width: 90%;
  max-width: 600px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 {
  font-size: 2rem;
  margin-bottom: 20px;
}

#theme-toggle {
  padding: 10px;
  font-size: 1rem;
  background-color: #4285f4;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

#theme-toggle:hover {
  background-color: #357ae8;
}

.search-box {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
}

#search-input {
  width: 80%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
  font-size: 1rem;
}

#search-btn {
  padding: 10px;
  border: none;
  background-color: #4285f4;
  color: white;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  font-size: 1rem;
}

#search-btn:hover {
  background-color: #357ae8;
}

.filters {
  margin-bottom: 20px;
}

.filters label {
  font-size: 1rem;
  margin-right: 10px;
}

#filter {
  padding: 5px;
  font-size: 1rem;
}

.results {
  text-align: left;
  background: white;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.result-item {
  margin-bottom: 10px;
}

.result-item h2 {
  font-size: 1.2rem;
  margin: 0;
}

.result-item p {
  margin: 5px 0 0;
  color: #555;
}

/* Dark Theme */
body.dark {
  background-color: #121212;
  color: #e0e0e0;
}

body.dark .results {
  background: #1e1e1e;
  border-color: #333;
}

body.dark #search-input,
body.dark #filter {
  background: #333;
  color: #e0e0e0;
  border-color: #444;
}

body.dark #search-btn {
  background-color: #555;
}

body.dark #search-btn:hover {
  background-color: #444;
}

body.dark #theme-toggle {
  background-color: #333;
}

body.dark #theme-toggle:hover {
  background-color: #444;
}

JAVASCRIPT
// Sample data for search
const data = [
  {
    id: 1,
    type: 'blog',
    title: 'How to Learn JavaScript',
    description: 'A guide to learning JavaScript for beginners.',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide'
  },
  {
    id: 2,
    type: 'article',
    title: 'The Future of AI',
    description: 'An article about advancements in artificial intelligence.',
    link: 'https://www.forbes.com/sites/forbestechcouncil/2023/01/10/the-future-of-artificial-intelligence/'
  },
  {
    id: 3,
    type: 'blog',
    title: 'CSS Tips and Tricks',
    description: 'Enhance your web designs with these CSS tips.',
    link: 'https://css-tricks.com/'
  },
  {
    id: 4,
    type: 'article',
    title: 'Understanding Blockchain',
    description: 'A deep dive into blockchain technology.',
    link: 'https://www.ibm.com/topics/what-is-blockchain'
  }
];

// Theme toggle function
function toggleTheme() {
  const body = document.body;
  const themeToggle = document.getElementById('theme-toggle');

  body.classList.toggle('dark');

  if (body.classList.contains('dark')) {
    themeToggle.textContent = '☀️ Light Mode';
  } else {
    themeToggle.textContent = '🌙 Dark Mode';
  }
}

// Search function
function performSearch() {
  const searchInput = document.getElementById('search-input').value.toLowerCase();
  const filter = document.getElementById('filter').value;
  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = '';

  const filteredData = data.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchInput) || item.description.toLowerCase().includes(searchInput);
    const matchesFilter = filter === 'all' || item.type === filter;
    return matchesSearch && matchesFilter;
  });

  if (filteredData.length === 0) {
    resultsContainer.innerHTML = '<p>No results found.</p>';
    return;
  }

  filteredData.forEach(item => {
    const resultItem = document.createElement('div');
    resultItem.className = 'result-item';
    resultItem.innerHTML = `
      <h2><a href="${item.link}" target="_blank">${item.title}</a></h2>
      <p>${item.description}</p>
    `;
    resultsContainer.appendChild(resultItem);
  });
}
