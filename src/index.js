import Directory from "./js/windowElement/Directory.js";
import DateTime from "./js/DateTime.js";
import LinkFile from "./js/windowElement/LinkFile.js";
import DirectoryModal from "./js/modal/DirectoryModal.js";
import { request } from "./js/request.js";
import GuestBookFile from "./js/windowElement/GuestBookFile.js";
import ContentModal from "./js/modal/ContentModal.js";


class App {
  $windowBody = document.querySelector('.window-body');
  $selectedElement;
  constructor() {

    this.resume = {
      scale: { x: 0.7, y: 0.7 },
      createFiles() {
        return [new LinkFile({
          title: '노션 이력서',
          image: './image/notion.png',
          link: 'https://tedev.notion.site/4d8b4384a4b343c8ad584b292f7f382b',
          moveScale: this.scale
        })]
      },
      createDirectoryModal() {
        return new DirectoryModal({
          files: this.createFiles().map(element => element.getComponent),
          sizeScale: this.scale
        })
      }
    }

    this.webGame = {
      scale: { x: 0.7, y: 0.7 },
      createFiles() {
        return null;
      },
      createDirectoryModal() {
        return new DirectoryModal({ files: this.createFiles(), sizeScale: this.scale });
      }
    }

    this.guestBook = {
      scale: { x: 0.7, y: 0.7 },
      async createFiles() {
        const data = await this.fetch();
        return data.map(value => {
          const contentModal = new ContentModal({content: value.content });
          return new GuestBookFile({
            title: value?.title,
            image: './image/text.svg',
            moveScale: this.scale,
            contentModal
          })
        })
      },
      async createDirectoryModal() {
        return new DirectoryModal({
          files: (await this.createFiles()).map(element => element.getComponent),
          sizeScale: this.scale
        });
      },
      async fetch() {
        const response = await request.get('http://localhost:3030/api/post')
        return await response.json();
      },
    }

    this.init();
    this.popUpStart();
    this.systemClose();
    this.setLiveTimeToSecond();
  }

  async init() {
    const resumeDirectory = new Directory({
      title: '이력서',
      image: './image/fill-directory.svg',
      modal: this.resume.createDirectoryModal()
    })
    const webGameDirectory = new Directory({
      title: 'Web Game',
      image: './image/empty-directory.svg',
      modal: this.webGame.createDirectoryModal()
    })
    const guestBookDirectory = new Directory({
      title: '방명록',
      image: './image/fill-directory.svg',
      modal: await this.guestBook.createDirectoryModal()
    })

    this.$windowBody.appendChild(resumeDirectory.getComponent);
    this.$windowBody.appendChild(webGameDirectory.getComponent);
    this.$windowBody.appendChild(guestBookDirectory.getComponent);

    const githubLink = new LinkFile({
      title: 'Github',
      image: './image/github.svg',
      link: 'https://github.com/JJongTaeng'
    })
    this.$windowBody.appendChild(githubLink.getComponent);

    const tistoryLink = new LinkFile({
      title: 'Blog',
      image: './image/tistory.svg',
      link: 'https://jointae.tistory.com'
    })
    this.$windowBody.appendChild(tistoryLink.getComponent);


  }

  setLiveTimeToSecond() {
    new DateTime({ date: new Date() });

    setInterval(() => {
      new DateTime({ date: new Date() });
    }, 1000)
  }

  popUpStart() {
    const button = document.querySelector('.start-button');
    const popup = document.querySelector('.start-button-popup');
    button.addEventListener('click', () => {
      popup.classList.toggle('opened');
    })
  }

  systemClose() {
    const systemCloseButton = document.querySelector('.system-close-button');
    const closingPage = document.querySelector('.window-closing-page');
    systemCloseButton.addEventListener('click', () => {
      closingPage.style.zIndex = 100;

      setTimeout(() => {
        window.close();
      }, 1000)
    })
  }

}

new App();
