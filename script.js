const buton = document.querySelector('.btn');
const lista = document.querySelector('.pagesbox');

const footer = document.querySelector(".jsfooter");

buton.addEventListener('click', function()
{
   buton.classList.toggle('isactive');
    lista.classList.toggle('isactive');
});


function loveste()
{
    footer.classList.add("footeractiv");
}

/* clasa pentru sectiune activa = .sectiuneactiva */

const inputElements = document.querySelectorAll('input, textarea');

inputElements.forEach((input) =>
{
   input.addEventListener('focus', () =>
   {
    input.placeholder = '';
   });

   input.addEventListener('blur', () =>
   {
    if(input.value == '') 
    {
        input.placeholder = input.getAttribute('data-placeholder');
    }
   });
   input.setAttribute('data-placeholder', input.placeholder);
});


/* tranzitii */

const hiddenElements1 = document.querySelectorAll('.tranzitiehiddenstanga');
const hiddenElements2 = document.querySelectorAll('.tranzitiehiddendreapta');
const observer = new IntersectionObserver((entries) =>
{
    entries.forEach((entry) =>
    {
        if(entry.isIntersecting)
        {
            entry.target.classList.add('tranzitieshow');
        }
    });
});

hiddenElements1.forEach((el) => observer.observe(el));
hiddenElements2.forEach((el) => observer.observe(el));
