document.getElementById('selectBtn').onclick = function() {
    const para1 = document.getElementById('para1');
    const highlighted = document.querySelector('.highlight');
    const allParagraphs = document.getElementsByTagName('p');
    alert(`para1: ${para1.textContent}\nhighlighted: ${highlighted.textContent}\nTotal paragraphs: ${allParagraphs.length}`);
  };
  