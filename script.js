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
  