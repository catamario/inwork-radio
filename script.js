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

