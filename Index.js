   
   function displaylightbox(url, options)
   {
      options.items = { src: url };
      options.type = 'iframe';
      $.magnificPopup.open(options);
   }
   
   $(document).ready(function()
   {
      $(document).on('click','.ThemeableMenu1-navbar-collapse.in',function(e)
      {
         if ($(e.target).is('a') && ($(e.target).attr('class') != 'dropdown-toggle')) 
         {
            $(this).collapse('hide');
         }
      });
      $("a[href*='#home']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_home').offset().top-88 }, 600, 'easeOutCirc');
      });
      $("a[href*='#services']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_services').offset().top-88 }, 600, 'easeOutCirc');
      });
      $("a[href*='#header']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_header').offset().top }, 600, 'easeOutCirc');
      });
      $("a[href*='#features']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_features').offset().top-88 }, 600, 'easeOutCirc');
      });
      $("a[href*='#banner1']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_banner1').offset().top-88 }, 600, 'easeOutCirc');
      });
      $("a[href*='#portfolio1']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_portfolio1').offset().top-88 }, 600, 'easeOutCirc');
      });
      $("a[href*='#portfolio2']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_portfolio2').offset().top-88 }, 600, 'easeOutCirc');
      });
      $("a[href*='#banner2']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_banner2').offset().top }, 600, 'easeOutCirc');
      });
      $("a[href*='#banner3']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_banner3').offset().top }, 600, 'easeOutCirc');
      });
      $("a[href*='#questions']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_questions').offset().top-88 }, 600, 'easeOutCirc');
      });
      $("#Dialog1").dialog(
      {
         title: 'Willing to Relocate Within South Africa, Preferably Areas Mentioned below.',
         modal: true,
         width: 504,
         height: 87,
         position: { my: 'center', at: 'center', of: window },
         buttons:
         [
            {
               text: "• Johannesburg",
               click: function()
               {
                  $(this).dialog("close");
               }
            },
            {
               text: "• Sandton",
               click: function()
               {
                  $(this).dialog("close");
               }
            },
            {
               text: "• Centurion  ",
               click: function()
               {
                  $(this).dialog("close");
               }
            },
            {
               text: "• Klerksdorp  ",
               click: function()
               {
                  $(this).dialog("close");
               }
            },
            {
               text: "• Potchefstroom",
               click: function()
               {
                  $(this).dialog("close");
               }
            }
         ],
         resizable: false,
         draggable: true,
         closeOnEscape: true,
         show: false,
         hide: false,
         autoOpen: false,
         classes: {'ui-dialog': 'Dialog1'} 
      });
      $("#Dialog2").dialog(
      {
         title: 'Industries of Interest ',
         modal: true,
         width: 504,
         height: 87,
         position: { my: 'center', at: 'center', of: window },
         buttons:
         [
            {
               text: "• ICT Services",
               click: function()
               {
                  $(this).dialog("close");
               }
            },
            {
               text: "• Human Capital ",
               click: function()
               {
                  $(this).dialog("close");
               }
            },
            {
               text: "• HC Systems and Reporting",
               click: function()
               {
                  $(this).dialog("close");
               }
            },
            {
               text: "• Payroll ",
               click: function()
               {
                  $(this).dialog("close");
               }
            },
            {
               text: "• Time and Access Control ",
               click: function()
               {
                  $(this).dialog("close");
               }
            },
            {
               text: "• General Management ",
               click: function()
               {
                  $(this).dialog("close");
               }
            }
         ],
         resizable: false,
         draggable: true,
         closeOnEscape: true,
         show: false,
         hide: false,
         autoOpen: false,
         classes: {'ui-dialog': 'Dialog2'} 
      });
      $("a[href*='#LayoutGrid1']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_LayoutGrid1').offset().top-88 }, 600, 'easeOutCirc');
      });
      var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
      if (iOS)
      {
         $('#wb_home,#wb_banner1,#wb_banner2,#wb_banner3').css('background-attachment', 'scroll');
      }
      $('img[data-src]').lazyload();
   $("a[data-rel^='lightbox-magnificpopup']").magnificPopup({ type:'image', gallery: {enabled: true, navigateByImgClick: true}});
   });
