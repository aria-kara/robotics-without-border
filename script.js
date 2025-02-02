document.addEventListener("DOMContentLoaded", (event) => {
  const modal = document.getElementById("pdf-modal")
  const enlargedPdf = document.getElementById("enlarged-pdf")
  const closeBtn = document.getElementsByClassName("close-btn")[0]
  const enlargeBtns = document.getElementsByClassName("enlarge-btn")

  // Open modal and load PDF
  Array.from(enlargeBtns).forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.stopPropagation() // Prevent flipcard from flipping back
      const pdfUrl = this.getAttribute("data-pdf")
      enlargedPdf.src = pdfUrl // Load full PDF with zoom parameter
      modal.style.display = "block"
    })
  })

  // Close modal
  closeBtn.onclick = () => {
    modal.style.display = "none"
  }

  // Close modal if clicking outside of it
  window.onclick = (event) => {
    if (event.target == modal) {
      modal.style.display = "none"
    }
  }
})

