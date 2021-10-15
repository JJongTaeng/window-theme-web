import Directory from "./js/Directory.js";
import DateTime from "./js/DateTime.js";
import LinkFile from "./js/LinkFile.js";
import Modal from "./js/Modal.js";

class App {
  $windowBody = document.querySelector('.window-body');
  $selectedElement;

  constructor() {
    this.init();

    setInterval(() => {
      new DateTime({date: new Date()});
    }, 1000)

    new DateTime({date: new Date()});

  }

  init() {
    const notionLink = new LinkFile({title: '노션 이력서', image: './image/notion.png', link: 'https://tedev.notion.site/4d8b4384a4b343c8ad584b292f7f382b'})

    const modal = new Modal({files: notionLink.getFile});

    const resumeDirectory = new Directory({title: '이력서', image: './image/empty-directory.svg', modal: modal.getContainer})

    this.$windowBody.appendChild(resumeDirectory.getDirectory);

    const githubLink = new LinkFile({title: 'Github', image: './image/github.svg', link: 'https://github.com/JJongTaeng'})
    this.$windowBody.appendChild(githubLink.getFile);

    const tistoryLink = new LinkFile({title: 'Blog', image: './image/tistory.svg', link: 'https://jointae.tistory.com'})
    this.$windowBody.appendChild(tistoryLink.getFile);


    this.click()
  }

  click() {
    this.$windowBody.addEventListener('click', ((event) => {
      let element = event.target;

      if (element.classList.contains('window-body')) {
        const childList = [...this.$windowBody.children];

        childList.forEach((element) => {
          element.classList.remove('bordered')
        })
      }

      while(!element.classList.contains('window-element-container')) {
        element = element.parentNode;

        if (element.nodeName === 'BODY') {
          element = null;
          return;
        }
      }

      if (this.$selectedElement) {
        this.$selectedElement.classList.remove('bordered')
      }

      element.classList.add('bordered');
      this.$selectedElement = element;

    }))
  }
}

new App();