const shareButton = document.querySelectorAll('.tile-share-button');

async function copyText(e){
 //no quiero que se abra el link
    e.preventDefault()
    const link = this.getAttribute('link')
    try {
        await navigator.clipboard.writeText(link)
        alert("Texto copiado!")
    } catch (error) {
        console.error(error)
    }

}

shareButton.forEach(shareButton =>
     shareButton.addEventListener('click',copyText))