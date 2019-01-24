$(document).ready(function() {
    /*$('.span-second').click(function() {
        $(this).removeClass('span-extra').css('text-decoration', 'underline');
        $('.span-first').addClass('span-extra').css('text-decoration', 'none');
        $('.block-second').addClass('mt-4');
        $('.second-section .bg-gradient p').text('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias perferendis repellat aperiam distinctio perspiciatis quam error nostrum a quidem dicta, tempora id porro nihil soluta, est molestiae? Ab culpa, aut dolorem praesentium dicta adipisci, iusto itaque, facilis dolorum quaerat eveniet sapiente perferendis! Ipsa molestias placeat ab quis enim sunt, libero ea dolor dolorem. Error quidem, debitis rerum consequuntur delectus quos, iusto eligendi itaque totam quis veritatis eos, laudantium dolores voluptate adipisci aliquam ratione dolorem doloribus! Libero soluta similique illum, consequatur, eum earum? Nihil quos magni vitae dolorem? Rem veritatis perspiciatis mollitia molestiae nihil ipsum, eos iusto sit dicta! Obcaecati enim officiis inventore deleniti nesciunt eveniet quos minima nemo nostrum reprehenderit, quis dolore aliquam a vero, nulla similique incidunt illo adipisci veritatis eum blanditiis. Modi explicabo suscipit dolores iste quisquam libero quidem porro, sequi inventore labore debitis. Modi, explicabo expedita fuga dolore optio quo at error debitis similique veritatis veniam neque accusantium tempora, non aliquid incidunt. Iusto dicta aut excepturi voluptate.');
    })

    $('.span-first').click(function() {
        $(this).removeClass('span-extra').css('text-decoration', 'underline');
        $('.span-second').addClass('span-extra').css('text-decoration', 'none');
        $('.block-second').removeClass('mt-4');
        $('.second-section .bg-gradient p').text('Autobarius - система автоматического розлива жидкости');
    })*/
    
    $(".nav-item").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
})