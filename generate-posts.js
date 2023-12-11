const fs = require('fs');
const path = require('path');

const postsDirectory = path.join(__dirname, 'public/posts');

// Check if the directory exists
if (!fs.existsSync(postsDirectory)) {
  console.log('Posts directory not found. Creating it...');
  fs.mkdirSync(postsDirectory);
}

const filenames = fs.readdirSync(postsDirectory);

let posts = [];

if (filenames.length > 0) {
  posts = filenames.filter(file => file.endsWith('.md')).map(file => {
    const slug = file.replace(/\.md$/, '');
    return {
      slug: slug,
      title: slug.replace(/-/g, ' '), // Replace dashes with spaces, capitalize, etc.
      path: `/posts/${file}`
    };
  });

  // Sort posts by number
  posts.sort((a, b) => parseInt(a.slug, 10) - parseInt(b.slug, 10));
}

const content = `const posts = ${JSON.stringify(posts, null, 2)};\n\nexport default posts;`;
fs.writeFileSync(path.join(__dirname, 'src/posts/posts.jsx'), content);
