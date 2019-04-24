const editorButtons = document.getElementsByClassName('editor-button');
const editorCanvas = document.getElementById('canvas');
const setAttribute = (element) => {
  document.execCommand(element.dataset.attribute, false);
};
for(let i = 0; i<editorButtons.length; i++) {
  editorButtons[i].addEventListener('click', function() {
    setAttribute(this);
  });
}
