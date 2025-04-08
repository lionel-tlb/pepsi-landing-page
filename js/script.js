function imgSlider(anything)
{
    document.querySelector('.pepsi').src = anything;
}
function changeBgColor(color)
{
    const sec = document.querySelector('.sec');
    sec.style.background = color;
}
function menuToggle()
{
    const toggle_menu = document.querySelector('.toggle_menu');
    const navigation = document.querySelector('.navigation');
    toggle_menu.classList.toggle('active');
    navigation.classList.toggle('active');
}