# Search-Box
This project is a responsive search webpage designed for users to search and filter blogs and articles while offering a light and dark theme toggle for an improved user experience.

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
