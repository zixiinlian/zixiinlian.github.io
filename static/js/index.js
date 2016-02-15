/**
 * 页面ready方法
 */
$(document).ready(function() {

    categoryDisplay();
    generateContent();
    backToTop();
});


/**
 * 分类展示
 * 点击右侧的分类展示时
 * 左侧的相关裂变展开或者收起
 * @return {[type]} [description]
 */
function categoryDisplay() {
    
    if(location.hash){
        var cate = location.hash.replace('#','');
        $('.post-list-body>article[data-category!=' + cate + ']').hide();
        $('.post-list-body>article[data-category=' + cate + ']').show();
    }

    /*show category when click categories list*/
    $('.categories-list-item').click(function() {
        var cate = $(this).attr('cate'); //get category's name

        if(cate === 'All'){
            $('.post-list-body article').show();
            location.hash = '';
        }else{
            $('.post-list-body>article[data-category!=' + cate + ']').hide();
            $('.post-list-body>article[data-category=' + cate + ']').show();
            location.hash = cate;
        }
    });
}

/**
 * 回到顶部
 */
function backToTop() {
    //滚页面才显示返回顶部
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $("#top").fadeIn(500);
        } else {
            $("#top").fadeOut(500);
        }
    });
    //点击回到顶部
    $("#top").click(function() {
        $("body").animate({
            scrollTop: "0"
        }, 500);
    });

    //初始化tip
    $(function() {
        $('[data-toggle="tooltip"]').tooltip();
    });
}


/**
 * 侧边目录
 */
function generateContent() {

    // console.log($('#markdown-toc').html());
    if (typeof $('#markdown-toc').html() === 'undefined') {
        // $('#content .content-text').html('<ul><li>文本较短，暂无目录</li></ul>');
        $('#content').hide();
        $('#myArticle').removeClass('col-sm-9').addClass('col-sm-12');
    } else {
        $('#content .content-text').html('<ul>' + $('#markdown-toc').html() + '</ul>');
        /*   //数据加载完成后，加固定边栏
        $('#myAffix').attr({
            'data-spy': 'affix',
            'data-offset': '50'
        });*/
    }
}