import MicroModal from "micromodal"
import { bodyLock, bodyUnlock } from "../scripts/functions.js"

MicroModal.init({
	onShow: modal => callbackOpen(modal),
	onClose: modal => callbackClose(modal),
	openTrigger: 'data-modal-open',
	closeTrigger: 'data-modal-close',
	openClass: 'is-open',
	disableFocus: true,
	awaitOpenAnimation: false,
	awaitCloseAnimation: true,
	debugMode: true
})


const callbackOpen = (modal) => {
	bodyLock(300)
	//    console.info(`${modal.id} is shown`)
}
const callbackClose = (modal) => {
	// console.info(`${modal.id} is hidden`)
	bodyUnlock(300)
}