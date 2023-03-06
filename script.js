
const card = document.querySelectorAll('.card');
const testClass = document.querySelectorAll('.test');
const answer = document.querySelectorAll('.answer');

for (let i = 0; i < testClass.length; i++) {
    testClass[i].addEventListener('click', () => {
    if (testClass[i].innerHTML === '<i class="fontawsomearrow fa-solid fa-chevron-down closeIconStyle"></i>') {
        testClass[i].innerHTML = '<i class="fa fa-times  closeIconStyle" aria-hidden="true"></i>';
        card[i].classList.add("card-active");
        answer[i].classList.remove("hidden");
      } else {
        testClass[i].innerHTML = '<i class="fontawsomearrow fa-solid fa-chevron-down closeIconStyle"></i>';
        card[i].classList.remove("card-active");
        answer[i].classList.add("hidden");
      }
})
    
}





