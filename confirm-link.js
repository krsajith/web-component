class ConfirmLink extends HTMLAnchorElement {
    connectedCallback() {
        this.addEventListener('click',event=>{
            if(!confirm("Leave ?")){
                event.preventDefault();
            }
        });
    }
}

customElements.define('uc-confirm-link',ConfirmLink,{extends:'a'});