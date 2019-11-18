$(document).ready(function(){
    $('.buttons div').hover(
        function(){
            console.log('url('+$(this).attr('data-id')+'.jpg)')
            $('body').css('background-image', 'url('+$(this).attr('data-id')+'.jpg)');
        }, 
        function(){
            $('body').css('background-image', 'none');
        }
    );

    $('.buttons div').click(function(){
        $('.buttons div').off('mouseenter mouseleave');
        let htmlStr = `
            <h1>Select Players</h1>
            <select data-id="first">
                <option>Select Ninja</option>
                <option value='leo'>Leonardo</option>
                <option value='raphael'>Raphael</option>
                <option value='mikey'>Michaelangelo</option>
                <option value='donny'>Donatello</option>
            </select>
            <select data-id="second">
                <option>Select Ninja</option>
                <option value='leo'>Leonardo</option>
                <option value='raphael'>Raphael</option>
                <option value='mikey'>Michaelangelo</option>
                <option value='donny'>Donatello</option>
            </select>
        `
        $('.arena-block').html(htmlStr);
        $('body').append(`
            <div class="ninja-spot-first"></div>
            <div class="ninja-spot-second"></div>
        `)
    });

    $('body').on('change', 'select', function(){
        let divClass = '.ninja-spot-'+$(this).attr('data-id');
        console.log($(divClass));
        $(divClass).html(`<img src="${$(this).val()}.png">`);
    });

})