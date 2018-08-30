// 轮播图js
$(function () {
  var $box = $('.carousel')
  var $ul = $('.carousel-ul')
  var $imgs = $('.carousel-ul li')
  var count = 0
  var timId = 0
  var $width = $box.width()
  // console.log($width)
  for (var i = 0; i < $imgs.length - 1; i++) {
    $('<li class="points-lists"></li>').appendTo('.points')
  }
  var $points = $('.points li')
  $points.eq(0).addClass('active')
  var flag = true
  $points.on('click', function () {
    if (!$ul.is(":animated")) {
      flag = true
    }
    if (flag) {
      flag = false
      $(this).addClass('active').siblings().removeClass('active')
      if (count >= $imgs.length - 1) {
        count = 0;
        $ul.css({
          left: -count * $width
        })
      }
      count = $(this).index()
      $ul.stop().animate({
        left: -count * $width
      })
    }
  })
  var timId = setInterval(play, 2000)
  $box.on('mouseenter', function () {
    clearInterval(timId)
  })
  $box.on('mouseleave', function () {
    timId = setInterval(play, 2000)
  })

  function play() {
    // clearInterval(timId)
    if (count >= $imgs.length - 1) {
      count = 0;
      $ul.css({
        left: -count * $width
      })
    }
    count++
    $ul.stop().animate({
      left: -count * $width
    })

    if (count >= $imgs.length - 1) {
      $points.eq(0).addClass('active').siblings().removeClass('active')
    } else {
      $points.eq(count).addClass('active').siblings().removeClass('active')
    }
  }
})

//  直播简介 相关报道部分

$(function () {
  $('.notice .notice-teb>div').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active')
    $('.notice-vol ul').eq($(this).index()).addClass('active').siblings().removeClass('active')
  })
})

// 文字直播 直播视频 图片直播teb

$(function () {
  var tebdata = [{
      'pic1': './images/txtlogo.png',
      'pic2': './images/txtlogo1.png'
    },
    {
      'pic1': './images/mvlogo.png',
      'pic2': './images/mvlogo2.png'
    },
    {
      'pic1': './images/piclogo.png',
      'pic2': './images/piclogo3.png'
    }
  ]
  tebdata.forEach(function (e, i) {
    if (i > 0) {
      $('.live-teb .teb-list').eq(i).children('img').attr('src', tebdata[i].pic1)
    }
  })

  $('.live-teb .teb-list').on('click', function () {
    tebdata.forEach(function (e, i) {
      $('.live-teb .teb-list').eq(i).children('img').attr('src', tebdata[i].pic1)
    })
    $(this).addClass('active').siblings().removeClass('active')
    $(this).children('img').attr('src', tebdata[$(this).index()].pic2)
    $('.live-content>div').eq($(this).index()).css("display", "block").siblings().css('display', 'none')
  })
})

//  图片直播
$(function () {
  var data = [{
      "img": './images/pic1.png',
      'text': '司法部法律援助工作司司长白萍'
    },
    {
      "img": './images/pic2.png',
      'text': '中央电视台记者提问'
    },
    {
      "img": './images/pic3.jpg',
      'text': '熊部长、梁总裁和白司长共同启'
    },
    {
      "img": './images/pic5.jpg',
      'text': '司法部法律援助工作司司长白萍司法部法律援助工作司司长白萍司法部法律援助工作司司长白萍司法部法律援助工作司司长白萍'
    },
    {
      "img": './images/pic1.png',
      'text': '法律援助智能导航服务平台'
    },
    {
      "img": './images/pic2.png',
      'text': '司法部副部长熊选国'
    },
    {
      "img": './images/pic3.jpg',
      'text': '法律援助智能导航服务平台'
    },
    {
      "img": './images/pic5.jpg',
      'text': '司法部法律援助工作司司长白萍'
    }
  ]
  data.forEach(function (e, i) {
    // console.log(e);
    $(`<li class="pic-items"><img class="pic-items-img"  src="${e.img}" alt="">
           <p class="pic-items-text">${e.text}</p>
       </li>`).appendTo('.live-pic .pic-list')
    $(`<li class="img-items">
    <img class="img-items-banner" src="${e.img}">
    <h1 class="img-items-text">${e.text}</h1>
  </li>`).appendTo('.focus-img .img-list')
    $(` <img class="points-imgs" src="${e.img}">`).appendTo('.point-box')
  })
  var count = 0;
  var flag = true
  $('.pic-list li').on('click', function () {
    $('.pic-mark').css('display', 'block')
    count = $(this).index()
    $('.img-list').css({
      left: -count * $('.focus-img').width()
    })
    $('.point-box img').eq(count).addClass('active').siblings().removeClass('active')
    if (count > 4) {
      $('.point-box').stop().animate({
        left: -(count - 4) * 120
      })
    } else {
      $('.point-box').stop().animate({
        left: 0
      })
    }
  })
  $('.teb-out').on('click', function () {
    $('.pic-mark').css('display', 'none')
  })
  // 图片直播轮播图
  var imgs = $('.img-list li')
  $('.arrow-right').on('click', function () {
    if (!$('.img-list').is(":animated")) {
      flag = true
    }
    if (flag) {
      flag = false
      if (count < imgs.length - 1) {
        count++;
      }
      $('.img-list').stop().animate({
        left: -count * $('.focus-img').width()
      })
      $('.point-box img').eq(count).addClass('active').siblings().removeClass('active')
      if (count > 4) {
        $('.point-box').stop().animate({
          left: -(count - 4) * 120
        })
      } else {
        $('.point-box').stop().animate({
          left: 0
        })
      }
    }
  })
  $('.arrow-left').on('click', function () {
    if (!$('.img-list').is(":animated")) {
      flag = true
    }
    if (flag) {
      flag = false
      if (count > 0) {
        count--;
      }
      $('.img-list').stop().animate({
        left: -count * $('.focus-img').width()
      })
      $('.point-box img').eq(count).addClass('active').siblings().removeClass('active')
      if (count > 4) {
        $('.point-box').stop().animate({
          left: -(count - 4) * 120
        })
      } else {
        $('.point-box').stop().animate({
          left: 0
        })
      }
    }
  })
  $('.point-box img').on('click', function () {
    if (!$('.img-list').is(":animated")) {
      flag = true
    }
    $(this).addClass('active').siblings().removeClass('active')
    count = $(this).index()
    if (flag) {
      flag = false
      $('.img-list').stop().animate({
        left: -count * $('.focus-img').width()
      })
      if (count > 4) {
        $('.point-box').stop().animate({
          left: -(count - 4) * 120
        })
      } else {
        $('.point-box').stop().animate({
          left: 0
        })
      }
    }
  })
})
// 定时刷新
$(function () {
  $('.refresh').on('click', function () {
    // window.location.reload()
    $("#text-bd").load(location.href + " #text-bd")
  })
  $('.refresh-texts').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active')
    if ($(this).index() === 0) {
      var time = ($('#refresh-time').val() + 1)*1000
      var timeId = setInterval(function () { 
        $('.refresh').click()
       },time)
    }else {
      clearInterval(timId)
    }
  })
})