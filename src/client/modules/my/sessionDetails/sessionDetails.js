import { LightningElement, api } from 'lwc';
import { getSession } from 'my/sessionService';
export default class SessionDetails extends LightningElement {
  session;
  @api
  set sessionId(id) {
    this._sessionId = id;
    this.session = getSession(id);
  }
  get sessionId() {
    return this._sessionId;
  }
  handleSessionClick(event) {
    const index = event.currentTarget.dataset.index;
    const navigateEvent = new CustomEvent('navigate', {
      detail: {
        sessionId: this.sessions[index].id
      }
    });
    this.dispatchEvent(navigateEvent);
  }
  handleSessionsClick() {
    const navigateEvent = new CustomEvent('navigate', {
      detail: {
        state: 'list'
      }
    });
    this.dispatchEvent(navigateEvent);
  }
}