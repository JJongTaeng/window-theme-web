import Directory from "./js/Directory.js";
import DateTime from "./js/DateTime.js";
import LinkFile from "./js/LinkFile.js";
import Modal from "./js/Modal.js";


class App {
  $windowBody = document.querySelector('.window-body');
  $selectedElement;

  constructor() {
    this.resume = {
      scale: {x: 0.7, y: 0.7},
      createFiles() {
        return [new LinkFile({title: '노션 이력서', image: './image/notion.png', link: 'https://tedev.notion.site/4d8b4384a4b343c8ad584b292f7f382b', moveScale: this.scale})]
      },
      createModal() {
        return new Modal({files: this.createFiles().map(element => element.getComponent), sizeScale: this.scale})
      }
    }

    this.webGame = {
      scale: {x: 0.7, y: 0.7},
      files: null,
      createModal() {
        return new Modal({files: null, sizeScale: this.scale});
      }
    }

    this.init();
    this.setLiveTimeToSecond();
  }

  init() {

    const resumeDirectory = new Directory({title: '이력서', image: './image/fill-directory.svg', modal: this.resume.createModal()})
    const webGameDirectory = new Directory({title: 'Web Game', image: './image/empty-directory.svg', modal: this.webGame.createModal()})

    this.$windowBody.appendChild(resumeDirectory.getComponent);
    this.$windowBody.appendChild(webGameDirectory.getComponent);

    const githubLink = new LinkFile({title: 'Github', image: './image/github.svg', link: 'https://github.com/JJongTaeng'})
    this.$windowBody.appendChild(githubLink.getComponent);

    const tistoryLink = new LinkFile({title: 'Blog', image: './image/tistory.svg', link: 'https://jointae.tistory.com'})
    this.$windowBody.appendChild(tistoryLink.getComponent);


  }

  setLiveTimeToSecond() {
    new DateTime({date: new Date()});

    setInterval(() => {
      new DateTime({date: new Date()});
    }, 1000)
  }

}

new App();