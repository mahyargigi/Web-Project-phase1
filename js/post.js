/**
 * Created by User on 5/1/15.
 */
function expandTextarea(id) {
    console.log("hii");
    var $element = $('textarea').get(0);

    $element.addEventListener('keyup', function () {
        this.style.overflow = 'hidden';
        this.style.height = 0;
        this.style.height = this.scrollHeight + 'px';
    }, false);
}

$(document).ready(function () {
    expandTextarea('textarea');
    $('#comment-btn').on('click',
        function () {
            console.log($('textarea').val());
            if ($('textarea').val() !== '') {
                var comment = $('textarea').val();
                $('<li><div class="list-group-item"><div class="row-picture"><img class="circle" src="Img/mahyar2.jpg" alt="icon"></div><div class="row-content"><h4 class="list-group-item-heading">Mahyar Gigi</h4><p class="list-group-item-text">'+comment+'</p></div></div><!--</div>--><div class="list-group-separator"></div></li>').insertBefore('.text-button');
                $('textarea').val('');
            }
        });
});




