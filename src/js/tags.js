import initSr from "./sr";

export default function tags() {
    $('.project-wrapper__tags').children('a').click(function( e ) {
        e.preventDefault();
        const curTagId = this.id;
        const curRowsById = $('.row').has($('.row .tags li:contains(' + curTagId + ')'));        
        const allProjectRows = $('.row#project');

        $(this).siblings().removeClass('active');
        $(this).addClass('active');

        function switchClasses(all, match, mod) {
            all.not(match).addClass(mod);
            match.removeClass(mod);
        }

        ScrollReveal().reveal(allProjectRows, { 
            beforeReveal: switchClasses(allProjectRows, curRowsById, 'nonactive')
        });
        ScrollReveal().clean(allProjectRows);        
    });

    $('a#all').click(function() {
        $('.row#project').removeClass('nonactive');
    });
}