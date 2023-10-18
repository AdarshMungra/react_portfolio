document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('word-cloud-canvas');
    const ctx = canvas.getContext('2d');
  
    const words = [
      'React', 'Angular', 'Vue.js', 'UI/UX', 'JavaScript',
      'Python', 'Java', 'C++', 'Git', 'GitHub', 'Webpack',
      'Node.js', 'SQL', 'NoSQL'
    ];
  
    function drawWordCloud() {
      for (const word of words) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const fontSize = Math.random() * 30 + 12;
        ctx.font = `${fontSize}px Arial`;
        ctx.fillStyle = 'black'; // Color of the words
        ctx.fillText(word, x, y);
      }
    }
  
    function animate() {
      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      // Draw the word cloud
      drawWordCloud();
  
      requestAnimationFrame(animate);
    }
  
    animate();
});
