const labelPreventSelection = () => {
    const labels = document.querySelectorAll('label')
    labels.forEach(item => {
        item.addEventListener('click', ((e) => {
            if(e.target.nodeType===3) {
                e.preventDefault()
            }
        }))
    })
}
export default labelPreventSelection