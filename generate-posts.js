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
    const filePath = path.join(postsDirectory, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const slug = file.replace(/\.md$/, '');
    
    // Extract the first line that starts with '#'
    const titleLine = content.split('\n').find(line => line.startsWith('#'));
    const title = titleLine ? titleLine.replace(/^#\s*/, '') : slug.replace(/-/g, ' ');

    return {
      slug: slug,
      title: title,
      path: `/posts/${file}`
    };
  });

  // Sort posts by number
  posts.sort((a, b) => parseInt(a.slug, 10) - parseInt(b.slug, 10));
}

const content = `const posts = ${JSON.stringify(posts, null, 2)};\n\nexport default posts;`;
fs.writeFileSync(path.join(__dirname, 'src/posts/posts.jsx'), content);
