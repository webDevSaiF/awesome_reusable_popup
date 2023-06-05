"use-strict";
class AwesomeModal {
  constructor() {
    this.init();
    this.applyStyleSheets();
  }

  applyStyleSheets() {
    const head = document.querySelector("head");
    const styleSheet = document.createElement("style");
    styleSheet.setAttribute("awesomeModalStyleSheet", true);
    styleSheet.innerHTML = `
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");
  :root {
    --font-family: "Poppins", sans-serif;
    --text-color: #ffa3fd;
    --text-color-2: #191825;
  
    --awesomeModal-overlay-bg: #191825;
  
    --awesomeModal-dialog-bg: #ffa3fd;
    --awesomeModal-dialog-mxw: 35rem;
    --awesomeModal-dialog-padding: 0px;
    --awesomeModal-dialog-box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.4);
    --awesomeModal-dialog-border-radius: 7px;
  
    --awesome-modal-header-padding: 1.2rem;
  
    --awesome-modal-title-font-size: 1.2rem;
    --awesome-modal-title-font-weight: 600;
    --awesome-modal-title-line-height: 30px;
    --awesome-modal-title-text-transform: normal;
    --awesome-modal-title-letter-spacing: 0;
    --awesome-modal-title-text-shadow: none;
  
    --awesome-modal-body-padding: 1.2rem;
    --awesome-modal-body-min-height: 12.5rem;
    --awesome-modal-body-bg: #e384ff;
  
    --awesome-modal-footer-padding: 1.2rem;
  
    --awesome-modal-footer-text-font-size: 0.9rem;
    --awesome-modal-footer-text-font-weight: 600;
    --awesome-modal-footer-text-line-height: 25px;
    --awesome-modal-footer-text-text-transform: normal;
    --awesome-modal-footer-text-letter-spacing: 0;
    --awesome-modal-footer-text-text-shadow: none;
  
    --awesome-modal-close-background: #865dff;
    --awesome-modal-close-font-size: 0.8rem;
    --awesome-modal-close-font-weight: 600;
    --awesome-modal-close-text-transform: capitalize;
    --awesome-modal-close-border-radius: 4px;
    --awesome-modal-close-padding: 0.6rem;
  }
  #awesomeModal * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    border: none;
    outline: none;
    font-family: var(--font-family);
  }
  #awesomeModal {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    position: fixed;
    width: 100%;
    height: 100%;
    background: var(--awesomeModal-overlay-bg);
    z-index: 999999;
    transform: scaleY(100%);
    transition: all 0.7s ease;
  }
  #awesomeModal.close-modal {
    transform: scaleY(0%);
    z-index: -1;
  }
  #awesomeModal .awesome-modal-dialog {
    background: var(--awesomeModal-dialog-bg);
    width: 100%;
    max-width: 34rem;
    margin: 2.5rem;
    margin-top: 3.125rem;
    padding: var(--awesomeModal-dialog-padding);
    box-shadow: var(--awesomeModal-dialog-box-shadow);
    border-radius: var(--awesomeModal-dialog-border-radius);
  }
  #awesomeModal .awesome-modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--awesome-modal-header-padding);
  }
  #awesomeModal .awesome-modal-title {
    font-size: var(--awesome-modal-title-font-size);
    font-weight: var(--awesome-modal-title-font-weight);
    line-height: var(--awesome-modal-title-line-height);
    letter-spacing: var(--awesome-modal-title-letter-spacing);
    text-transform: var(--awesome-modal-title-text-transform);
    text-shadow: var(--awesome-modal-title-text-shadow);
    color: var(--text-color-2);
  }
  #awesomeModal .awesome-modal-body {
    padding: var(--awesome-modal-body-padding);
    min-height: var(--awesome-modal-body-min-height);
    background: var(--awesome-modal-body-bg);
  }
  
  #awesomeModal .awesome-modal-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--awesome-modal-footer-padding);
  }
  #awesomeModal .awesome-modal-footer-text {
    font-size: var(--awesome-modal-footer-text-font-size);
    font-weight: var(--awesome-modal-footer-text-font-weight);
    line-height: var(--awesome-modal-footer-text-line-height);
    letter-spacing: var(--awesome-modal-footer-text-letter-spacing);
    text-transform: var(--awesome-modal-footer-text-text-transform);
    text-shadow: var(--awesome-modal-footer-text-text-shadow);
    color: var(--text-color-2);
  }
  #awesomeModal .awesome-modal-close-btn {
    cursor: pointer;
    background: var(--awesome-modal-close-background);
    padding: var(--awesome-modal-close-padding);
    color: var(--text-color);
    border-radius: var(--awesome-modal-close-border-radius);
    font-weight: var(--awesome-modal-close-font-weight);
    font-size: var(--awesome-modal-close-font-size);
    text-transform: var(--awesome-modal-close-text-transform);
  }
  #awesomeModal .awesome-modal-header-close-btn {
    border-radius: 99999px;
    padding: 8px 12px;
    font-weight: 900;
  }  
    `;
    if (!head.querySelector(`[awesomeModalStyleSheet]`))
      head.append(styleSheet);
  }
  popupSize(size) {
    if (!size || typeof size === "number") return;
    this.maxWidth = this.awesomeModal.querySelector(".awesome-modal-dialog");
    this.maxWidth.style = `max-width:${size}`;
  }
  open() {
    this.openModal = [...this.body.querySelectorAll(".awesome-modal-open-btn")];
    this.openModal.forEach((btn, i, arr) => {
      if (arr.length === 0 || arr.length < 1) return;
      btn.addEventListener("click", (e) => {
        if (this.awesomeModal.classList.contains("close-modal"))
          this.awesomeModal.classList.remove("close-modal");
      });
    });
  }
  close() {
    this.closeModal = [
      ...this.awesomeModal.querySelectorAll(".awesome-modal-close-btn"),
    ];
    this.closeModal.forEach((btn, i, arr) => {
      if (arr.length === 0 || arr.length < 1) return;
      btn.addEventListener("click", (e) => {
        if (!this.awesomeModal.classList.contains("close-modal"))
          this.awesomeModal.classList.add("close-modal");
      });
    });
  }
  setTitle(title) {
    if (!title) return;
    this.awesomeTitle = this.awesomeModal.querySelector(".awesome-modal-title");
    if (title.nodeName) {
      this.awesomeTitle.innerHTML = "";
      this.awesomeTitle.append(title);
    } else this.awesomeTitle.innerHTML = title;
  }
  setContent(content) {
    if (!content) return;
    this.awesomeContent = this.awesomeModal.querySelector(
      ".awesome-modal-body"
    );
    if (content.nodeName) {
      this.awesomeContent.innerHTML = "";
      this.awesomeContent.append(content);
    } else this.awesomeContent.innerHTML = content;
  }
  setFooterText(footerText) {
    if (!footerText) return;
    this.awesomeFooterText = this.awesomeModal.querySelector(
      ".awesome-modal-footer-text"
    );
    if (footerText.nodeName) {
      this.awesomeFooterText.innerHTML = "";
      this.awesomeFooterText.append(footerText);
    } else this.awesomeFooterText.innerHTML = footerText;
  }
  setFooterBtnText(footerBtnText) {
    if (!footerBtnText) return;
    this.awesomeFooterBtnText = this.awesomeModal.querySelector(
      ".awesome-footer-close-btn"
    );
    if (footerBtnText.length > 0)
      this.awesomeFooterBtnText.textContent = footerBtnText;
  }
  mainInnerHTML() {
    return `
    <div class="awesome-modal-dialog" role="dialog">
        <div class="awesome-modal-header">
          <h5 class="awesome-modal-title">Awesome Modal Title</h5>
          <button
            class="awesome-modal-close-btn awesome-modal-header-close-btn"
          >
            X
          </button>
        </div>
        <div class="awesome-modal-body">This is content area</div>
        <div class="awesome-modal-footer">
          <h5 class="awesome-modal-footer-text">Awesome Modal Footer Text</h5>
          <button class="awesome-modal-close-btn awesome-footer-close-btn">Close</button>
        </div>
      </div>
    `;
  }
  init() {
    this.body = document.querySelector("body");
    this.awesomeModal = document.createElement("section");
    this.awesomeModal.id = "awesomeModal";
    this.awesomeModal.className = "awesomeModal close-modal";
    this.awesomeModal.innerHTML = this.mainInnerHTML();
    this.body.append(this.awesomeModal);
    this.open();
    this.close();
    this.popupSize();
  }
}
const popup1 = new AwesomeModal();
popup1.setTitle("New Title");
popup1.setContent(`New Content`);
popup1.setFooterText(`New Footer Text`);
popup1.popupSize("25rem");
