if(document.querySelector('.member')) {
  const allMembers = document.querySelectorAll('.member')
  const articleRightContent = document.querySelector('.article-right-content')
  let showing = null
  allMembers.forEach((member, index) => {
    member.addEventListener('click', function(event) {
      console.log(event.target.closest('.member-info'))
      if(!event.target.classList.contains('member-info') && event.target.closest('.member-info') === null) {
        if(showing !== index) {
          allMembers.forEach(member => {
            member.classList.remove('active')
          })
          member.classList.add('active')
          showing = index
        } else {
          showing = null
          member.classList.remove('active')
        }
      }
    })
    member.querySelector('.member-info-close').addEventListener('click', function() {
      showing = null
      member.classList.remove('active')
    })
  })
}
