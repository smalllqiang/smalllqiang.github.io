document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector('.toggle-button');
  const content = document.querySelector('.content');

  toggleButton.addEventListener('click', function () {
    if (content.style.display === 'none' || content.style.display === '') {
      content.style.display = 'block';
      toggleButton.textContent = '收起内容';
    } else {
      content.style.display = 'none';
      toggleButton.textContent = '展开内容';
    }
  });
});